package ws.synopsis.systemorder.filters;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hibernate.validator.internal.util.privilegedactions.GetInstancesFromServiceLoader;

/**
 * Servlet Filter implementation class AuthorizationFilter
 */
public class AuthorizationFilter implements Filter {

	public static final String DASHBOARD_URL = "/systemorders-webapp/app/dashboard";
	
    /**
     * Default constructor. 
     */
    public AuthorizationFilter() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		// TODO Auto-generated method stub
		// place your code here
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		
		String requestURI = httpRequest.getRequestURI();
		System.out.println("Entering Authorization Filter: " + requestURI);
		
		HttpSession session = httpRequest.getSession(false);
		chain.doFilter(httpRequest, httpResponse);
		/*
		if (session != null) {
			System.out.println("Session exists. Forwarding Request.");
			chain.doFilter(httpRequest, httpResponse);
		}
		else if (requestURI.equals(DASHBOARD_URL)) {
			System.out.println("Forwarding to Dashboard Servlet.");
			chain.doFilter(httpRequest, httpResponse);
		}
		else {
			System.out.println("Redirecting to Login;");
			httpResponse.sendRedirect("/systemorders-webapp/index.html");
		}
		
		System.out.println("Exiting Authorization Filter\n");*/
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
