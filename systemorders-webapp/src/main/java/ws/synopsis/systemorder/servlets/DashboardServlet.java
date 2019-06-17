package ws.synopsis.systemorder.servlets;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import ws.synopsis.systemorder.auth.Authentication;
import ws.synopsis.systemorder.filters.AuthorizationFilter;
import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.utils.EmployeeDB;

/**
 * Servlet implementation class DashboardServlet
 */
public class DashboardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DashboardServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		ServletContext context = getServletContext();
		System.out.println("Entering Dashboard Servlet");
		System.out.println(context.getContextPath() + " " + context.getRealPath("dashboard.jsp"));
		
		String operation = request.getParameter("operation");
		
		if (operation == null || operation.equals("login")) {
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			
			if (Authentication.authenticateUser(username, password)) {
				HttpSession session = request.getSession();
				Employee employee = EmployeeDB.getEmployeeByUsername(username);
				session.setAttribute("emploee", employee);
				request.setAttribute("employee", employee);
				System.out.println("Dashboard serving dashboard");
				getServletContext().getRequestDispatcher("/app/dashboard/dashboard.jsp").forward(request, response);
			}
			else {
				System.out.println("Dashboard Rediricting to login");
				response.sendRedirect("/systemorders-webapp/index.html");
			}
		}
		else if (operation.equals("logout")) {
			HttpSession session = request.getSession();
			session.invalidate();
			response.sendRedirect("/systemorders-webapp/index.html");
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
