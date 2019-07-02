import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmployeesRESTfulService } from '../employees-restful.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  private searchField: FormControl;

  constructor(public emphttp: EmployeesRESTfulService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(value => this.emphttp.searchTerm = value);
  }

}
