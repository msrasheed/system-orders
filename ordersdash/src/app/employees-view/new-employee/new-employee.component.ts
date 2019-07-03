import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeesRESTfulService } from '../employees-restful.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  @ViewChild('f', {static: false}) form: any;
  private roles: string[] = ['user', 'support', 'helpdesk', 'admin'];

  constructor(private emphttp: EmployeesRESTfulService) { }

  ngOnInit() {
  }

  newEmployee() {
    console.log("no creation code yet");
    let formJSON = Object.assign({}, this.form.value);
    delete formJSON.password2;
    this.emphttp.createEmployee(formJSON);
  }

}
