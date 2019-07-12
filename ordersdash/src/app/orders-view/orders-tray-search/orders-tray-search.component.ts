import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-orders-tray-search',
  templateUrl: './orders-tray-search.component.html',
  styleUrls: ['./orders-tray-search.component.css']
})
export class OrdersTraySearchComponent implements OnInit {

  private searchField: FormControl;

  constructor(public orderhttp: OrdersRestfulService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(value => this.orderhttp.orderQuery = value);
  }
}
