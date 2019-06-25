package ws.synopsis.systemorder.factory;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.google.gson.Gson;

import ws.synopsis.systemorder.Gson.JsonBuilder;
import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.model.HardwareOrderItems;
import ws.synopsis.systemorder.model.Order;
import ws.synopsis.systemorder.model.OtherOrderItem;
import ws.synopsis.systemorder.model.SoftwareOrderItem;
import ws.synopsis.systemorder.utils.OrderDB;

public class OrderFactory {
	public static Order createNew(HttpServletRequest req) {
		Order order = new Order(true);
		if (create(order, req)) {
			System.out.println("attempting to persist");
			OrderDB.insertOrder(order);
			return order;
		}
		return null;
	}
	
	public static boolean create(Order order, HttpServletRequest req) {
		OrderFactoryPermissions perm = new OrderFactoryPermissions("create");
		return update(order, req, perm);
	}
	
	public static boolean verify(Order order, HttpServletRequest req) {
		OrderFactoryPermissions perm = new OrderFactoryPermissions("verify");
		return update(order, req, perm);
	}
	
	public static boolean quote(Order order, HttpServletRequest req) {
		OrderFactoryPermissions perm = new OrderFactoryPermissions("quote");
		return update(order, req, perm);
	}
	
	public static boolean approve(Order order, HttpServletRequest req) {
		OrderFactoryPermissions perm = new OrderFactoryPermissions("approve");
		return update(order, req, perm);
	}
	
	public static boolean purchase(Order order, HttpServletRequest req) {
		OrderFactoryPermissions perm = new OrderFactoryPermissions("purchase");
		return update(order, req, perm);
	}
	
	public static boolean deliver(Order order, HttpServletRequest req) {
		OrderFactoryPermissions perm = new OrderFactoryPermissions("deliver");
		return update(order, req, perm);
	}
	
	public static boolean update(Order order, HttpServletRequest req) {
		OrderFactoryPermissions perm = new OrderFactoryPermissions("update");
		return update(order, req, perm);
	}
	
	public static boolean update(Order order, HttpServletRequest req, OrderFactoryPermissions perm) {
		if (perm.canCreate()) {
			if (!editCreateForm(order, req)) return false;
		}
		
		if (perm.canVerfiy()) {
			if (!editVerifyForm(order, req)) return false;
		}
		
		if (perm.canQuote()) {
			if (!editQuoteForm(order, req)) return false;
		}
		
		if (perm.canApprove()) {
			if (!editApprovalForm(order, req)) return false;
		}
		
		if (perm.canDeliver()) {
			if (!editDeliverForm(order, req)) return false;
		}
		
		return true;
	}
	
	private static boolean editCreateForm(Order order, HttpServletRequest req) {
		System.out.println("Editing Create Form");
		
		long userid = ((Employee) req.getSession().getAttribute("employee")).getUserid();
		String status = "new";
	    Date dateCreated = new Date();
	    String teststr;
	    
	    String clientContact;
	    String deviceType;
	    Date dateNeeded = null;
	    String processor;
	    int memory;
	    int harddisk;
	    String os;
		
	    if ((clientContact = req.getParameter("clientcontact")) == null) return false;
	    
		if ((deviceType = req.getParameter("type")) == null) return false;
		
		if ((teststr = req.getParameter("dateneeded")) == null) return false;
		else {
			try {
				dateNeeded = new SimpleDateFormat("yyyy-MM-dd").parse(teststr);
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
		}
		
		if ((processor = req.getParameter("processor")) == null) return false;
		
		if ((teststr = req.getParameter("memory")) == null) return false;
		else memory = Integer.parseInt(teststr);
		
		if ((teststr = req.getParameter("harddisk")) == null) return false;
		else harddisk = Integer.parseInt(teststr);
		
		if ((os = req.getParameter("operatingsystem")) == null) return false;
		
		order.setUserid(userid);
		order.setStatus(status);
		order.setDateCreated(dateCreated);
		
		order.setClientContact(clientContact);
		order.setDeviceType(deviceType);
		order.setDateNeeded(dateNeeded);
		order.setProcessor(processor);
		order.setMemory(memory);
		order.setHarddisk(harddisk);
		order.setOperatingSystem(os);
		
		String[] hardwares;
		if ((hardwares = req.getParameterValues("hardware")) != null) {
			HardwareOrderItems hardware = new HardwareOrderItems();
			for (String hard : hardwares) {
				hardware.set(hard);
			}
			order.setHardware(hardware);
		}
		
		String[] softwares;
		if ((softwares = req.getParameterValues("software")) != null)
		{
			for (String soft : softwares) {
				SoftwareOrderItem software = new SoftwareOrderItem(soft);
				order.addSoftwareItem(software);
			}
		}
		
		String[] others;
		if ((others = req.getParameterValues("other")) != null) {
			for (String oth : others) {
				OtherOrderItem other = new OtherOrderItem(oth);
				order.addOtherItem(other);
			}
		}
		
		System.out.println("done editing form");
		return true;
	}
	
	private static boolean editVerifyForm(Order order, HttpServletRequest req) {
		System.out.println("Editing Verify Form");
		
		String approval;
		
		if ((approval = req.getParameter("approval")) == null) return false;
		else {
			if(approval.equals("approved")) {
				order.setSupportApproval(true);
				order.setStatus("CSVF");
			}
			else {
				order.setSupportApproval(false);
				order.setStatus("DENY");
			}
		}
		
		return true;
	}
	
	private static boolean editQuoteForm(Order order, HttpServletRequest req) {
		System.out.println("Editing Quote Form");
		
		String supplier;
		float finalPrice;
		String acquisitionType;
		Date quotedDate = new Date();
		String teststr;
		
		if ((supplier = req.getParameter("supplier")) == null) return false;
		
		if ((teststr = req.getParameter("finalprice")) == null) return false;
		else finalPrice = Float.parseFloat(teststr);
		
		if ((acquisitionType = req.getParameter("acquisitiontype")) == null) return false;
		
		order.setSupplier(supplier);
		order.setFinalPrice(finalPrice);
		order.setAcquisitionType(acquisitionType);
		order.setQuotedDate(quotedDate);
		
		return true;
	}
	
	private static boolean editApprovalForm(Order order, HttpServletRequest req) {
		System.out.println("Editing Approval Form");
		
		//boolean gmApproval;
		String gmComments;
		String teststr;
		
		if ((teststr = req.getParameter("approval")) == null) return false;
		else {
			if (teststr.equals("approved")) {
				order.setGmApproval(true);
				order.setStatus("APRV");
			}
			else {
				order.setGmApproval(false);
				order.setStatus("DENY");
			}
		}
		
		if ((gmComments = req.getParameter("comments")) == null) return false;
		
		order.setGmComments(gmComments);
		
		return true;
	}
	
	private static boolean editDeliverForm(Order order, HttpServletRequest req) {
		System.out.println("Editing Deliver Form");
		
		long finalid;
		Date dateArrived;
		String teststr;
		
		if ((teststr = req.getParameter("finalperson")) == null) return false;
		else finalid = Long.parseLong(teststr);
		
		if ((teststr = req.getParameter("dateneeded")) == null) return false;
		else {
			try {
				dateArrived = new SimpleDateFormat("yyyy-MM-dd").parse(teststr);
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
		}
		
		order.setFinalid(finalid);
		order.setDateArrived(dateArrived);
		
		return true;
	}
	
	public static boolean saveCreateSpreadsheet(Order order, Part filePart) {
		String filename = Paths.get(filePart.getSubmittedFileName()).getFileName().toString();
		//System.out.println(filename);
		String[] fileSegs = filename.split(Pattern.quote("."));
		//System.out.println(fileSegs.length);
		String fileExt = fileSegs[fileSegs.length - 1];
		String orderid = Long.toString(order.getOrderid());
		File uploads = new File("/home/synopsis/systemorders_uploads/" + orderid);
		uploads.mkdirs();
		File file = new File(uploads, "cost_sheet." + fileExt);
		
		try {
			InputStream input = filePart.getInputStream();
			Files.copy(input, file.toPath());
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("successfuly saved file");
		return true;
	}
	
	public static Order getOrderById(long id) {
		return OrderDB.getOrderById(id);
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
