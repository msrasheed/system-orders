import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { EmployeesModuleViewComponent } from './employees-module-view/employees-module-view.component';

const routes: Routes = [
  { path: '', component: EmployeesModuleViewComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
