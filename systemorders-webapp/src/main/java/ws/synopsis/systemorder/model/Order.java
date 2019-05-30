package ws.synopsis.systemorder.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Order
 *
 */
@Entity

public class Order implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long orderId;
	
	private User user;
	
	private static final long serialVersionUID = 1L;

	public Order() {
		super();
	}
   
}
