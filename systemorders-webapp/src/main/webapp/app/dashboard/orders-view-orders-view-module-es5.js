(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-view-orders-view-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/approve-form/approve-form.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/approve-form/approve-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submitForm()\" enctype=\"multipart/form-data\" #form=\"ngForm\">\n  <input type=\"hidden\" name=\"operation\" [ngModel]=\"'approve'\">\n  <h1>GM Approval</h1>\n  <div class=\"form-controlgroup approval\">\n    <label>Approved</label>\n    <input type=\"radio\" name=\"gmApproved\" value=\"approve\" [(ngModel)]=\"order.gmApproval\"><span> Sí</span>\n    <span class=\"inline-spacer\"></span>\n    <input type=\"radio\" name=\"gmApproved\" value=\"deny\" [(ngModel)]=\"order.gmApproval\"><span>No</span>\n  </div>\n  <div class=\"form-controlgroup no-align-center\">\n    <label>Comentarios</label>\n    <textarea name=\"gmComments\" rows=\"8\" cols=\"80\" [(ngModel)]=\"order.gmComments\"></textarea>\n  </div>\n  <input class=\"submit-button\" type=\"button\" value=\"Enviar\" (click)=\"submitForm()\" [disabled]=\"form.invalid || form.disabled\"/>\n</form>\n\n<pre>{{form.value | json}}</pre>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/base-form/base-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/base-form/base-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>base-form works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/create-form/create-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/create-form/create-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submitForm()\" enctype=\"multipart/form-data\" #form=\"ngForm\">\n  <input type=\"hidden\" name=\"operation\" [ngModel]=\"'create'\">\n  <h1>Original Solicitud</h1>\n  <i>Created by {{order.userid}} on {{order.dateCreated}}</i><br>\n  <i>Status: {{order.status}}</i>\n  <h2>General</h2>\n  <div class=\"form-controlgroup\">\n      <label>Client</label>\n      <input type=\"text\" name=\"clientContact\" [(ngModel)]=\"order.clientContact\" #clientContact=\"ngModel\">\n  </div>\n  <div class=\"form-controlgroup\">\n      <label>Type</label>\n      <select name=\"type\" [(ngModel)]=\"order.deviceType\" #type=\"ngModel\">\n          <option>Laptop</option>\n          <option>Desktop</option>\n      </select>\n  </div>\n  <div class=\"form-controlgroup\">\n      <label>Date Needed</label>\n      <input type=\"date\" name=\"dateNeeded\" [(ngModel)]=\"order.dateNeeded\" #dateNeeded=\"ngModel\"><br/>\n  </div>\n  <h2>Hardware Specs</h2>\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"form-controlgroup\">\n          <label>Processor</label>\n          <select name=\"processor\" [(ngModel)]=\"order.processor\" #processor=\"ngModel\">\n              <option>Intel</option>\n              <option>AMD</option>\n          </select>\n      </div>\n      <div class=\"form-controlgroup\">\n          <label>Memory</label>\n          <input type=\"number\" name=\"memory\" [(ngModel)]=\"order.memory\" #memory=\"ngModel\"><span>gb</span>\n      </div>\n      <div class=\"form-controlgroup\">\n          <label>Hard disk</label>\n          <input type=\"number\" name=\"harddisk\" [(ngModel)]=\"order.harddisk\" #harddisk=\"ngModel\"><span>gb</span>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"form-controlgroup checkbox\" *ngFor=\"let hard of hardwares\">\n          <label>{{capitalize(hard.label)}}</label>\n          <input type=\"checkbox\" name=\"{{hard.name}}\" [(ngModel)]=\"hard.ref\"><span></span>\n      </div>\n    </div>\n  </div>\n  <h2>OS</h2>\n  <div class=\"form-controlgroup\">\n      <label>Operating System</label>\n      <select name=\"operatingsystem\" [(ngModel)]=\"order.operatingSystem\" #operatingSystem=\"ngModel\">\n          <option>Windows</option>\n          <option>MacOS</option>\n          <option>Linux</option>\n      </select>\n  </div>\n  <h2>Software</h2>\n  <div class=\"form-controlgroup variable-input\" *ngFor=\"let soft of order.softwares; let i = index\">\n      <input type=\"text\" [name]=\"'software' + soft.softid\" [value]=\"soft.software\" [disabled]=\"true\">\n      <i class=\"material-icons delete\" (click)=\"removeSoft(i)\" *ngIf=\"fieldsEditable\">delete</i>\n  </div>\n  <div class=\"form-controlgroup variable-input\" *ngFor=\"let soft of order.newSoftwares; let i = index\">\n      <input type=\"text\" [name]=\"'software' + soft.softid\" [(ngModel)]=\"soft.software\" (keyup.enter)=\"addSoft()\">\n      <i class=\"material-icons delete\" (click)=\"removeSoft(i)\">delete</i>\n  </div>\n  <div class=\"form-controlgroup variable-input\" *ngIf=\"fieldsEditable\">\n      <input type=\"text\" placeholder=\"Other...\" #softAdd (keyup.enter)=\"addSoft()\">\n      <i class=\"material-icons add\" (click)=\"addSoft()\">add</i>\n  </div>\n  <h2>Other</h2>\n  <div class=\"form-controlgroup variable-input\" *ngFor=\"let oth of order.others; let i = index\">\n      <input type=\"text\" [name]=\"'other' + oth.otherid\" [value]=\"oth.otherspec\" [disabled]=\"true\">\n      <i class=\"material-icons delete\" (click)=\"removeOther(i)\" *ngIf=\"fieldsEditable\">delete</i>\n  </div>\n  <div class=\"form-controlgroup variable-input\" *ngFor=\"let oth of order.newOthers; let i = index\">\n      <input type=\"text\" [name]=\"'other' + oth.otherid\" [(ngModel)]=\"oth.otherspec\" (keyup.enter)=\"addOther()\">\n      <i class=\"material-icons delete\" (click)=\"removeOther(i)\">delete</i>\n  </div>\n  <div class=\"form-controlgroup variable-input\" *ngIf=\"fieldsEditable\">\n      <input type=\"text\" name=\"other2\" placeholder=\"Other...\" #otherAdd (keyup.enter)=\"addOther()\">\n      <i class=\"material-icons add\" (click)=\"addOther()\">add</i>\n  </div>\n  <h2>Cost Sheet</h2>\n  <div class=\"form-controlgroup\">\n    <label>Excel Sheet</label>\n    <button type=\"button\" (click)=\"downloadFile('cost_sheet')\">Download Cost Sheet</button>\n    <input type=\"file\" name=\"costSheet\" ngModel (change)=\"onCostSheetChange($event)\" #costSheetInput=\"ngModel\"/>\n  </div>\n  <input class=\"submit-button\" type=\"button\" value=\"Enviar\" (click)=\"submitForm()\" [disabled]=\"form.invalid || form.disabled\"/>\n</form>\n\n<pre>create {{form.value | json}}</pre>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/delete-form/delete-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/delete-form/delete-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateForm()\" enctype=\"multipart/form-data\" #form=\"ngForm\">\n  <input type=\"hidden\" name=\"operation\" [ngModel]=\"'delete'\">\n  <input class=\"submit-button delete\" type=\"button\" value=\"Eliminar\" (click)=\"submitForm()\"\n         [disabled]=\"form.invalid || form.disabled\"/>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/delivered-form/delivered-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/delivered-form/delivered-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submitForm()\" enctype=\"multipart/form-data\" #form=\"ngForm\">\n  <input type=\"hidden\" name=\"operation\" [ngModel]=\"'deliver'\">\n  <h1>Delivered</h1>\n  <div class=\"form-controlgroup\">\n    <label>Date arrived</label>\n    <input type=\"date\" name=\"dateArrived\" [(ngModel)]=\"order.dateArrived\">\n  </div>\n  <div class=\"form-controlgroup no-align-center\">\n    <label>Comentarios</label>\n    <textarea name=\"deliverComments\" rows=\"8\" cols=\"80\" [(ngModel)]=\"order.deliverComments\"></textarea>\n  </div>\n  <input class=\"submit-button\" type=\"button\" value=\"Enviar\" (click)=\"submitForm()\" [disabled]=\"form.invalid || form.disabled\"/>\n</form>\n\n<pre>{{form.value | json}}</pre>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/new-button/new-button.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/new-button/new-button.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button\">\n  <i class=\"material-icons filter\">add</i>\n  <span>Solicitud Nuevo</span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/new-order/new-order.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/new-order/new-order.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submitForm()\" enctype=\"multipart/form-data\" #form=\"ngForm\">\n  <input type=\"hidden\" name=\"operation\" [ngModel]=\"'create'\">\n  <h1>Nuevo Solicitud</h1>\n  <h2>General</h2>\n  <div class=\"form-controlgroup\">\n      <label>Client</label>\n      <input type=\"text\" name=\"clientContact\" ngModel #clientContact=\"ngModel\" required>\n  </div>\n  <div class=\"form-controlgroup\">\n      <label>Type</label>\n      <select name=\"deviceType\" ngModel #type=\"ngModel\" required>\n          <option>Laptop</option>\n          <option>Desktop</option>\n      </select>\n  </div>\n  <div class=\"form-controlgroup\">\n      <label>Date Needed</label>\n      <input type=\"date\" name=\"dateNeeded\" ngModel #dateNeeded=\"ngModel\" required><br/>\n  </div>\n  <h2>Hardware Specs</h2>\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"form-controlgroup\">\n          <label>Processor</label>\n          <select name=\"processor\" ngModel #processor=\"ngModel\" required>\n              <option>Intel</option>\n              <option>AMD</option>\n          </select>\n      </div>\n      <div class=\"form-controlgroup\">\n          <label>Memory</label>\n          <input type=\"number\" name=\"memory\" ngModel #memory=\"ngModel\" required><span>gb</span>\n      </div>\n      <div class=\"form-controlgroup\">\n          <label>Hard disk</label>\n          <input type=\"number\" name=\"harddisk\" ngModel #harddisk=\"ngModel\" required><span>gb</span>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"form-controlgroup checkbox\" *ngFor=\"let hard of hardwares\">\n          <label>{{capitalize(hard.label)}}</label>\n          <input type=\"checkbox\" name=\"{{hard.name}}\" [ngModel]=\"false\"><span></span>\n      </div>\n    </div>\n  </div>\n  <h2>OS</h2>\n  <div class=\"form-controlgroup\">\n      <label>Operating System</label>\n      <select name=\"operatingSystem\" ngModel #operatingSystem=\"ngModel\" required>\n          <option>Windows</option>\n          <option>MacOS</option>\n          <option>Linux</option>\n      </select>\n  </div>\n  <h2>Software</h2>\n  <div class=\"form-controlgroup variable-input\" *ngFor=\"let soft of order.newSoftwares; let i = index\">\n      <input type=\"text\" [name]=\"'software' + soft.softid\" [(ngModel)]=\"soft.software\">\n      <i class=\"material-icons delete\" (click)=\"removeSoft(i)\">delete</i>\n  </div>\n  <div class=\"form-controlgroup variable-input\">\n      <input type=\"text\" placeholder=\"Software...\" #softAdd (keyup.enter)=\"addSoft()\">\n      <i class=\"material-icons add\" (click)=\"addSoft()\">add</i>\n  </div>\n  <h2>Other</h2>\n  <div class=\"form-controlgroup variable-input\" *ngFor=\"let oth of order.newOthers; let i = index\">\n      <input type=\"text\" [name]=\"'other' + oth.otherid\" [(ngModel)]=\"oth.otherspec\">\n      <i class=\"material-icons delete\" (click)=\"removeOther(i)\">delete</i>\n  </div>\n  <div class=\"form-controlgroup variable-input\">\n      <input type=\"text\" name=\"other2\" placeholder=\"Other...\" #otherAdd (keyup.enter)=\"addOther()\">\n      <i class=\"material-icons add\" (click)=\"addOther()\">add</i>\n  </div>\n  <h2>Cost Sheet</h2>\n  <div class=\"form-controlgroup\">\n    <label>Excel Sheet</label>\n    <input type=\"file\" name=\"cost-sheet\" ngModel (change)=\"onCostSheetChange($event)\" #costSheetInput=\"ngModel\" required/>\n  </div>\n  <input class=\"submit-button\" type=\"button\" value=\"Enviar\" (click)=\"submitForm()\" [disabled]=\"form.invalid\"/>\n</form>\n\n<pre>create {{form.value | json}}</pre>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/order-view/order-view.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/order-view/order-view.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!this.loading\">\n  <app-create-form [order]=\"order\"\n                   [required]=\"false\"\n                   [editable]=\"createPerm.edit\">\n  </app-create-form>\n  <app-verify-form [order]=\"order\"\n                   [required]=\"verifyPerm.reqs\"\n                   [editable]=\"verifyPerm.edit\"\n                   *ngIf=\"verifyPerm.view\">\n  </app-verify-form>\n  <app-quote-form [order]=\"order\"\n                  [required]=\"quotePerm.reqs\"\n                  [editable]=\"quotePerm.edit\"\n                  *ngIf=\"quotePerm.view\">\n  </app-quote-form>\n  <app-approve-form [order]=\"order\"\n                    [required]=\"approvePerm.reqs\"\n                    [editable]=\"approvePerm.edit\"\n                    *ngIf=\"approvePerm.view\">\n  </app-approve-form>\n  <app-purchase-form [order]=\"order\"\n                     [required]=\"purchasePerm.reqs\"\n                     [editable]=\"purchasePerm.edit\"\n                     *ngIf=\"purchasePerm.view\">\n  </app-purchase-form>\n  <app-delivered-form [order]=\"order\"\n                      [required]=\"deliveredPerm.reqs\"\n                      [editable]=\"deliveredPerm.edit\"\n                      *ngIf=\"deliveredPerm.view\">\n  </app-delivered-form>\n  <app-delete-form [order]=\"order\"\n                      [required]=\"deletePerm.reqs\"\n                      [editable]=\"deletePerm.edit\"\n                      *ngIf=\"deletePerm.view\">\n  </app-delete-form>\n</div>\n<div class=\"\" *ngIf=\"this.loading\">\n  <p>Loading...</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/orders-module-view/orders-module-view.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/orders-module-view/orders-module-view.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-orders-tray></app-orders-tray>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/orders-tray-list-item/orders-tray-list-item.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/orders-tray-list-item/orders-tray-list-item.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left\">\n    <div class=\"wrapper\">\n        <div class=\"circle\" [style.background-color]=\"order.status | statusTransform:'color'\"></div>\n        <p>{{order.status | statusTransform:'acronym'}}</p>\n        <p>{{order.dateNeeded | date:'shortDate'}}</p>\n    </div>\n</div>\n<div class=\"right\">\n    <h2>{{order.clientContact}}</h2>\n    <h3>{{order.userid}}</h3>\n    <p>{{order.gmApproval}}</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/orders-tray-list/orders-tray-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/orders-tray-list/orders-tray-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!this.orderhttp.loadingList\">\n  <app-orders-tray-list-item *ngFor=\"let order of this.orderhttp.orders | orderSearch:orderhttp.orderQuery\" [order]=\"order\"\n    [routerLink]=\"['/orders', order.orderid]\"\n    [routerLinkActive]=\"['active']\">\n  </app-orders-tray-list-item>\n</div>\n<div class=\"\" *ngIf=\"this.orderhttp.loadingList\">\n  <p>Loading...</p>\n</div>\n<div class=\"\" *ngIf=\"this.orderhttp.orders.length == 0\">\n  <p>No Results</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/orders-tray-search/orders-tray-search.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/orders-tray-search/orders-tray-search.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <i class=\"material-icons search\">search</i> -->\n<input type=\"text\" placeholder=\"Search...\" [formControl]=\"searchField\"/>\n<i class=\"material-icons filter\">filter_list</i>\n<i class=\"material-icons filter\" (click)=\"orderhttp.refreshOrderList()\">refresh</i>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/orders-tray/orders-tray.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/orders-tray/orders-tray.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-orders-tray-search></app-orders-tray-search>\n<app-new-button></app-new-button>\n<app-orders-tray-list></app-orders-tray-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/placeholder/placeholder.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/placeholder/placeholder.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>placeholder works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/purchase-form/purchase-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/purchase-form/purchase-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submitForm()\" enctype=\"multipart/form-data\" #form=\"ngForm\">\n  <input type=\"hidden\" name=\"operation\" [ngModel]=\"'purchase'\">\n  <h1>Puchase</h1>\n  <div class=\"form-controlgroup\">\n    <label>Purchase Receipt</label>\n    <button type=\"button\" (click)=\"downloadFile('purchase_receipt')\">Download Receipt</button>\n    <input type=\"file\" name=\"receipt\" ngModel (change)=\"onFileChange($event)\">\n  </div>\n  <div class=\"form-controlgroup no-align-center\">\n    <label>Comentarios</label>\n    <textarea name=\"purchaseComments\" rows=\"8\" cols=\"80\" [(ngModel)]=\"order.purchaseComments\"></textarea>\n  </div>\n  <input class=\"submit-button\" type=\"button\" value=\"Enviar\" (click)=\"submitForm()\" [disabled]=\"form.invalid || form.disabled\"/>\n</form>\n\n<pre>{{form.value | json}}</pre>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/quote-form/quote-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/quote-form/quote-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submitForm()\" enctype=\"multipart/form-data\" #form=\"ngForm\">\n  <input type=\"hidden\" name=\"operation\" [ngModel]=\"'quote'\">\n  <h1>HelpDesk</h1>\n  <div class=\"form-controlgroup\">\n    <label>Provider</label>\n    <input type=\"text\" name=\"supplier\" [(ngModel)]=\"order.supplier\">\n  </div>\n  <div class=\"form-controlgroup\">\n    <label>Final Price</label>\n    <input type=\"number\" name=\"finalPrice\" [(ngModel)]=\"order.finalPrice\">\n  </div>\n  <div class=\"form-controlgroup\">\n    <label>Aqcuisition Method</label>\n    <select name=\"acquisitionType\" [(ngModel)]=\"order.acquisitionType\">\n      <option>online</option>\n      <option>vendor</option>\n      <option>telephone</option>\n      <option>other</option>\n    </select>\n  </div>\n  <div class=\"form-controlgroup\">\n    <label>Quote Date</label>\n    <input type=\"date\" name=\"quotedDate\" [(ngModel)]=\"order.quotedDate\">\n  </div>\n  <div class=\"form-controlgroup no-align-center\">\n    <label>Comentarios</label>\n    <textarea name=\"quoteComments\" rows=\"8\" cols=\"80\" [(ngModel)]=\"order.quoteComments\"></textarea>\n  </div>\n  <input class=\"submit-button\" type=\"button\" value=\"Enviar\" (click)=\"submitForm()\" [disabled]=\"form.invalid || form.disabled\"/>\n</form>\n\n<pre>{{form.value | json}}</pre>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders-view/verify-form/verify-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders-view/verify-form/verify-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateForm()\" enctype=\"multipart/form-data\" #form=\"ngForm\">\n  <input type=\"hidden\" name=\"operation\" [ngModel]=\"'verify'\">\n  <h1>Soporte</h1>\n  <div class=\"form-controlgroup approval\">\n    <label>Approved</label>\n    <input type=\"radio\" name=\"supportApproved\" value=\"approve\" [(ngModel)]=\"order.supportApproval\"><span> Sí</span>\n    <span class=\"inline-spacer\"></span>\n    <input type=\"radio\" name=\"supportApproved\" value=\"deny\" [(ngModel)]=\"order.supportApproval\"><span>No</span>\n  </div>\n  <div class=\"form-controlgroup no-align-center\">\n    <label>Comentarios</label>\n    <textarea name=\"supportComments\" rows=\"8\" cols=\"80\" [(ngModel)]=\"order.supportComments\"></textarea>\n  </div>\n  <input class=\"submit-button\" type=\"button\" value=\"Enviar\" (click)=\"submitForm()\" [disabled]=\"form.invalid || form.disabled\"/>\n</form>\n\n<pre>{{form.value | json}}</pre>\n"

/***/ }),

/***/ "./src/app/orders-view/approve-form/approve-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/orders-view/approve-form/approve-form.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L2FwcHJvdmUtZm9ybS9hcHByb3ZlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orders-view/approve-form/approve-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/orders-view/approve-form/approve-form.component.ts ***!
  \********************************************************************/
/*! exports provided: ApproveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveFormComponent", function() { return ApproveFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-form/base-form.component */ "./src/app/orders-view/base-form/base-form.component.ts");



var ApproveFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ApproveFormComponent, _super);
    function ApproveFormComponent() {
        return _super.call(this) || this;
    }
    ApproveFormComponent.prototype.ngOnInit = function () {
    };
    ApproveFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-approve-form',
            template: __webpack_require__(/*! raw-loader!./approve-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/approve-form/approve-form.component.html"),
            styles: [__webpack_require__(/*! ./approve-form.component.css */ "./src/app/orders-view/approve-form/approve-form.component.css"), __webpack_require__(/*! ../base-form/base-form.component.css */ "./src/app/orders-view/base-form/base-form.component.css")]
        })
    ], ApproveFormComponent);
    return ApproveFormComponent;
}(_base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/orders-view/base-form/base-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/orders-view/base-form/base-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  background-color: white;\n  border-radius: 50px;\n  border: none;\n  margin-bottom: 15px;\n  padding-bottom: 50px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nh1 {\n  padding-top: 20px;\n}\n\nh2 {\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-bottom: 10px;\n  border-bottom: solid #cccccc 1px;\n}\n\n.form-controlgroup {\n  padding-left: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 10px;\n}\n\n.row {\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.row > .column {\n  -webkit-box-flex: 1;\n          flex: 1 1 50%;\n}\n\n.row .column .form-controlgroup {\n  padding-left: 0;\n}\n\n.form-controlgroup.no-align-center {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.form-controlgroup.approval {\n  margin-bottom: 20px;\n}\n\n.form-controlgroup label {\n    box-sizing: border-box;\n    width: 150px;\n}\n\n.form-controlgroup.checkbox label {\n  width: 75px;\n}\n\n.form-controlgroup textarea {\n  resize: vertical;\n}\n\n.form-controlgroup.variable-input {\n  padding-left: 0;\n  margin-left: 40px;\n}\n\n.variable-input {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    border: solid #ccc 2px;\n    border-radius: 4px;\n    margin-bottom: 5px;\n    margin-right: 40px;\n}\n\n.variable-input input[type=text] {\n    width: 50px;\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    box-sizing: border-box;\n    border: none;\n    outline: none;\n}\n\n.variable-input i {\n    cursor: pointer;\n}\n\n.variable-input i.delete {\n    background-color: #f78174;\n}\n\n.variable-input i.delete:hover {\n    background-color: #f44f3d;\n}\n\n.variable-input i.add {\n    background-color: #75f493;\n}\n\n.variable-input i.add:hover {\n    background-color: #37f263;\n}\n\n.inline-spacer {\n  width:15px;\n}\n\ninput.submit-button {\n    display: block;\n    width: 80%;\n    height: 30px;\n    margin: auto;\n    margin-top: 50px;\n    padding: 0;\n    border: none;\n    border-radius: 10px;\n    background-color: #f7af19;\n    cursor: pointer;\n}\n\ninput.submit-button:enabled:hover {\n    background-color: #F79212;\n}\n\ninput.submit-button:disabled:hover {\n  cursor: not-allowed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLXZpZXcvYmFzZS1mb3JtL2Jhc2UtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFxQjtFQUFyQiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQVk7RUFBWixZQUFZO0VBQ1osOEJBQXFCO0VBQXJCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFhO1VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBcUI7SUFBckIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBYztZQUFkLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L2Jhc2UtZm9ybS9iYXNlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG5oMSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5oMiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAjY2NjY2NjIDFweDtcbn1cblxuLmZvcm0tY29udHJvbGdyb3VwIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4ucm93ID4gLmNvbHVtbiB7XG4gIGZsZXg6IDEgMSA1MCU7XG59XG5cbi5yb3cgLmNvbHVtbiAuZm9ybS1jb250cm9sZ3JvdXAge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5mb3JtLWNvbnRyb2xncm91cC5uby1hbGlnbi1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmZvcm0tY29udHJvbGdyb3VwLmFwcHJvdmFsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm0tY29udHJvbGdyb3VwIGxhYmVsIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLmZvcm0tY29udHJvbGdyb3VwLmNoZWNrYm94IGxhYmVsIHtcbiAgd2lkdGg6IDc1cHg7XG59XG5cbi5mb3JtLWNvbnRyb2xncm91cCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5mb3JtLWNvbnRyb2xncm91cC52YXJpYWJsZS1pbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi52YXJpYWJsZS1pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IHNvbGlkICNjY2MgMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG4udmFyaWFibGUtaW5wdXQgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnZhcmlhYmxlLWlucHV0IGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZhcmlhYmxlLWlucHV0IGkuZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4MTc0O1xufVxuXG4udmFyaWFibGUtaW5wdXQgaS5kZWxldGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDRmM2Q7XG59XG5cbi52YXJpYWJsZS1pbnB1dCBpLmFkZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1ZjQ5Mztcbn1cblxuLnZhcmlhYmxlLWlucHV0IGkuYWRkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdmMjYzO1xufVxuXG4uaW5saW5lLXNwYWNlciB7XG4gIHdpZHRoOjE1cHg7XG59XG5cbmlucHV0LnN1Ym1pdC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3YWYxOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0LnN1Ym1pdC1idXR0b246ZW5hYmxlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIxMjtcbn1cblxuaW5wdXQuc3VibWl0LWJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/orders-view/base-form/base-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/orders-view/base-form/base-form.component.ts ***!
  \**************************************************************/
/*! exports provided: BaseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFormComponent", function() { return BaseFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_restful_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../orders-restful.service */ "./src/app/orders-view/orders-restful.service.ts");
/* harmony import */ var _order_module_injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-module-injector */ "./src/app/orders-view/order-module-injector.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order */ "./src/app/orders-view/order.ts");







var BaseFormComponent = /** @class */ (function () {
    function BaseFormComponent() {
        this.orderhttp = _order_module_injector__WEBPACK_IMPORTED_MODULE_5__["OrderModuleInjector"].getInjector().get(_orders_restful_service__WEBPACK_IMPORTED_MODULE_4__["OrdersRestfulService"]);
        this.router = _order_module_injector__WEBPACK_IMPORTED_MODULE_5__["OrderModuleInjector"].getInjector().get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]);
        this.order = new _order__WEBPACK_IMPORTED_MODULE_6__["Order"]();
    }
    BaseFormComponent.prototype.ngOnInit = function () {
    };
    BaseFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //console.log("view init");
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.setFormRestrictions();
                resolve();
            }, 500);
        });
    };
    BaseFormComponent.prototype.ngOnChanges = function (changes) {
        //console.log("OnChanges");
        //console.log(this.form.controls);
        this.setFormRestrictions();
    };
    BaseFormComponent.prototype.setFormRestrictions = function () {
        //console.log("porfa")
        if (this.form && (this.fieldsRequired || !this.fieldsEditable)) {
            //console.log("vor", this.form.controls["supplier"])
            for (var control in this.form.controls) {
                //console.log(this.form.controls[control]);
                if (!this.fieldsEditable) {
                    //console.log(control, "disabled");
                    this.form.controls[control].disable();
                }
                else if (this.fieldsRequired && !control.includes("Comments")) {
                    //console.log(control, "required");
                    this.form.controls[control].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                    this.form.controls[control].updateValueAndValidity();
                }
            }
            //console.log(this.form.controls);
        }
    };
    BaseFormComponent.prototype.downloadFile = function (filename) {
        this.orderhttp.downloadFile(this.order.orderid, filename);
    };
    BaseFormComponent.prototype.submitForm = function (append) {
        var _this = this;
        //console.log(`submitting ${formName}`);
        console.log(this.form);
        //console.log(this.order);
        if (!append) {
            append = {};
        }
        if (this.order.orderid) {
            append["orderid"] = this.order.orderid;
        }
        var formData = new FormData();
        for (var key in this.form.value) {
            formData.append(key, this.form.value[key]);
        }
        for (var key in append) {
            formData.append(key, append[key]);
        }
        // for(var pair of formData.keys()) {
        //   console.log(pair+ ', '+ formData.get(pair));
        // }
        this.orderhttp.submitForm(formData).then(function (res) {
            _this.orderhttp.refreshOrderList().then(function (res) {
                //console.log("trying to reroute")
                _this.router.navigate(['/orders', _this.order.orderid]);
            }, function (msg) { });
        }, function (msg) { console.log(msg); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('order')
    ], BaseFormComponent.prototype, "order", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false })
    ], BaseFormComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('required')
    ], BaseFormComponent.prototype, "fieldsRequired", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('editable')
    ], BaseFormComponent.prototype, "fieldsEditable", void 0);
    BaseFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-form',
            template: __webpack_require__(/*! raw-loader!./base-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/base-form/base-form.component.html"),
            styles: [__webpack_require__(/*! ./base-form.component.css */ "./src/app/orders-view/base-form/base-form.component.css")]
        })
    ], BaseFormComponent);
    return BaseFormComponent;
}());



/***/ }),

/***/ "./src/app/orders-view/create-form/create-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/orders-view/create-form/create-form.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L2NyZWF0ZS1mb3JtL2NyZWF0ZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/orders-view/create-form/create-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/orders-view/create-form/create-form.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFormComponent", function() { return CreateFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-form/base-form.component */ "./src/app/orders-view/base-form/base-form.component.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order */ "./src/app/orders-view/order.ts");




var HardwareDisplay = /** @class */ (function () {
    function HardwareDisplay(name, label) {
        this.name = name;
        this.label = label;
    }
    HardwareDisplay.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return HardwareDisplay;
}());
var CreateFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CreateFormComponent, _super);
    function CreateFormComponent() {
        var _this = _super.call(this) || this;
        _this.removeSoftNums = "";
        _this.removeOtherNums = "";
        _this.order.newSoftwares = [];
        _this.order.newOthers = [];
        _this.hardwares = [];
        var dummyHard = new _order__WEBPACK_IMPORTED_MODULE_3__["HardwareItems"]();
        //console.log(dummyHard);
        for (var val in dummyHard) {
            //console.log(val);
            _this.hardwares.push(new HardwareDisplay(val + "Hardware", val));
        }
        return _this;
    }
    CreateFormComponent.prototype.ngOnInit = function () {
    };
    CreateFormComponent.prototype.ngOnChanges = function (changes) {
        var e_1, _a, e_2, _b, e_3, _c;
        this.maxSoftNum = 0;
        try {
            for (var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.order.softwares), _e = _d.next(); !_e.done; _e = _d.next()) {
                var soft = _e.value;
                var num = parseInt(soft.softid);
                if (this.maxSoftNum < num)
                    this.maxSoftNum = num;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        //console.log("max soft", this.maxSoftNum);
        this.maxOthNum = 0;
        try {
            for (var _f = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.order.others), _g = _f.next(); !_g.done; _g = _f.next()) {
                var oth = _g.value;
                var num = parseInt(oth.otherid);
                if (this.maxOthNum < num)
                    this.maxOthNum = num;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (this.order.hardware) {
            try {
                for (var _h = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.hardwares), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var hard = _j.value;
                    hard.ref = this.order.hardware[hard.name.split("Hardware")[0]];
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        this.order.newSoftwares = [];
        this.order.newOthers = [];
    };
    CreateFormComponent.prototype.capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    CreateFormComponent.prototype.addSoft = function () {
        //console.log(this.softAddF.nativeElement.value);
        if (this.softAddF.nativeElement.value) {
            //console.log(this.order.softwaresText);
            //if (!Array.isArray(this.order.newSoftwares)) this.order.newSoftwares = [];
            this.maxSoftNum = this.maxSoftNum + 1;
            this.order.newSoftwares.push(new _order__WEBPACK_IMPORTED_MODULE_3__["SoftwareItem"](this.maxSoftNum.toString(), this.softAddF.nativeElement.value));
            this.softAddF.nativeElement.value = "";
        }
    };
    CreateFormComponent.prototype.removeSoft = function (idx) {
        //console.log(this.order.softwares[idx]);
        this.removeSoftNums += "-" + this.order.softwares[idx].softid + ",";
        this.order.softwares.splice(idx, 1);
    };
    CreateFormComponent.prototype.addOther = function () {
        //console.log(this.softAddF.nativeElement.value);
        if (this.otherAddF.nativeElement.value) {
            //console.log(this.order.softwaresText);
            //if (!Array.isArray(this.order.newOthers)) this.order.newOthers = [];
            this.maxOthNum = this.maxOthNum + 1;
            this.order.newOthers.push(new _order__WEBPACK_IMPORTED_MODULE_3__["OtherItem"](this.maxOthNum.toString(), this.otherAddF.nativeElement.value));
            this.otherAddF.nativeElement.value = "";
        }
    };
    CreateFormComponent.prototype.removeOther = function (idx) {
        //console.log(this.order.softwares[idx]);
        this.removeOtherNums += "-" + this.order.others[idx].otherid + ",";
        this.order.others.splice(idx, 1);
    };
    CreateFormComponent.prototype.onCostSheetChange = function (event) {
        if (event.target.files.length) {
            var file = event.target.files[0];
            console.log(file);
            this.costSheetFile = file;
        }
    };
    CreateFormComponent.prototype.submitForm = function (toAppend) {
        if (!toAppend) {
            toAppend = {};
        }
        toAppend["softwareIterable"] = "";
        toAppend["otherIterable"] = "";
        for (var key in this.form.value) {
            if (key.includes("software")) {
                toAppend["softwareIterable"] += key.slice(8) + ",";
            }
            else if (key.includes("other")) {
                toAppend["otherIterable"] += key.slice(5) + ",";
            }
        }
        toAppend["softwareIterable"] += this.removeSoftNums;
        toAppend["otherIterable"] += this.removeOtherNums;
        if (this.costSheetFile) {
            toAppend["costSheet"] = this.costSheetFile;
        }
        _super.prototype.submitForm.call(this, toAppend);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('softAdd', { static: false })
    ], CreateFormComponent.prototype, "softAddF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('otherAdd', { static: false })
    ], CreateFormComponent.prototype, "otherAddF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('costSheetInput', { static: false })
    ], CreateFormComponent.prototype, "costSheetInput", void 0);
    CreateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-form',
            template: __webpack_require__(/*! raw-loader!./create-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/create-form/create-form.component.html"),
            styles: [__webpack_require__(/*! ./create-form.component.css */ "./src/app/orders-view/create-form/create-form.component.css"), __webpack_require__(/*! ../base-form/base-form.component.css */ "./src/app/orders-view/base-form/base-form.component.css")]
        })
    ], CreateFormComponent);
    return CreateFormComponent;
}(_base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/orders-view/delete-form/delete-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/orders-view/delete-form/delete-form.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.submit-button.delete {\n  display: block;\n  width: 80%;\n  height: 30px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 0;\n  border: none;\n  border-radius: 10px;\n  background-color: #f73b3b;\n  cursor: pointer;\n}\n\ninput.submit-button.delete:enabled:hover {\n    background-color: #ba2d2d;\n}\n\ninput.submit-button.delete:disabled:hover {\n  cursor: not-allowed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLXZpZXcvZGVsZXRlLWZvcm0vZGVsZXRlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMtdmlldy9kZWxldGUtZm9ybS9kZWxldGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQuc3VibWl0LWJ1dHRvbi5kZWxldGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3M2IzYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dC5zdWJtaXQtYnV0dG9uLmRlbGV0ZTplbmFibGVkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmEyZDJkO1xufVxuXG5pbnB1dC5zdWJtaXQtYnV0dG9uLmRlbGV0ZTpkaXNhYmxlZDpob3ZlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/orders-view/delete-form/delete-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/orders-view/delete-form/delete-form.component.ts ***!
  \******************************************************************/
/*! exports provided: DeleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFormComponent", function() { return DeleteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-form/base-form.component */ "./src/app/orders-view/base-form/base-form.component.ts");



var DeleteFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeleteFormComponent, _super);
    function DeleteFormComponent() {
        return _super.call(this) || this;
    }
    DeleteFormComponent.prototype.ngOnInit = function () {
    };
    DeleteFormComponent.prototype.submitForm = function () {
        if (confirm("¿Está seguro que querer eliminar?")) {
            _super.prototype.submitForm.call(this);
        }
    };
    DeleteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-form',
            template: __webpack_require__(/*! raw-loader!./delete-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/delete-form/delete-form.component.html"),
            styles: [__webpack_require__(/*! ./delete-form.component.css */ "./src/app/orders-view/delete-form/delete-form.component.css")]
        })
    ], DeleteFormComponent);
    return DeleteFormComponent;
}(_base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/orders-view/delivered-form/delivered-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/orders-view/delivered-form/delivered-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L2RlbGl2ZXJlZC1mb3JtL2RlbGl2ZXJlZC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/orders-view/delivered-form/delivered-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/orders-view/delivered-form/delivered-form.component.ts ***!
  \************************************************************************/
/*! exports provided: DeliveredFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveredFormComponent", function() { return DeliveredFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-form/base-form.component */ "./src/app/orders-view/base-form/base-form.component.ts");



var DeliveredFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeliveredFormComponent, _super);
    function DeliveredFormComponent() {
        return _super.call(this) || this;
    }
    DeliveredFormComponent.prototype.ngOnInit = function () {
    };
    DeliveredFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivered-form',
            template: __webpack_require__(/*! raw-loader!./delivered-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/delivered-form/delivered-form.component.html"),
            styles: [__webpack_require__(/*! ./delivered-form.component.css */ "./src/app/orders-view/delivered-form/delivered-form.component.css"), __webpack_require__(/*! ../base-form/base-form.component.css */ "./src/app/orders-view/base-form/base-form.component.css")]
        })
    ], DeliveredFormComponent);
    return DeliveredFormComponent;
}(_base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/orders-view/new-button/new-button.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/orders-view/new-button/new-button.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  display: block;\n  border-top: solid black 1px;\n  border-bottom: solid black 1px;\n}\n\n.button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  box-sizing: border-box;\n  height: 44px;\n  width: 200px;\n  margin: 10px auto;\n  border: solid #bbbbbb 1px;\n}\n\n.button:hover {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n.button:active {\n  background-color: #cccccc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLXZpZXcvbmV3LWJ1dHRvbi9uZXctYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7RUFDZCxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFxQjtFQUFyQiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMtdmlldy9uZXctYnV0dG9uL25ldy1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wOiBzb2xpZCBibGFjayAxcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDFweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgYm9yZGVyOiBzb2xpZCAjYmJiYmJiIDFweDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/orders-view/new-button/new-button.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/orders-view/new-button/new-button.component.ts ***!
  \****************************************************************/
/*! exports provided: NewButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewButtonComponent", function() { return NewButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NewButtonComponent = /** @class */ (function () {
    function NewButtonComponent(router) {
        this.router = router;
    }
    NewButtonComponent.prototype.ngOnInit = function () {
    };
    NewButtonComponent.prototype.onClick = function () {
        this.router.navigate(['/orders', "new"]);
    };
    NewButtonComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")
    ], NewButtonComponent.prototype, "onClick", null);
    NewButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-button',
            template: __webpack_require__(/*! raw-loader!./new-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/new-button/new-button.component.html"),
            styles: [__webpack_require__(/*! ./new-button.component.css */ "./src/app/orders-view/new-button/new-button.component.css")]
        })
    ], NewButtonComponent);
    return NewButtonComponent;
}());



/***/ }),

/***/ "./src/app/orders-view/new-order/new-order.component.css":
/*!***************************************************************!*\
  !*** ./src/app/orders-view/new-order/new-order.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    padding: 25px 50px;\n    background-color: #d1cbbe;\n    overflow-y: auto;\n    max-height: 100%\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLXZpZXcvbmV3LW9yZGVyL25ldy1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L25ldy1vcmRlci9uZXctb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjYmJlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWF4LWhlaWdodDogMTAwJVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/orders-view/new-order/new-order.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/orders-view/new-order/new-order.component.ts ***!
  \**************************************************************/
/*! exports provided: NewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderComponent", function() { return NewOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_form_create_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-form/create-form.component */ "./src/app/orders-view/create-form/create-form.component.ts");



var NewOrderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NewOrderComponent, _super);
    function NewOrderComponent() {
        return _super.call(this) || this;
        //this.order = new Order();
    }
    NewOrderComponent.prototype.ngOnInit = function () {
        this.fieldsRequired = true;
        this.fieldsEditable = true;
        this.maxSoftNum = 0;
        this.maxOthNum = 0;
        //console.log("hi");
    };
    NewOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-order',
            template: __webpack_require__(/*! raw-loader!./new-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/new-order/new-order.component.html"),
            styles: [__webpack_require__(/*! ./new-order.component.css */ "./src/app/orders-view/new-order/new-order.component.css"), __webpack_require__(/*! ../base-form/base-form.component.css */ "./src/app/orders-view/base-form/base-form.component.css")]
        })
    ], NewOrderComponent);
    return NewOrderComponent;
}(_create_form_create_form_component__WEBPACK_IMPORTED_MODULE_2__["CreateFormComponent"]));



/***/ }),

/***/ "./src/app/orders-view/order-brief.ts":
/*!********************************************!*\
  !*** ./src/app/orders-view/order-brief.ts ***!
  \********************************************/
/*! exports provided: OrderBrief */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBrief", function() { return OrderBrief; });
var OrderBrief = /** @class */ (function () {
    function OrderBrief(orderid, userid, status, dateNeeded, clientContact, supportApproval, gmApproval, finalid, arrived) {
        this.orderid = orderid;
        this.userid = userid;
        this.status = status;
        this.dateNeeded = dateNeeded;
        this.clientContact = clientContact;
        this.supportApproval = supportApproval;
        this.gmApproval = gmApproval;
        this.finalid = finalid;
        this.arrived = arrived;
    }
    OrderBrief.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: Number },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: Boolean }
    ]; };
    return OrderBrief;
}());



/***/ }),

/***/ "./src/app/orders-view/order-module-injector.ts":
/*!******************************************************!*\
  !*** ./src/app/orders-view/order-module-injector.ts ***!
  \******************************************************/
/*! exports provided: OrderModuleInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModuleInjector", function() { return OrderModuleInjector; });
var OrderModuleInjector = /** @class */ (function () {
    function OrderModuleInjector() {
    }
    OrderModuleInjector.setInjector = function (injector) {
        OrderModuleInjector.injector = injector;
    };
    OrderModuleInjector.getInjector = function () {
        return OrderModuleInjector.injector;
    };
    return OrderModuleInjector;
}());



/***/ }),

/***/ "./src/app/orders-view/order-search.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/orders-view/order-search.pipe.ts ***!
  \**************************************************/
/*! exports provided: OrderSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSearchPipe", function() { return OrderSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderSearchPipe = /** @class */ (function () {
    function OrderSearchPipe() {
    }
    OrderSearchPipe.prototype.transform = function (value, arg) {
        if (!value)
            return null;
        if (!arg)
            return value;
        var queryParts = arg.toLowerCase().split(" ");
        return value.filter(function (item) {
            var e_1, _a;
            var itemString = JSON.stringify(item).toLowerCase().split("\"").join("");
            try {
                //console.log(itemString);
                for (var queryParts_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](queryParts), queryParts_1_1 = queryParts_1.next(); !queryParts_1_1.done; queryParts_1_1 = queryParts_1.next()) {
                    var part = queryParts_1_1.value;
                    if (itemString.includes(part)) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (queryParts_1_1 && !queryParts_1_1.done && (_a = queryParts_1.return)) _a.call(queryParts_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        });
    };
    OrderSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderSearch'
        })
    ], OrderSearchPipe);
    return OrderSearchPipe;
}());



/***/ }),

/***/ "./src/app/orders-view/order-view/order-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/orders-view/order-view/order-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    padding: 25px 50px;\n    background-color: #d1cbbe;\n    overflow-y: auto;\n    max-height: 100%\n}\n\n:host > div {\n  width: 100%;\n  height: 100%;\n}\n\n.all-indent {\n    padding: 20px 20px;\n}\n\nform {\n  background-color: white;\n  border-radius: 50px;\n  border: none;\n  margin-bottom: 15px;\n  padding-bottom: 50px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nh1 {\n  padding-top: 20px;\n}\n\nh2 {\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-bottom: 10px;\n  border-bottom: solid #cccccc 1px;\n}\n\n.form-controlgroup {\n  padding-left: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 10px;\n}\n\n.form-controlgroup.no-align-center {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.form-controlgroup.approval {\n  margin-bottom: 20px;\n}\n\n.form-controlgroup label {\n    box-sizing: border-box;\n    width: 150px;\n}\n\n.form-controlgroup textarea {\n  resize: vertical;\n}\n\n.form-controlgroup.variable-input {\n  padding-left: 0;\n  margin-left: 40px;\n}\n\n.variable-input {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    border: solid #ccc 2px;\n    border-radius: 4px;\n    margin-bottom: 5px;\n    margin-right: 40px;\n}\n\n.variable-input input[type=text] {\n    width: 50px;\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    box-sizing: border-box;\n    border: none;\n    outline: none;\n}\n\n.variable-input i {\n    cursor: pointer;\n}\n\n.variable-input i.delete {\n    background-color: #f78174;\n}\n\n.variable-input i.delete:hover {\n    background-color: #f44f3d;\n}\n\n.variable-input i.add {\n    background-color: #75f493;\n}\n\n.variable-input i.add:hover {\n    background-color: #37f263;\n}\n\n.inline-spacer {\n  width:15px;\n}\n\ninput.submit-button {\n    display: block;\n    width: 80%;\n    height: 30px;\n    margin: auto;\n    margin-top: 50px;\n    padding: 0;\n    border: none;\n    border-radius: 10px;\n    background-color: #f7af19;\n    cursor: pointer;\n}\n\ninput.submit-button:hover {\n    background-color: #F79212;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLXZpZXcvb3JkZXItdmlldy9vcmRlci12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBcUI7RUFBckIsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBcUI7SUFBckIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBYztZQUFkLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L29yZGVyLXZpZXcvb3JkZXItdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWNiYmU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxMDAlXG59XG5cbjpob3N0ID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmFsbC1pbmRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cblxuZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmgxIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbmgyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkICNjY2NjY2MgMXB4O1xufVxuXG4uZm9ybS1jb250cm9sZ3JvdXAge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZvcm0tY29udHJvbGdyb3VwLm5vLWFsaWduLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uZm9ybS1jb250cm9sZ3JvdXAuYXBwcm92YWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1jb250cm9sZ3JvdXAgbGFiZWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4uZm9ybS1jb250cm9sZ3JvdXAgdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4uZm9ybS1jb250cm9sZ3JvdXAudmFyaWFibGUtaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4udmFyaWFibGUtaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLnZhcmlhYmxlLWlucHV0IGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi52YXJpYWJsZS1pbnB1dCBpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52YXJpYWJsZS1pbnB1dCBpLmRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ODE3NDtcbn1cblxuLnZhcmlhYmxlLWlucHV0IGkuZGVsZXRlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0ZjNkO1xufVxuXG4udmFyaWFibGUtaW5wdXQgaS5hZGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NWY0OTM7XG59XG5cbi52YXJpYWJsZS1pbnB1dCBpLmFkZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjI2Mztcbn1cblxuLmlubGluZS1zcGFjZXIge1xuICB3aWR0aDoxNXB4O1xufVxuXG5pbnB1dC5zdWJtaXQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2FmMTk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjEyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/orders-view/order-view/order-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/orders-view/order-view/order-view.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewComponent", function() { return OrderViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _orders_restful_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../orders-restful.service */ "./src/app/orders-view/orders-restful.service.ts");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../current-user.service */ "./src/app/current-user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var FormPerms = /** @class */ (function () {
    function FormPerms(view, edit, reqs) {
        this.view = view;
        this.edit = edit;
        this.reqs = reqs;
    }
    FormPerms.ctorParameters = function () { return [
        { type: Boolean },
        { type: Boolean },
        { type: Boolean }
    ]; };
    return FormPerms;
}());
var OrderViewComponent = /** @class */ (function () {
    function OrderViewComponent(router, activeRoute, orderhttp, currUser, datepipe) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.orderhttp = orderhttp;
        this.currUser = currUser;
        this.datepipe = datepipe;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loading = false;
    }
    OrderViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed)).subscribe(function () {
            //console.log("loaded again");
            _this.loadOrder();
        });
        this.activeRoute.params.subscribe(function (params) {
            //console.log("active route");
            _this.orderid = params['id'];
            _this.loadOrder();
        });
    };
    OrderViewComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    OrderViewComponent.prototype.loadOrder = function () {
        var _this = this;
        if (this.loading)
            return;
        this.loading = true;
        //console.log("loading", this.orderid);
        this.orderhttp.getOrder(this.orderid)
            .then(function (res) {
            //console.log(res);
            _this.order = Object.assign({}, res);
            _this.order.dateNeeded = _this.convertDateFormat(_this.order.dateNeeded);
            _this.order.dateCreated = _this.convertDateFormat(_this.order.dateCreated);
            if (_this.order.quotedDate)
                _this.order.quotedDate = _this.convertDateFormat(_this.order.quotedDate);
            if (_this.order.dateArrived)
                _this.order.dateArrived = _this.convertDateFormat(_this.order.dateArrived);
            _this.order.supportApproval = _this.convertApprovals(_this.order.supportApproved);
            _this.order.gmApproval = _this.convertApprovals(_this.order.gmApproved);
            //console.log(this.maxSoftNum);
            console.log(_this.order);
            _this.updateFormPermissions();
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
        });
    };
    OrderViewComponent.prototype.convertDateFormat = function (date) {
        if (!date)
            return date;
        date = this.datepipe.transform(date, 'shortDate');
        var dateParts = date.split('/');
        if (dateParts[0].length == 1)
            dateParts[0] = '0' + dateParts[0];
        if (dateParts[1].length == 1)
            dateParts[1] = '0' + dateParts[1];
        dateParts[2] = '20' + dateParts[2];
        return dateParts[2] + '-' + dateParts[0] + '-' + dateParts[1];
    };
    OrderViewComponent.prototype.convertApprovals = function (val) {
        return val ? 'approve' : 'deny';
    };
    OrderViewComponent.prototype.updateFormPermissions = function () {
        this.createPerm = this.evaluateFormPerms("create", this.order.status);
        this.verifyPerm = this.evaluateFormPerms("verify", this.order.status);
        this.quotePerm = this.evaluateFormPerms("quote", this.order.status);
        this.approvePerm = this.evaluateFormPerms("approve", this.order.status);
        this.purchasePerm = this.evaluateFormPerms("purchase", this.order.status);
        this.deliveredPerm = this.evaluateFormPerms("delivered", this.order.status);
        this.deletePerm = this.evaluateFormPerms("delete", this.order.status);
    };
    OrderViewComponent.prototype.evaluateFormPerms = function (form, status) {
        var visible;
        var editable;
        var required;
        var role = this.currUser.getRole();
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
                editable = role == "helpdesk";
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
    };
    OrderViewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _orders_restful_service__WEBPACK_IMPORTED_MODULE_4__["OrdersRestfulService"] },
        { type: _current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
    ]; };
    OrderViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-view',
            template: __webpack_require__(/*! raw-loader!./order-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/order-view/order-view.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [__webpack_require__(/*! ./order-view.component.css */ "./src/app/orders-view/order-view/order-view.component.css")]
        })
    ], OrderViewComponent);
    return OrderViewComponent;
}());



/***/ }),

/***/ "./src/app/orders-view/order.ts":
/*!**************************************!*\
  !*** ./src/app/orders-view/order.ts ***!
  \**************************************/
/*! exports provided: SoftwareItem, OtherItem, HardwareItems, Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareItem", function() { return SoftwareItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherItem", function() { return OtherItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardwareItems", function() { return HardwareItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var SoftwareItem = /** @class */ (function () {
    function SoftwareItem(softid, software) {
        this.softid = softid;
        this.software = software;
    }
    SoftwareItem.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return SoftwareItem;
}());

var OtherItem = /** @class */ (function () {
    function OtherItem(otherid, otherspec) {
        this.otherid = otherid;
        this.otherspec = otherspec;
    }
    OtherItem.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return OtherItem;
}());

var HardwareItems = /** @class */ (function () {
    function HardwareItems() {
        this.mouse = false;
        this.keyboard = false;
        this.monitor = false;
    }
    return HardwareItems;
}());

var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/orders-view/orders-module-view/orders-module-view.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/orders-view/orders-module-view/orders-module-view.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLXZpZXcvb3JkZXJzLW1vZHVsZS12aWV3L29yZGVycy1tb2R1bGUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0lBQ2Qsb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzLXZpZXcvb3JkZXJzLW1vZHVsZS12aWV3L29yZGVycy1tb2R1bGUtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/orders-view/orders-module-view/orders-module-view.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/orders-view/orders-module-view/orders-module-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrdersModuleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModuleViewComponent", function() { return OrdersModuleViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_module_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order-module-injector */ "./src/app/orders-view/order-module-injector.ts");



var OrdersModuleViewComponent = /** @class */ (function () {
    function OrdersModuleViewComponent(injector) {
        this.injector = injector;
        _order_module_injector__WEBPACK_IMPORTED_MODULE_2__["OrderModuleInjector"].setInjector(this.injector);
    }
    OrdersModuleViewComponent.prototype.ngOnInit = function () {
    };
    OrdersModuleViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    OrdersModuleViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders-module-view',
            template: __webpack_require__(/*! raw-loader!./orders-module-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/orders-module-view/orders-module-view.component.html"),
            styles: [__webpack_require__(/*! ./orders-module-view.component.css */ "./src/app/orders-view/orders-module-view/orders-module-view.component.css")]
        })
    ], OrdersModuleViewComponent);
    return OrdersModuleViewComponent;
}());



/***/ }),

/***/ "./src/app/orders-view/orders-restful.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/orders-view/orders-restful.service.ts ***!
  \*******************************************************/
/*! exports provided: OrdersRestfulService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRestfulService", function() { return OrdersRestfulService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _restful_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../restful-config.service */ "./src/app/restful-config.service.ts");
/* harmony import */ var _order_brief__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-brief */ "./src/app/orders-view/order-brief.ts");






var OrdersRestfulService = /** @class */ (function () {
    function OrdersRestfulService(http, configRest) {
        this.http = http;
        this.configRest = configRest;
        this.loadingList = false;
        this.configRest.setOrdersRestfulService(this);
        this.refreshOrderList();
        this.downloadButt = document.createElement("a");
        document.body.appendChild(this.downloadButt);
        this.downloadButt.style = "display: none";
    }
    OrdersRestfulService.prototype.refreshOrderList = function () {
        var _this = this;
        this.loadingList = true;
        var apiURL = this.configRest.apiURLQuery;
        return this.http.get(apiURL)
            .toPromise()
            .then(function (res) {
            console.log(res);
            _this.orders = res.map(function (item) {
                return new _order_brief__WEBPACK_IMPORTED_MODULE_5__["OrderBrief"](item.orderid, item.userid, item.status, item.dateNeeded, item.clientContact, item.supportApproval, item.gmApproval, item.finalid, item.arrived);
            });
            _this.loadingList = false;
        }, function (msg) {
            console.log(msg);
            _this.loadingList = false;
        });
    };
    OrdersRestfulService.prototype.getOrder = function (id) {
        var apiURl = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].baseURL + 'app/orders?orderid=' + id;
        return this.http.get(apiURl).toPromise();
    };
    OrdersRestfulService.prototype.downloadFile = function (orderid, filename) {
        var _this = this;
        var apiURL = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].baseURL + ("app/orders?orderid=" + orderid + "&file=" + filename);
        this.http.get(apiURL, { responseType: 'blob', observe: "response" })
            .toPromise()
            .then(function (res) {
            console.log(res);
            var bloburl = window.URL.createObjectURL(res.body);
            var contDispParts = res.headers.get("content-disposition").split("filename=");
            var fileNameParts = contDispParts[1].split(".");
            //window.open(window.URL.createObjectURL(res));
            //window.location.href = bloburl;
            _this.downloadButt.href = bloburl;
            _this.downloadButt.download = fileNameParts[0] + orderid + "." + fileNameParts[1];
            _this.downloadButt.click();
            window.URL.revokeObjectURL(bloburl);
        }, function (msg) {
            console.log(msg);
        });
    };
    OrdersRestfulService.prototype.submitForm = function (form) {
        var apiURL = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].baseURL + "app/orders";
        console.log('posting: ', form);
        return this.http.post(apiURL, form)
            .toPromise()
            .then(function (res) {
            console.log(res);
        }, function (msg) {
            console.log(msg);
        });
    };
    OrdersRestfulService.prototype.dummySubmitForm = function (form) {
        var apiURL = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].baseURL + "app/cunt";
        console.log('posting: ', form);
        this.http.post(apiURL, form)
            .toPromise()
            .then(function (res) {
            console.log(res);
        }, function (msg) {
            console.log(msg);
        });
    };
    OrdersRestfulService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _restful_config_service__WEBPACK_IMPORTED_MODULE_4__["RestfulConfigService"] }
    ]; };
    OrdersRestfulService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], OrdersRestfulService);
    return OrdersRestfulService;
}());



/***/ }),

/***/ "./src/app/orders-view/orders-tray-list-item/orders-tray-list-item.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/orders-view/orders-tray-list-item/orders-tray-list-item.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    border-top: solid black 1px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row nowrap;\n    padding: 10px;\n    overflow: hidden;\n    height: 100px;\n    box-sizing: border-box;\n}\n\n:host:first-child {\n  border-top: none;\n}\n\n:host:last-child {\n    border-bottom: solid black 1px;\n}\n\n:host:hover {\n    background-color: #dddddd;\n}\n\n:host:focus {\n  outline: none;\n}\n\n.left {\n    width: 90px;\n    padding-right: 10px;\n}\n\n.left .wrapper {\n    margin-top: 5px;\n}\n\n.left .circle {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    /* background-color: red; */\n    margin: auto;\n    margin-bottom: 10px;\n}\n\n.left p {\n    text-align: center;\n    font-size: .9em;\n}\n\n.right {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLXZpZXcvb3JkZXJzLXRyYXktbGlzdC1pdGVtL29yZGVycy10cmF5LWxpc3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFxQjtJQUFyQiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFjO1lBQWQsY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L29yZGVycy10cmF5LWxpc3QtaXRlbS9vcmRlcnMtdHJheS1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCBibGFjayAxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOmhvc3Q6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG46aG9zdDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAxcHg7XG59XG5cbjpob3N0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG46aG9zdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5sZWZ0IHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubGVmdCAud3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubGVmdCAuY2lyY2xlIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxlZnQgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLnJpZ2h0IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/orders-view/orders-tray-list-item/orders-tray-list-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/orders-view/orders-tray-list-item/orders-tray-list-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OrdersTrayListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersTrayListItemComponent", function() { return OrdersTrayListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrdersTrayListItemComponent = /** @class */ (function () {
    function OrdersTrayListItemComponent() {
    }
    OrdersTrayListItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OrdersTrayListItemComponent.prototype, "order", void 0);
    OrdersTrayListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders-tray-list-item',
            template: __webpack_require__(/*! raw-loader!./orders-tray-list-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/orders-tray-list-item/orders-tray-list-item.component.html"),
            styles: [__webpack_require__(/*! ./orders-tray-list-item.component.css */ "./src/app/orders-view/orders-tray-list-item/orders-tray-list-item.component.css")]
        })
    ], OrdersTrayListItemComponent);
    return OrdersTrayListItemComponent;
}());



/***/ }),

/***/ "./src/app/orders-view/orders-tray-list/orders-tray-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/orders-view/orders-tray-list/orders-tray-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  max-height: 100%;\n  overflow-y: auto;\n  display: block;\n}\n\n.active {\n  background-color: #dddddd;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLXZpZXcvb3JkZXJzLXRyYXktbGlzdC9vcmRlcnMtdHJheS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMtdmlldy9vcmRlcnMtdHJheS1saXN0L29yZGVycy10cmF5LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/orders-view/orders-tray-list/orders-tray-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/orders-view/orders-tray-list/orders-tray-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrdersTrayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersTrayListComponent", function() { return OrdersTrayListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orders_restful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders-restful.service */ "./src/app/orders-view/orders-restful.service.ts");



var OrdersTrayListComponent = /** @class */ (function () {
    function OrdersTrayListComponent(orderhttp) {
        this.orderhttp = orderhttp;
    }
    OrdersTrayListComponent.prototype.ngOnInit = function () {
    };
    OrdersTrayListComponent.ctorParameters = function () { return [
        { type: _orders_restful_service__WEBPACK_IMPORTED_MODULE_2__["OrdersRestfulService"] }
    ]; };
    OrdersTrayListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders-tray-list',
            template: __webpack_require__(/*! raw-loader!./orders-tray-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/orders-tray-list/orders-tray-list.component.html"),
            styles: [__webpack_require__(/*! ./orders-tray-list.component.css */ "./src/app/orders-view/orders-tray-list/orders-tray-list.component.css")]
        })
    ], OrdersTrayListComponent);
    return OrdersTrayListComponent;
}());



/***/ }),

/***/ "./src/app/orders-view/orders-tray-search/orders-tray-search.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/orders-view/orders-tray-search/orders-tray-search.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n   padding: 15px 10px;\n   display: -webkit-box;\n   display: flex;\n   -webkit-box-orient: horizontal;\n   -webkit-box-direction: normal;\n           flex-flow: row nowrap;\n   -webkit-box-align: center;\n           align-items: center;\n}\n\ni {\n   font-size: 35px;\n   -webkit-user-select: none;\n      -moz-user-select: none;\n       -ms-user-select: none;\n           user-select: none;\n}\n\ni:hover {\n   background-color: #dddddd;\n   cursor: pointer;\n}\n\ni:active {\n   background-color: #cccccc;\n}\n\ni.filter {\n   margin-left: 10px;\n}\n\ninput[type=text] {\n   width: 50px;\n   -webkit-box-flex: 1;\n           flex: 1 1 auto;\n   box-sizing: border-box;\n   border: solid #eee 1px;\n   border-radius: 4px;\n   font-size: 25px;\n   background-color: #eeeeee;\n   background-image: url('/assets/photos/baseline_search_black_36dp.png');\n   background-position: 3px 3px;\n   background-repeat: no-repeat;\n   /* padding: 12px 20px 12px 40px; */\n   padding: 5px 0px 5px 40px;\n   outline: none;\n}\n\ninput[type=text]:focus {\n   background-color: white;\n   border: solid #ccc 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLXZpZXcvb3JkZXJzLXRyYXktc2VhcmNoL29yZGVycy10cmF5LXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0dBQ2Isa0JBQWtCO0dBQ2xCLG9CQUFhO0dBQWIsYUFBYTtHQUNiLDhCQUFxQjtHQUFyQiw2QkFBcUI7V0FBckIscUJBQXFCO0dBQ3JCLHlCQUFtQjtXQUFuQixtQkFBbUI7QUFDdEI7O0FBRUE7R0FDRyxlQUFlO0dBQ2YseUJBQWlCO01BQWpCLHNCQUFpQjtPQUFqQixxQkFBaUI7V0FBakIsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0cseUJBQXlCO0dBQ3pCLGVBQWU7QUFDbEI7O0FBRUE7R0FDRyx5QkFBeUI7QUFDNUI7O0FBRUE7R0FDRyxpQkFBaUI7QUFDcEI7O0FBRUE7R0FDRyxXQUFXO0dBQ1gsbUJBQWM7V0FBZCxjQUFjO0dBQ2Qsc0JBQXNCO0dBQ3RCLHNCQUFzQjtHQUN0QixrQkFBa0I7R0FDbEIsZUFBZTtHQUNmLHlCQUF5QjtHQUN6QixzRUFBc0U7R0FDdEUsNEJBQTRCO0dBQzVCLDRCQUE0QjtHQUM1QixrQ0FBa0M7R0FDbEMseUJBQXlCO0dBQ3pCLGFBQWE7QUFDaEI7O0FBRUE7R0FDRyx1QkFBdUI7R0FDdkIsc0JBQXNCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzLXZpZXcvb3JkZXJzLXRyYXktc2VhcmNoL29yZGVycy10cmF5LXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pIHtcbiAgIGZvbnQtc2l6ZTogMzVweDtcbiAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5pOmhvdmVyIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmk6YWN0aXZlIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5cbmkuZmlsdGVyIHtcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgIHdpZHRoOiA1MHB4O1xuICAgZmxleDogMSAxIGF1dG87XG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgYm9yZGVyOiBzb2xpZCAjZWVlIDFweDtcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgIGZvbnQtc2l6ZTogMjVweDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvcGhvdG9zL2Jhc2VsaW5lX3NlYXJjaF9ibGFja18zNmRwLnBuZycpO1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogM3B4IDNweDtcbiAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAvKiBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCA0MHB4OyAqL1xuICAgcGFkZGluZzogNXB4IDBweCA1cHggNDBweDtcbiAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/orders-view/orders-tray-search/orders-tray-search.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/orders-view/orders-tray-search/orders-tray-search.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrdersTraySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersTraySearchComponent", function() { return OrdersTraySearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _orders_restful_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders-restful.service */ "./src/app/orders-view/orders-restful.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var OrdersTraySearchComponent = /** @class */ (function () {
    function OrdersTraySearchComponent(orderhttp) {
        this.orderhttp = orderhttp;
    }
    OrdersTraySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (value) { return _this.orderhttp.orderQuery = value; });
    };
    OrdersTraySearchComponent.ctorParameters = function () { return [
        { type: _orders_restful_service__WEBPACK_IMPORTED_MODULE_3__["OrdersRestfulService"] }
    ]; };
    OrdersTraySearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders-tray-search',
            template: __webpack_require__(/*! raw-loader!./orders-tray-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/orders-tray-search/orders-tray-search.component.html"),
            styles: [__webpack_require__(/*! ./orders-tray-search.component.css */ "./src/app/orders-view/orders-tray-search/orders-tray-search.component.css")]
        })
    ], OrdersTraySearchComponent);
    return OrdersTraySearchComponent;
}());



/***/ }),

/***/ "./src/app/orders-view/orders-tray/orders-tray.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/orders-view/orders-tray/orders-tray.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    width: 300px;\n    -webkit-box-flex: 0;\n            flex: 0 0 auto;\n    background-color: #eeeeee;\n    overflow: hidden;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column nowrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLXZpZXcvb3JkZXJzLXRyYXkvb3JkZXJzLXRyYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBYztZQUFkLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUF3QjtJQUF4Qiw2QkFBd0I7WUFBeEIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzLXZpZXcvb3JkZXJzLXRyYXkvb3JkZXJzLXRyYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/orders-view/orders-tray/orders-tray.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/orders-view/orders-tray/orders-tray.component.ts ***!
  \******************************************************************/
/*! exports provided: OrdersTrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersTrayComponent", function() { return OrdersTrayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrdersTrayComponent = /** @class */ (function () {
    function OrdersTrayComponent() {
    }
    OrdersTrayComponent.prototype.ngOnInit = function () {
    };
    OrdersTrayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders-tray',
            template: __webpack_require__(/*! raw-loader!./orders-tray.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/orders-tray/orders-tray.component.html"),
            styles: [__webpack_require__(/*! ./orders-tray.component.css */ "./src/app/orders-view/orders-tray/orders-tray.component.css")]
        })
    ], OrdersTrayComponent);
    return OrdersTrayComponent;
}());



/***/ }),

/***/ "./src/app/orders-view/orders-view-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/orders-view/orders-view-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_module_view_orders_module_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-module-view/orders-module-view.component */ "./src/app/orders-view/orders-module-view/orders-module-view.component.ts");
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeholder/placeholder.component */ "./src/app/orders-view/placeholder/placeholder.component.ts");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/orders-view/new-order/new-order.component.ts");
/* harmony import */ var _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-view/order-view.component */ "./src/app/orders-view/order-view/order-view.component.ts");







var routes = [
    { path: '', component: _orders_module_view_orders_module_view_component__WEBPACK_IMPORTED_MODULE_3__["OrdersModuleViewComponent"],
        children: [
            { path: '', component: _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_4__["PlaceholderComponent"] },
            { path: 'new', component: _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_5__["NewOrderComponent"] },
            { path: ':id', component: _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_6__["OrderViewComponent"] }
        ],
    }
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/orders-view/orders-view.module.ts":
/*!***************************************************!*\
  !*** ./src/app/orders-view/orders-view.module.ts ***!
  \***************************************************/
/*! exports provided: OrdersViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersViewModule", function() { return OrdersViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _orders_restful_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-restful.service */ "./src/app/orders-view/orders-restful.service.ts");
/* harmony import */ var _orders_view_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-view-routing.module */ "./src/app/orders-view/orders-view-routing.module.ts");
/* harmony import */ var _orders_module_view_orders_module_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders-module-view/orders-module-view.component */ "./src/app/orders-view/orders-module-view/orders-module-view.component.ts");
/* harmony import */ var _orders_tray_orders_tray_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders-tray/orders-tray.component */ "./src/app/orders-view/orders-tray/orders-tray.component.ts");
/* harmony import */ var _orders_tray_list_orders_tray_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders-tray-list/orders-tray-list.component */ "./src/app/orders-view/orders-tray-list/orders-tray-list.component.ts");
/* harmony import */ var _orders_tray_list_item_orders_tray_list_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orders-tray-list-item/orders-tray-list-item.component */ "./src/app/orders-view/orders-tray-list-item/orders-tray-list-item.component.ts");
/* harmony import */ var _orders_tray_search_orders_tray_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders-tray-search/orders-tray-search.component */ "./src/app/orders-view/orders-tray-search/orders-tray-search.component.ts");
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./placeholder/placeholder.component */ "./src/app/orders-view/placeholder/placeholder.component.ts");
/* harmony import */ var _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-view/order-view.component */ "./src/app/orders-view/order-view/order-view.component.ts");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/orders-view/new-order/new-order.component.ts");
/* harmony import */ var _create_form_create_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-form/create-form.component */ "./src/app/orders-view/create-form/create-form.component.ts");
/* harmony import */ var _base_form_base_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./base-form/base-form.component */ "./src/app/orders-view/base-form/base-form.component.ts");
/* harmony import */ var _new_button_new_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./new-button/new-button.component */ "./src/app/orders-view/new-button/new-button.component.ts");
/* harmony import */ var _verify_form_verify_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./verify-form/verify-form.component */ "./src/app/orders-view/verify-form/verify-form.component.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/orders-view/quote-form/quote-form.component.ts");
/* harmony import */ var _approve_form_approve_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./approve-form/approve-form.component */ "./src/app/orders-view/approve-form/approve-form.component.ts");
/* harmony import */ var _purchase_form_purchase_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./purchase-form/purchase-form.component */ "./src/app/orders-view/purchase-form/purchase-form.component.ts");
/* harmony import */ var _delivered_form_delivered_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./delivered-form/delivered-form.component */ "./src/app/orders-view/delivered-form/delivered-form.component.ts");
/* harmony import */ var _status_transform_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./status-transform.pipe */ "./src/app/orders-view/status-transform.pipe.ts");
/* harmony import */ var _order_search_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./order-search.pipe */ "./src/app/orders-view/order-search.pipe.ts");
/* harmony import */ var _delete_form_delete_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./delete-form/delete-form.component */ "./src/app/orders-view/delete-form/delete-form.component.ts");


























var OrdersViewModule = /** @class */ (function () {
    function OrdersViewModule() {
    }
    OrdersViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_orders_module_view_orders_module_view_component__WEBPACK_IMPORTED_MODULE_7__["OrdersModuleViewComponent"], _orders_tray_orders_tray_component__WEBPACK_IMPORTED_MODULE_8__["OrdersTrayComponent"], _orders_tray_list_orders_tray_list_component__WEBPACK_IMPORTED_MODULE_9__["OrdersTrayListComponent"], _orders_tray_list_item_orders_tray_list_item_component__WEBPACK_IMPORTED_MODULE_10__["OrdersTrayListItemComponent"], _orders_tray_search_orders_tray_search_component__WEBPACK_IMPORTED_MODULE_11__["OrdersTraySearchComponent"], _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_12__["PlaceholderComponent"], _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_13__["OrderViewComponent"], _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_14__["NewOrderComponent"], _create_form_create_form_component__WEBPACK_IMPORTED_MODULE_15__["CreateFormComponent"], _base_form_base_form_component__WEBPACK_IMPORTED_MODULE_16__["BaseFormComponent"], _new_button_new_button_component__WEBPACK_IMPORTED_MODULE_17__["NewButtonComponent"], _verify_form_verify_form_component__WEBPACK_IMPORTED_MODULE_18__["VerifyFormComponent"], _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_19__["QuoteFormComponent"], _approve_form_approve_form_component__WEBPACK_IMPORTED_MODULE_20__["ApproveFormComponent"], _purchase_form_purchase_form_component__WEBPACK_IMPORTED_MODULE_21__["PurchaseFormComponent"], _delivered_form_delivered_form_component__WEBPACK_IMPORTED_MODULE_22__["DeliveredFormComponent"], _status_transform_pipe__WEBPACK_IMPORTED_MODULE_23__["StatusTransformPipe"], _order_search_pipe__WEBPACK_IMPORTED_MODULE_24__["OrderSearchPipe"], _delete_form_delete_form_component__WEBPACK_IMPORTED_MODULE_25__["DeleteFormComponent"]],
            providers: [_orders_restful_service__WEBPACK_IMPORTED_MODULE_5__["OrdersRestfulService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _orders_view_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrdersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            exports: [_orders_module_view_orders_module_view_component__WEBPACK_IMPORTED_MODULE_7__["OrdersModuleViewComponent"]]
        })
    ], OrdersViewModule);
    return OrdersViewModule;
}());



/***/ }),

/***/ "./src/app/orders-view/placeholder/placeholder.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/orders-view/placeholder/placeholder.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/orders-view/placeholder/placeholder.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/orders-view/placeholder/placeholder.component.ts ***!
  \******************************************************************/
/*! exports provided: PlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderComponent", function() { return PlaceholderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlaceholderComponent = /** @class */ (function () {
    function PlaceholderComponent() {
    }
    PlaceholderComponent.prototype.ngOnInit = function () {
    };
    PlaceholderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-placeholder',
            template: __webpack_require__(/*! raw-loader!./placeholder.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/placeholder/placeholder.component.html"),
            styles: [__webpack_require__(/*! ./placeholder.component.css */ "./src/app/orders-view/placeholder/placeholder.component.css")]
        })
    ], PlaceholderComponent);
    return PlaceholderComponent;
}());



/***/ }),

/***/ "./src/app/orders-view/purchase-form/purchase-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/orders-view/purchase-form/purchase-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L3B1cmNoYXNlLWZvcm0vcHVyY2hhc2UtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/orders-view/purchase-form/purchase-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/orders-view/purchase-form/purchase-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: PurchaseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseFormComponent", function() { return PurchaseFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-form/base-form.component */ "./src/app/orders-view/base-form/base-form.component.ts");



var PurchaseFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PurchaseFormComponent, _super);
    function PurchaseFormComponent() {
        return _super.call(this) || this;
    }
    PurchaseFormComponent.prototype.ngOnInit = function () {
    };
    PurchaseFormComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.purchaseFile = event.target.files[0];
        }
    };
    PurchaseFormComponent.prototype.submitForm = function (append) {
        if (!append) {
            append = {};
        }
        if (this.purchaseFile) {
            append["purchaseReceipt"] = this.purchaseFile;
        }
        _super.prototype.submitForm.call(this, append);
    };
    PurchaseFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-form',
            template: __webpack_require__(/*! raw-loader!./purchase-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/purchase-form/purchase-form.component.html"),
            styles: [__webpack_require__(/*! ./purchase-form.component.css */ "./src/app/orders-view/purchase-form/purchase-form.component.css"), __webpack_require__(/*! ../base-form/base-form.component.css */ "./src/app/orders-view/base-form/base-form.component.css")]
        })
    ], PurchaseFormComponent);
    return PurchaseFormComponent;
}(_base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/orders-view/quote-form/quote-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/orders-view/quote-form/quote-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L3F1b3RlLWZvcm0vcXVvdGUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/orders-view/quote-form/quote-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/orders-view/quote-form/quote-form.component.ts ***!
  \****************************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-form/base-form.component */ "./src/app/orders-view/base-form/base-form.component.ts");



var QuoteFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QuoteFormComponent, _super);
    function QuoteFormComponent() {
        return _super.call(this) || this;
    }
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    QuoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! raw-loader!./quote-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/quote-form/quote-form.component.html"),
            styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/orders-view/quote-form/quote-form.component.css"), __webpack_require__(/*! ../base-form/base-form.component.css */ "./src/app/orders-view/base-form/base-form.component.css")]
        })
    ], QuoteFormComponent);
    return QuoteFormComponent;
}(_base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/orders-view/status-transform.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/orders-view/status-transform.pipe.ts ***!
  \******************************************************/
/*! exports provided: StatusTransformPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusTransformPipe", function() { return StatusTransformPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Status = /** @class */ (function () {
    function Status(acronym, color) {
        this.acronym = acronym;
        this.color = color;
    }
    Status.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return Status;
}());
var StatusTransformPipe = /** @class */ (function () {
    function StatusTransformPipe() {
        this.statDict = {
            100: new Status("HCP", "yellow"),
            200: new Status("HCA", "yellow"),
            300: new Status("SOP", "orange"),
            400: new Status("SOA", "green"),
            500: new Status("EO", "green"),
            600: new Status("EE", "green"),
            700: new Status("DS", "red"),
            800: new Status("DGM", "red"),
        };
    }
    StatusTransformPipe.prototype.transform = function (value, arg) {
        if (!value)
            return null;
        if (!arg)
            return value;
        //console.log(value);
        if (arg == "color") {
            return this.statDict[value].color;
        }
        else if (arg == "acronym") {
            return this.statDict[value].acronym;
        }
        return value;
    };
    StatusTransformPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'statusTransform'
        })
    ], StatusTransformPipe);
    return StatusTransformPipe;
}());



/***/ }),

/***/ "./src/app/orders-view/verify-form/verify-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/orders-view/verify-form/verify-form.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy12aWV3L3ZlcmlmeS1mb3JtL3ZlcmlmeS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/orders-view/verify-form/verify-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/orders-view/verify-form/verify-form.component.ts ***!
  \******************************************************************/
/*! exports provided: VerifyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyFormComponent", function() { return VerifyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-form/base-form.component */ "./src/app/orders-view/base-form/base-form.component.ts");



var VerifyFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VerifyFormComponent, _super);
    function VerifyFormComponent() {
        return _super.call(this) || this;
    }
    VerifyFormComponent.prototype.ngOnInit = function () {
    };
    VerifyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-form',
            template: __webpack_require__(/*! raw-loader!./verify-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders-view/verify-form/verify-form.component.html"),
            styles: [__webpack_require__(/*! ./verify-form.component.css */ "./src/app/orders-view/verify-form/verify-form.component.css"), __webpack_require__(/*! ../base-form/base-form.component.css */ "./src/app/orders-view/base-form/base-form.component.css")]
        })
    ], VerifyFormComponent);
    return VerifyFormComponent;
}(_base_form_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ })

}]);
//# sourceMappingURL=orders-view-orders-view-module-es5.js.map