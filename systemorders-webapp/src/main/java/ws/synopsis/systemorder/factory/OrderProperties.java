package ws.synopsis.systemorder.factory;

import java.lang.reflect.Field;
import java.util.Enumeration;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import ws.synopsis.systemorder.model.Order;

public class OrderProperties extends Properties {
	public OrderProperties(String operation, HttpServletRequest req) {
		super();
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
