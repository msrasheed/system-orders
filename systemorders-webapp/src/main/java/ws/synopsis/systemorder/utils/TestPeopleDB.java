package ws.synopsis.systemorder.utils;

import javax.persistence.EntityManager;

import ws.synopsis.systemorder.model.TestPeople;

public class TestPeopleDB {
	public static TestPeople getPersonById(int id) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		try {
			TestPeople ppl = em.find(TestPeople.class, id);
			return ppl;
		} finally {
			em.close();
		}
	}

	public static TestPeople checkCredentials(String username, String password) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		TestPeople user = em.find(TestPeople.class, username);
	}
	
}
