import { Component, OnInit } from '@angular/core';
import { EmployeesRESTfulService  } from '../employees-restful.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public emphttp: EmployeesRESTfulService) { }

  ngOnInit() {
  }

}
