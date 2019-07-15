import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestfulConfigService, Button } from '../restful-config.service';
import { InboxButtComponent } from '../inbox-butt/inbox-butt.component';

@Component({
  selector: 'app-inbox-buttons',
  templateUrl: './inbox-buttons.component.html',
  styleUrls: ['./inbox-buttons.component.css']
})
export class InboxButtonsComponent implements OnInit, AfterViewInit {

  public butts: Button[];
  @ViewChildren(InboxButtComponent) buttons;

  constructor(public restConfig: RestfulConfigService, public router: Router) {
    this.butts = this.restConfig.butts;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //console.log(this.buttons);
    let array = this.buttons.toArray();
    for (let i = 0; i < array.length; i++) {
      //console.log(array[i]);
      this.butts[i].element = array[i];
    }
    //console.log(this.butts);
  }

  buttClicked(butt: Button) {
    for (let buttI of this.buttons) {
      buttI.deactivate();
    }

    if (butt.title != "Empleadas") {
      this.restConfig.changeOrderURL(butt.urlQ);
      this.router.navigate(['/orders']);
    }
    else {
      this.router.navigate(['/employees'])
    }
    butt.element.activate();
  }
}
