import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { EmployeesModuleViewComponent } from './employees-module-view/employees-module-view.component';
import { GenericComponent } from './generic/generic.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

const routes: Routes = [
  { path: '', component: EmployeesModuleViewComponent,
      children: [
        { path: '', component: GenericComponent},
        { path: ':id', component: EmployeeInfoComponent}
      ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
