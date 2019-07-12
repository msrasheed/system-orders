import { Injectable } from '@angular/core';
import { CurrentUser } from './current-user';

declare var getJSPInjectedUserInformation;

@Injectable()
export class CurrentUserService {
    private user: CurrentUser;

  constructor() {
      this.user = new CurrentUser(getJSPInjectedUserInformation());
  }

  getUsername(): string {
      return this.user.username;
  }

  getRole(): string {
    return this.user.role;
  }

}
