import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../current-user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userService: CurrentUserService;

  constructor(userService: CurrentUserService) {
      this.userService = userService;
  }

  ngOnInit() {
  }

}
