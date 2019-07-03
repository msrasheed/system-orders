package ws.synopsis.systemorder.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import ws.synopsis.systemorder.factory.EmployeeFactory;
import ws.synopsis.systemorder.factory.EmployeeProperties;
import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.utils.EmployeeDB;
import ws.synopsis.systemorder.utils.HashingUtil;

/**
 * Servlet implementation class UserServlet
 */
@MultipartConfig
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

		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		HttpSession session = request.getSession();
		Employee employee = (Employee) session.getAttribute("employee");
		
		String paramstr;
		String json = null;
		
		if ((paramstr = request.getParameter("userid")) != null) {
			json = EmployeeFactory.getEmployeeJson(Long.parseLong(paramstr));
		}
		else if ((paramstr = request.getParameter("allusers")) != null) {
			json = EmployeeFactory.getAllEmployeeDataJson();
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

		String operation = request.getParameter("operation");
		
		Employee employee = null;
		boolean exists = true;
		String userid = null;
		
		if (operation != null) {
			operation = operation.toLowerCase();
			if ((userid = request.getParameter("userid")) == null) exists = false;
			else employee = EmployeeDB.getEmployeeById(Long.parseLong(userid));
		}
		
		if (operation == null) {
			
		}
		else if (operation.equals("create")) {
//			String role = request.getParameter("role");
//			String fname = request.getParameter("fname");
//			String lname = request.getParameter("lname");
//			String username = request.getParameter("username");
//			String password = request.getParameter("password");
//			password = HashingUtil.shaw256(password);
//			String email = request.getParameter("email");
//			Employee emp = new Employee(role, fname, lname, username, password, email);
//			EmployeeDB.insertEmployee(emp);
			EmployeeProperties empProp = new EmployeeProperties(request);
			EmployeeFactory.createNew(empProp);
		}
		else if (operation.equals("update") && employee != null) {
			System.out.println("Updating employee with id: " + userid);
			EmployeeProperties empProp = new EmployeeProperties(request);
			EmployeeFactory.update(employee, empProp);
		}
		else if (operation.equals("delete")) {
			System.out.println("Deleting employee with id: " + userid);
			EmployeeDB.deleteEmployee(employee);
		}
	}

}
