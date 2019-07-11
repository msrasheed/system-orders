import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component'

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css', '../base-form/base-form.component.css']
})
export class PurchaseFormComponent extends BaseFormComponent implements OnInit {

  private purchaseFile: File;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.purchaseFile = event.target.files[0];
    }
  }

  submitForm(append?: object) {
    if (!append) {
      append = {};
    }
    if (this.purchaseFile) {
      append["purchaseReceipt"] = this.purchaseFile;
    }
    super.submitForm(append);
  }
}
