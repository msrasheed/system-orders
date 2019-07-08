import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent implements OnInit {

  @ViewChild('form', {static: false}) form: FormGroup;

  constructor(public orderhttp: OrdersRestfulService) { }

  ngOnInit() {
  }

  submitForm(formName: string) {
    console.log(`submitting ${formName}`);
    console.log(this.form);

    let formData = new FormData();
    for (let key in this.form.value) {
      formData.append(key, this.form.value[key]);
    }
    this.orderhttp.submitForm(formData);
  }

}
