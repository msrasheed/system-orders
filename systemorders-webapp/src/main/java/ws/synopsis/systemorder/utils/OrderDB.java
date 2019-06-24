package ws.synopsis.systemorder.utils;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;

import ws.synopsis.systemorder.model.Order;

public class OrderDB {
	public static List<Order> getAllOrders() {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT * " +
							"FROM Order";
		TypedQuery<Order> q = em.createQuery(qString, Order.class);
		List<Order> orders;
		try {
			orders = q.getResultList();
			if (orders == null) orders = null;
		} finally {
			em.close();
		}
		return orders;
	}

	public static List<Order> getOrdersByStatus(String status) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT o " +
							"FROM Order as o " +
							"WHERE o.status = :stat";
		TypedQuery<Order> q = em.createQuery(qString, Order.class);
		q.setParameter("stat", status);
		List<Order> orders;
		try {
			orders = q.getResultList();
			if (orders == null) orders = null;
		} finally {
			em.close();
		}
		return orders;
	}
	
	public static List<Order> getOrdersByUser(long userid) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT o " +
							"FROM Order as o " +
							"WHERE o.userid = :user";
		TypedQuery<Order> q = em.createQuery(qString, Order.class);
		q.setParameter("user", userid);
		List<Order> orders;
		try {
			orders = q.getResultList();
			if (orders == null) orders = null;
		} finally {
			em.close();
		}
		return orders;
	}
	
	public static Order getOrderById(long id) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString ="SELECT o " +
						"FROM Order as o " +
						"WHERE o.orderid = :id";
		TypedQuery<Order> q = em.createQuery(qString, Order.class);
		q.setParameter("id", id);
		try {
			return q.getSingleResult();
		} finally {
			em.close();
		}
	}
	
	public static long getUserByID(long orderid) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString = "SELECT o.userid " +
						 "FROM Order as o " +
						 "WHERE o.orderid = :id";
		TypedQuery<Integer> q = em.createQuery(qString, Integer.class);
		q.setParameter("id", orderid);
		try {
			return q.getSingleResult();
		} finally {
			em.close();
		}
	}
	
	public static boolean insertOrder(Order order) {
		boolean isSuccessful = false;
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		EntityTransaction trans = em.getTransaction();
		try {
			trans.begin();
			em.persist(order);
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
	
	public static boolean mergeOrder(Order order) {
		boolean isSuccessful = false;
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		EntityTransaction trans = em.getTransaction();
		try {
			trans.begin();
			em.merge(order);
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
	
	public static boolean dropOrder(Order order) {
		boolean isSuccessful = false;
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		EntityTransaction trans = em.getTransaction();
		try {
			trans.begin();
			em.remove(order);
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

