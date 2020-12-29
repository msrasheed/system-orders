import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersModuleViewComponent } from './orders-module-view/orders-module-view.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderViewComponent } from './order-view/order-view.component';


const routes: Routes = [
  { path: '', component: OrdersModuleViewComponent,
    children: [
      { path: '', component: PlaceholderComponent},
      { path: 'new', component: NewOrderComponent},
      { path: ':id', component: OrderViewComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
