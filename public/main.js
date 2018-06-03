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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<!--<app-problem-list></app-problem-list>-->\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("auth")),
        __metadata("design:paramtypes", [Object])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_collaboration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/collaboration.service */ "./src/app/services/collaboration.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/new-problem/new-problem.component */ "./src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_4__["ProblemListComponent"],
                _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProblemDetailComponent"],
                _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_11__["NewProblemComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_15__["EditorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [{
                    provide: "data",
                    useClass: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
                }, {
                    provide: "auth",
                    useClass: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
                }, {
                    provide: "authGuard",
                    useClass: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]
                }, {
                    provide: "collaboration",
                    useClass: _services_collaboration_service__WEBPACK_IMPORTED_MODULE_9__["CollaborationService"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_2__["ProblemListComponent"]
    },
    {
        path: 'problems/:id',
        component: _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProblemDetailComponent"]
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/editor/editor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen {\n #editor {\n   height: 600px;\n }\n .lang-select {\n   width: 100px;\n   margin-right: 10px;\n }\n header .btn {\n   margin: 0 5px;\n }\n footer .btn {\n   margin: 0 5px;\n }\n .editor-footer, .editor-header {\n   margin: 10px 0;\n }\n .cursor {\n   /*position:absolute;*/\n   background: rgba(0, 250, 0, 0.5);\n   z-index: 40;\n   width: 2px!important\n }\n}\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>\n    <select class=\"form-control pull-left lang-select\" id=\"language\"\n        name=\"language\"\n        [(ngModel)]=\"language\"\n        (change)=\"setLanguage(language)\"\n       >\n       <option *ngFor=\"let language of languages\"\n       [value]=\"language\">\n         {{language}}\n       </option>\n    </select>\n    <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>\n    </button>\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <h1 class=\"modal-title\" id=\"exampleModalLabel\">Reset</h1>\n          </div>\n          <div class=\"modal-body\">\n            Are you sure? You will lose current code in the window.\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\"\n              (click)=\"resetEditor()\">Reset</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div class=\"row\">\n    <div id=\"editor\">\n    </div>\n  </div>\n  <div class=\"row\">\n    {{output}}\n  </div>\n  <footer>\n    <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"submit()\">\n      Submit Solution\n    </button>\n  </footer>\n</section>\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, route) {
        this.collaboration = collaboration;
        this.route = route;
        this.languages = ["Java", "C++", "Python"];
        this.language = "Java";
        this.languageMap = {
            'Java': 'java',
            'C++': 'c_cpp',
            'Python': 'python'
        };
        this.defaultContent = {
            'Java': "public class Example {\n    public static void main(String[] args) {\n        // Type your Java code here\n    }\n}",
            'C++': "#include <iostream>\n    using namespace std;\n    int main() {\n      // Type your C++ code here\n      return 0;\n    }",
            'Python': "class Solution:\n   def example():\n       # Write your Python code here"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/eclipse");
        this.resetEditor();
        this.editor.$blockScrolling = Infinity;
        document.getElementsByTagName('textarea')[0].focus();
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        this.editor.on('change', function (e) {
            console.log('editor changes ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.session.setMode("ace/mode/" + this.languageMap[this.language]);
        this.editor.setValue(this.defaultContent[this.language]);
    };
    EditorComponent.prototype.submit = function () {
        var userCode = this.editor.getValue();
        console.log(userCode);
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/components/editor/editor.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("collaboration")),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for problems\">\n        </div>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li >\n          <form class=\"navbar-form\">\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!auth.isAuthenticated()\"\n              (click)=\"login()\"\n            >Sign in</button>\n          </form>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"auth.isAuthenticated()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{username}} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/profile\">My profile</a></li>\n            <li><a href=\"#\">My favorites</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a (click)=\"logout()\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, 
    // @Inject('data') private data,
    // @Inject('auth') private auth,
    router) {
        this.auth = auth;
        this.router = router;
        this.title = "COJ";
        this.username = "";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.auth.isAuthenticated()) {
            this.username = this.auth.getProfile().nickname;
        }
    };
    NavbarComponent.prototype.login = function () {
        this.auth.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authGuard.isAdmin()\">\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemTitle\">Problem Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemTitle\" name=\"problemTitle\" placeholder=\"Enter Problem Title\"\n      required [(ngModel)]=\"newProblem.title\" #problemTitle=\"ngModel\">\n      <!-- <div [hidden]=\"problemTitle.valid || problemTitle.pristine\" class=\"alert alert-danger\">\n        Problem Title is required\n      </div> -->\n    </div>\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">Problem Description</label>\n      <textarea type=\"text\" row=\"3\" class=\"form-control\" id=\"problemDesc\" name=\"problemDesc\"\n      required placeholder=\"Enter Problem Description\" required [(ngModel)]=\"newProblem.desc\" #problemDesc=\"ngModel\"></textarea>\n      <!-- <div [hidden]=\"problemDesc.valid || problemDesc.pristine\" class=\"alert alert-danger\">\n        Problem Description is required\n      </div> -->\n    </div>\n    <div class=\"form-group\">\n      <label for=\"difficulty\">Difficulty</label>\n      <select class=\"form-control\" id=\"difficulty\"\n      name=\"difficulty\" [(ngModel)]=\"newProblem.difficulty\" >\n        <option value=\"\" disabled selected>Select Difficulty</option>\n        <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n          {{difficulty}}\n        </option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addProblem()\">\n          Add Problem</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProblemComponent", function() { return NewProblemComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    title: "",
    desc: "",
    difficulty: ""
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(data, authGuard) {
        this.data = data;
        this.authGuard = authGuard;
        this.difficulties = ["Easy", "Medium", "Hard"];
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.data.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error.body); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-problem',
            template: __webpack_require__(/*! ./new-problem.component.html */ "./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__(/*! ./new-problem.component.css */ "./src/app/components/new-problem/new-problem.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("authGuard")),
        __metadata("design:paramtypes", [Object, Object])
    ], NewProblemComponent);
    return NewProblemComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"col-xs-12 col-md-4\">\n    <div>\n      <h2>\n        {{problem.id}}. {{problem.title}}\n      </h2>\n      <p>\n        {{problem.desc}}\n      </p>\n      <br/>\n    </div>\n  </div>\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n      <app-editor></app-editor>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProblemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemDetailComponent", function() { return ProblemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data.getProblem(+params["id"])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-detail',
            template: __webpack_require__(/*! ./problem-detail.component.html */ "./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__(/*! ./problem-detail.component.css */ "./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.diff-easy {\n  background-color: #42ebf4;\n}\n\n.diff-medium {\n  background-color: #92cf5c;\n}\n\n.diff-hard {\n  background-color: #dd0d1e;\n}\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <app-new-problem></app-new-problem>\n  <div class = \"list-group\">\n    <a class = \"list-group-item\" *ngFor=\"let problem of problems\" routerLink=\"/problems/{{problem.id}}\">\n      <span class = \"{{'pull-left badge label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">{{problem.difficulty}}</span>\n      <strong class = \"title\">{{problem.id}}. {{problem.title}}</strong>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProblemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemListComponent", function() { return ProblemListComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(data) {
        this.data = data;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptionProblems = this.data.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-list',
            template: __webpack_require__(/*! ./problem-list.component.html */ "./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__(/*! ./problem-list.component.css */ "./src/app/components/problem-list/problem-list.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __metadata("design:paramtypes", [Object])
    ], ProblemListComponent);
    return ProblemListComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-pills\">\n    <li class=\"active\"><a data-toggle=\"pill\" href=\"#profile\">Personal Information</a></li>\n    <li><a data-toggle=\"pill\" href=\"#password\">Change Password</a></li>\n  </ul>\n\n  <div class=\"tab-content\">\n    <div id=\"profile\" class=\"tab-pane fade in active\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\"\n        disabled value={{email}}>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"username\">User Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\"\n        disabled value={{username}}>\n      </div>\n    </div>\n    <div id=\"password\" class = \"tab-pane fade\">\n      <form class=\"nav-form\">\n        <button type=\"button\" class=\"btn btn-large btn-success\" (click)=\"resetPassword()\">\n          Reset Password</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.email = '';
        this.username = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var profile = this.auth.getProfile();
        this.email = profile.email;
        this.username = profile.nickname;
    };
    ProfileComponent.prototype.resetPassword = function () {
        this.auth.resetPassword();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("auth")),
        __metadata("design:paramtypes", [Object])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/problems']);
            return false;
        }
    };
    AuthGuardService.prototype.isAdmin = function () {
        if (this.auth.isAuthenticated() && this.auth.getProfile()['http://co-oj.resume.com/userinfo/roles'].includes('Admin')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/src/index.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.domain = 'co-oj.auth0.com';
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["WebAuth"]({
            clientID: 'kTbB0h3z4Uu5LAvCUJY7IbC6oR6f0fL2',
            domain: 'co-oj.auth0.com',
            responseType: 'token id_token',
            audience: 'https://co-oj.auth0.com/userinfo',
            redirectUri: 'http://localhost:3000/callback',
            scope: 'openid profile email roles'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
        // this.handleAuthentication();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (error, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.auth0.client.userInfo(authResult.accessToken, function (err, user) {
                    localStorage.setItem('profile', JSON.stringify(user));
                });
                window.location.hash = '';
                _this.setSession(authResult);
            }
            else if (error) {
                _this.router.navigate(['/home']);
                console.log(error);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('profile');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem('profile'));
    };
    AuthService.prototype.resetPassword = function () {
        var profile = this.getProfile();
        var url = 'https://co-oj.auth0.com/dbconnections/change_password';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        var body = {
            client_id: 'kTbB0h3z4Uu5LAvCUJY7IbC6oR6f0fL2',
            email: profile.email,
            connection: 'Username-Password-Authentication'
        };
        this.http.post(url, body, httpOptions)
            .toPromise()
            .then(function (res) {
            console.log(res.json);
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/collaboration.service.ts ***!
  \***************************************************/
/*! exports provided: CollaborationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaborationService", function() { return CollaborationService; });
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

var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId= ' + sessionId });
        this.collaborationSocket.on('change', function (delta) {
            console.log('collaboration: editor changes by ' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        this.collaborationSocket.on('message', function (message) {
            console.log('Received: ' + message);
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit('change', delta);
    };
    CollaborationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.problemsSource = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    DataService.prototype.parseToProblems = function (res) {
    };
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get("/api/v1/problems")
            .toPromise()
            .then(function (res) {
            _this.problemsSource.next(JSON.parse(JSON.stringify(res)));
        })
            .catch(this.handleError);
        return this.problemsSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) {
            return JSON.parse(JSON.stringify(res));
        })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        // const headers = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post("/api/v1/problems", problem, httpOptions)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return JSON.parse(JSON.stringify(res));
        })
            .catch(this.handleError);
    };
    DataService.prototype.GetHttpHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return headers;
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error happened', error);
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
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

module.exports = __webpack_require__(/*! /home/xianwen/Projects/coj/collaborative-online-judge-system/oj-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map