import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersTrayComponent } from './users-tray/users-tray.component';
import { EmployeesModuleViewComponent } from './employees-module-view/employees-module-view.component';
import { EmployeeTrayItemComponent } from './employee-tray-item/employee-tray-item.component';
import { routing } from './employees-view.routing'

import { EmployeesRESTfulService } from './employees-restful.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { GenericComponent } from './generic/generic.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { NewButtonComponent } from './new-button/new-button.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeSearchPipe } from './employee-search.pipe';
import { PasswordMatchDirective } from './password-match.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [UsersTrayComponent, EmployeesModuleViewComponent, EmployeeTrayItemComponent, EmployeeListComponent, GenericComponent, EmployeeInfoComponent, SearchBoxComponent, NewButtonComponent, NewEmployeeComponent, EmployeeSearchPipe, PasswordMatchDirective],
  providers: [EmployeesRESTfulService],
  exports: [EmployeesModuleViewComponent]
})
export class EmployeesViewModule { }
