import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';
import { Order, SoftwareItem, OtherItem } from '../order';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  private order: Order;
  private maxSoftNum: number;
  @ViewChild('softAdd', {static: false}) softAddF;

  constructor(public route: ActivatedRoute, public orderhttp: OrdersRestfulService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderhttp.getOrder(params['id'])
          .then(
            res => {
              //let order: Order = new Order();
              this.order = Object.assign({}, res);
              this.maxSoftNum = 0;
              for (let soft of this.order.softwares) {
                let num: number = parseInt(soft.softid);
                if (this.maxSoftNum < num) this.maxSoftNum = num;
              }
              console.log(this.maxSoftNum);
              console.log(this.order);
            },
            msg => {
              console.log(msg);
            }
          );
    });
  }

  addSoft() {
    console.log(this.softAddF.nativeElement.value);
    if (this.softAddF.nativeElement.value) {
      //console.log(this.order.softwaresText);
      this.maxSoftNum = this.maxSoftNum + 1;
      this.order.softwares.push(new SoftwareItem(this.maxSoftNum.toString(), this.softAddF.nativeElement.value));
      this.softAddF.nativeElement.value = "";
    }
  }

  removeSoft(event) {
    console.log(event.target.parentElement.children[0].value);
  }

  submitOrderChange() {
    console.log("no submission code yet");
  }

}
