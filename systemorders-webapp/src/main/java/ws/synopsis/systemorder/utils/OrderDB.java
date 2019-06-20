package ws.synopsis.systemorder.utils;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;
import ws.synopsis.systemorder.model.Order;

public class OrderDB {
	public static List<Order> selectOrderIDsByStatus(String status) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT o.orderid " +
							"FROM Order as o "
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
	
	public static List<Order> selectOrderIDsByUser(String userid) {
		EntityManager em = PostgresDBUtil.getEmFactory().createEntityManager();
		String qString =	"SELECT o.orderid " +
							"FROM Order as o "
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
	
	
	
	
}

// get all orders with specific status
// get all orders from specific user
// get all orders
// persist function (save)
// merge function (update)
// drop function (delete)
// get order by id

