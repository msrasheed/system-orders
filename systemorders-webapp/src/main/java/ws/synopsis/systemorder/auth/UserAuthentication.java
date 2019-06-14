package ws.synopsis.systemorder.auth;

import ws.synopsis.systemorder.utils.EmployeeDB;
import ws.synopsis.systemorder.utils.HashingUtil;

public class UserAuthentication {
	public static boolean authenticateUser(String username, String password) {
		boolean isCorrect = false;
		
		password = HashingUtil.shaw256(password);
		String actualPassword = EmployeeDB.getPasswordByUsername(username);
		
		if (password.equals(actualPassword)) {
			isCorrect = true;
		}
		
		return isCorrect;
	}
}
