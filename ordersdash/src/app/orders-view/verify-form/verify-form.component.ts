import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component'

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.css', '../base-form/base-form.component.css']
})
export class VerifyFormComponent extends BaseFormComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
