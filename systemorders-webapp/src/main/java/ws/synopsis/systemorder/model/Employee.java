package ws.synopsis.systemorder.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Employees
 *
 */
@Entity
@Table(name = "employee")
public class Employee implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userid;
	private String role;
	private String fname;
	private String lname;
	private String username;
	private String password;
	private String email;
	
	//private static final long serialVersionUID = 1L;

	public Employee() {
		super();
	}
	
	public Employee(String role, String fname, String lname, String username, String password,
			String email) {
		super();
		this.role = role;
		this.fname = fname;
		this.lname = lname;
		this.username = username;
		this.password = password;
		this.email = email;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
   
}
