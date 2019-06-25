import { Component, OnInit } from '@angular/core';

declare var getJSPInjectedUserInformation;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
      this.title = getJSPInjectedUserInformation();
  }
}
