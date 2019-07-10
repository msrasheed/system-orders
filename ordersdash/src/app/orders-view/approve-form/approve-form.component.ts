import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component'

@Component({
  selector: 'app-approve-form',
  templateUrl: './approve-form.component.html',
  styleUrls: ['./approve-form.component.css', '../base-form/base-form.component.css']
})
export class ApproveFormComponent extends BaseFormComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
