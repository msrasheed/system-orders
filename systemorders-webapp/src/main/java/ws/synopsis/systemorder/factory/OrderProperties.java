package ws.synopsis.systemorder.factory;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import ws.synopsis.systemorder.model.Order;
import ws.synopsis.systemorder.model.Employee;

public class OrderProperties extends Properties {
	
	public OrderProperties(String operation, Order order, HttpServletRequest req) {
		super();
		
		if (order == null) {
			//Long userid = ((Employee) req.getSession().getAttribute("employee")).getUserid();
			Long userid = (long) 1;
			put("userid", Long.toString(userid));
		}
		
		Enumeration<String> params = req.getParameterNames();
		ArrayList<String> paramList = Collections.list(params);
		ArrayList<String> roots = new ArrayList<String>();
		int idx;
		
		for (String p : paramList) {
			if ((idx = p.indexOf("Iterable")) != -1) {
				roots.add(p.substring(0, idx));
				put(p, req.getParameter(p));
			}
		}
		
		Class empCls = Order.class;
		for (String param : paramList) {
			//String param = params.nextElement();
			//System.out.println(param + " " + req.getParameter(param));
			try {
				Field field = empCls.getDeclaredField(param);
				Operation ann = field.getAnnotation(Operation.class);
				if (ann.value().equals(operation)) {
					put(param, req.getParameter(param));
				}
			} catch (Exception e) {
				// TODO: handle exception
				for (String r : roots) {
					if (param.contains(r)) {
						put(param, req.getParameter(param));
					}
				}
			}
		}
	}
}
