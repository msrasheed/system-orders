package ws.synopsis.systemorder.Gson;

import com.google.gson.ExclusionStrategy;
import com.google.gson.FieldAttributes;

import ws.synopsis.systemorder.model.Order;

public class GsonExcludeAnnotationStrategy implements ExclusionStrategy {

	@Override
	public boolean shouldSkipClass(Class<?> c) {
		// TODO Auto-generated method stub
		//System.out.println("hello");
		return false;
	}

	@Override
	public boolean shouldSkipField(FieldAttributes f) {
		// TODO Auto-generated method stub
		//System.out.println(f.getName());
		return f.getAnnotation(GsonExclude.class) != null;
		//return f.getName().equals("order");
	}

}
