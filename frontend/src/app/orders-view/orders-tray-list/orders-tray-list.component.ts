import { Component, OnInit } from '@angular/core';
import { OrdersRestfulService } from '../orders-restful.service';

@Component({
  selector: 'app-orders-tray-list',
  templateUrl: './orders-tray-list.component.html',
  styleUrls: ['./orders-tray-list.component.css']
})
export class OrdersTrayListComponent implements OnInit {

  constructor(public orderhttp: OrdersRestfulService) { }

  ngOnInit() {
  }

}
