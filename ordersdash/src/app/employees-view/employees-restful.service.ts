import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Employee } from './employee';

@Injectable()
export class EmployeesRESTfulService {

  employees: Employee[];
  public searchTerm: string;

  constructor(private http: HttpClient) {
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    let apiURL = 'http://localhost:8080/systemorders-webapp/app/users?allusers'
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
    for (let emp of this.employees) {
      if (emp.userid == id) {
        return emp;
      }
    }
    return undefined;
  }

  createEmployee(emp: JSON) {
    let apiURL = 'http://localhost:8080/systemorders-webapp/app/users?operation=create';
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let formdata = new FormData();

    console.log(emp);
    for (var key in emp) {
      console.log(key + " " + emp[key]);
      //console.log(emp[key]);
      formdata.append(key, emp[key]);
    }

    console.log(formdata);
    this.http.post(apiURL, formdata, {headers: headers})
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
