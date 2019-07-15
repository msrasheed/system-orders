package ws.synopsis.systemorder.model;

import java.io.Serializable;
import javax.persistence.*;

import ws.synopsis.systemorder.Gson.GsonExclude;

/**
 * Entity implementation class for Entity: HardwareOrderItems
 *
 */
@Entity
@Table(name = "hardware")
public class HardwareOrderItems implements Serializable {

	@Id
	@Column(name = "orderid")
	private Long primKey;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "orderid")
	@GsonExclude
	private Order order;
	
	private Boolean mouse;
	private Boolean keyboard;
	private Boolean monitor;
	
	private static final long serialVersionUID = 1L;

	public HardwareOrderItems() {
		super();
		this.mouse = false;
		this.keyboard = false;
		this.monitor = false;
	}
	
	public HardwareOrderItems(Long primKey, Order order) {
		super();
		this.primKey = primKey;
		this.order = order;
	}
	
	public void set(String key) {
		switch (key) {
			case "mouse":
				setMouse(true);
				break;
			case "monitor":
				setMonitor(true);
				break;
		}
	}

	public Long getPrimKey() {
		return primKey;
	}

	public void setPrimKey(Long primKey) {
		this.primKey = primKey;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Boolean isMouse() {
		return mouse;
	}

	public void setMouse(Boolean mouse) {
		this.mouse = mouse;
	}

	public Boolean isMonitor() {
		return monitor;
	}

	public void setMonitor(Boolean monitor) {
		this.monitor = monitor;
	}

	public Boolean getKeyboard() {
		return keyboard;
	}

	public void setKeyboard(Boolean keyboard) {
		this.keyboard = keyboard;
	}
   
}
