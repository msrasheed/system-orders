import { Injectable } from '@angular/core';
import { Config } from './config';
import { OrdersRestfulService } from './orders-view/orders-restful.service';

@Injectable({
  providedIn: 'root'
})
export class RestfulConfigService {

  public apiURLQuery: string;
  public ordersRestService: OrdersRestfulService;
  constructor() {
    //this.apiURLQuery = Config.baseURL + "app/orders?view=all";
  }

  changeOrderURL(query: string) {
    this.apiURLQuery = Config.baseURL + "app/orders?" + query;
    if (this.ordersRestService) this.ordersRestService.refreshOrderList();
  }

  setOrdersRestfulService(service: OrdersRestfulService) {
    this.ordersRestService = service;
  }
}
