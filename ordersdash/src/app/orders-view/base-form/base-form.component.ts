import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';
import { OrderModuleInjector } from '../order-module-injector';
import { Order, SoftwareItem, OtherItem } from '../order';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent implements OnInit {

  private orderhttp: OrdersRestfulService;
  @Input('order') order: Order;
  @ViewChild('form', {static: false}) form: FormGroup;

  constructor() {
    this.orderhttp = OrderModuleInjector.getInjector().get(OrdersRestfulService);
    this.order = new Order();
  }

  ngOnInit() {
  }

  downloadFile(filename: string) {
    this.orderhttp.downloadFile(this.order.orderid, filename);
  }

  submitForm(append?: Object) {
    //console.log(`submitting ${formName}`);
    console.log(this.form);
    //console.log(this.order);

    if (!append) {
      append = {};
    }

    if (this.order.orderid) {
      append["orderid"] = this.order.orderid;
    }

    let formData = new FormData();
    for (let key in this.form.value) {
      formData.append(key, this.form.value[key]);
    }
    for (let key in append) {
      formData.append(key, append[key]);
    }
    for(var pair of formData.keys()) {
      console.log(pair+ ', '+ formData.get(pair));
    }
    this.orderhttp.submitForm(formData).then(
      res => {
        this.orderhttp.refreshOrderList();
      },
      msg => { console.log(msg); }
    );
  }
}
