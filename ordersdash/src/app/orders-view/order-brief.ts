export class OrderBrief {
  constructor(
  	public orderid: string,
  	public userid: string,
  	public status: number,
  	public dateNeeded: string,
  	public clientContact: string,
  	public supportApproval: boolean,
  	public gmApproval: string,
  	public finalid: string,
  	public arrived: boolean,
  ) {}
}
