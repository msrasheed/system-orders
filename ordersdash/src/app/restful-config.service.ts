import { Injectable } from '@angular/core';
import { Config } from './config';
import { InboxButtComponent } from './inbox-butt/inbox-butt.component';
import { OrdersRestfulService } from './orders-view/orders-restful.service';

export class Button {
  public element: InboxButtComponent;
  public visible: boolean;
  constructor(
    public title: string,
    public icon: string,
    public urlQ: string,
    public visibleTo: string[]
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class RestfulConfigService {

  public butts = [
    new Button("Empleadas", "account_circle", "", []),
    new Button("Todos Solicitudes", "inbox", "view=all", ["support", "helpdesk"]),
    new Button("Solicitudes", "send", "view=own", ["user"]),
    new Button("Suporte", "accessibility", "view=verify", ["support"]),
    new Button("Para Ofrecer", "local_phone", "view=quote", ["helpdesk"]),
    new Button("GM Decisión", "check_circle", "view=approve", ["helpdesk"]),
    new Button("Para Comprar", "attach_money", "view=purchase", ["helpdesk"]),
    new Button("Entregado", "move_to_inbox", "view=delivered", ["helpdesk"]),
    new Button("Terminado", "assignment_turned_in", "view=done", ["helpdesk", "support"])
  ];

  public apiURLQuery: string;
  public ordersRestService: OrdersRestfulService;
  constructor() {
    //this.apiURLQuery = Config.baseURL + "app/orders?view=all";
  }

  assignButtonVisibilities(role: string) {
    for (let butt of this.butts) {
      if (role == "admin") {
        butt.visible = true;
      }
      else if (butt.visibleTo.includes(role)) {
        butt.visible = true;
      }
      else {
        butt.visible = false;
      }
    }
  }

  changeOrderURL(query: string) {
    this.apiURLQuery = Config.baseURL + "app/orders?" + query;
    if (this.ordersRestService) this.ordersRestService.refreshOrderList();
  }

  setOrdersRestfulService(service: OrdersRestfulService) {
    this.ordersRestService = service;
  }

  getButtonWithTitle(title: string) {
    for (let butt of this.butts) {
      if (butt.title == title) return butt;
    }
    return undefined;
  }
}
