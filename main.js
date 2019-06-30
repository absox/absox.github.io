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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-root {\r\n  height: 100%;\r\n}\r\n\r\n.wrapper {\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n\r\n.clear-all {\r\n  clear: both;\r\n}\r\n\r\n.left-panel {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-family: 'Montserrat', 'sans-serif';\r\n  background-color: #eae8de;\r\n  padding-top: 10px;\r\n}\r\n\r\n.left-panel h1, h2, h3, h4, h5, h6 {\r\n  font-family: 'Antic Slab','sans-serif';\r\n  font-weight: normal;\r\n  margin-top: 0;\r\n}\r\n\r\n.left-panel p {\r\n  font-size: 12pt;\r\n  line-height: 1.5em;\r\n  margin-top: 0;\r\n  margin-bottom: 0.8em;\r\n  font-weight: 300;\r\n}\r\n\r\n.left-panel a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  font-size: 9pt;\r\n  font-weight: bold;\r\n}\r\n\r\n.left-panel a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.left-panel nav {\r\n  margin-top: 0;\r\n}\r\n\r\n.left-panel nav a {\r\n  font-size: 14pt;\r\n  line-height: 2.5em;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n\r\n.right-panel {\r\n  text-align: center;\r\n  width: 100%;\r\n  padding-top: 35px;\r\n  padding-left: 25px;\r\n  font-family: 'Lato', 'sans-serif';\r\n}\r\n\r\n.right-panel > * {\r\n  text-align: left;\r\n}\r\n\r\n.right-panel h1, h2, h3, h4, h5, h6 {\r\n  font-family: 'Lato','sans-serif';\r\n  font-weight: normal;\r\n  margin-top: 0;\r\n}\r\n\r\n.right-panel h1 {\r\n  font-size: 18pt;\r\n  font-weight: normal;\r\n  margin-bottom: 30px;\r\n  margin-top: 0;\r\n}\r\n\r\n.right-panel p {\r\n  font-family: 'EB Garamond', 'serif';\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n  .left-panel {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 230px;\r\n    padding-top: 50px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n\r\n  }\r\n\r\n  .left-panel nav {\r\n    margin-top: 35px;\r\n  }\r\n\r\n  .left-panel nav a {\r\n    display: block;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .right-panel {\r\n    text-align: left;\r\n    max-width: calc(100% - 230px);\r\n    margin-left: 230px;\r\n    padding-left: 75px;\r\n    padding-top: 50px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper left-panel\">\n  <h1>\n    Ran Liu\n  </h1>\n  <p>Biomedical engineer & aspiring scientist</p>\n  <p><a href=\"mailto:rliu14@jhu.edu\">rliu14@jhu.edu</a></p>\n\n  <nav>\n    <!--<a routerLink=\"\">CV</a>-->\n    <!--<a routerLink=\"programming\">Programming</a>-->\n    <a routerLink=\"\">Essays</a>\n    <a routerLink=\"media\">Media</a>\n    <!--<a routerLink=\"profiles\">Profiles</a>-->\n    <a routerLink=\"about\">About</a>\n  </nav>\n</div><div class=\"wrapper right-panel\">\n  <router-outlet></router-outlet>\n</div>\n<div class=\"clear-all\"></div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _essays_essays_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./essays/essays.component */ "./src/app/essays/essays.component.ts");
/* harmony import */ var _programming_programming_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./programming/programming.component */ "./src/app/programming/programming.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/profiles/profiles.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _essay_view_essay_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./essay-view/essay-view.component */ "./src/app/essay-view/essay-view.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _media_view_media_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./media-view/media-view.component */ "./src/app/media-view/media-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                _essays_essays_component__WEBPACK_IMPORTED_MODULE_5__["EssaysComponent"],
                _programming_programming_component__WEBPACK_IMPORTED_MODULE_6__["ProgrammingComponent"],
                _media_media_component__WEBPACK_IMPORTED_MODULE_7__["MediaComponent"],
                _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_8__["ProfilesComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _essay_view_essay_view_component__WEBPACK_IMPORTED_MODULE_10__["EssayViewComponent"],
                _media_view_media_view_component__WEBPACK_IMPORTED_MODULE_13__["MediaViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    // {
                    //   path: '',
                    //   component: HomePageComponent
                    // },
                    // {
                    //   path: 'programming',
                    //   component: ProgrammingComponent
                    // },
                    {
                        // path: 'essays',
                        path: '',
                        component: _essays_essays_component__WEBPACK_IMPORTED_MODULE_5__["EssaysComponent"]
                    },
                    {
                        path: 'essays/:id',
                        component: _essay_view_essay_view_component__WEBPACK_IMPORTED_MODULE_10__["EssayViewComponent"]
                    },
                    {
                        path: 'media',
                        component: _media_media_component__WEBPACK_IMPORTED_MODULE_7__["MediaComponent"]
                    },
                    {
                        path: 'media/:id',
                        component: _media_view_media_view_component__WEBPACK_IMPORTED_MODULE_13__["MediaViewComponent"]
                    },
                    // {
                    //   path: 'profiles',
                    //   component: ProfilesComponent
                    // },
                    {
                        path: 'about',
                        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
                    }
                ])
            ],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n  max-width: 40em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.about-wrapper {\r\n  margin-right: 25px;\r\n}\r\n\r\n.bio-pic {\r\n  float: right;\r\n  width: 175px;\r\n  vertical-align: top;\r\n  margin: 0 0 25px 25px;\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .bio-pic {\r\n    width: 250px;\r\n\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-wrapper\">\n  <h1>About</h1>\n\n  <p>\n    <img src=\"assets/photos/bio.jpg\" class=\"bio-pic\">\n    I'm Ran Liu, a PhD student in Biomedical Engineering at the Johns Hopkins University.\n    This is my personal website; for the time being, it serves as an online repository for my musings on various subjects\n    extrinsic to my research.\n  </p>\n\n  <p>\n    Though I am an engineer by trade, my avocation has always been literature; Yeats has long been my favorite poet, and\n    my favorite novels over the years (in roughly chronological order) have been <i>The Count of Monte Cristo</i> by Dumas,\n    <i>The Great Gatsby</i> by Fitzgerald, <i>Atonement</i> by Ian McEwan, and most recently, <i>The Remains of the Day</i>\n    by Kazuo Ishiguro (who, to my satisfaction, won the Nobel in 2017!).\n  </p>\n\n  <p>\n    If you'd like to get in touch, you can do so most easily via email. I invite your comments and discussion.\n  </p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/essay-view/essay-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/essay-view/essay-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".essayViewWrapper {\r\n  text-align: center;\r\n  margin-left: -25px;\r\n  padding-left: 25px;\r\n  padding-right: 25px;\r\n}\r\n\r\n.essayWrapper {\r\n  display: inline-block;\r\n  text-align: left;\r\n  line-height: 1.75em;\r\n  max-width: 40em;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.essayWrapper h1 {\r\n  text-align: left;\r\n  line-height: 1.25em;\r\n}\r\n\r\n.references {\r\n  font-family: 'EB Garamond', 'serif';\r\n}\r\n\r\nul.references {\r\n  padding-left: 1.5em;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\na:visited:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .essayViewWrapper {\r\n    text-align: left;\r\n    padding-left: 100px;\r\n    padding-right: 175px;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/essay-view/essay-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/essay-view/essay-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"essayViewWrapper\">\n  <div class=\"essayWrapper\">\n    <h1>{{essay.title}}</h1>\n\n    <div [innerHTML]=\"content\"></div>\n\n    <p>Posted on {{essay.date.toLocaleDateString()}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/essay-view/essay-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/essay-view/essay-view.component.ts ***!
  \****************************************************/
/*! exports provided: EssayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssayViewComponent", function() { return EssayViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _essays_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../essays.service */ "./src/app/essays.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EssayViewComponent = /** @class */ (function () {
    function EssayViewComponent(route, essaysService, http) {
        this.route = route;
        this.essaysService = essaysService;
        this.http = http;
    }
    EssayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.essay = this.essaysService.getEssay(this.id);
        this.http.get("./assets/essays/" + this.essay.url, { responseType: 'text' }).subscribe(function (data) {
            _this.content = data;
        });
    };
    EssayViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-essay-view',
            template: __webpack_require__(/*! ./essay-view.component.html */ "./src/app/essay-view/essay-view.component.html"),
            styles: [__webpack_require__(/*! ./essay-view.component.css */ "./src/app/essay-view/essay-view.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _essays_service__WEBPACK_IMPORTED_MODULE_2__["EssaysService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EssayViewComponent);
    return EssayViewComponent;
}());



/***/ }),

/***/ "./src/app/essay.ts":
/*!**************************!*\
  !*** ./src/app/essay.ts ***!
  \**************************/
/*! exports provided: Essay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Essay", function() { return Essay; });
var Essay = /** @class */ (function () {
    function Essay(id, title, url, date) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.date = date;
    }
    return Essay;
}());



/***/ }),

/***/ "./src/app/essays.service.ts":
/*!***********************************!*\
  !*** ./src/app/essays.service.ts ***!
  \***********************************/
/*! exports provided: EssaysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssaysService", function() { return EssaysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _essay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./essay */ "./src/app/essay.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EssaysService = /** @class */ (function () {
    function EssaysService() {
        this.essayDirectory = [];
        this.essayDirectory.push(new _essay__WEBPACK_IMPORTED_MODULE_1__["Essay"]("collectivism-and-individualism", "Collectivism and Individualism, Progress and Regress, Societal Trajectory and the Individual Will in Science Fiction", "collectivism-and-individualism-in-science-fiction.html", new Date("4/30/19")));
        this.essayDirectory.push(new _essay__WEBPACK_IMPORTED_MODULE_1__["Essay"]("logh-rotk-and-rational-fiction-in-general", "Opposing Systems of Virtue: Legend of the Galactic Heroes, Romance of the Three Kingdoms, and Rational Fiction", "logh-rotk-and-rational-fiction-in-general.html", new Date("4/7/18")));
        this.essayDirectory.push(new _essay__WEBPACK_IMPORTED_MODULE_1__["Essay"]("tensions-between-rationality-realism-and-humanity", "On the Tensions Between Rationality, Realism, and Humanity in HPMOR and Rationalist Fiction", "tensions-between-rationality-realism-and-humanity.html", new Date("3/31/16")));
    }
    EssaysService.prototype.getEssayDirectory = function () {
        return this.essayDirectory;
    };
    EssaysService.prototype.getEssay = function (id) {
        for (var i = 0; i < this.essayDirectory.length; i++) {
            if (this.essayDirectory[i].id == id) {
                return this.essayDirectory[i];
            }
        }
        return null;
    };
    EssaysService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EssaysService);
    return EssaysService;
}());



/***/ }),

/***/ "./src/app/essays/essays.component.css":
/*!*********************************************!*\
  !*** ./src/app/essays/essays.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".essaysTable {\r\n  border-collapse: collapse;\r\n  margin-right: 25px;\r\n}\r\n\r\n.essaysTable th {\r\n  font-size: 14pt;\r\n}\r\n\r\n.essaysTable td {\r\n  font-size: 12pt;\r\n}\r\n\r\n.essaysTable td,th {\r\n  font-family: 'EB Garamond', 'serif';\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.essaysTable a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.essayTableCell:first-child {\r\n  padding-left: 10px;\r\n}\r\n\r\n.essayTableCell:last-child {\r\n  padding-right: 10px;\r\n}\r\n\r\n.essayTableCell:not(:last-child) {\r\n  padding-right: 25px;\r\n}\r\n\r\n.essayTableRow:hover {\r\n  background-color: #ddd;\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .essaysTable {\r\n    margin-right: 50px;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/essays/essays.component.html":
/*!**********************************************!*\
  !*** ./src/app/essays/essays.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Essays</h1>\n\n<table class=\"essaysTable\">\n  <tr>\n    <th class=\"essayTableCell\">Title</th>\n    <th class=\"essayTableCell\" style=\"text-align: right;\">Date</th>\n  </tr>\n  <tr *ngFor=\"let essay of essays\" class=\"essayTableRow\" routerLink=\"essays/{{essay.id}}\">\n    <td class=\"essayTableCell\">{{essay.title}}</td>\n    <td class=\"essayTableCell\" style=\"text-align: right;\">{{essay.date.toLocaleDateString()}}</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/essays/essays.component.ts":
/*!********************************************!*\
  !*** ./src/app/essays/essays.component.ts ***!
  \********************************************/
/*! exports provided: EssaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssaysComponent", function() { return EssaysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _essays_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../essays.service */ "./src/app/essays.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EssaysComponent = /** @class */ (function () {
    function EssaysComponent(essaysService) {
        this.essaysService = essaysService;
        this.sortBy = "date";
        this.order = "descending";
    }
    EssaysComponent.prototype.ngOnInit = function () {
        this.essays = this.essaysService.getEssayDirectory();
    };
    EssaysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-essays',
            template: __webpack_require__(/*! ./essays.component.html */ "./src/app/essays/essays.component.html"),
            styles: [__webpack_require__(/*! ./essays.component.css */ "./src/app/essays/essays.component.css")]
        }),
        __metadata("design:paramtypes", [_essays_service__WEBPACK_IMPORTED_MODULE_1__["EssaysService"]])
    ], EssaysComponent);
    return EssaysComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cv-block {\r\n  display: inline-block;\r\n  max-width: 450px;\r\n  margin: 0 35px 0 0;\r\n  padding-bottom: 35px;\r\n  vertical-align: top;\r\n}\r\n\r\n.cv-body {\r\n  display: inline-block;\r\n}\r\n\r\n.cv-line {\r\n  display: inline-block;\r\n  background-color: #2a2a28;\r\n  float: left;\r\n  width: 10px;\r\n}\r\n\r\n.cv-entry {\r\n  width: calc(100% - 20px);\r\n  display: inline-block;\r\n  margin-bottom: 20px;\r\n  float: right;\r\n}\r\n\r\n.cv-right-floater {\r\n  display: inline-block;\r\n  float: right;\r\n}\r\n\r\nh2 {\r\n  font-size: 13pt;\r\n  font-weight: normal;\r\n}\r\n\r\nh3 {\r\n  font-family: 'Montserrat', 'sans-serif';\r\n  font-size: 11pt;\r\n  font-weight: 600;\r\n}\r\n\r\np {\r\n  font-size: 10pt;\r\n  margin: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cv-block\">\n  <h1>Education</h1>\n  <div class=\"cv-body\">\n    <div class=\"cv-entry\">\n      <h2>Doctor of Philosophy (PhD) in Biomedical Engineering*</h2>\n      <h2>Advisor: Dr. Raimond Winslow</h2>\n      <h3>August 2017-present<span class=\"cv-right-floater\">Johns Hopkins University</span></h3>\n    </div>\n    <div class=\"cv-entry\">\n      <h2>Bachelor of Science (BS) in Biomedical Engineering</h2>\n      <h3>August 2012-May 2016<span class=\"cv-right-floater\">Johns Hopkins University</span></h3>\n    </div>\n  </div>\n  <p>* degree in progress</p>\n</div>\n<div class=\"cv-block\">\n  <h1>Publications</h1>\n  <div class=\"cv-body\">\n    <div class=\"cv-entry\">\n      <h2>ShockAlert: Early Prediction of Impending Septic Shock in the ICU Using Risk Models Based on Physiological Monitoring and Electronic Health Record Data</h2>\n      <h2><b>Liu, R;</b> Greenstein, JL; Granite, SJ; Fackler, JC; Bembea, MM; Sarma, SV & Winslow, RW</h2>\n      <h3>Critical Care Medicine, 2018 (pending review)</h3>\n    </div>\n    <div class=\"cv-entry\">\n      <h2>Triethylborane-initiated Radical Chain Fluorination: A Synthetic Method Derived from Mechanistic Insight</h2>\n      <h2>Pitts, CR; Ling, B; Woltornist, R; <b>Liu, R;</b> Lectka, T</h2>\n      <h3>Journal of Organic Chemistry, 2014</h3>\n    </div>\n  </div>\n</div>\n<div class=\"cv-block\">\n  <h1>Research Experience</h1>\n  <div class=\"cv-body\">\n    <div class=\"cv-entry\">\n      <h2>Research Assistant: Modeling of clinical state transition in sepsis patients. Worked under the guidance of Dr. Raimond Winslow and Dr. Sridevi Sarma.</h2>\n      <h3>Institute for Computational Medicine, Johns Hopkins University (Summer 2016-Fall 2017)</h3>\n    </div>\n    <div class=\"cv-entry\">\n      <h2>JAX Summer Student: Modeled lncRNA-chromatin binding site selectivity using kmer counts in ChiRP-Seq data. Worked under the guidance of Dr. Zhengqing Ouyang.</h2>\n      <h3>The Jackson Laboratory (Summer 2014)</h3>\n    </div>\n    <div class=\"cv-entry\">\n      <h2>Undergraduate Research Assistant: Research in organic synthesis, particularly in directed fluorinations, and computational chemistry. Worked under the guidance of (now Dr.) Cody Ross Pitts and Dr. Thomas Lectka.</h2>\n      <h3>The Lectka Group, Johns Hopkins University (Fall 2013-Spring 2016)</h3>\n    </div>\n    <div class=\"cv-entry\">\n      <h2>Research Intern, Biochemistry Division: Development of smart vessels for cell culture. Worked under the guidance of Dr. Huayun Deng and Dr. Ye Fang.</h2>\n      <h3>Corning Inc. (Summer 2013)</h3>\n    </div>\n  </div>\n</div>\n<div class=\"cv-block\">\n  <h1>Technical Experience</h1>\n  <div class=\"cv-body\">\n    <div class=\"cv-entry\">\n      <h2>Developed a platform-agnostic web application in order to assess and train cognitive visuospatial ability, particularly in elderly patients, using AngularJS and Ruby on Rails. Worked under the guidance of Dr. Yuri Agrawal.</h2>\n      <h3>Cognitive Training Application (Spring 2016-Summer 2016)</h3>\n    </div>\n    <div class=\"cv-entry\">\n      <h2>Prototyping of a mobile system for assessment of the severity of Parkinson's disease symptoms. Developed mobile applications for handwriting and tremor analysis.</h2>\n      <h3>CBID Design Team 4, Johns Hopkins University (Spring 2013)</h3>\n    </div>\n  </div>\n</div>\n<div class=\"cv-block\">\n  <h1>Teaching</h1>\n  <div class=\"cv-body\">\n    <div class=\"cv-entry\">\n      <h2>Course Assistant: Graded assignments, held office hours, assisted in class. Instructor: Dr. Joanne Selinski.</h2>\n      <h3>EN.600.120 Intermediate Programming, Johns Hopkins University (Spring 2015)</h3>\n    </div>\n  </div>\n</div>\n<div class=\"cv-block\">\n  <h1>Technical Skills</h1>\n  <div class=\"cv-body\">\n    <div class=\"cv-entry\">\n      <h2>Experienced in C, C++, Java (Spring, Hibernate), Python, Ruby (Rails), PHP, Matlab, R. Skilled in use of Unix command line (awk, grep, etc) and Bash scripting. Familiarity with assembly languages including x86, MIPS, 6502, ARM.</h2>\n      <h3>Computer Programming</h3>\n    </div>\n    <div class=\"cv-entry\">\n      <h2>Experienced developing web application front-ends in Javascript (Angular, JQuery). Proficient with PHP, Rails, Spring MVC and Hibernate ORM. Experienced with SQL database systems (Sqlite, Postgres, MySQL). Familiarity with WordPress, Silverstripe.</h2>\n      <h3>Web Development</h3>\n    </div>\n  </div>\n</div>\n<div class=\"cv-block\">\n  <h1>Languages</h1>\n  <h2>English (native fluency), Chinese (native language), French (high proficiency)</h2>\n</div>\n<div style=\"clear: both\"></div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/media-view/media-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/media-view/media-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mediaViewWrapper {\r\n  text-align: center;\r\n  margin-left: -25px;\r\n  padding-left: 25px;\r\n  padding-right: 25px;\r\n}\r\n\r\n.mediaWrapper {\r\n  display: inline-block;\r\n  text-align: left;\r\n  line-height: 1.75em;\r\n  max-width: 40em;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.mediaWrapper h1 {\r\n  text-align: left;\r\n  line-height: 1.25em;\r\n}\r\n\r\n.references {\r\n  font-family: 'EB Garamond', 'serif';\r\n}\r\n\r\nul.references {\r\n  padding-left: 1.5em;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\na:visited:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .mediaViewWrapper {\r\n    text-align: left;\r\n    padding-left: 100px;\r\n    padding-right: 175px;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/media-view/media-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/media-view/media-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mediaViewWrapper\">\n  <div class=\"mediaWrapper\">\n    <h1>{{media.title}}</h1>\n\n    <div [innerHTML]=\"content\"></div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/media-view/media-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/media-view/media-view.component.ts ***!
  \****************************************************/
/*! exports provided: MediaViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaViewComponent", function() { return MediaViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media.service */ "./src/app/media.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MediaViewComponent = /** @class */ (function () {
    function MediaViewComponent(route, mediaService, http) {
        this.route = route;
        this.mediaService = mediaService;
        this.http = http;
    }
    MediaViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.media = this.mediaService.getMedia(this.id);
        this.http.get("./assets/media/" + this.media.article, { responseType: 'text' }).subscribe(function (data) {
            _this.content = data;
        });
    };
    MediaViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media-view',
            template: __webpack_require__(/*! ./media-view.component.html */ "./src/app/media-view/media-view.component.html"),
            styles: [__webpack_require__(/*! ./media-view.component.css */ "./src/app/media-view/media-view.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _media_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MediaViewComponent);
    return MediaViewComponent;
}());



/***/ }),

/***/ "./src/app/media.service.ts":
/*!**********************************!*\
  !*** ./src/app/media.service.ts ***!
  \**********************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media */ "./src/app/media.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediaService = /** @class */ (function () {
    function MediaService() {
        this.mediaDirectory = [];
        this.mediaDirectory.push(new _media__WEBPACK_IMPORTED_MODULE_1__["Media"]("shin-sekai-yori", "Shin Sekai Yori", "television", "assets/photos/ssy.jpg", "shin-sekai-yori.html"));
        // this.mediaDirectory.push(new Media("rottk", "Romance of the Three Kingdoms", "books", "https://i.imgur.com/bNkaVdl.png", "rottk.html"));
        this.mediaDirectory.push(new _media__WEBPACK_IMPORTED_MODULE_1__["Media"]("logh", "Legend of the Galactic Heroes", "television", "assets/photos/logh.jpg", "logh.html"));
    }
    MediaService.prototype.getMediaDirectory = function () {
        return this.mediaDirectory;
    };
    MediaService.prototype.getMedia = function (id) {
        for (var i = 0; i < this.mediaDirectory.length; i++) {
            if (this.mediaDirectory[i].id == id) {
                return this.mediaDirectory[i];
            }
        }
        return null;
    };
    MediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MediaService);
    return MediaService;
}());



/***/ }),

/***/ "./src/app/media.ts":
/*!**************************!*\
  !*** ./src/app/media.ts ***!
  \**************************/
/*! exports provided: Media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
var Media = /** @class */ (function () {
    function Media(id, title, category, thumbnail, article) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.thumbnail = thumbnail;
        this.article = article;
    }
    return Media;
}());



/***/ }),

/***/ "./src/app/media/media.component.css":
/*!*******************************************!*\
  !*** ./src/app/media/media.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mediaContainer {\r\n  margin-right: 25px;\r\n  text-align: center;\r\n}\r\n\r\n.mediaNav {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin-top: 35px;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.mediaNav>li {\r\n  font-size: 14pt;\r\n  display: inline-block;\r\n  padding: 15px 0 5px 0;\r\n  margin-right: 15px;\r\n}\r\n\r\n.mediaNavItem {\r\n  color: #aaa;\r\n}\r\n\r\n.mediaNavItem:hover {\r\n  cursor: pointer;\r\n  /*color: #000;*/\r\n  /*background-color: #ddd;*/\r\n  border-bottom: 2px solid #ddd;\r\n\r\n}\r\n\r\n.mediaSelected {\r\n  color: #000;\r\n  border-bottom: 2px solid black;\r\n}\r\n\r\n.mediaSelected:hover {\r\n  color: #000;\r\n  border-bottom: 2px solid black;\r\n}\r\n\r\n.mediaItem {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.mediaItem:not(:last-child)>* {\r\n  margin-right: 15px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.mediaThumbnail {\r\n  width: 150px;\r\n  height: 215px;\r\n}\r\n\r\n.mediaItemInner {\r\n  display: inline-block;\r\n  max-width: 150px;\r\n  text-align: center;\r\n  vertical-align: top;\r\n}\r\n\r\n.mediaItemInner a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.mediaItemInner:hover img{\r\n  opacity: 0.75;\r\n}\r\n\r\n.mediaItemInner:hover a {\r\n  text-decoration: underline;\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .mediaContainer {\r\n    margin-right: 75px;\r\n    text-align: left;\r\n  }\r\n\r\n  .mediaItem:not(:last-child)>* {\r\n    margin-right: 35px;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .mediaNav>li {\r\n    margin-right: 30px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/media/media.component.html":
/*!********************************************!*\
  !*** ./src/app/media/media.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mediaContainer\">\n  <h1>Media</h1>\n  <p>You can find here a selection of curated media.</p>\n\n  <ul class=\"mediaNav\">\n    <li class=\"mediaNavItem\" [ngClass]=\"{'mediaSelected': selected == 'all'}\" (click)=\"setSelected('all')\">All</li>\n    <li class=\"mediaNavItem\" [ngClass]=\"{'mediaSelected': selected == 'books'}\" (click)=\"setSelected('books')\">Books</li>\n    <li class=\"mediaNavItem\" [ngClass]=\"{'mediaSelected': selected == 'film'}\" (click)=\"setSelected('film')\">Film</li>\n    <li class=\"mediaNavItem\" [ngClass]=\"{'mediaSelected': selected == 'television'}\" (click)=\"setSelected('television')\">Television</li>\n  </ul>\n\n  <div *ngFor=\"let item of mediaDirectory\" class=\"mediaItem\">\n    <div *ngIf=\"selected == 'all' || item.category == selected\" class=\"mediaItemInner\">\n      <a routerLink=\"{{item.id}}\">\n        <img [src]=\"item.thumbnail\" style=\"width: 150px; margin-bottom: 5px;\" class=\"mediaThumbnail\"><br>\n        {{item.title}}\n      </a>\n\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media.service */ "./src/app/media.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediaComponent = /** @class */ (function () {
    function MediaComponent(mediaService) {
        this.mediaService = mediaService;
        this.selected = "all";
    }
    MediaComponent.prototype.ngOnInit = function () {
        this.mediaDirectory = this.mediaService.getMediaDirectory();
    };
    MediaComponent.prototype.setSelected = function (item) {
        this.selected = item;
    };
    MediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.css */ "./src/app/media/media.component.css")]
        }),
        __metadata("design:paramtypes", [_media_service__WEBPACK_IMPORTED_MODULE_1__["MediaService"]])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/profiles/profiles.component.css":
/*!*************************************************!*\
  !*** ./src/app/profiles/profiles.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profiles/profiles.component.html":
/*!**************************************************!*\
  !*** ./src/app/profiles/profiles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Profiles</h1>\nThis page is under construction.\n"

/***/ }),

/***/ "./src/app/profiles/profiles.component.ts":
/*!************************************************!*\
  !*** ./src/app/profiles/profiles.component.ts ***!
  \************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilesComponent = /** @class */ (function () {
    function ProfilesComponent() {
    }
    ProfilesComponent.prototype.ngOnInit = function () {
    };
    ProfilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profiles',
            template: __webpack_require__(/*! ./profiles.component.html */ "./src/app/profiles/profiles.component.html"),
            styles: [__webpack_require__(/*! ./profiles.component.css */ "./src/app/profiles/profiles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilesComponent);
    return ProfilesComponent;
}());



/***/ }),

/***/ "./src/app/programming/programming.component.css":
/*!*******************************************************!*\
  !*** ./src/app/programming/programming.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/programming/programming.component.html":
/*!********************************************************!*\
  !*** ./src/app/programming/programming.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Programming</h1>\nThis page is under construction.\n"

/***/ }),

/***/ "./src/app/programming/programming.component.ts":
/*!******************************************************!*\
  !*** ./src/app/programming/programming.component.ts ***!
  \******************************************************/
/*! exports provided: ProgrammingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammingComponent", function() { return ProgrammingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgrammingComponent = /** @class */ (function () {
    function ProgrammingComponent() {
    }
    ProgrammingComponent.prototype.ngOnInit = function () {
    };
    ProgrammingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-programming',
            template: __webpack_require__(/*! ./programming.component.html */ "./src/app/programming/programming.component.html"),
            styles: [__webpack_require__(/*! ./programming.component.css */ "./src/app/programming/programming.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgrammingComponent);
    return ProgrammingComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ran Liu\WebstormProjects\liuran_v2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map