package ws.synopsis.systemorder.utils;

import javax.persistence.*;

public class PostgresDBUtil {
	private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("primary");
	
	public static EntityManagerFactory getEmFactory() {
		return emf;
	}
}
