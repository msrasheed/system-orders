import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { InboxButtonsComponent } from './inbox-buttons/inbox-buttons.component';

import { CurrentUserService } from './current-user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    InboxButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
