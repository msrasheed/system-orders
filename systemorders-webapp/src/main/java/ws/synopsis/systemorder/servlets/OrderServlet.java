package ws.synopsis.systemorder.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import ws.synopsis.systemorder.model.TestPeople;
import ws.synopsis.systemorder.factory.OrderFactory;
import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.model.Order;
import ws.synopsis.systemorder.utils.TestPeopleDB;
import ws.synopsis.systemorder.utils.EmployeeDB;
import ws.synopsis.systemorder.utils.OrderDB;

/**
 * Servlet implementation class OrderSubmissionServlet
 */
//@WebServlet("/order")
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
		
		if ((paramstr = request.getParameter("orderid")) != null) {
			json = OrderFactory.getOrderJson(Long.parseLong(paramstr), response);
		}
		else if((paramstr = request.getParameter("status")) != null) {
			json = OrderFactory.getOrdersWithStatJson(paramstr, response);
		}
		else {
			json = OrderFactory.getOrdersOfUser(employee.getUserid());
		}
		
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

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		String operation = request.getParameter("operation");
		
		boolean exists = true;
		Order order = null;
		String orderid;
		
		if (operation != null) {
			operation = operation.toLowerCase();
			if ((orderid = request.getParameter("orderid")) == null) exists = false;
			else order = OrderFactory.getOrderById(Long.parseLong(orderid));
		}
		else {
			return;
		}
		
		if (operation.equals("create") && !exists){
			if ((order = OrderFactory.createNew(request)) != null) {
				System.out.println("New order creation was successful");
			}
		}
		else if (operation.equals("create")) {
			if(OrderFactory.create(order, request)) {
				System.out.println("order creation was successful");
			}
		    //System.out.println(dateneeded + " : " + device_type + " : " + status + " : " + memory);
		}
		else if (operation.equals("drown")) System.out.println("I'm drowning");
	}
}
