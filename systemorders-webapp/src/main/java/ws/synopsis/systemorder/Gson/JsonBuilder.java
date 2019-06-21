package ws.synopsis.systemorder.Gson;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class JsonBuilder {
	public static Gson getGson() {
//		GsonBuilder gbuild = new GsonBuilder();
//		gbuild.setExclusionStrategies(new GsonExcludeAnnotationStrategy());
//		return gbuild.create();
		return new GsonBuilder().setExclusionStrategies(new GsonExcludeAnnotationStrategy()).create();
	}
}
