import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';
import { Order } from '../order';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  private order: Order;

  constructor(public route: ActivatedRoute, public orderhttp: OrdersRestfulService) {
    this.route.params.subscribe(params => {
      this.orderhttp.getOrder(params['id'])
          .then(
            res => {
              this.order = Object.assign({}, res);
              console.log(this.order);
            },
            msg => {
              console.log(msg);
            }
          );
    });
  }

  ngOnInit() {
  }

  submitOrderChange() {
    console.log("no submission code yet");
  }

}
