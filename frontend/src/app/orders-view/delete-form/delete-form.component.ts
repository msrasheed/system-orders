import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteFormComponent extends BaseFormComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  submitForm() {
    if (confirm("¿Está seguro que querer eliminar?")) {
      super.submitForm();
    }
  }
}
