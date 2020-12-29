package ws.synopsis.systemorder.model;

import java.io.Serializable;
import javax.persistence.*;

import ws.synopsis.systemorder.Gson.GsonExclude;

/**
 * Entity implementation class for Entity: OtherOrderItem
 *
 */
@Entity
@Table(name = "otherspecs")
public class OtherOrderItem implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long otherid;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "orderid")
	@GsonExclude
	private Order order;
	
	private String otherspec;
	
	private static final long serialVersionUID = 1L;

	public OtherOrderItem() {
		super();
	}
	
	public OtherOrderItem(String otherspec) {
		super();
		this.otherspec = otherspec;
	}

	public long getOtherid() {
		return otherid;
	}

	public void setOtherid(long otherid) {
		this.otherid = otherid;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public String getOtherspec() {
		return otherspec;
	}

	public void setOtherspec(String otherspec) {
		this.otherspec = otherspec;
	}
   
}
