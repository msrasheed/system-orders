package ws.synopsis.systemorder.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import ws.synopsis.systemorder.model.TestPeople;
import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.utils.TestPeopleDB;
import ws.synopsis.systemorder.utils.EmployeeDB;

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
		
		Employee A = EmployeeDB.getEmployeeByID(100);
			System.out.println(A.getUsername());
		String username = EmployeeDB.getUsernameByID(100);
			System.out.println(username);
		String password = EmployeeDB.getPasswordByUsername(username);
			System.out.println(password);
		boolean chckuser = EmployeeDB.checkUsernameExists(username);
			System.out.println(chckuser);
		boolean chckpass = EmployeeDB.checkPasswordMatches(username, password);
			System.out.println(chckpass);
		boolean chckcred = EmployeeDB.checkCredentials(username, password);
			System.out.println(chckcred);
		
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
