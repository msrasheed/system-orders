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
import { NewButtonComponent } from './new-button/new-button.component';
import { VerifyFormComponent } from './verify-form/verify-form.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { ApproveFormComponent } from './approve-form/approve-form.component';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';
import { DeliveredFormComponent } from './delivered-form/delivered-form.component';



@NgModule({
  declarations: [OrdersModuleViewComponent, OrdersTrayComponent, OrdersTrayListComponent, OrdersTrayListItemComponent, OrdersTraySearchComponent, PlaceholderComponent, OrderViewComponent, NewOrderComponent, CreateFormComponent, BaseFormComponent, NewButtonComponent, VerifyFormComponent, QuoteFormComponent, ApproveFormComponent, PurchaseFormComponent, DeliveredFormComponent],
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
