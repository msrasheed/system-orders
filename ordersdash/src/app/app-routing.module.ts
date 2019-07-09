import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'orders' },
  {
    path: 'orders',
    loadChildren: './orders-view/orders-view.module#OrdersViewModule',
  },
  {
    path: 'employees',
    loadChildren: './employees-view/employees-view.module#EmployeesViewModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
