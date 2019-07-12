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

  public orderid: string;
  public userid: string;
  public status: number;
  public dateCreated: string;
  public processor: string;
  public memory: string;
  public harddisk: string;
  public operatingSystem: string;
  public deviceType: string;
  public dateNeeded: string;
  public clientContact: string;
  public supportApproved: boolean;
  public supportComments: string;
  public supplier: string;
  public finalPrice: string;
  public acquisitionType: string;
  public quotedDate: string;
  public quoteComments: string;
  public gmApproved: boolean;
  public gmComments: string;
  public purchaseComments: string;
  public finalid: string;
  public dateArrived: string;
  public deliverComments: string;
  public hardwares: string[];
  public softwares: SoftwareItem[];
  public others: OtherItem[];
  public softwaresText: string[]

  public newSoftwares: SoftwareItem[];
  public newOthers: OtherItem[];

  public supportApproval: string;
  public gmApproval: string;

  constructor() {
  }
}
