import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-orders-tray-search',
  templateUrl: './orders-tray-search.component.html',
  styleUrls: ['./orders-tray-search.component.css']
})
export class OrdersTraySearchComponent implements OnInit {

  private searchField: FormControl;

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
  }

}
