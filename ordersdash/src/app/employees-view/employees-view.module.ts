import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UsersTrayComponent } from './users-tray/users-tray.component';
import { EmployeesModuleViewComponent } from './employees-module-view/employees-module-view.component';
import { EmployeeTrayItemComponent } from './employee-tray-item/employee-tray-item.component';
import { routing } from './employees-view.routing'

import { EmployeesRESTfulService } from './employees-restful.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { GenericComponent } from './generic/generic.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [UsersTrayComponent, EmployeesModuleViewComponent, EmployeeTrayItemComponent, EmployeeListComponent, GenericComponent, EmployeeInfoComponent],
  providers: [EmployeesRESTfulService],
  exports: [EmployeesModuleViewComponent]
})
export class EmployeesViewModule { }
