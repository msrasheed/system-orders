package ws.synopsis.systemorder.utils;

import java.util.List;

import javax.persistence.*;

public class PostgresDBUtil {
	private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("primary");
	
	public static EntityManagerFactory getEmFactory() {
		return emf;
	}
	
	public static List<String> getRoles(String operation, String resource) {
		EntityManager em = getEmFactory().createEntityManager();
		String qString = "SELECT rp.role FROM rolepermissions rp "
				+ "WHERE rp.oprt = :oprt AND rp.resc = :resc";
		TypedQuery<String> q = em.createQuery(qString, String.class);
		
		q.setParameter("oprt", operation);
		q.setParameter("resc", resource);
		
		List<String> roles;
		try {
			roles = q.getResultList();
			if (roles == null || roles.isEmpty())
				roles = null;
		} catch (Exception e) {
			roles = null;
		} finally {
			em.close();
		}
		
		return roles;
	}
}
