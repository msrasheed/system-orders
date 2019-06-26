Employees/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeesRESTfulService } from './employees-restful.service';

describe('EmployeesRESTfulService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesRESTfulService]
    });
  });

  it('should ...', inject([EmployeesRESTfulService], (service: EmployeesRESTfulService) => {
    expect(service).toBeTruthy();
  }));
});
