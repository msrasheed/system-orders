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
import ws.synopsis.systemorder.utils.TestPeopleDB;
import ws.synopsis.systemorder.utils.EmployeeDB;

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
		// TODO Auto-generated method stub
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		
		HttpSession session = request.getSession();
		String operation = request.getParameter("operation");
		
		if (operation != null) operation = operation.toLowerCase();
		
		if (operation == null) {
			
		}
		else if (operation.equals("create")) {
			if(OrderFactory.create(request)) {
				System.out.println("order creation was successful");
			}
		    //System.out.println(dateneeded + " : " + device_type + " : " + status + " : " + memory);
		}
		else if (operation.equals("drown")) System.out.println("I'm drowning");
	}
}
