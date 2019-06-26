import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersViewModule } from './users-view/users-view.module';

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
    FormsModule,
    HttpModule,
    UsersViewModule
  ],
  providers: [CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
