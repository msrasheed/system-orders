package ws.synopsis.systemorder.servlets;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;

import ws.synopsis.systemorder.model.TestPeople;
import ws.synopsis.systemorder.factory.OrderFactory;
import ws.synopsis.systemorder.factory.OrderProperties;
import ws.synopsis.systemorder.factory.OrderStatus;
import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.model.Order;
import ws.synopsis.systemorder.utils.EmployeeDB;
import ws.synopsis.systemorder.utils.OrderDB;
import ws.synopsis.systemorder.utils.StringUtil;

/**
 * Servlet implementation class OrderSubmissionServlet
 */
//@WebServlet("/order")
@MultipartConfig
public class OrderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor.
     */
    public OrderServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		HttpSession session = request.getSession();
		Employee employee = (Employee) session.getAttribute("employee");

		String paramstr;
		String json = null;
		File file = null;

		if ((paramstr = request.getParameter("file")) != null) {
			String orderid = request.getParameter("orderid");
			if (orderid != null) {
				//file = new File("/home/synopsis/systemorders_uploads/" + orderid, paramstr);
				file = OrderFactory.getFile(orderid, paramstr);
			}
		}
		else if ((paramstr = request.getParameter("orderid")) != null) {
			json = OrderFactory.getOrderJson(Long.parseLong(paramstr));
		}
		else if((paramstr = request.getParameter("status")) != null) {
			json = OrderFactory.getOrdersWithStatJson(Integer.parseInt(paramstr));
		}
		else if((paramstr = request.getParameter("view")) != null) {
			if (paramstr.equals("all")) {
				json = OrderFactory.getAllOrdersJson();
			}
			else if (paramstr.equals("own")) {
				json = OrderFactory.getOrdersOfUser(employee.getUserid());
			}
			else if (paramstr.equals("verify")) {
				json = OrderFactory.getOrdersWithStatJson(OrderStatus.HCP.number);
			}
			else if (paramstr.equals("quote")) {
				json = OrderFactory.getOrdersWithStatJson(OrderStatus.HCA.number);
			}
			else if (paramstr.equals("approve")) {
				json = OrderFactory.getOrdersWithStatJson(OrderStatus.SOP.number);
			}
			else if (paramstr.equals("purchase")) {
				json = OrderFactory.getOrdersWithStatJson(OrderStatus.SOA.number);
			}
			else if (paramstr.equals("delivered")) {
				json = OrderFactory.getOrdersWithStatJson(OrderStatus.EO.number);
			}
			else if (paramstr.equals("done")) {
				String json1 = OrderFactory.getOrdersWithStatJson(OrderStatus.EE.number);
				String json2 = OrderFactory.getOrdersWithStatJson(OrderStatus.DS.number);
				String json3 = OrderFactory.getOrdersWithStatJson(OrderStatus.DGM.number);
				json1 = StringUtil.combineJsonArrays(json1, json2);
				json = StringUtil.combineJsonArrays(json1, json3);
			}
		}
		else {
			json = OrderFactory.getOrdersOfUser(employee.getUserid());
		}

		if (file != null) {
			try {
				response.setHeader("content-disposition", "attachment; filename=" + file.getName());
				response.setHeader("cache-control", "no-cache");
				//response.setHeader("Content-Type", "application/vnd.ms-excel");
				OutputStream out = response.getOutputStream();
				Files.copy(file.toPath(), out);
				out.close();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
		}
		else if (json != null) {
			try {
				PrintWriter out = response.getWriter();
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");
				out.print(json);
				out.flush();
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		HttpSession session = request.getSession();
		String operation = request.getParameter("operation");

		//declare (and initialize) variables
		boolean exists = true;
		Order order = null;
		String orderid;

		//if operation exists, make lowercase, otherwise exit function
		if (operation != null) {
			operation = operation.toLowerCase();
			//if orderid does not exist, change exists to false, otherwise get order
			if ((orderid = request.getParameter("orderid")) == null) exists = false;
			else order = OrderFactory.getOrderById(Long.parseLong(orderid));
		}
		else return;

		OrderProperties orderProps = new OrderProperties(operation, order, request);

		//CREATE Operation
		if (operation.equals("create")) {
			boolean isSuccessful = false;
			Part filepart = request.getPart("costSheet");
				//enter if order does not exist
			if(!exists) {
				//enter if cost sheet does not exist
				//both paths create order and change isSuccessful to true
				if(filepart != null) {
					//prints new order and create new order from request
					System.out.println("new order");
					order = OrderFactory.createNew(orderProps);
					//if order is created, change isSuccessful to true
					if (order != null) isSuccessful = true;
				}
			}
			else {
				//prints existing order create order from request
				System.out.println("existing order");
				//if order is created, change isSuccessful to true
				isSuccessful = OrderFactory.create(order, orderProps);
			}

			//if order was created successfully save attached spreadsheet file
			System.out.println("create file?");
			if ((!exists && isSuccessful) || (exists && filepart != null)) {
				if (filepart.getSize() > 0) OrderFactory.saveCreateSpreadsheet(order, filepart);
			}
		}

		//VERIFY Operation
		else if (operation.equals("verify")) {
			//if order exists verify cost sheet
			if (exists) OrderFactory.verify(order, orderProps);
		}

		//QUOTE Operation
		else if (operation.equals("quote")) {
			if (exists) OrderFactory.quote(order, orderProps);
		}

		//APPROVE Operation
		else if (operation.equals("approve")) {
			if (exists) OrderFactory.approve(order, orderProps);
		}

		//PURCHASE Operation
		else if (operation.equals("purchase")) {
			boolean isSuccessful = false;
			Part filepart = request.getPart("purchaseReceipt");
			
			if(exists) {
				isSuccessful = OrderFactory.purchase(order, orderProps);
			}

			//if order was created successfully save attached spreadsheet file
			if (filepart != null) {
				OrderFactory.savePurchasedReceipt(order, filepart);
			}
		}

		//DELIVER Operation
		else if (operation.equals("deliver")) {
			if (exists) OrderFactory.deliver(order, orderProps);
		}
		
		else if (operation.equals("delete")) {
			if (exists) OrderDB.dropOrder(order);
		}
	}
}
