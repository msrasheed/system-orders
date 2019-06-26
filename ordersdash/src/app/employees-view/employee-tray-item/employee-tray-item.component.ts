import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-tray-item',
  templateUrl: './employee-tray-item.component.html',
  styleUrls: ['./employee-tray-item.component.css']
})
export class EmployeeTrayItemComponent implements OnInit {
  @Input() emp: Employee;

  constructor() { }

  ngOnInit() {
  }

}
