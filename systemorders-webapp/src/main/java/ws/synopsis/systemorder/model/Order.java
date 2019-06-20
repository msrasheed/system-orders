package ws.synopsis.systemorder.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

/**
 * Entity implementation class for Entity: Order
 *
 */
@Entity
@Table(name = "orders")
public class Order implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderid;
	private int userid;
	private String status;
	private Date date_created;
	private String processor;
	private int memory;
	private int harddisk;
	private String os;
	private String device_type;
	private Date date_needed;
	private String client_contact;
	
	public Order() {
		super();
	}
	
	public Order(int orderid, int userid, String status, Date date_created, String processor, int memory, int harddisk, String os, String device_type, Date date_needed, String client_contact) {
		super();
		this.orderid = orderid;
		this.userid = userid;
		this.status = status;
		this.date_created = date_created;
		this.processor = processor;
		this.memory = memory;
		this.harddisk = harddisk;
		this.os = os;
		this.device_type = device_type;
		this.date_needed = date_needed;
		this.client_contact = client_contact;
	}

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDate_created() {
		return date_created;
	}

	public void setDate_created(Date date_created) {
		this.date_created = date_created;
	}

	public String getProcessor() {
		return processor;
	}

	public void setProcessor(String processor) {
		this.processor = processor;
	}

	public int getMemory() {
		return memory;
	}

	public void setMemory(int memory) {
		this.memory = memory;
	}

	public int getHarddisk() {
		return harddisk;
	}

	public void setHarddisk(int harddisk) {
		this.harddisk = harddisk;
	}

	public String getOs() {
		return os;
	}

	public void setOs(String os) {
		this.os = os;
	}

	public String getDevice_type() {
		return device_type;
	}

	public void setDevice_type(String device_type) {
		this.device_type = device_type;
	}

	public Date getDate_needed() {
		return date_needed;
	}

	public void setDate_needed(Date date_needed) {
		this.date_needed = date_needed;
	}

	public String getClient_contact() {
		return client_contact;
	}

	public void setClient_contact(String client_contact) {
		this.client_contact = client_contact;
	}
   
}
