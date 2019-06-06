package ws.synopsis.systemorder.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import ws.synopsis.systemorder.model.TestPeople;
import ws.synopsis.systemorder.utils.TestPeopleDB;

/**
 * Servlet implementation class OrderSubmissionServlet
 */
//@WebServlet("/order")
public class OrderSubmissionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public OrderSubmissionServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		PrintWriter out = response.getWriter();
		
		TestPeople person = TestPeopleDB.getPersonById(1);
		
		try {
			out.println("<br><h1>" + person.getFirstname() + person.getLastname() + "</h1>");
		} finally {
			out.close();
		}
		
		System.out.println(person.getFirstname() + person.getLastname());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
