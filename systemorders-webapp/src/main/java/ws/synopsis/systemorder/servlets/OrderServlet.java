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
import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.model.Order;
import ws.synopsis.systemorder.utils.EmployeeDB;
import ws.synopsis.systemorder.utils.OrderDB;

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
				file = new File("/home/synopsis/systemorders_uploads/" + orderid, paramstr);
			}
		}
		else if ((paramstr = request.getParameter("orderid")) != null) {
			json = OrderFactory.getOrderJson(Long.parseLong(paramstr));
		}
		else if((paramstr = request.getParameter("status")) != null) {
			json = OrderFactory.getOrdersWithStatJson(paramstr);
		}
		else {
			json = OrderFactory.getOrdersOfUser(employee.getUserid());
		}
		
		if (file != null) {
			try {
				response.setHeader("content-disposition", "attachment; filename=" + file.getName());
				response.setHeader("cache-control", "no-cache");
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
		
		//
		if (operation.equals("create")) {
			boolean isSuccessful = false;
			Part filepart = null;
			
			//enter if cost sheet does not exist
			if ((filepart = request.getPart("cost-sheet")) != null) {
				//both paths create order and change isSuccessful to true
				if (!exists) {
					System.out.println("new order");
					order = OrderFactory.createNew(request);
					if (order != null) isSuccessful = true;
				}
				else {
					System.out.println("existing order");
					isSuccessful = OrderFactory.create(order, request);
				}
				
				if (isSuccessful) OrderFactory.saveCreateSpreadsheet(order, filepart);
			}
		}
		
		else if (operation.equals("verify")) {
			//if order exists verify cost sheet
			if (exists) OrderFactory.verify(order, request);
		}
		
		else if (operation.equals("quote")) {
			//if order exists verify cost sheet
			if (exists) OrderFactory.quote(order, request);
		}
		
		else if (operation.equals("approve")) {
			//if order exists verify cost sheet
			if (exists) OrderFactory.approve(order, request);
		}
		
		else if (operation.equals("purchase")) {
			//if order exists verify cost sheet
			if (exists) OrderFactory.purchase(order, request);
		}
		
		else if (operation.equals("deliver")) {
			//if order exists verify cost sheet
			if (exists) OrderFactory.deliver(order, request);
		}
	}
}
