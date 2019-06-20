package ws.synopsis.systemorder.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: HardwareOrderItems
 *
 */
@Entity
@Table(name = "hardware")
public class HardwareOrderItems implements Serializable {

	@Id
	@Column(name = "orderid")
	private long primKey;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "orderid")
	private Order order;
	
	private boolean mouse;
	private boolean monitor;
	
	private static final long serialVersionUID = 1L;

	public HardwareOrderItems() {
		super();
	}
	
	public HardwareOrderItems(long primKey, Order order) {
		super();
		this.primKey = primKey;
		this.order = order;
	}

	public long getPrimKey() {
		return primKey;
	}

	public void setPrimKey(long primKey) {
		this.primKey = primKey;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public boolean isMouse() {
		return mouse;
	}

	public void setMouse(boolean mouse) {
		this.mouse = mouse;
	}

	public boolean isMonitor() {
		return monitor;
	}

	public void setMonitor(boolean monitor) {
		this.monitor = monitor;
	}
   
}
