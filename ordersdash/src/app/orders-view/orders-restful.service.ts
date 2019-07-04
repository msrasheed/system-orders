import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { OrderBrief } from './order-brief';
import { Order } from './order';

@Injectable()
export class OrdersRestfulService {

  public orders: OrderBrief[];

  constructor(public http: HttpClient) {
    this.refreshOrderList();
  }

  refreshOrderList() {
    let apiURL = 'http://localhost:8080/systemorders-webapp/app/orders?allOrders';
    this.http.get<OrderBrief[]>(apiURL)
        .toPromise()
        .then(
          res => {
            console.log(res);
            this.orders = res.map(item => {
              return new OrderBrief(
                item.orderid,
              	item.userid,
              	item.status,
              	item.dateNeeded,
              	item.clientContact,
              	item.supportApproval,
              	item.gmApproval,
              	item.finalid,
              	item.arrived,
              );
            });
          },
          msg => {
            console.log(msg);
          }
        );
  }

  getOrder(id: string) {
    let apiURl = 'http://localhost:8080/systemorders-webapp/app/orders?orderid=' + id;
    return this.http.get<Order>(apiURl).toPromise();
  }

}
