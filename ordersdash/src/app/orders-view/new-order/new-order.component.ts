import { Component, OnInit } from '@angular/core';
import { OrdersRestfulService } from '../orders-restful.service';
import { CreateFormComponent } from '../create-form/create-form.component'
import { Order } from '../order'

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css', '../base-form/base-form.component.css']
})
export class NewOrderComponent extends CreateFormComponent implements OnInit {

  constructor() {
    super();
    //this.order = new Order();
  }

  ngOnInit() {
    this.fieldsRequired = true;
    this.fieldsEditable = true;
  }
}
