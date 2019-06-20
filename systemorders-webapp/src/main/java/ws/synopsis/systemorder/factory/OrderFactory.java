package ws.synopsis.systemorder.factory;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.servlet.http.HttpServletRequest;

import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.model.Order;

public class OrderFactory {
	public static boolean create(HttpServletRequest req) {
		Order order = new Order();
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
			if (editCreateForm(order, req)) return false;
		}
		
		if (perm.canVerfiy()) {
			if (editVerifyForm(order, req)) return false;
		}
		
		if (perm.canQuote()) {
			if (editQuoteForm(order, req)) return false;
		}
		
		if (perm.canApprove()) {
			if (editApprovalForm(order, req)) return false;
		}
		
		if (perm.canDeliver()) {
			
		}
		
		return false;
	}
	
	private static boolean editCreateForm(Order order, HttpServletRequest req) {
		long userid = ((Employee) req.getSession().getAttribute("employee")).getUserid();
		String status = "new";
	    Date dateCreated = new Date();
	    String teststr;
	    
	    String deviceType;
	    Date dateNeeded = null;
	    String processor;
	    int memory;
	    int harddisk;
	    String os;
		
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
		order.setDeviceType(deviceType);
		order.setDateNeeded(dateNeeded);
		order.setProcessor(processor);
		order.setMemory(memory);
		order.setHarddisk(harddisk);
		order.setOperatingSystem(os);
		
		return true;
	}
	
	private static boolean editVerifyForm(Order order, HttpServletRequest req) {
		
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
		
		return true;
	}
	
	private static boolean editApprovalForm(Order order, HttpServletRequest req) {
		
		boolean gmApproval;
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
}
