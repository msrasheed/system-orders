import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Employee } from './employee';

@Injectable()
export class EmployeesRESTfulService {

  employees: Employee[];
  public searchTerm: string;

  constructor(private http: Http) {
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    let apiURL = 'http://localhost:8080/systemorders-webapp/app/users?allusers'
    this.http.get(apiURL)
        .toPromise()
        .then(
          res => {
            this.employees = res.json().map(item => {
              return new Employee(
                item.userid,
                item.fname,
                item.lname,
                item.username,
                item.role,
                item.email
              );
            });
            console.log(this.employees);
          },
          msg => {
            console.log('nope');
          }
        );
  }

  getEmployeeFromId(id: string): Employee {
    for (let emp of this.employees) {
      if (emp.userid == id) {
        return emp;
      }
    }
    return undefined;
  }

  createEmployee(emp: JSON) {
    let apiURL = 'http://localhost:8080/systemorders-webapp/app/users?operation=create';
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let opts = new RequestOptions();
    opts.headers = headers;

    let formdata = new FormData();

    console.log(emp);
    for (var key in emp) {
      console.log(key + " " + emp[key]);
      //console.log(emp[key]);
      formdata.append(key, emp[key]);
    }

    console.log(formdata);
    this.http.post(apiURL, formdata, opts)
        .toPromise()
        .then(
          res => {
            console.log(res);
          },
          msg => {
            console.log(msg);
          }
        );
  }

}
