import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inbox-butt',
  templateUrl: './inbox-butt.component.html',
  styleUrls: ['./inbox-butt.component.css']
})
export class InboxButtComponent implements OnInit {

  @Input("title") title: string;
  @Input("icon") icon:string; 

  constructor() { }

  ngOnInit() {
  }

}
