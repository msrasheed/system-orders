package ws.synopsis.systemorder.auth;

import java.util.List;

import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.utils.OrderDB;
import ws.synopsis.systemorder.utils.PostgresDBUtil;

public class Authorization {
	public static boolean authorizeActionOnUser(Employee emp, String operation, long empId) {
		List<String> authRoles = PostgresDBUtil.getRoles(operation, "users");
		
		if (emp.getUserid() == empId) {
			return true;
		} else {
			return authRoles.contains(emp.getRole());
		}
	}
	
	public static boolean authorizeViewOrder(Employee emp, long orderid) {
		long userOfOrder = OrderDB.getUserByID(orderid);
		if (userOfOrder == emp.getUserid() || !emp.getRole().equals("user")) {
			return true;
		} else {
			return false;
		}
	}
	
	public static boolean authorizeActionOnOrder(Employee emp, String operation, long orderId) {
		List<String> authRoles = PostgresDBUtil.getRoles(operation, "orders");
		
		return authRoles.contains(emp.getRole());
	}
}
