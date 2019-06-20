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

	public Order() {
		super();
	}
	
	public Order(int orderid, int userid, String status, Date date_created, String processor, int memory, int harddisk, String os, String device_type, Date date_needed, String client_contact) {
		super();
		this.orderid = orderid;
		this.userid = userid;
		this.status = status;
		this.dateCreated = date_created;
		this.processor = processor;
		this.memory = memory;
		this.harddisk = harddisk;
		this.os = os;
		this.deviceType = device_type;
		this.dateNeeded = date_needed;
		this.clientContact = client_contact;
	}
	
	public Order(int orderid, int userid, String status, Date date_created, String processor, int memory, int harddisk,
			String os, String device_type, Date date_needed, String client_contact, String supplier, float final_price,
			String acquisition_type, Date quoted_date, boolean gm_accepted, String gm_comments, int finalid,
			Date date_arrived) {
		super();
		this.orderid = orderid;
		this.userid = userid;
		this.status = status;
		this.dateCreated = date_created;
		this.processor = processor;
		this.memory = memory;
		this.harddisk = harddisk;
		this.os = os;
		this.deviceType = device_type;
		this.dateNeeded = date_needed;
		this.clientContact = client_contact;
		this.supplier = supplier;
		this.finalPrice = final_price;
		this.acquisitionType = acquisition_type;
		this.quotedDate = quoted_date;
		this.gmAccepted = gm_accepted;
		this.gmComments = gm_comments;
		this.finalid = finalid;
		this.dateArrived = date_arrived;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long orderid;
	private long userid;
	private String status;
	
	@Column(name = "date_created")
	private Date dateCreated;
	private String processor;
	private int memory;
	private int harddisk;
	private String os;
	
	@Column(name = "device_type")
	private String deviceType;
	
	@Column(name = "date_needed")
	private Date dateNeeded;
	
	@Column(name = "client_contact")
	private String clientContact;
	private String supplier;
	
	@Column(name = "final_prce")
	private float finalPrice;
	
	@Column(name = "acquisition_type")
	private String acquisitionType;
	
	@Column(name = "quoted_date")
	private Date quotedDate;
	
	@Column(name = "gm_accepted")
	private boolean gmAccepted;
	
	@Column(name = "gm_comments")
	private String gmComments;
	private int finalid;
	
	@Column(name = "date_arrived")
	private Date dateArrived;

	public long getOrderid() {
		return orderid;
	}

	public void setOrderid(long orderid) {
		this.orderid = orderid;
	}

	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date date_created) {
		this.dateCreated = date_created;
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

	public String getOperatingSystem() {
		return os;
	}

	public void setOperatingSystem(String os) {
		this.os = os;
	}

	public String getDeviceType() {
		return deviceType;
	}

	public void setDeviceType(String device_type) {
		this.deviceType = device_type;
	}

	public Date getDateNeeded() {
		return dateNeeded;
	}

	public void setDateNeeded(Date date_needed) {
		this.dateNeeded = date_needed;
	}

	public String getClientContact() {
		return clientContact;
	}

	public void setClientContact(String client_contact) {
		this.clientContact = client_contact;
	}

	public String getSupplier() {
		return supplier;
	}

	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}

	public float getFinalPrice() {
		return finalPrice;
	}

	public void setFinalPrice(float final_price) {
		this.finalPrice = final_price;
	}

	public String getAcquisitionType() {
		return acquisitionType;
	}

	public void setAcquisitionType(String acquisition_type) {
		this.acquisitionType = acquisition_type;
	}

	public Date getQuotedDate() {
		return quotedDate;
	}

	public void setQuotedDate(Date quoted_date) {
		this.quotedDate = quoted_date;
	}

	public boolean isGmAccepted() {
		return gmAccepted;
	}

	public void setGmAccepted(boolean gm_accepted) {
		this.gmAccepted = gm_accepted;
	}

	public String getGmComments() {
		return gmComments;
	}

	public void setGmComments(String gm_comments) {
		this.gmComments = gm_comments;
	}

	public int getFinalid() {
		return finalid;
	}

	public void setFinalid(int finalid) {
		this.finalid = finalid;
	}

	public Date getDateArrived() {
		return dateArrived;
	}

	public void setDateArrived(Date date_arrived) {
		this.dateArrived = date_arrived;
	}
   
}
