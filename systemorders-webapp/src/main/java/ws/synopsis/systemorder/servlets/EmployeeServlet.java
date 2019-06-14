package ws.synopsis.systemorder.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.utils.EmployeeDB;
import ws.synopsis.systemorder.utils.HashingUtil;

/**
 * Servlet implementation class UserServlet
 */
public class EmployeeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EmployeeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		String action = request.getParameter("action");
		
		if (action != null) action = action.toLowerCase();
		
		if (action == null) {
			
		}
		else if (action.equals("create")) {
			String role = request.getParameter("role");
			String fname = request.getParameter("fname");
			String lname = request.getParameter("lname");
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			password = HashingUtil.shaw256(password);
			String email = request.getParameter("email");
			Employee emp = new Employee(role, fname, lname, username, password, email);
			EmployeeDB.insertEmployee(emp);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
