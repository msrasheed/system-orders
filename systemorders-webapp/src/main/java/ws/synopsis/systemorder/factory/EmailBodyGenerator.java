package ws.synopsis.systemorder.factory;

import java.io.StringWriter;

import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.apache.velocity.app.VelocityEngine;

import ws.synopsis.systemorder.model.Order;

public class EmailBodyGenerator {
	public static String supportEmail(Order order) {
		VelocityEngine ve = new VelocityEngine();
		ve.init();
		
		VelocityContext context = new VelocityContext();
		
		context.put("order", order);
		
		StringWriter writer = new StringWriter();
		
		Velocity.mergeTemplate("orderEmailTemplate.vm", null, context, writer);
		
		return writer.toString();
	}
}
