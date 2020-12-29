import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-button',
  templateUrl: './new-button.component.html',
  styleUrls: ['./new-button.component.css']
})
export class NewButtonComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  @HostListener("click") onClick() {
    this.router.navigate(['/orders', "new"]);
  }

}
