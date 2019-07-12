import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';
import { OrderModuleInjector } from '../order-module-injector';
import { Order, SoftwareItem, OtherItem } from '../order';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent implements OnInit, OnChanges, AfterViewInit {

  private orderhttp: OrdersRestfulService;
  @Input('order') order: Order;
  @ViewChild('form', {static: false}) form: FormGroup;

  @Input('required') fieldsRequired: boolean;
  @Input('editable') fieldsEditable: boolean;

  constructor() {
    this.orderhttp = OrderModuleInjector.getInjector().get(OrdersRestfulService);
    this.order = new Order();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //console.log("view init");
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setFormRestrictions();
        resolve();
      }, 500);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log("OnChanges");
    //console.log(this.form.controls);
    this.setFormRestrictions();
  }

  setFormRestrictions() {
    //console.log("porfa")
    if (this.form && (this.fieldsRequired || !this.fieldsEditable)) {
      //console.log("vor", this.form.controls["supplier"])
      for (let control in this.form.controls) {
        //console.log(this.form.controls[control]);
        if (!this.fieldsEditable) {
          //console.log(control, "disabled");
          this.form.controls[control].disable();
        }
        else if (this.fieldsRequired && !control.includes("Comments")) {
          //console.log(control, "required");
          this.form.controls[control].setValidators([Validators.required]);
          this.form.controls[control].updateValueAndValidity();
        }
      }
      //console.log(this.form.controls);
    }
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
    // for(var pair of formData.keys()) {
    //   console.log(pair+ ', '+ formData.get(pair));
    // }
    this.orderhttp.submitForm(formData).then(
      res => {
        this.orderhttp.refreshOrderList();
      },
      msg => { console.log(msg); }
    );
  }
}
