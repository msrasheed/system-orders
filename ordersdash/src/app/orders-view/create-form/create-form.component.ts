import { Component, OnInit, Input } from '@angular/core';
import { OrdersRestfulService } from '../orders-restful.service';
import { BaseFormComponent } from '../base-form/base-form.component'
import { Order } from '../order';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css', '../base-form/base-form.component.css']
})
export class CreateFormComponent extends BaseFormComponent implements OnInit {

  @Input('order') order: Order;

  constructor(public orderhttp: OrdersRestfulService) {
    super(orderhttp);
  }

  ngOnInit() {
  }
}
