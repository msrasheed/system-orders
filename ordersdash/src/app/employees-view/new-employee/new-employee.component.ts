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

  @ViewChild('f') form: any;

  constructor(private emphttp: EmployeesRESTfulService) { }

  ngOnInit() {
  }

  newEmployee() {
    console.log("no creation code yet");
  }

}
