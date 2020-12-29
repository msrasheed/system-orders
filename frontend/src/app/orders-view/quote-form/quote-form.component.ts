import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css', '../base-form/base-form.component.css']
})
export class QuoteFormComponent extends BaseFormComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
