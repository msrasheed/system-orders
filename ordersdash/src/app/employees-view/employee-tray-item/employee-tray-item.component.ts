import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-tray-item',
  templateUrl: './employee-tray-item.component.html',
  styleUrls: ['./employee-tray-item.component.css']
})
export class EmployeeTrayItemComponent implements OnInit {
  @Input() emp: Employee;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @HostListener("click") onClick() {
    //this.router.navigate(['/employees', this.emp.userid]);
  }
}
