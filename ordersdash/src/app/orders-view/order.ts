export class Order {
  constructor(
  	public orderid: string,
  	public userid: string,
  	public status: string,
  	public created: boolean,
  	public processor: string,
  	public memory: string,
  	public harddisk: string,
  	public operatingSystem: string,
  	public deviceType: string,
  	public dateNeeded: string,
  	public clientContact: string,
  	public supportApproval: boolean,
  	public supplier: string,
  	public finalPrice: string,
  	public acquisitionType: string,
  	public quoted: string,
  	public gmApproval: string,
  	public gmComments: string,
  	public finalid: string,
  	public arrived: boolean,
  	public hardwares: string[],
  	public softwares: string[],
  	public others: string[]
  ) {}
}
