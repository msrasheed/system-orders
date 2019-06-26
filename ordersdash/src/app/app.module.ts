import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmployeesViewModule } from './employees-view/employees-view.module';
import { routing } from './app.routing';

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
    EmployeesViewModule,
    routing
  ],
  providers: [CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
