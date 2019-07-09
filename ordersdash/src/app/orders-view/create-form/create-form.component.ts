import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';
import { BaseFormComponent } from '../base-form/base-form.component'
import { Order, OtherItem, SoftwareItem } from '../order';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css', '../base-form/base-form.component.css']
})
export class CreateFormComponent extends BaseFormComponent implements OnInit, AfterViewInit {

  private maxSoftNum: number;
  private maxOthNum: number;
  @ViewChild('softAdd', {static: false}) softAddF;
  @ViewChild('otherAdd', {static: false}) otherAddF;
  @ViewChild('costSheetInput', {static: false}) costSheetInput: FormControl;

  constructor(public orderhttp: OrdersRestfulService) {
    super(orderhttp);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.maxSoftNum = 0;
    for (let soft of this.order.softwares) {
      let num: number = parseInt(soft.softid);
      if (this.maxSoftNum < num) this.maxSoftNum = num;
    }

    this.maxOthNum = 0;
    for (let oth of this.order.others) {
      let num: number = parseInt(oth.otherid);
      if (this.maxOthNum < num) this.maxOthNum = num;
    }
  }

  addSoft() {
      //console.log(this.softAddF.nativeElement.value);
      if (this.softAddF.nativeElement.value) {
        //console.log(this.order.softwaresText);
        this.maxSoftNum = this.maxSoftNum + 1;
        this.order.softwares.push(new SoftwareItem(this.maxSoftNum.toString(), this.softAddF.nativeElement.value));
        this.softAddF.nativeElement.value = "";
      }
    }

  removeSoft(idx) {
    //console.log(this.order.softwares[idx]);
    this.order.softwares.splice(idx, 1);
  }

  addOther() {
    //console.log(this.softAddF.nativeElement.value);
    if (this.otherAddF.nativeElement.value) {
      //console.log(this.order.softwaresText);
      this.maxOthNum = this.maxOthNum + 1;
      this.order.others.push(new OtherItem(this.maxOthNum.toString(), this.otherAddF.nativeElement.value));
      this.otherAddF.nativeElement.value = "";
    }
  }

  removeOther(idx) {
    //console.log(this.order.softwares[idx]);
    this.order.others.splice(idx, 1);
  }

  onCostSheetChange(event) {
    if (event.target.files.length) {
      let file = event.target.files[0];
      console.log(this.costSheetInput);
      this.costSheetInput.setValue(file);
    }
  }

  submitForm(append?: Object) {
    let toAppend = {};
    toAppend["softwareIterable"] = "";
    toAppend["otherIterable"] = "";
    for (let key in this.form.value) {
      if (key.includes("software")) {
        toAppend["softwareIterable"] += key.slice(8) + ",";
      }
      else if (key.includes("other")) {
        toAppend["otherIterable"] += key.slice(5) + ",";
      }
    }
    super.submitForm(toAppend);
  }
}
