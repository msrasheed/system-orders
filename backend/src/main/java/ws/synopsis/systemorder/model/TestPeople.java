package ws.synopsis.systemorder.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: TestPeople
 *
 */
@Entity
@Table(name = "testpeople")
public class TestPeople implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int personid;
	private String firstname;
	private String lastname;
	
	//private static final long serialVersionUID = 1L;

	public TestPeople() {
		super();
	}
	
	public TestPeople(int personid, String firstname, String lastname) {
		super();
		this.personid = personid;
		this.firstname = firstname;
		this.lastname = lastname;
	}

	public int getPersonid() {
		return personid;
	}

	public void setPersonid(int personid) {
		this.personid = personid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
   
}
