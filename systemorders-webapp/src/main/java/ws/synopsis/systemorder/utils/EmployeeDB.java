package ws.synopsis.systemorder.utils;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;
import ws.synopsis.systemorder.model.Employee;

public class EmployeeDB {
	public static boolean checkCredentials(String username, String password) {
		if(checkUsernameExists(username) == true) {
			if(checkPasswordMatches(username, password) == true) return true;
		}
		return false;
	}
	
	public static boolean checkPasswordMatches(String username, String password) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT e " +
							"FROM Employee as e " +
							"WHERE e.username = :user";
		TypedQuery<Employee> q = em.createQuery(qString, Employee.class);
		q.setParameter("user", username);
		try {
			if(q.getSingleResult().getPassword().equals(password)) return true;
			return false;
		} finally {
			em.close();
		}
	}
	
	public static boolean checkUsernameExists(String username) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT e.username " +
							"FROM Employee as e " +
							"WHERE e.username = :user";
		TypedQuery<String> q = em.createQuery(qString, String.class);
		q.setParameter("user", username);
		try {
			if(q.getSingleResult() != null) return true;
			return false;
		} finally {
			em.close();
		}
	}
	
	public static Employee getEmployeeByID(int id) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString ="SELECT e " +
						"FROM Employee e " +
						"WHERE e.userid = :id";
		TypedQuery<Employee> q = em.createQuery(qString, Employee.class);
		q.setParameter("id", id);
		try {
			return q.getSingleResult();
		} finally {
			em.close();
		}
	}
	
	public static String getPasswordByUsername(String username) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT e.password " +
							"FROM Employee as e " +
							"WHERE e.username = :user";
		TypedQuery<String> q = em.createQuery(qString, String.class);
		q.setParameter("user", username);
		try {
			return q.getSingleResult();
		} finally {
			em.close();
		}
	}
	
	public static String getUsernameByID(int id) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString ="SELECT e.username " +
						"FROM Employee e " +
						"WHERE e.userid = :id";
		TypedQuery<String> q = em.createQuery(qString, String.class);
		q.setParameter("id", id);
		try {
			return q.getSingleResult();
		} finally {
			em.close();
		}
	}
	
	public static boolean insertEmployee(Employee employee) {
		boolean isSuccessful = false;
		
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		EntityTransaction trans = em.getTransaction();
		try {
			trans.begin();
			em.persist(employee);
			trans.commit();
			isSuccessful = true;
		} catch (Exception e) {
			trans.rollback();
			isSuccessful = false;
		}finally {
			em.close();
		}
		
		return isSuccessful;
	}
	
	public static boolean mergeEmployee(Employee employee) {
		boolean isSuccessful = false;

		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		EntityTransaction trans = em.getTransaction();
		try {
			trans.begin();
			em.merge(employee);
			trans.commit();
			isSuccessful = true;
		} catch (Exception e) {
			trans.rollback();
			isSuccessful = false;
		}finally {
			em.close();
		}
		
		return isSuccessful;
	}
}
