package ws.synopsis.systemorder.utils;

public class StringUtil {
	public static String capitalizeFirstLetter(String str) {
		return str.substring(0, 1).toUpperCase() + str.substring(1);
	}
}
