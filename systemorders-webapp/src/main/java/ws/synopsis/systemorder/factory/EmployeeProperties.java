package ws.synopsis.systemorder.factory;

import java.lang.reflect.Field;
import java.util.Enumeration;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import ws.synopsis.systemorder.model.Employee;

public class EmployeeProperties extends Properties {
	public EmployeeProperties(HttpServletRequest req) {
		super();
		Enumeration<String> params = req.getParameterNames();
		Class empCls = Employee.class;
		while(params.hasMoreElements()) {
			String param = params.nextElement();
			try {
				Field field = empCls.getDeclaredField(param);
				if (!field.getName().equals("userid")) put(param, req.getParameter(param));
			} catch (Exception e) {
				// TODO: handle exception
			}
		}
	}
}
