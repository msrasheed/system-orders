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
}