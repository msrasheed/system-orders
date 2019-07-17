package ws.synopsis.systemorder.utils;

import java.util.Properties;

import javax.mail.*;
import javax.mail.internet.*;

public class MailUtil {
	
	public static final String username = "mrasheed110";
	public static final String pass = "letsdothis";
	public static final String host = "smtp.gmail.com"; //smtp.gmail.com
	public static final String port = "465";
	
	public static void sendMail(String to, String subject, String body, boolean bodyIsHTML) 
		throws MessagingException {
		
		//get mail session
		Properties props = new Properties();
		props.put("mail.transport.protocol", "smtps");
		props.put("mail.smtps.host", host);
		props.put("mail.smtps.port", 465);
		//props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtps.user", username);
		props.put("mail.smtps.password", pass);
		props.put("mail.smtps.auth", "true");
		props.put("mail.smtps.quitwait", "false");
		Session session = Session.getDefaultInstance(props);
		session.setDebug(true);

		//create message
		Message message = new MimeMessage(session);
		message.setSubject(subject);
		if (bodyIsHTML) {
			message.setContent(body, "text/html");
		} else {
			message.setText(body);
		}
		
		//address the message
		Address fromAddress = new InternetAddress(username);
		Address toAddress = new InternetAddress(to);
		message.setFrom(fromAddress);
		message.setRecipient(Message.RecipientType.TO, toAddress);
		
		//send the message
		Transport transport = session.getTransport();
		transport.connect(host, username, pass);
		transport.sendMessage(message, message.getAllRecipients());
		transport.close();
	}
}
