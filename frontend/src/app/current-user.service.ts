import { Injectable } from '@angular/core';
import { CurrentUser } from './current-user';
import { RestfulConfigService, Button } from './restful-config.service';

declare var getJSPInjectedUserInformation;

@Injectable()
export class CurrentUserService {
    private user: CurrentUser;

  constructor(public restConfig: RestfulConfigService) {
      this.user = new CurrentUser(getJSPInjectedUserInformation());
      let button: Button;
      if (this.user.role == "admin") {
        button = this.restConfig.getButtonWithTitle("Todos Solicitudes")
      }
      else if (this.user.role == "support") {
        button = this.restConfig.getButtonWithTitle("Suporte")
      }
      else if (this.user.role == "helpdesk") {
        button = this.restConfig.getButtonWithTitle("Para Ofrecer")
      }
      else if (this.user.role == "user") {
        button = this.restConfig.getButtonWithTitle("Solicitudes")
      }

      this.restConfig.changeOrderURL(button.urlQ);
      this.restConfig.assignButtonVisibilities(this.user.role);
      let buttonPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          button.element.activate();
          resolve();
        }, 500);
      });
  }

  getUsername(): string {
      return this.user.username;
  }

  getRole(): string {
    return this.user.role;
  }

}
