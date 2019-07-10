import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component'

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css', '../base-form/base-form.component.css']
})
export class PurchaseFormComponent extends BaseFormComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
