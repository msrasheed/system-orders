import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesRESTfulService } from '../employees-restful.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  private emp: Employee;

  constructor(private route: ActivatedRoute, private emphttp: EmployeesRESTfulService) {;
    this.route.params.subscribe(params => {
      this.emp = this.emphttp.getEmployeeFromId(params['id']);
      console.log(this.emp);
    });
  }

  ngOnInit() {
  }

}
