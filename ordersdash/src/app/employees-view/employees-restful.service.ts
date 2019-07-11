import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Config } from '../config';
import { Employee } from './employee';

@Injectable()
export class EmployeesRESTfulService {

  employees: Employee[];
  public searchTerm: string;

  constructor(private http: HttpClient) {
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    let apiURL = Config.baseURL + 'app/users?allusers'
    this.http.get<Employee[]>(apiURL)
        .toPromise()
        .then(
          res => {
            console.log(res);
            this.employees = res.map(item => {
              return new Employee(
                item.userid,
                item.fname,
                item.lname,
                item.username,
                item.role,
                item.email
              );
            });
          },
          msg => {
            console.log('nope');
          }
        );
  }

  getEmployeeFromId(id: string): Employee {
    //if (!this.employees) refreshEmployeeList();

    for (let emp of this.employees) {
      if (emp.userid == id) {
        return emp;
      }
    }
    return undefined;
  }

  createEmployee(emp: JSON) {
    let apiURL = Config.baseURL + 'app/users?operation=create';
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let formdata = new FormData();

    console.log(emp);
    for (var key in emp) {
      //console.log(key + " " + emp[key]);
      //console.log(emp[key]);
      formdata.append(key, emp[key]);
    }

    //console.log(formdata);
    this.http.post(apiURL, formdata)
        .toPromise()
        .then(
          res => {
            console.log("success");
            console.log(res);
            this.refreshEmployeeList();
          },
          msg => {
            console.log("error");
            console.log(msg);
          }
        );
  }

  updateEmployee(emp: JSON) {
    let apiURL = Config.baseURL + 'app/users?operation=update';
    let formData = new FormData();

    for (var key in emp) {
      formData.append(key, emp[key]);
    }

    this.http.post(apiURL, formData)
        .toPromise()
        .then(
          res => {
            console.log("success");
            this.refreshEmployeeList();
          },
          msg => {
            console.log("error");
          }
        );
  }

  changeEmployeePassword(emp: JSON) {
    this.updateEmployee(emp);
  }

  deleteEmployee(empid: string) {
    let apiURL = Config.baseURL + 'app/users?operation=delete';
    let formData = new FormData();
    formData.append("userid", empid);

    this.http.post(apiURL, formData)
        .toPromise()
        .then(
          res => {
            console.log("success");
          },
          msg => {
            console.log("error");
          }
        );
  }
}
