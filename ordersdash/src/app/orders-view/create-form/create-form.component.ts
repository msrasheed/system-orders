import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseFormComponent } from '../base-form/base-form.component'
import { Order, OtherItem, SoftwareItem, HardwareItems } from '../order';

class HardwareDisplay {
  constructor(
    public name: string,
    public ref: any
  ) {}
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css', '../base-form/base-form.component.css']
})
export class CreateFormComponent extends BaseFormComponent implements OnInit, OnChanges {

  private hardwares: HardwareDisplay[];

  private maxSoftNum: number;
  private maxOthNum: number;
  private removeSoftNums: string;
  private removeOtherNums: string;
  @ViewChild('softAdd', {static: false}) softAddF;
  @ViewChild('otherAdd', {static: false}) otherAddF;

  private costSheetFile: File;
  @ViewChild('costSheetInput', {static: false}) costSheetInput: FormControl;

  constructor() {
    super();
    this.removeSoftNums = "";
    this.removeOtherNums = "";
    this.order.newSoftwares = [];
    this.order.newOthers = [];
    this.hardwares = [];
    let dummyHard = new HardwareItems(false, false, false);
    for (let val in this.order.hardware) {
      console.log(val);
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
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

    this.order.newSoftwares = [];
    this.order.newOthers = [];
  }

  addSoft() {
      //console.log(this.softAddF.nativeElement.value);
      if (this.softAddF.nativeElement.value) {
        //console.log(this.order.softwaresText);
        //if (!Array.isArray(this.order.newSoftwares)) this.order.newSoftwares = [];
        this.maxSoftNum = this.maxSoftNum + 1;
        this.order.newSoftwares.push(new SoftwareItem(this.maxSoftNum.toString(), this.softAddF.nativeElement.value));
        this.softAddF.nativeElement.value = "";
      }
    }

  removeSoft(idx) {
    //console.log(this.order.softwares[idx]);
    this.removeSoftNums += "-" + this.order.softwares[idx].softid + ",";
    this.order.softwares.splice(idx, 1);
  }

  addOther() {
    //console.log(this.softAddF.nativeElement.value);
    if (this.otherAddF.nativeElement.value) {
      //console.log(this.order.softwaresText);
      //if (!Array.isArray(this.order.newOthers)) this.order.newOthers = [];
      this.maxOthNum = this.maxOthNum + 1;
      this.order.newOthers.push(new OtherItem(this.maxOthNum.toString(), this.otherAddF.nativeElement.value));
      this.otherAddF.nativeElement.value = "";
    }
  }

  removeOther(idx) {
    //console.log(this.order.softwares[idx]);
    this.removeOtherNums += "-" + this.order.others[idx].otherid + ",";
    this.order.others.splice(idx, 1);
  }

  onCostSheetChange(event) {
    if (event.target.files.length) {
      let file = event.target.files[0];
      console.log(file);
      this.costSheetFile = file;
    }
  }

  submitForm(toAppend?: Object) {
    if (!toAppend) {
      toAppend = {};
    }
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
    toAppend["softwareIterable"] += this.removeSoftNums;
    toAppend["otherIterable"] += this.removeOtherNums;

    if (this.costSheetFile) {
      toAppend["costSheet"] = this.costSheetFile;
    }
    super.submitForm(toAppend);
  }
}
