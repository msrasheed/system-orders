import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OrdersRestfulService } from './orders-restful.service';

import { OrdersRoutingModule } from './orders-view-routing.module';
import { OrdersModuleViewComponent } from './orders-module-view/orders-module-view.component';
import { OrdersTrayComponent } from './orders-tray/orders-tray.component';
import { OrdersTrayListComponent } from './orders-tray-list/orders-tray-list.component';
import { OrdersTrayListItemComponent } from './orders-tray-list-item/orders-tray-list-item.component';
import { OrdersTraySearchComponent } from './orders-tray-search/orders-tray-search.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { BaseFormComponent } from './base-form/base-form.component';



@NgModule({
  declarations: [OrdersModuleViewComponent, OrdersTrayComponent, OrdersTrayListComponent, OrdersTrayListItemComponent, OrdersTraySearchComponent, PlaceholderComponent, OrderViewComponent, NewOrderComponent, CreateFormComponent, BaseFormComponent],
  providers: [OrdersRestfulService],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [OrdersModuleViewComponent]
})
export class OrdersViewModule { }
