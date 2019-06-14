package ws.synopsis.systemorder.utils;

import java.security.MessageDigest;

public class HashingUtil {
	public static String shaw256(String msg) {
		
		MessageDigest digester = null;
		String retmsg = null;
		
		try {
			digester = MessageDigest.getInstance("SHA-256");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		if (digester == null) return retmsg;
			
		digester.update(msg.getBytes());
		byte[] digMsg = digester.digest();
		
		retmsg = new String(digMsg);
		
		return retmsg;
	}
}
