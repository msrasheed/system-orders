package ws.synopsis.systemorder.factory;

import java.lang.reflect.Method;
import java.util.Enumeration;
import java.util.List;
import java.util.Properties;

import ws.synopsis.systemorder.Gson.JsonBuilder;
import ws.synopsis.systemorder.model.Employee;
import ws.synopsis.systemorder.model.Order;
import ws.synopsis.systemorder.utils.EmployeeDB;
import ws.synopsis.systemorder.utils.HashingUtil;
import ws.synopsis.systemorder.utils.OrderDB;
import ws.synopsis.systemorder.utils.StringUtil;

public class EmployeeFactory {
	public static Employee createNew(EmployeeProperties props) {
		Employee emp = new Employee();
		fillEmployee(emp, props);
		EmployeeDB.insertEmployee(emp);
		return emp;
	}
	
	public static Employee update(Employee emp, EmployeeProperties props) {
		fillEmployee(emp, props);
		EmployeeDB.mergeEmployee(emp);
		return emp;
	}
	
	private static boolean fillEmployee(Employee emp, EmployeeProperties props) {
		Enumeration<String> enums = (Enumeration<String>) props.propertyNames();
		Class cls = emp.getClass();
//		for (Method m : cls.getDeclaredMethods()) {
//			System.out.println(m.getName());
//		}
		//System.out.println("\nActually calling");
		while (enums.hasMoreElements()) {
			String key = enums.nextElement();
			//System.out.println(key);
			Method meth;
			try {
				meth = cls.getDeclaredMethod("set" + StringUtil.capitalizeFirstLetter(key), String.class);
				String value = props.getProperty(key);
				if (key.equals("password")) value = HashingUtil.shaw256(value);
				meth.invoke(emp, value);
				//System.out.println("set" + key + " " + value);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return true;
	}
	
	public static String getEmployeeJson(long id) {
		Employee emp = (Employee) EmployeeDB.getEmployeeById(id);
		String empString = JsonBuilder.getGson().toJson(emp);
		return empString;
	}
	
	public static String getAllEmployeeDataJson() {
		List<Employee> emps = EmployeeDB.getAllEmployees();
		String empsString = JsonBuilder.getGson().toJson(emps);
		return empsString;
	}
}
