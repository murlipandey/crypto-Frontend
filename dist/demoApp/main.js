(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-name */ "./src/app/route-name.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/forget-password/forget-password.component.ts");
/* harmony import */ var _complain_box_complain_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complain-box/complain-box.component */ "./src/app/complain-box/complain-box.component.ts");
/* harmony import */ var src_app_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");








var DEFAULTPATH = _route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].LOGINFORM;
var routes = [
    { path: '', component: src_app_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"] },
    { path: DEFAULTPATH, component: src_app_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"] },
    { path: _route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].SIGNUPFORM, component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: _route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].FORGETPWD, component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"] },
    { path: _route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].HOMEPAGE, component: _complain_box_complain_box_component__WEBPACK_IMPORTED_MODULE_6__["ComplainBoxComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-wrapper\n{\n    height:100vh;\n}\n\n#background\n{\n    height:150vh;\n}\n\n.desktop\n{\n    max-width:800px;\n    margin:auto;\n    padding:20px 15px 40px 15px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtDQUNoQjs7QUFFRDs7SUFFSSxhQUFhO0NBQ2hCOztBQUVEOztJQUVJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNEJBQTRCO0NBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwLXdyYXBwZXJcbntcbiAgICBoZWlnaHQ6MTAwdmg7XG59XG5cbiNiYWNrZ3JvdW5kXG57XG4gICAgaGVpZ2h0OjE1MHZoO1xufVxuXG4uZGVza3RvcFxue1xuICAgIG1heC13aWR0aDo4MDBweDtcbiAgICBtYXJnaW46YXV0bztcbiAgICBwYWRkaW5nOjIwcHggMTVweCA0MHB4IDE1cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-wrapper background\">\n<div class=\"light-theme\">\n \n</div>\n<div [class.desktop]=\"!isMobile\" [class.mobile]=\"isMobile\" >\n  <router-outlet  #route=\"outlet\"></router-outlet>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'demoApp';
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.forgetPassword = function () {
        //  this.router.navigate([routeNames.FORGETPWD]);
    };
    AppComponent.prototype.signup = function () {
        // this.router.navigate([routeNames.SIGNUPFORM]);
    };
    AppComponent.prototype.loginPage = function () {
        // this.router.navigate([routeNames.HOMEPAGE]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/forget-password/forget-password.component.ts");
/* harmony import */ var _complain_box_complain_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complain-box/complain-box.component */ "./src/app/complain-box/complain-box.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
                _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordComponent"],
                _complain_box_complain_box_component__WEBPACK_IMPORTED_MODULE_7__["ComplainBoxComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/complain-box/complain-box.component.css":
/*!*********************************************************!*\
  !*** ./src/app/complain-box/complain-box.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    width: 60%;\r\n    border: 2px solid black;\r\n    margin-left: 15%;\r\n    margin-top: 50px;\r\n  }\r\n \r\n   th, td {\r\n    padding: 8px;\r\n    text-align: left;\r\n    font-size:12px;\r\n    border: 1px solid #ddd;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n \r\n   tr:hover {\r\n      background-color:#f5f5f5;\r\n    }\r\n \r\n   .comment{\r\nfloat: right;\r\nmargin-top: 90px;\r\n\r\n  }\r\n \r\n   img{\r\n    border: 1px solid black;\r\n    padding: 5px;\r\n  }\r\n \r\n   .search{\r\nmargin-left: 330px;\r\n  }\r\n \r\n   a {\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  padding: 8px 16px;\r\n}\r\n \r\n   a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n \r\n   .previous {\r\n  background-color: #f1f1f1;\r\n  color: black;\r\n}\r\n \r\n   .next{\r\n   background-color: #f1f1f1;\r\n  color: black;\r\n  margin-left: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxhaW4tYm94L2NvbXBsYWluLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjs7R0FFQTtJQUNDLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qiw4QkFBOEI7R0FDL0I7O0dBQ0Q7TUFDSSx5QkFBeUI7S0FDMUI7O0dBRUg7QUFDRixhQUFhO0FBQ2IsaUJBQWlCOztHQUVkOztHQUNEO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7R0FDZDs7R0FDRDtBQUNGLG1CQUFtQjtHQUNoQjs7R0FDSDtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25COztHQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7Q0FDZDs7R0FFRDtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0NBQ2Q7O0dBQ0Q7R0FDRywwQkFBMEI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsYWluLWJveC9jb21wbGFpbi1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiBcclxuICAgdGgsIHRkIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgdHI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7XHJcbiAgICB9XHJcblxyXG4gIC5jb21tZW50e1xyXG5mbG9hdDogcmlnaHQ7XHJcbm1hcmdpbi10b3A6IDkwcHg7XHJcblxyXG4gIH1cclxuICBpbWd7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgLnNlYXJjaHtcclxubWFyZ2luLWxlZnQ6IDMzMHB4O1xyXG4gIH1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wcmV2aW91cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm5leHR7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/complain-box/complain-box.component.html":
/*!**********************************************************!*\
  !*** ./src/app/complain-box/complain-box.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"main\">\n  <div class=\"search\">\n    <input type=\"text\" name=\"Search\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\">\n     <button type=\"button\">\n      <span class=\"glyphicon glyphicon-search\"></span> Search\n    </button>\n  </div>\n\n\n  <div style=\"text-align: center\">\n<table>\n  <tr>\n    <th>Complaint ID</th>\n    <th>Service Order Number</th>\n    <th>Status</th>\n  </tr>\n\n  <!--<tr>\n    <td>001</td>\n    <td>1256</td>\n    <td>In Progress</td>\n  </tr>\n  <tr>\n    <td>002</td>\n    <td>1566</td>\n    <td>Done</td>\n  </tr>\n  <tr>\n    <td>003</td>\n    <td>8965</td>\n    <td>In Progress</td>\n  </tr>\n  <tr>\n    <td>001</td>\n    <td>1256</td>\n    <td>In Progress</td>\n  </tr>\n  <tr>\n    <td>001</td>\n    <td>1256</td>\n    <td>Done</td>\n  </tr>\n  <tr>\n    <td>001</td>\n    <td>1256</td>\n    <td>Done</td>\n  </tr>\n  <tr>\n    <td>001</td>\n    <td>1256</td>\n    <td>In Progress</td>\n  </tr>\n  <tr>\n    <td>005</td>\n    <td>1452</td>\n    <td>Done</td>\n  </tr>-->\n\n  <tbody>\n    <tr *ngFor=\"let item of collection.data |paginate: config\">\n      <th scope=\"row\">{{item.id}}</th>\n      <td>{{item.value}}</td>\n        <td>{{item.status}}</td>\n    </tr>\n  </tbody>\n</table>\n\n  <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n\n</div>\n\n\n\n<div class=\"comment\">\n  <form action=\"\">\n    Put you Comment Here:<br>\n\n    <textarea name=\"paragraph_text\" cols=\"45\" rows=\"5\"></textarea> <br>\n    <input type=\"submit\" class=\"btn btn-success\" name=\"Submit\" (click)=\"Submit()\"> <br>\n\n    <img *ngFor='let url of urls' [src]=\"url\" height=\"100\" width=\"100\">\n    <input type=\"file\" accept='image/*' multiple (change)=\"preview($event)\" />\n\n\n  </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/complain-box/complain-box.component.ts":
/*!********************************************************!*\
  !*** ./src/app/complain-box/complain-box.component.ts ***!
  \********************************************************/
/*! exports provided: ComplainBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainBoxComponent", function() { return ComplainBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ComplainBoxComponent = /** @class */ (function () {
    function ComplainBoxComponent(http) {
        this.http = http;
        this.urls = [];
        this.collection = { count: 20, data: [] };
        for (var i = 0; i < this.collection.count; i++) {
            this.collection.data.push({
                id: i + 1,
                value: "1526" + (i + 1),
                status: "In progress"
            });
        }
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.collection.count
        };
    }
    ComplainBoxComponent.prototype.preview = function (event) {
        var _this = this;
        if (event.target.files === 0) {
            return;
        }
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var filelength = event.target.files.length;
        for (var i = 0; i < filelength; i++) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.urls.push(event.target.result);
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    };
    ComplainBoxComponent.prototype.search = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var url = "http://localhost:8001/complaint/search?userId=7878";
        return this.http.get(url);
    };
    ComplainBoxComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ComplainBoxComponent.prototype.ngOnInit = function () {
    };
    ComplainBoxComponent.prototype.Submit = function () {
        alert("your complaint successfully submitted");
    };
    ComplainBoxComponent.prototype.uploadImage = function () {
    };
    ComplainBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complain-box',
            template: __webpack_require__(/*! ./complain-box.component.html */ "./src/app/complain-box/complain-box.component.html"),
            styles: [__webpack_require__(/*! ./complain-box.component.css */ "./src/app/complain-box/complain-box.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ComplainBoxComponent);
    return ComplainBoxComponent;
}());



/***/ }),

/***/ "./src/app/forget-password/forget-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forget-password/forget-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row\r\n{\r\n    margin: 20px;\r\n}\r\ninput\r\n{\r\n    align-content: right;\r\n}\r\n.colLeft\r\n{\r\n    align-content: left;\r\n}\r\n.main{\r\n    align-content: center;\r\n    margin-top: 30%;\r\n    border: 2px solid blue;\r\n    width: 70%;\r\n    height: 60%;\r\n    margin-left: 20%;\r\n}\r\n.btn1{\r\n    margin-left: 10%;\r\n}\r\n.btn{\r\n    margin-bottom: 3%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7Q0FDaEI7QUFDRDs7SUFFSSxxQkFBcUI7Q0FDeEI7QUFFRDs7SUFFSSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dcclxue1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbmlucHV0XHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY29sTGVmdFxyXG57XHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xyXG59XHJcbi5tYWlue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuLmJ0bjF7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbi5idG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/forget-password/forget-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forget-password/forget-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n<form style=\"text-align:center\" class=\"main\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <label class=\"colLeft\">Email ID: </label></div>\n    <div class=\"col-sm-6\">\n      <input id=\"emailid\" type=\"text\" name=\"emailid\" class=\"colRight\"></div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <label class=\"colLeft\">New Password: </label></div>\n    <div class=\"col-sm-6\">\n      <input id=\"password\" type=\"password\" name=\"password\" class=\"colRight\"></div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <label class=\"colLeft\">Confirm Password: </label></div>\n    <div class=\"col-sm-6\">\n      <input  id=\"confirmPassword\"  type=\"password\" name=\"confirmPassword\" class=\"colRight\"></div>\n  </div>\n\n  <input type=\"submit\" value=\"Submit\"class=\"btn btn-success btn-md\" name=\"\" (click)=\"resetPassword()\">\n\n  <input type=\"submit\" value=\"Cancel\"class=\"btn btn1 btn-danger btn-md\" name=\"\" (click)=\"BackButton()\">\n\n</form>"

/***/ }),

/***/ "./src/app/forget-password/forget-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forget-password/forget-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route-name */ "./src/app/route-name.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        //var obj:jsondata;
        this.emailId = document.getElementById("emailid").value;
        this.password = document.getElementById("password").value;
        var headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        //'Access-Control-Allow-Headers': 'Content-Type',
        //5000 Tejas123
        //
        var requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        var data = {
            userId: this.emailId,
            password: this.password
        };
        var obj;
        this.http.post("http://localhost:8001/forgotPassword", data, requestOptions)
            .subscribe(function (res) {
            obj = res;
            if (obj.message == "Password updated successfully") {
                _this.router.navigate([_route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].LOGINFORM]);
                alert(obj.message);
            }
            else {
                alert(obj.message);
            }
        }, function (err) { return console.log(err); });
        this.router.navigate([_route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].LOGINFORM]);
    };
    ForgetPasswordComponent.prototype.BackButton = function () {
        this.router.navigate([_route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].LOGINFORM]);
    };
    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/forget-password/forget-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { \r\n    margin: 0;\r\n    padding:0;\r\n    background-size:cover;\r\n    background-position:center;\r\n}\r\n\r\n\r\n.loginbox{\r\n    width:30%;\r\n    height:70%;\r\n    background: #fff;\r\n    color:#000;\r\n    top:50%;\r\n    left:80%;\r\n    position:absolute;\r\n    transform: translate(-50%,-50%);\r\n    box-sizing: border-box;\r\n    padding:76px 30px;\r\n    border: 1px solid black;\r\n}\r\n\r\n\r\n.avatar{\r\n  width: 20%;\r\n  height: 12%;\r\n  border-radius: 20%;\r\n  position:absolute;\r\n  top:-10%;\r\n  left:calc(50% - 50px)  ;\r\n\r\n}\r\n\r\n\r\nh1{\r\n    margin:0;\r\n    padding:0 0  20px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n}\r\n\r\n\r\n.loginbox p {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.loginbox input {\r\nwidth: 80%;\r\nmargin: 20px;\r\n}\r\n\r\n\r\n.loginbox input[type=text],input[type=password]\r\n{\r\n    border:none;\r\n    border-bottom: 1px solid #000;\r\n    background: transparent;\r\n    outline: none;\r\n    height: 40px;\r\n    color:#000;\r\n    font-size: 16px;\r\n}\r\n\r\n\r\n.loginbox input[type=submit]\r\n{\r\n    border:none;\r\n    outline: none;\r\n    height: 40px;\r\n    font-size: 20px;  \r\n  border-radius: 20px;\r\n}\r\n\r\n\r\n.loginbox input[type=submit]:hover\r\n{\r\n    cursor: pointer;\r\n    background: rgb(37, 22, 119);\r\n    color: #fff;\r\n}\r\n\r\n\r\n.loginbox a\r\n{\r\n    text-decoration: underline;\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n    color: darkblue;\r\n    \r\n}\r\n\r\n\r\n.loginbox a:hover\r\n{\r\n    color: chocolate;\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QiwyQkFBMkI7Q0FDOUI7OztBQUdEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtDQUMzQjs7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULHdCQUF3Qjs7Q0FFekI7OztBQUVEO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25COzs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCOzs7QUFFRDtBQUNBLFdBQVc7QUFDWCxhQUFhO0NBQ1o7OztBQUVEOztJQUVJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtDQUNuQjs7O0FBRUQ7O0lBRUksWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCLG9CQUFvQjtDQUNyQjs7O0FBRUQ7O0lBRUksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0NBQ2Y7OztBQUVEOztJQUVJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7Q0FFbkI7OztBQUVEOztJQUVJLGlCQUFpQjs7Q0FFcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgeyBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG59XHJcblxyXG5cclxuLmxvZ2luYm94e1xyXG4gICAgd2lkdGg6MzAlO1xyXG4gICAgaGVpZ2h0OjcwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6ODAlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6NzZweCAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5hdmF0YXJ7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDEyJTtcclxuICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOi0xMCU7XHJcbiAgbGVmdDpjYWxjKDUwJSAtIDUwcHgpICA7XHJcblxyXG59XHJcblxyXG5oMXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowIDAgIDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5sb2dpbmJveCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxvZ2luYm94IGlucHV0IHtcclxud2lkdGg6IDgwJTtcclxubWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW5ib3ggaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPXBhc3N3b3JkXVxyXG57XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6IzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmxvZ2luYm94IGlucHV0W3R5cGU9c3VibWl0XVxyXG57XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7ICBcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW5ib3ggaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigzNywgMjIsIDExOSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ2luYm94IGFcclxue1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIFxyXG59XHJcblxyXG4ubG9naW5ib3ggYTpob3ZlclxyXG57XHJcbiAgICBjb2xvcjogY2hvY29sYXRlO1xyXG4gICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login-page/login-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n  \n\n<body>\n\t<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=100% height=200% style=\"border: 1px solid black\" src=\"../assets/complaint.jpg\">\n</div>\n\n    <div class=\"loginbox\">\n     <img src=\"../assets/avatar.png\"  class=avatar>\n    <h1>\n      Login Here\n    </h1>\n    <form >\n    <p> User Name</p>\n    \n    <input id=\"username\" type=\"text\" name=\"username\" height=30% width=50% placeholder=\"Enter your Name\" >\n    <p> Password </p>\n    <input id=\"userpassword\" type=\"password\" name=\"userpassword\" placeholder=\"Enter your Password\">\n    <p>  </p>\n\n    <nav>\n         \n    <input type=\"submit\" name=\"\"  Value=\"Login\" (click)=\"loginPage()\" >\n       \n  <h2><a   routerLinkActive=\"active\" (click)=\"signup()\">  Sign Up   </a></h2>\n        \n       \n  <h2><a routerLinkActive=\"active\" (click)=\"forgetPassword()\">Forget Password?</a></h2>\n</nav>  \n   </form>\n    </div>\n\n      \n    </body>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route-name */ "./src/app/route-name.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(http, router) {
        this.http = http;
        this.router = router;
        this.title = "Crypto Currency App";
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        // this.router.navigate([routeNames.LOGINFORM]);
    };
    LoginPageComponent.prototype.forgetPassword = function () {
        this.router.navigate([_route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].FORGETPWD]);
    };
    LoginPageComponent.prototype.signup = function () {
        this.router.navigate([_route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].SIGNUPFORM]);
    };
    LoginPageComponent.prototype.loginPage = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        //var obj:jsondata;
        this.userId = document.getElementById("username").value;
        this.userpassword = document.getElementById("userpassword").value;
        var headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        //'Access-Control-Allow-Headers': 'Content-Type',
        //5000 Tejas123
        //
        var requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        var data = {
            userId: this.userId,
            password: this.userpassword
        };
        var obj;
        this.http.post("http://localhost:8003/authenticateuser", data, requestOptions)
            .subscribe(function (res) {
            obj = res;
            if (obj.message == "Login Successful") {
                _this.router.navigate([_route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].HOMEPAGE]);
            }
            else {
                alert(obj.message);
            }
        }, function (err) { return console.log(err); });
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/route-name.ts":
/*!*******************************!*\
  !*** ./src/app/route-name.ts ***!
  \*******************************/
/*! exports provided: routeNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeNames", function() { return routeNames; });
var routeNames = {
    DEFAULTPGE: 'Appcomponentpage',
    LOGINFORM: 'loginForm',
    SIGNUPFORM: 'signeUP',
    FORGETPWD: 'forgetpasswd',
    HOMEPAGE: 'Dashboard'
};


/***/ }),

/***/ "./src/app/shared/shared-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/shared-service.service.ts ***!
  \**************************************************/
/*! exports provided: SharedServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedServiceService", function() { return SharedServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedServiceService = /** @class */ (function () {
    function SharedServiceService() {
    }
    SharedServiceService.prototype.setUserID = function (UserID) {
        this.userId = UserID;
    };
    SharedServiceService.prototype.setPassword = function (Password) {
        this.password = Password;
    };
    SharedServiceService.prototype.setFirstName = function (FirstName) {
        this.firstName = FirstName;
    };
    SharedServiceService.prototype.setLastName = function (LastName) {
        this.lastName = LastName;
    };
    SharedServiceService.prototype.setMobileNumber = function (MobileNumber) {
        this.mobileNumber = MobileNumber;
    };
    SharedServiceService.prototype.setemailId = function (emailId) {
        this.emailId = emailId;
    };
    SharedServiceService.prototype.setLastAddressLine1 = function (LastAddressLine1) {
        this.lastAddressLine1 = LastAddressLine1;
    };
    SharedServiceService.prototype.setAddressLine2 = function (AddressLine2) {
        this.addressLine2 = AddressLine2;
    };
    SharedServiceService.prototype.setAddressLine3 = function (AddressLine3) {
        this.addressLine3 = AddressLine3;
    };
    SharedServiceService.prototype.setCity = function (City) {
        this.city = City;
    };
    SharedServiceService.prototype.setState = function (State) {
        this.state = State;
    };
    SharedServiceService.prototype.setCountry = function (Country) {
        this.country = Country;
    };
    SharedServiceService.prototype.setZip = function (Zip) {
        this.zip = Zip;
    };
    SharedServiceService.prototype.setZip4 = function (Zip4) {
        this.zip4 = Zip4;
    };
    SharedServiceService.prototype.setAadharNumber = function (AadharNumber) {
        this.aadharNumber = AadharNumber;
    };
    SharedServiceService.prototype.getUserID = function () {
        return this.userId;
    };
    SharedServiceService.prototype.getPassword = function () {
        return this.password;
    };
    SharedServiceService.prototype.getFirstName = function () {
        return this.firstName;
    };
    SharedServiceService.prototype.getLastName = function () {
        return this.lastName;
    };
    SharedServiceService.prototype.getMobileNumber = function () {
        return this.mobileNumber;
    };
    SharedServiceService.prototype.getemailId = function () {
        return this.emailId;
    };
    SharedServiceService.prototype.getaddressLine1 = function () {
        return this.addressLine1;
    };
    SharedServiceService.prototype.getaddressLine2 = function () {
        return this.addressLine2;
    };
    SharedServiceService.prototype.getaddressLine3 = function () {
        return this.addressLine3;
    };
    SharedServiceService.prototype.getCity = function () {
        return this.city;
    };
    SharedServiceService.prototype.getState = function () {
        return this.state;
    };
    SharedServiceService.prototype.getCountry = function () {
        return this.country;
    };
    SharedServiceService.prototype.getZip = function () {
        return this.zip;
    };
    SharedServiceService.prototype.getZip4 = function () {
        return this.zip4;
    };
    SharedServiceService.prototype.getAadharNumber = function () {
        return this.aadharNumber;
    };
    SharedServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedServiceService);
    return SharedServiceService;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up-DTO.ts":
/*!****************************************!*\
  !*** ./src/app/sign-up/sign-up-DTO.ts ***!
  \****************************************/
/*! exports provided: SignUp, SignUpDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpDto", function() { return SignUpDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignUp = /** @class */ (function () {
    function SignUp() {
    }
    SignUp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], SignUp);
    return SignUp;
}());

var SignUpDto = /** @class */ (function () {
    function SignUpDto(sharedservice) {
        this.sharedservice = sharedservice;
    }
    SignUpDto.prototype.getSignUp = function () {
        var signupdata = {
            userId: this.sharedservice.getUserID(),
            password: this.sharedservice.getPassword(),
            firstName: this.sharedservice.getFirstName(),
            lastName: this.sharedservice.getLastName(),
            mobileNumber: this.sharedservice.getMobileNumber(),
            emailId: this.sharedservice.getemailId(),
            addressLine1: this.sharedservice.getaddressLine1(),
            addressLine2: this.sharedservice.getaddressLine2(),
            addressLine3: this.sharedservice.getaddressLine3(),
            city: this.sharedservice.getCity(),
            state: this.sharedservice.getState(),
            country: this.sharedservice.getCountry(),
            zip: this.sharedservice.getZip(),
            zip4: this.sharedservice.getZip4(),
            aadharNumber: this.sharedservice.getAadharNumber(),
        };
        return signupdata;
    };
    return SignUpDto;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { \n   height: 50%;\n    width:60%;\n    border: 2px solid blue;\n    margin-left: 25%;\n    padding: 3%;\n    margin-top: 3%;\n}\n.row\n{\n    margin: 20px;\n}\ninput\n{\n    align-content: right;\n}\n.colLeft\n{\n    align-content: left;\n}\nlabel{\n    align-content: left;\n}\n.btn1{\n        margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxZQUFZO0lBQ1gsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7Q0FDbEI7QUFDRDs7SUFFSSxhQUFhO0NBQ2hCO0FBQ0Q7O0lBRUkscUJBQXFCO0NBQ3hCO0FBRUQ7O0lBRUksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7QUFDRDtRQUNRLGlCQUFpQjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7IFxuICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6NjAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbn1cbi5yb3dcbntcbiAgICBtYXJnaW46IDIwcHg7XG59XG5pbnB1dFxue1xuICAgIGFsaWduLWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4uY29sTGVmdFxue1xuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XG59XG5sYWJlbHtcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xufVxuLmJ0bjF7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n<div style=\"text-align:center\">\n<h1>\n  Welcome to Sign Up !\n</h1>\n\n</div>\n\n<body>\n  <form style=\"text-align:center\">\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">UserId: </label></div>\n  <div class=\"col-sm-6\">\n    <input type=\"text\" name=\"UserID\" class=\"colRight\" (change)=\"sharedservice.setUserID($event.target.value)\" required></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">Password: </label></div>\n  <div class=\"col-sm-6\">\n    <input type=\"password\" name=\"Password\" class=\"colRight\"  (change)=\"sharedservice.setPassword($event.target.value)\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">FirstName: </label></div>\n  <div class=\"col-sm-6\">\n    <input type=\"text\" name=\"FirstName\" class=\"colRight\"  (change)=\"sharedservice.setFirstName($event.target.value)\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">LastName: </label></div>\n  <div class=\"col-sm-6\">\n    <input type=\"text\" name=\"LastName\" class=\"colRight\"  (change)=\"sharedservice.setLastName($event.target.value)\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">MobileNumber: </label></div>\n  <div class=\"col-sm-6\">\n    <input type=\"text\" name=\"MobileNumber\"  class=\"colRight\" (change)=\"sharedservice.setMobileNumber($event.target.value)\" ngModel pattern=\"^\\d{10}$\" required></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">emailId: </label></div>\n  <div class=\"col-sm-6\">\n    <input type=\"email\" name=\"emailId\"  class=\"colRight\" (change)=\"sharedservice.setemailId($event.target.value)\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">LastAddressLine1:</label></div>\n  <div class=\"col-sm-6\">\n    <input type=\"text\" name=\"LastAddressLine1\"  class=\"colRight\" (change)=\"sharedservice.setLastAddressLine1($event.target.value)\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">AddressLine2:</label></div>\n  <div class=\"col-sm-6\" >\n    <input type=\"text\" name=\"AddressLine2\"  class=\"colRight\" (change)=\"sharedservice.setAddressLine2($event.target.value)\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">AddressLine3: </label></div>\n  <div class=\"col-sm-6\" >\n    <input type=\"text\" name=\"AddressLine3\"  class=\"colRight\" (change)=\"sharedservice.setAddressLine3($event.target.value)\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">City: </label></div>\n  <div class=\"col-sm-6\">\n     <input type=\"text\" name=\"City\"  class=\"colRight\" (change)=\"sharedservice.setCity($event.target.value)\"></div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">State: </label></div>\n  <div class=\"col-sm-6\">\n     <input type=\"text\" name=\"State\" class=\"colRight\"  (change)=\"sharedservice.setState($event.target.value)\"></div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">Country: </label></div>\n  <div class=\"col-sm-6\">\n     <input type=\"text\" name=\"Country\" class=\"colRight\"  (change)=\"sharedservice.setCountry($event.target.value)\"></div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">Zip: </label></div>\n  <div class=\"col-sm-6\">\n     <input type=\"text\" name=\"Zip\"  class=\"colRight\" (change)=\"sharedservice.setZip($event.target.value)\"></div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">Zip4: </label></div>\n  <div class=\"col-sm-6\" >\n    <input type=\"text\" name=\"Zip4\" class=\"colRight\"  (change)=\"sharedservice.setZip4($event.target.value)\"></div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <label class=\"colLeft\">AadharNumber: </label></div>\n  <div class=\"col-sm-6\">\n     <input type=\"text\" name=\"AadharNumber\" class=\"colRight\"  (change)=\"sharedservice.setAadharNumber($event.target.value)\"></div>\n</div>\n\n<button  class=\"btn btn-success btn-md\" (click)=\"signup()\">Submit</button>\n<button class=\"btn1 btn btn-danger btn-md\"(click)=\"BackButton()\" >Cancel</button>\n</form>\n\n</body>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route-name */ "./src/app/route-name.ts");
/* harmony import */ var _shared_shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-service.service */ "./src/app/shared/shared-service.service.ts");
/* harmony import */ var _sign_up_DTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-DTO */ "./src/app/sign-up/sign-up-DTO.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(http, sharedservice, router) {
        this.http = http;
        this.sharedservice = sharedservice;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.BackButton = function () {
        this.router.navigate([_route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].LOGINFORM]);
    };
    SignUpComponent.prototype.signup = function () {
        var _this = this;
        //let headers = new HttpHeaders();
        var signupdto = new _sign_up_DTO__WEBPACK_IMPORTED_MODULE_5__["SignUpDto"](this.sharedservice);
        var body = signupdto.getSignUp();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        var headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        //'Access-Control-Allow-Headers': 'Content-Type',
        //5000 Tejas123
        //
        var requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"](headerDict),
        };
        var obj;
        this.http.post("http://localhost:8001/signup", body, requestOptions)
            .subscribe(function (res) {
            obj = res;
            if (obj.message == "User registered successfully") {
                _this.router.navigate([_route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].LOGINFORM]);
            }
            else {
                alert(obj.message);
            }
        }, function (err) { return console.log(err); });
        this.router.navigate([_route_name__WEBPACK_IMPORTED_MODULE_3__["routeNames"].LOGINFORM]);
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _shared_shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/harshpandey/Documents/Project/hackthon/DevBuild/demoApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map