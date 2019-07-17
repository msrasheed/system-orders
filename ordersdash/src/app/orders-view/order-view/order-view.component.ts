import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common'
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersRestfulService } from '../orders-restful.service';
import { CurrentUserService } from '../../current-user.service';
import { Order, SoftwareItem, OtherItem } from '../order';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

class FormPerms {
  constructor(
    public view: boolean,
    public edit: boolean,
    public reqs: boolean
  ) {}
}

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css'],
  providers: [DatePipe]
})
export class OrderViewComponent implements OnInit, OnDestroy {

  private order: Order;

  private orderid: string;
  public destroyed = new Subject<any>();
  public loading: boolean = false;

  private createPerm: FormPerms;
  private verifyPerm: FormPerms;
  private quotePerm: FormPerms;
  private approvePerm: FormPerms;
  private purchasePerm: FormPerms;
  private deliveredPerm: FormPerms;
  private deletePerm: FormPerms;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public orderhttp: OrdersRestfulService,
    public currUser: CurrentUserService,
    public datepipe: DatePipe) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      takeUntil(this.destroyed)
    ).subscribe(() => {
        //console.log("loaded again");
        this.loadOrder();
    });
    this.activeRoute.params.subscribe(params => {
      //console.log("active route");
      this.orderid = params['id'];
      this.loadOrder();
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  loadOrder() {
    if (this.loading) return;
    this.loading = true;
    //console.log("loading", this.orderid);
    this.orderhttp.getOrder(this.orderid)
        .then(
          res => {
            //console.log(res);
            this.order = Object.assign({}, res);

            this.order.dateNeeded = this.convertDateFormat(this.order.dateNeeded);
            this.order.dateCreated = this.convertDateFormat(this.order.dateCreated);
            if (this.order.quotedDate) this.order.quotedDate = this.convertDateFormat(this.order.quotedDate);
            if (this.order.dateArrived) this.order.dateArrived = this.convertDateFormat(this.order.dateArrived);

            this.order.supportApproval = this.convertApprovals(this.order.supportApproved);
            this.order.gmApproval = this.convertApprovals(this.order.gmApproved);
            //console.log(this.maxSoftNum);
            console.log(this.order);
            this.updateFormPermissions();
            this.loading = false;
          },
          msg => {
            console.log(msg);
          }
        );
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

  updateFormPermissions() {
    this.createPerm = this.evaluateFormPerms("create", this.order.status);
    this.verifyPerm = this.evaluateFormPerms("verify", this.order.status);
    this.quotePerm = this.evaluateFormPerms("quote", this.order.status);
    this.approvePerm = this.evaluateFormPerms("approve", this.order.status);
    this.purchasePerm = this.evaluateFormPerms("purchase", this.order.status);
    this.deliveredPerm = this.evaluateFormPerms("delivered", this.order.status);
    this.deletePerm = this.evaluateFormPerms("delete", this.order.status);
  }

  evaluateFormPerms(form: string, status: number) {
    let visible: boolean;
    let editable: boolean;
    let required: boolean;
    let role = this.currUser.getRole();

    switch (form) {
      case 'create':
        visible = true;
        editable = role == "user";
        required = false;
        break;
      case 'verify':
        visible = status >= 100;
        editable = role == "support";
        required = status == 100;
        break;
      case 'quote':
        visible = status >= 200 && status != 700;
        editable = role == "helpdesk"
        required = status == 200;
        break;
      case 'approve':
        visible = status >= 300 && status != 700;
        editable = role == "helpdesk";
        required = status == 300;
        break;
      case 'purchase':
        visible = status >= 400 && status < 700;
        editable = role == "helpdesk";
        required = status == 400;
        break;
      case 'delivered':
        visible = status >= 500 && status < 700;
        editable = role == "helpdesk";
        required = status == 500;
        break;
      case 'delete':
        visible = role == "user" || role == "admin";
        break;
      default:
        visible = false;
        editable = false;
        required = false;
    }

    if (role == "admin") {
      editable = true;
    }

    return new FormPerms(visible, editable, required);
  }

}
