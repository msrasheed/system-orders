import { Injectable } from '@angular/core';
import { CurrentUser } from './current-user';
import { RestfulConfigService } from './restful-config.service';

declare var getJSPInjectedUserInformation;

@Injectable()
export class CurrentUserService {
    private user: CurrentUser;

  constructor(public restConfig: RestfulConfigService) {
      this.user = new CurrentUser(getJSPInjectedUserInformation());
      if (this.user.role == "admin") {
        this.restConfig.changeOrderURL("view=all");
      }
      else if (this.user.role == "support") {
        this.restConfig.changeOrderURL("view=verify");
      }
      else if (this.user.role == "helpdesk") {
        this.restConfig.changeOrderURL("view=quote");
      }
      else if (this.user.role == "user") {
        this.restConfig.changeOrderURL("view=own");
      }
  }

  getUsername(): string {
      return this.user.username;
  }

  getRole(): string {
    return this.user.role;
  }

}
