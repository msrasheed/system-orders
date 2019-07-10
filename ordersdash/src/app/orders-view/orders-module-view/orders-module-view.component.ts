import { Component, OnInit, Injector } from '@angular/core';
import { OrderModuleInjector } from '../order-module-injector'

@Component({
  selector: 'app-orders-module-view',
  templateUrl: './orders-module-view.component.html',
  styleUrls: ['./orders-module-view.component.css']
})
export class OrdersModuleViewComponent implements OnInit {

  constructor(private injector:Injector) {
    OrderModuleInjector.setInjector(this.injector);
  }

  ngOnInit() {
  }

}
