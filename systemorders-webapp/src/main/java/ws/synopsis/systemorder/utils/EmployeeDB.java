package ws.synopsis.systemorder.utils;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import ws.synopsis.systemorder.model.Employee;

public class EmployeeDB {
	public static Employee getEmployeeByID(int id) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString ="SELECT username " +
						"FROM Employee e " +
						"WHERE e.userid = :id";
		TypedQuery<Employee> q = em.createQuery(qString, Employee.class);
		q.setParameter("userid", id);
		try {
			return q.getSingleResult();
		} finally {
			em.close();
		}
	}
	
	public static String getUsernameByID(int id) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString ="SELECT username " +
						"FROM Employee e " +
						"WHERE e.userid = :id";
		TypedQuery<Employee> q = em.createQuery(qString, Employee.class);
		q.setParameter("userid", id);
		try {
			return q.getSingleResult().getUsername();
		} finally {
			em.close();
		}
	}
	
	public static String getPasswordByUsername(String user) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT password" +
							"FROM Employee as e" +
							"WHERE e.username = user";
		TypedQuery<Employee> q = em.createQuery(qString, Employee.class);
		q.setParameter("username", user);
		try {
			return q.getSingleResult().getPassword();
		} finally {
			em.close();
		}
	}
	
	public static boolean checkUsernameExists(String user) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT username" +
							"FROM Employee as e" +
							"WHERE e.username = user";
		TypedQuery<Employee> q = em.createQuery(qString, Employee.class);
		q.setParameter("username", user);
		try {
			if(q.getSingleResult() != null) return true;
			return false;
		} finally {
			em.close();
		}
	}
	
	public static boolean checkPasswordMatches(String user, String pass) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT username" +
							"FROM Employee as e" +
							"WHERE e.username = user";
		TypedQuery<Employee> q = em.createQuery(qString, Employee.class);
		q.setParameter("username", user);
		try {
			if(q.getSingleResult().getPassword() == pass) return true;
			return false;
		} finally {
			em.close();
		}
	}
	
	public static boolean checkCredentials(String user, String pass) {
		if(checkUsernameExists(user) == true) {
			if(checkPasswordMatches(user, pass) == true) return true;
		}
		return false;
	}
}
