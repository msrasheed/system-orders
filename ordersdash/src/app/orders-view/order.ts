export class SoftwareItem {
  constructor(
    public softid: string,
    public software: string
  ) {}
}

export class OtherItem {
  constructor(
    public otherid: string,
    public otherspec: string
  ) {}
}

export class Order {

  //public softwaresText: string[] = [];
  public othersText: string[] = [];

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
  	public softwares: SoftwareItem[],
  	public others: OtherItem[],
    public softwaresText: string[]
  ) {
  }
}
