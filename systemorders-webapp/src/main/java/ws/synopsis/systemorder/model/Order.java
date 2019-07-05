package ws.synopsis.systemorder.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

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
	private long orderid;
	
	private long userid;
	
	private String status;
	
	@Column(name = "date_created")
	@Temporal(TemporalType.DATE)
	private Date dateCreated;
	
	private String processor;
	
	private int memory;
	
	private int harddisk;
	
	@Column(name = "os")
	private String operatingSystem;
	
	@Column(name = "device_type")
	private String deviceType;
	
	@Column(name = "date_needed")
	@Temporal(TemporalType.DATE)
	private Date dateNeeded;
	
	@Column(name = "client_contact")
	private String clientContact;
	
	@Column(name = "support_approval")
	private boolean supportApproved;
	
	private String supplier;
	
	@Column(name = "final_price")
	private Float finalPrice;
	
	@Column(name = "acquisition_type")
	private String acquisitionType;
	
	@Column(name = "quoted_date")
	@Temporal(TemporalType.DATE)
	private Date quotedDate;
	
	@Column(name = "gm_approval")
	private boolean gmApproved;
	
	@Column(name = "gm_comments")
	private String gmComments;
	
	private long finalid;
	
	@Column(name = "date_arrived")
	@Temporal(TemporalType.DATE)
	private Date dateArrived;
	
	@OneToOne(mappedBy="order", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	HardwareOrderItems hardware;
	
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<SoftwareOrderItem> softwares;
	
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<OtherOrderItem> others;
	
	public Order() {
		super();
	}
	
	public Order(boolean programCreated) {
		super();
		if (programCreated) {
			softwares = new HashSet<SoftwareOrderItem>();
			others = new HashSet<OtherOrderItem>();
		}
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
		this.operatingSystem = os;
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
		this.operatingSystem = os;
		this.deviceType = device_type;
		this.dateNeeded = date_needed;
		this.clientContact = client_contact;
		this.supplier = supplier;
		this.finalPrice = final_price;
		this.acquisitionType = acquisition_type;
		this.quotedDate = quoted_date;
		this.gmApproved = gm_accepted;
		this.gmComments = gm_comments;
		this.finalid = finalid;
		this.dateArrived = date_arrived;
	}

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
		return operatingSystem;
	}

	public void setOperatingSystem(String os) {
		this.operatingSystem = os;
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

	public void setFinalPrice(Float finalPrice) {
		this.finalPrice = finalPrice;
	}

	public String getAcquisitionType() {
		return acquisitionType;
	}

	public void setAcquisitionType(String acquisitionType) {
		this.acquisitionType = acquisitionType;
	}

	public Date getQuotedDate() {
		return quotedDate;
	}

	public void setQuotedDate(Date quotedDate) {
		this.quotedDate = quotedDate;
	}

	public boolean isGmApproval() {
		return gmApproved;
	}

	public void setGmApproval(boolean gmAccepted) {
		this.gmApproved = gmAccepted;
	}

	public String getGmComments() {
		return gmComments;
	}

	public void setGmComments(String gm_comments) {
		this.gmComments = gm_comments;
	}

	public long getFinalid() {
		return finalid;
	}

	public void setFinalid(long finalid) {
		this.finalid = finalid;
	}

	public Date getDateArrived() {
		return dateArrived;
	}

	public void setDateArrived(Date date_arrived) {
		this.dateArrived = date_arrived;
	}

	public boolean isSupportApproved() {
		return supportApproved;
	}

	public void setSupportApproved(boolean supportApproval) {
		this.supportApproved = supportApproval;
	}

	public HardwareOrderItems getHardware() {
		return hardware;
	}

	public void setHardware(HardwareOrderItems hardware) {
		hardware.setOrder(this);
		this.hardware = hardware;
	}

	public Set<SoftwareOrderItem> getSoftwares() {
		return softwares;
	}

	public void setSoftwares(Set<SoftwareOrderItem> softwares) {
		this.softwares = softwares;
	}

	public Set<OtherOrderItem> getOthers() {
		return others;
	}

	public void setOthers(Set<OtherOrderItem> others) {
		this.others = others;
	}
	
	public void addSoftwareItem(SoftwareOrderItem soft) {
		soft.setOrder(this);
		softwares.add(soft);
	}
	
	public void addOtherItem(OtherOrderItem item) {
		item.setOrder(this);
		others.add(item);
	}
   
}
