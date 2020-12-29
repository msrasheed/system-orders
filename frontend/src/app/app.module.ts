import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CurrentUserService } from './current-user.service';
import { RestfulConfigService } from './restful-config.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { InboxButtonsComponent } from './inbox-buttons/inbox-buttons.component';
import { InboxButtComponent } from './inbox-butt/inbox-butt.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    InboxButtonsComponent,
    InboxButtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CurrentUserService, RestfulConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
