package ws.synopsis.systemorder.factory;

import java.util.HashMap;

/*Different from Authorization permissions
 * this is authorizing operations to change certain parts of the
 * form. Used within the update function in OrderFactory*/
public class OrderFactoryPermissions {
	private boolean create = false;
	private boolean verify = false;
	private boolean quote = false;
	private boolean approve = false;
	private boolean deliver = false;
	
	private static boolean initialized = false;
	private static HashMap<String, String> formPartMap = new HashMap<String, String>(); 
	
	public void init() {

	}

	public OrderFactoryPermissions(String operation) {
		switch (operation) {
			case "create":
				this.create = true;
				break;

			case "verify":
				this.verify = true;
				break;

			case "quote":
				this.quote = true;
				break;

			case "approve":
				this.approve = true;
				break;

			case "deliver":
				this.deliver = true;
				break;
			
			case "update":
				this.create = true;
				this.verify = true;
				this.quote = true;
				this.approve = true;
				this.deliver = true;
		}
	}

	public OrderFactoryPermissions(boolean canCreate, boolean canVerfiy, boolean canQuote, boolean canApprove,
			boolean canDeliver) {
		super();
		this.create = canCreate;
		this.verify = canVerfiy;
		this.quote = canQuote;
		this.approve = canApprove;
		this.deliver = canDeliver;
	}

	public boolean canCreate() {
		return create;
	}

	public boolean canVerfiy() {
		return verify;
	}

	public boolean canQuote() {
		return quote;
	}

	public boolean canApprove() {
		return approve;
	}

	public boolean canDeliver() {
		return deliver;
	}
}
