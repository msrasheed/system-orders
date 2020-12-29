import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-inbox-butt',
  templateUrl: './inbox-butt.component.html',
  styleUrls: ['./inbox-butt.component.css']
})
export class InboxButtComponent implements OnInit {

  @Input("title") title: string;
  @Input("icon") icon:string;
  @HostBinding('class.active') private activated: boolean;

  constructor() { }

  ngOnInit() {
    this.deactivate();
  }

  activate() {
    this.activated = true;
  }

  deactivate() {
    this.activated = false;
  }

}
