package ws.synopsis.systemorder.utils;

public class StringUtil {
	public static String capitalizeFirstLetter(String str) {
		return str.substring(0, 1).toUpperCase() + str.substring(1);
	}
	
	public static String combineJsonArrays(String json1, String json2) {
		if (json1.length() < 3) return json2;
		if (json2.length() < 3) return json1;
		return json1.substring(0, json1.length()-1) + "," + json2.substring(1);
	}
}
