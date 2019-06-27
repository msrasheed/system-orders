import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees' },
  {
    path: 'employees',
    loadChildren: './employees-view/employees-view.module#EmployeesViewModule',
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
