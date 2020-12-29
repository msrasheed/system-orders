import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeesRESTfulService } from '../employees-restful.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  private emp: Employee;
  @ViewChild('f', {static: false}) form: any;
  @ViewChild('passf', {static: false}) passForm: any;
  private showChangePass: boolean = false;

  constructor(private route: ActivatedRoute, private emphttp: EmployeesRESTfulService) {;
    this.route.params.subscribe(params => {
      this.emp = Object.assign({}, this.emphttp.getEmployeeFromId(params['id']));
      this.showChangePass = false;
      //console.log(this.emp);
    });
  }

  ngOnInit() {
  }

  updateEmployee() {
    //console.log("no update code yet");
    this.emphttp.updateEmployee(this.form.value);
  }

  showPasswordDiag() {
    this.showChangePass = !this.showChangePass;
  }

  changePassword() {
    //console.log("no change password code yet");
    let formJSON = Object.assign({}, this.passForm.value);
    delete formJSON.password2;
    this.emphttp.changeEmployeePassword(formJSON);
  }

  deleteEmployee() {
    confirm("Are you sure you want to delete this Employee?")
    this.emphttp.deleteEmployee(this.emp.userid);
  }
}
