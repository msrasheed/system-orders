package ws.synopsis.systemorder.factory;

public enum OrderStatus {
	HCP(100, "Hoja de Costeo Pendiente"),
	HCA(200, "Hoja de Costeo Aprobado"),
	SOP(300, "Solicitud de Orden Pendiente"),
	SOA(400, "Solicitud Orden Aprobado"),
	EO (500, "Equipo Ordenado"),
	EE (600, "Equipo Entregado"),
	DS (700, "Denegado por Suporte"),
	DGM(800, "Denegado por GM");
	
	public final int number;
	public final String meaning;
	
	private OrderStatus(int num, String mean) {
		this.number = num;
		this.meaning = mean;
	}
}
