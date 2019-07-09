package ws.synopsis.systemorder.factory;

import java.lang.reflect.Field;
import java.util.Enumeration;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import ws.synopsis.systemorder.model.Order;
import ws.synopsis.systemorder.model.Employee;

public class OrderProperties extends Properties {
	
	public OrderProperties(String operation, Order order, HttpServletRequest req) {
		super();
		
		if (order == null) {
			Long userid = ((Employee) req.getSession().getAttribute("employee")).getUserid();
			put("userid", Long.toString(userid));
		}
		
		Enumeration<String> params = req.getParameterNames();
		Class empCls = Order.class;
		while(params.hasMoreElements()) {
			String param = params.nextElement();
			//System.out.println(param + " " + req.getParameter(param));
			try {
				Field field = empCls.getDeclaredField(param);
				Operation ann = field.getAnnotation(Operation.class);
				if (ann.value().equals(operation)) {
					put(param, req.getParameter(param));
				}
			} catch (Exception e) {
				// TODO: handle exception
			}
		}
	}
}
