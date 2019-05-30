package ws.synopsis.systemorder.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: User
 *
 */
@Entity
public class User implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long userId;
	
	private static final long serialVersionUID = 1L;

	public User() {
		super();
	}
   
}
