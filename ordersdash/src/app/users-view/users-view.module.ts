import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UsersTrayComponent } from './users-tray/users-tray.component';
import { EmployeesModuleViewComponent } from './employees-module-view/employees-module-view.component';
import { EmployeeTrayItemComponent } from './employee-tray-item/employee-tray-item.component';

import { EmployeesRESTfulService } from './employees-restful.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [UsersTrayComponent, EmployeesModuleViewComponent, EmployeeTrayItemComponent, EmployeeListComponent],
  providers: [EmployeesRESTfulService],
  exports: [EmployeesModuleViewComponent]
})
export class UsersViewModule { }
