import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestfulConfigService } from '../restful-config.service';
import { InboxButtComponent } from '../inbox-butt/inbox-butt.component';

class Button {
  constructor(
    public title: string,
    public icon: string,
    public urlQ: string
  ) {}
}

@Component({
  selector: 'app-inbox-buttons',
  templateUrl: './inbox-buttons.component.html',
  styleUrls: ['./inbox-buttons.component.css']
})
export class InboxButtonsComponent implements OnInit, AfterViewInit {

  public butts = [
    new Button("Empleadas", "account_circle", ""),
    new Button("Todos Solicitudes", "inbox", "view=all"),
    new Button("Solicitudes", "send", "view=own"),
    new Button("Suporte", "accessibility", "view=verify"),
    new Button("Para Ofrecer", "local_phone", "view=quote"),
    new Button("GM Decisión", "check_circle", "view=approve"),
    new Button("Para Comprar", "attach_money", "view=purchase"),
    new Button("Entregado", "move_to_inbox", "view=delivered"),
    new Button("Terminado", "assignment_turned_in", "view=done")
  ];
  @ViewChildren(InboxButtComponent) buttons;

  constructor(public restConfig: RestfulConfigService, public router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.buttons);
  }

  buttClicked(buttComp, butt: Button) {
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

    buttComp.activate();
  }
}
