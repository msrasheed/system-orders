import { Component, OnInit, Input } from '@angular/core';
import { OrderBrief } from '../order-brief';

@Component({
  selector: 'app-orders-tray-list-item',
  templateUrl: './orders-tray-list-item.component.html',
  styleUrls: ['./orders-tray-list-item.component.css']
})
export class OrdersTrayListItemComponent implements OnInit {

  @Input() order: OrderBrief;

  constructor() { }

  ngOnInit() {
  }

}
