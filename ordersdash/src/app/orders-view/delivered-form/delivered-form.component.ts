import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component'

@Component({
  selector: 'app-delivered-form',
  templateUrl: './delivered-form.component.html',
  styleUrls: ['./delivered-form.component.css', '../base-form/base-form.component.css']
})
export class DeliveredFormComponent extends BaseFormComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
