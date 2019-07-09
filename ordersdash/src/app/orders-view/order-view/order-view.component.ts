import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';
import { Order, SoftwareItem, OtherItem } from '../order';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css'],
  providers: [DatePipe]
})
export class OrderViewComponent implements OnInit {

  private order: Order;
  private maxSoftNum: number;
  private maxOthNum: number;
  @ViewChild('softAdd', {static: false}) softAddF;
  @ViewChild('otherAdd', {static: false}) otherAddF;

  constructor(public route: ActivatedRoute, public orderhttp: OrdersRestfulService, public datepipe: DatePipe) {
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

              this.maxOthNum = 0;
              for (let oth of this.order.others) {
                let num: number = parseInt(oth.otherid);
                if (this.maxOthNum < num) this.maxOthNum = num;
              }

              this.order.dateNeeded = this.convertDateFormat(this.order.dateNeeded);
              this.order.dateCreated = this.convertDateFormat(this.order.dateCreated);
              if (this.order.quotedDate) this.order.quotedDate = this.convertDateFormat(this.order.quotedDate);

              this.order.supportApproval = this.convertApprovals(this.order.supportApproved);
              this.order.gmApproval = this.convertApprovals(this.order.gmApproved);
              //console.log(this.maxSoftNum);
              console.log(this.order);
            },
            msg => {
              console.log(msg);
            }
          );
    });
  }

  convertDateFormat(date: string) {
    if (!date) return date;
    date = this.datepipe.transform(date, 'shortDate');
    let dateParts: string[] = date.split('/');
    if (dateParts[0].length == 1) dateParts[0] = '0' + dateParts[0];
    if (dateParts[1].length == 1) dateParts[1] = '0' + dateParts[1];
    dateParts[2] = '20' + dateParts[2];
    return dateParts[2] + '-' + dateParts[0] + '-' + dateParts[1];
  }

  convertApprovals(val: boolean) {
    return val ? 'approve' : 'deny';
  }

  downloadCostSheet() {
    this.orderhttp.downloadFile(this.order.orderid, 'cost_sheet.xlsx');
  }

  addSoft() {
    //console.log(this.softAddF.nativeElement.value);
    if (this.softAddF.nativeElement.value) {
      //console.log(this.order.softwaresText);
      this.maxSoftNum = this.maxSoftNum + 1;
      this.order.softwares.push(new SoftwareItem(this.maxSoftNum.toString(), this.softAddF.nativeElement.value));
      this.softAddF.nativeElement.value = "";
    }
  }

  removeSoft(idx) {
    //console.log(this.order.softwares[idx]);
    this.order.softwares.splice(idx, 1);
  }

  addOther() {
    //console.log(this.softAddF.nativeElement.value);
    if (this.otherAddF.nativeElement.value) {
      //console.log(this.order.softwaresText);
      this.maxOthNum = this.maxOthNum + 1;
      this.order.others.push(new OtherItem(this.maxOthNum.toString(), this.otherAddF.nativeElement.value));
      this.otherAddF.nativeElement.value = "";
    }
  }

  removeOther(idx) {
    //console.log(this.order.softwares[idx]);
    this.order.others.splice(idx, 1);
  }

  submitOrderChange() {
    console.log("no submission code yet");
  }

}
