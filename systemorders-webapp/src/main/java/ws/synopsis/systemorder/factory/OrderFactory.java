package ws.synopsis.systemorder.factory;

import java.io.File;
import java.io.InputStream;
import java.lang.reflect.Method;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.Enumeration;
import java.util.List;
import java.util.regex.Pattern;

import javax.servlet.http.Part;

import ws.synopsis.systemorder.Gson.JsonBuilder;
import ws.synopsis.systemorder.model.HardwareOrderItems;
import ws.synopsis.systemorder.model.Order;
import ws.synopsis.systemorder.model.OtherOrderItem;
import ws.synopsis.systemorder.model.SoftwareOrderItem;
import ws.synopsis.systemorder.utils.OrderDB;
import ws.synopsis.systemorder.utils.StringUtil;

public class OrderFactory {

	public static Order createNew(OrderProperties props) {
		Order order = new Order(true);
		if (create(order, props, false)) return order;
		else return null;
	}
	
	public static boolean create(Order order, OrderProperties props) {
		return create(order, props, true);
	}

	public static boolean create(Order order, OrderProperties props, boolean exists) {
		fillOrder(order, props);
		fillOrderIterables(order, props);

		order.setDateCreated(new Date());
		order.setStatus(OrderStatus.HCP.number);

		boolean success = false;
		if (exists) success = OrderDB.mergeOrder(order);
		else success = OrderDB.insertOrder(order);
		if(success) {
			return true;
		}
		else {
			return false;
		}
	}

	public static boolean verify(Order order, OrderProperties props) {
		if (props.get("supportApproved").equals("approve")) order.setStatus(OrderStatus.HCA.number);
		else order.setStatus(OrderStatus.DS.number);
		boolean boolVal = update(order, props);
		if (boolVal) {
			return true;
		}
		else {
			return false;
		}
	}

	public static boolean quote(Order order, OrderProperties props) {
		order.setStatus(OrderStatus.SOP.number);
		return update(order, props);
	}

	public static boolean approve(Order order, OrderProperties props) {
		if (props.get("gmApproved").equals("approve")) order.setStatus(OrderStatus.SOA.number);
		else order.setStatus(OrderStatus.DGM.number);
		boolean boolVal = update(order, props);
		if (boolVal) {
			return true;
		}
		else {
			return false;
		}
	}

	public static boolean purchase(Order order, OrderProperties props) {
		order.setStatus(OrderStatus.EO.number);
		return update(order, props);
	}

	public static boolean deliver(Order order, OrderProperties props) {
		order.setStatus(OrderStatus.EE.number);
		return update(order, props);
	}

	public static boolean update(Order order, OrderProperties props) {
		fillOrder(order, props);
		if (OrderDB.mergeOrder(order)) {
			return true;
		}
		else {
			return false;
		}
	}

	public static Order fillOrder(Order order, OrderProperties props) {
		Enumeration<String> enums = (Enumeration<String>) props.propertyNames();
		Class cs = Order.class;

		while (enums.hasMoreElements()) {
			String param = enums.nextElement();
			Method meth;
			try {
				String methName;
				methName = "set" + StringUtil.capitalizeFirstLetter(param);

				Class paramType = cs.getDeclaredField(param).getType();
				meth = cs.getDeclaredMethod(methName, paramType);

				/*
				if (param.toLowerCase().contains("date")) meth = cs.getDeclaredMethod(methName, Date.class);
				else if (param.contains("Approved")) meth = cs.getDeclaredMethod(methName, Boolean.class);
				else meth = cs.getDeclaredMethod(methName, String.class);
				*/
				String value = props.getProperty(param);
				
				/*System.out.print(param + " " + value);
				System.out.println(paramType);*/
				
				if (paramType.equals(Integer.class)) meth.invoke(order, Integer.parseInt(value));
				else if (paramType.equals(Long.class)) meth.invoke(order, Long.parseLong(value));
				else if (paramType.equals(Float.class)) meth.invoke(order, Float.parseFloat(value));
				else if (paramType.equals(Date.class)) {
					Date date = new SimpleDateFormat("yyyy-MM-dd").parse(value);
					meth.invoke(order, date);
				}
				else if (paramType.equals(Boolean.class)) {
					boolean boolVal;
					if (value.equals("approve")) boolVal = true;
					else boolVal = false;
					meth.invoke(order, boolVal);
				}
				else if (paramType.equals(String.class)){
					meth.invoke(order, value);
				}

			} catch (Exception e) {
				e.printStackTrace();
			}

		}
		return order;
	}
	
	public static Order fillOrderIterables(Order order, OrderProperties props) {
		Enumeration<String> enums = (Enumeration<String>) props.propertyNames();
		Class cls = Order.class;
		
		while (enums.hasMoreElements()) {
			String param = enums.nextElement();
			//System.out.println(param);
			int idx;
			if ((idx = param.indexOf("Iterable")) != -1) {
				//System.out.println("ITERABLE");
				String[] iterNums = props.getProperty(param).split(",");
				String base = param.substring(0, idx);
				for (String num : iterNums) {
					if (num.length() == 0) continue;
					if (num.charAt(0) != '-') {
						String value = props.getProperty(base + num);
						if (base.equals("software")) {
							order.addSoftwareItem(new SoftwareOrderItem(value));
						}
						else if (base.equals("other")) {
							order.addOtherItem(new OtherOrderItem(value));
						}
					}
					else {
						String numCorr = num.substring(1);
						if (base.equals("software")) {
							order.removeSoftwareItem(Long.parseLong(numCorr));
						}
						else if (base.equals("other")) {
							order.removeOtherItem(Long.parseLong(numCorr));
						}
					}
				}
			}
		}
		
		return order;
	}

	public static boolean saveCreateSpreadsheet(Order order, Part filePart) {
		return saveFile(order, filePart, "cost_sheet");
	}
	
	public static boolean savePurchasedReceipt(Order order, Part filePart) {
		return saveFile(order, filePart, "purchase_receipt");
	}
	
	public static boolean saveFile(Order order, Part filePart, String name) {
		String filename = Paths.get(filePart.getSubmittedFileName()).getFileName().toString();
		//System.out.println(filename);
		String[] fileSegs = filename.split(Pattern.quote("."));
		//System.out.println(fileSegs.length);
		String fileExt = fileSegs[fileSegs.length - 1];
		String orderid = Long.toString(order.getOrderid());
		File uploads = new File("/home/synopsis/systemorders_uploads/" + orderid);
		uploads.mkdirs();
		
		deleteExistingFile(uploads, name);
		
		File file = new File(uploads, name + "." + fileExt);

		try {
			InputStream input = filePart.getInputStream();
			Files.copy(input, file.toPath());
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("successfuly saved file");
		return true;
	}
	
	public static void deleteExistingFile(File root, String name) {
		ArrayList<String> listFiles = new ArrayList<String>(Arrays.asList(root.list()));
		for (String f : listFiles) {
			if (f.contains(name)) {
				File file = new File(root, f);
				file.delete();
			}
		}
	}

	public static File getFile(String orderid, String filename) {
		File rootDir = new File("/home/synopsis/systemorders_uploads/" + orderid);
		ArrayList<String> names = new ArrayList<String>(Arrays.asList(rootDir.list()));
		for (String n : names) {
			if (n.contains(filename)) {
				return new File(rootDir, n);
			}
		}
		return null;
	}
	
	public static Order getOrderById(long id) {
		return OrderDB.getOrderById(id);
	}

	public static String getAllOrdersJson() {
		List<Order> orders = (List<Order>) OrderDB.getAllOrders();
		String orderString = JsonBuilder.getGson().toJson(orders);
		return orderString;
	}

	public static String getOrderJson(long orderid) {
		Order order = getOrderById(orderid);
		String orderString = JsonBuilder.getGson().toJson(order);
		return orderString;
	}

	public static String getOrdersWithStatJson(String stat) {
		List<Order> orders = (List<Order>) OrderDB.getOrdersByStatus(stat);
		String orderString = JsonBuilder.getGson().toJson(orders);
		return orderString;
	}

	public static String getOrdersOfUser(long id) {
		List<Order> orders = (List<Order>) OrderDB.getOrdersByUser(id);
		String orderString = JsonBuilder.getGson().toJson(orders);
		return orderString;
	}
}
