import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { OrderBrief } from './order-brief';
import { Order } from './order';

@Injectable()
export class OrdersRestfulService {

  public orders: OrderBrief[];
  public downloadButt;

  constructor(public http: HttpClient) {
    this.refreshOrderList();
    this.downloadButt = document.createElement("a");
    document.body.appendChild(this.downloadButt);
    this.downloadButt.style = "display: none";
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

  downloadFile(orderid: string, filename: string) {
    let apiURL = `http://localhost:8080/systemorders-webapp/app/orders?orderid=${orderid}&file=${filename}`;
    let fileNameParts: string[] = filename.split(".");

    this.http.get(apiURL, {responseType: 'blob'})
        .toPromise()
        .then(
          res => {
            //console.log(res);
            let bloburl = window.URL.createObjectURL(res);
            //window.open(window.URL.createObjectURL(res));
            //window.location.href = bloburl;
            this.downloadButt.href = bloburl;
            this.downloadButt.download = fileNameParts[0] + orderid + "." + fileNameParts[1];
            this.downloadButt.click();
            window.URL.revokeObjectURL(bloburl);
          },
          msg => {
            console.log(msg);
          }
        );
  }

  submitForm(form: FormData) {
    let apiURL = `http://localhost:8080/systemorders-webapp/app/orders`;
    console.log('posting: ', form);

    this.http.post(apiURL, form)
        .toPromise()
        .then(
          res => {
            console.log(res);
          },
          msg => {
            console.log(msg);
          }
        );
  }

}
