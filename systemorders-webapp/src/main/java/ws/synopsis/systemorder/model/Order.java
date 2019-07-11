package ws.synopsis.systemorder.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import ws.synopsis.systemorder.factory.Operation;

/**
 * Entity implementation class for Entity: Order
 *
 */
@Entity
@Table(name = "orders")
public class Order implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long orderid;
	
	private Long userid;
	
	private String status;
	
	@Temporal(TemporalType.DATE)
	private Date dateCreated;
	
	@Operation("create")
	private String processor;
	
	@Operation("create")
	private Integer memory;
	
	@Operation("create")
	private Integer harddisk;
	
	@Operation("create")
	private String operatingSystem;
	
	@Operation("create")
	private String deviceType;
	
	@Operation("create")
	@Temporal(TemporalType.DATE)
	private Date dateNeeded;
	
	@Operation("create")
	private String clientContact;
	
	@Operation("verify")
	private Boolean supportApproved;
	
	@Operation("verify")
	private String supportComments;
	
	@Operation("quote")
	private String supplier;
	
	@Operation("quote")
	private Float finalPrice;
	
	@Operation("quote")
	private String acquisitionType;
	
	@Operation("quote")
	private String quoteComments;
	
	@Operation("quote")
	@Temporal(TemporalType.DATE)
	private Date quotedDate;
	
	@Operation("approve")
	private Boolean gmApproved;
	
	@Operation("approve")
	private String gmComments;
	
	@Operation("purchase")
	private String purchaseComments;
	
	private Long finalid;
	
	@Operation("deliver")
	private String deliverComments;
	
	@Operation("deliver")
	@Temporal(TemporalType.DATE)
	private Date dateArrived;
	
	@Operation("create")
	@OneToOne(mappedBy="order", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	HardwareOrderItems hardware;
	
	@Operation("create")
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
	private Set<SoftwareOrderItem> softwares;
	
	@Operation("create")
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
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
	
	public Order(Long orderid, Long userid, String status, Date date_created, String processor, Integer memory, Integer harddisk, String os, String device_type, Date date_needed, String client_contact) {
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
	
	public Order(Long orderid, Long userid, String status, Date dateCreated, String processor, Integer memory,
			Integer harddisk, String operatingSystem, String deviceType, Date dateNeeded, String clientContact,
			Boolean supportApproved, String supportComments, String supplier, Float finalPrice, String acquisitionType,
			String quoteComments, Date quotedDate, Boolean gmApproved, String gmComments, String purchaseComments,
			Long finalid, String deliverComments, Date dateArrived, HardwareOrderItems hardware,
			Set<SoftwareOrderItem> softwares, Set<OtherOrderItem> others) {
		super();
		this.orderid = orderid;
		this.userid = userid;
		this.status = status;
		this.dateCreated = dateCreated;
		this.processor = processor;
		this.memory = memory;
		this.harddisk = harddisk;
		this.operatingSystem = operatingSystem;
		this.deviceType = deviceType;
		this.dateNeeded = dateNeeded;
		this.clientContact = clientContact;
		this.supportApproved = supportApproved;
		this.supportComments = supportComments;
		this.supplier = supplier;
		this.finalPrice = finalPrice;
		this.acquisitionType = acquisitionType;
		this.quoteComments = quoteComments;
		this.quotedDate = quotedDate;
		this.gmApproved = gmApproved;
		this.gmComments = gmComments;
		this.purchaseComments = purchaseComments;
		this.finalid = finalid;
		this.deliverComments = deliverComments;
		this.dateArrived = dateArrived;
		this.hardware = hardware;
		this.softwares = softwares;
		this.others = others;
	}
	
	public void addSoftwareItem(SoftwareOrderItem soft) {
		soft.setOrder(this);
		softwares.add(soft);
	}
	
	public void removeSoftwareItem(long softid) {
		for (Object soft : softwares.toArray()) {
			SoftwareOrderItem softO = (SoftwareOrderItem) soft;
			if (softO.getSoftid() == softid) {
				softwares.remove(softO);
				softO.setOrder(null);
			}
		}
	}
	
	public void addOtherItem(OtherOrderItem item) {
		item.setOrder(this);
		others.add(item);
	}
	
	public void removeOtherItem(long otherid) {
		for (Object oth : others.toArray()) {
			OtherOrderItem othO = (OtherOrderItem) oth;
			if (othO.getOtherid() == otherid) {
				others.remove(othO);
				othO.setOrder(null);
			}
		}
	}

	public Long getOrderid() {
		return orderid;
	}

	public void setOrderid(Long orderid) {
		this.orderid = orderid;
	}

	public Long getUserid() {
		return userid;
	}

	public void setUserid(Long userid) {
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

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public String getProcessor() {
		return processor;
	}

	public void setProcessor(String processor) {
		this.processor = processor;
	}

	public Integer getMemory() {
		return memory;
	}

	public void setMemory(Integer memory) {
		this.memory = memory;
	}

	public Integer getHarddisk() {
		return harddisk;
	}

	public void setHarddisk(Integer harddisk) {
		this.harddisk = harddisk;
	}

	public String getOperatingSystem() {
		return operatingSystem;
	}

	public void setOperatingSystem(String operatingSystem) {
		this.operatingSystem = operatingSystem;
	}

	public String getDeviceType() {
		return deviceType;
	}

	public void setDeviceType(String deviceType) {
		this.deviceType = deviceType;
	}

	public Date getDateNeeded() {
		return dateNeeded;
	}

	public void setDateNeeded(Date dateNeeded) {
		this.dateNeeded = dateNeeded;
	}

	public String getClientContact() {
		return clientContact;
	}

	public void setClientContact(String clientContact) {
		this.clientContact = clientContact;
	}

	public Boolean getSupportApproved() {
		return supportApproved;
	}

	public void setSupportApproved(Boolean supportApproved) {
		this.supportApproved = supportApproved;
	}

	public String getSupportComments() {
		return supportComments;
	}

	public void setSupportComments(String supportComments) {
		this.supportComments = supportComments;
	}

	public String getSupplier() {
		return supplier;
	}

	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}

	public Float getFinalPrice() {
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

	public String getQuoteComments() {
		return quoteComments;
	}

	public void setQuoteComments(String quoteComments) {
		this.quoteComments = quoteComments;
	}

	public Date getQuotedDate() {
		return quotedDate;
	}

	public void setQuotedDate(Date quotedDate) {
		this.quotedDate = quotedDate;
	}

	public Boolean getGmApproved() {
		return gmApproved;
	}

	public void setGmApproved(Boolean gmApproved) {
		this.gmApproved = gmApproved;
	}

	public String getGmComments() {
		return gmComments;
	}

	public void setGmComments(String gmComments) {
		this.gmComments = gmComments;
	}

	public String getPurchaseComments() {
		return purchaseComments;
	}

	public void setPurchaseComments(String purchaseComments) {
		this.purchaseComments = purchaseComments;
	}

	public Long getFinalid() {
		return finalid;
	}

	public void setFinalid(Long finalid) {
		this.finalid = finalid;
	}

	public String getDeliverComments() {
		return deliverComments;
	}

	public void setDeliverComments(String deliverComments) {
		this.deliverComments = deliverComments;
	}

	public Date getDateArrived() {
		return dateArrived;
	}

	public void setDateArrived(Date dateArrived) {
		this.dateArrived = dateArrived;
	}

	public HardwareOrderItems getHardware() {
		return hardware;
	}

	public void setHardware(HardwareOrderItems hardware) {
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
   
}
