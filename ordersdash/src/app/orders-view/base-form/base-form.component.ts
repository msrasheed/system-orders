import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';
import { Order, SoftwareItem, OtherItem } from '../order'

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent implements OnInit {

  @Input('order') order: Order;
  @ViewChild('form', {static: false}) form: FormGroup;

  constructor(public orderhttp: OrdersRestfulService) { }

  ngOnInit() {
  }

  submitForm(append: Object) {
    //console.log(`submitting ${formName}`);
    console.log(this.form);

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
    //this.orderhttp.dummySubmitForm(formData);
  }
}
