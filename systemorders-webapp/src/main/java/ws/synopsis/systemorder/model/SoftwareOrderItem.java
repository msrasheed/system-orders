package ws.synopsis.systemorder.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: SoftwareOrderItem
 *
 */
@Entity
@Table(name = "software") 
public class SoftwareOrderItem implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long softid;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "orderid")
	private Order order;
	
	private String software;
	
	private static final long serialVersionUID = 1L;

	public SoftwareOrderItem() {
		super();
	}
	
	public SoftwareOrderItem(String software) {
		super();
		this.software = software;
	}

	public long getSoftid() {
		return softid;
	}

	public void setSoftid(long softid) {
		this.softid = softid;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public String getSoftware() {
		return software;
	}

	public void setSoftware(String software) {
		this.software = software;
	}
   
}
