import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';
import { Order, SoftwareItem, OtherItem } from '../order';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css'],
  providers: [DatePipe]
})
export class OrderViewComponent implements OnInit {

  private order: Order;

  constructor(public route: ActivatedRoute, public orderhttp: OrdersRestfulService, public datepipe: DatePipe) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderhttp.getOrder(params['id'])
          .then(
            res => {
              //console.log(res);
              this.order = Object.assign({}, res);

              this.order.dateNeeded = this.convertDateFormat(this.order.dateNeeded);
              this.order.dateCreated = this.convertDateFormat(this.order.dateCreated);
              if (this.order.quotedDate) this.order.quotedDate = this.convertDateFormat(this.order.quotedDate);
              if (this.order.dateArrived) this.order.dateArrived = this.convertDateFormat(this.order.dateArrived);

              this.order.supportApproval = this.convertApprovals(this.order.supportApproved);
              this.order.gmApproval = this.convertApprovals(this.order.gmApproved);
              //console.log(this.maxSoftNum);
              console.log(this.order);
            },
            msg => {
              console.log(msg);
            }
          );
    });
  }

  convertDateFormat(date: string) {
    if (!date) return date;
    date = this.datepipe.transform(date, 'shortDate');
    let dateParts: string[] = date.split('/');
    if (dateParts[0].length == 1) dateParts[0] = '0' + dateParts[0];
    if (dateParts[1].length == 1) dateParts[1] = '0' + dateParts[1];
    dateParts[2] = '20' + dateParts[2];
    return dateParts[2] + '-' + dateParts[0] + '-' + dateParts[1];
  }

  convertApprovals(val: boolean) {
    return val ? 'approve' : 'deny';
  }s

  submitOrderChange() {
    console.log("no submission code yet");
  }

}
