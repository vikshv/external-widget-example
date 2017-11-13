webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.body {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.body__list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.body__toolbar {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-left: 16px;\r\n}\r\n\r\n.toolbar__title {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.toolbar__button {\r\n    padding: 8px 0;\r\n    border-bottom: 1px solid #b1b1b1;\r\n}\r\n\r\n.form {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.footer {\r\n    margin-top: 8px;\r\n}\r\n\r\n.list {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    overflow-x: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>External widget example</h1>\r\n<div class=\"container\">\r\n    <div class=\"body\">\r\n        <div class=\"body__list\">\r\n            <div>List of update from host @ store:</div>\r\n            <ul class=\"list\">\r\n              <li *ngFor=\"let message of messages\">{{ message.store }}</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"body__toolbar\">\r\n            <div class=\"toolbar__title\">Toolbar</div>\r\n            <div class=\"toolbar__button\">\r\n                <button (click)=\"onFocus()\">onFocus</button>\r\n            </div>\r\n            <div class=\"toolbar__button\">\r\n                <button (click)=\"onBlur()\">onBlur</button>\r\n            </div>\r\n            <div class=\"toolbar__button\">\r\n                <button (click)=\"storeData()\">store message</button>\r\n            </div>\r\n            <div class=\"toolbar__button\">\r\n                <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"fireWidgetEvent()\">\r\n                    <input type=\"text\" name=\"name\" placeholder=\"event name (onAction)\" autocomplete=\"off\" [(ngModel)]=\"event.name\">\r\n                    <input type=\"text\" name=\"parameter\" placeholder=\"event parameter\" autocomplete=\"off\" [(ngModel)]=\"event.parameter\">\r\n                    <button>fire widget event</button>\r\n                </form>\r\n            </div>\r\n            <div class=\"toolbar__button\">\r\n                <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"fireWidgetChangeEvent()\">\r\n                    <input type=\"text\" name=\"name\" placeholder=\"property name\" autocomplete=\"off\" [(ngModel)]=\"change.name\">\r\n                    <input type=\"text\" name=\"parameter\" placeholder=\"property value\" autocomplete=\"off\" [(ngModel)]=\"change.parameter\">\r\n                    <button>fire widget change event</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/vikshv/external-widget-example\">GitHub</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_frame_rpc__ = __webpack_require__("../../../../frame-rpc/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_frame_rpc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_frame_rpc__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.messages = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit', document.referrer, window.parent);
        this.event = {
            name: 'onAction',
            parameter: ''
        };
        this.change = {
            name: '',
            parameter: ''
        };
        this.rpc = __WEBPACK_IMPORTED_MODULE_1_frame_rpc___default()(window, window.parent, document.referrer, {
            update: function (data) {
                _this.messages.push({
                    method: 'update',
                    store: JSON.stringify(data.store)
                });
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.rpc) {
            this.rpc.destroy();
        }
    };
    AppComponent.prototype.onFocus = function () {
        this._callRPC('onFocus');
    };
    AppComponent.prototype.onBlur = function () {
        this._callRPC('onBlur');
    };
    AppComponent.prototype.storeData = function () {
        this._callRPC('storeData', {
            message: 'Hello!'
        });
    };
    AppComponent.prototype.fireWidgetEvent = function () {
        var _a = this.event, name = _a.name, parameter = _a.parameter;
        if (name) {
            this._callRPC('fireWidgetEvent', {
                name: name,
                parameter: parameter
            });
        }
    };
    AppComponent.prototype.fireWidgetChangeEvent = function () {
        var _a = this.event, name = _a.name, parameter = _a.parameter;
        if (name && parameter) {
            this._callRPC('fireWidgetChangeEvent', {
                name: name,
                parameter: parameter
            });
        }
    };
    AppComponent.prototype._callRPC = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.rpc && (_a = this.rpc).call.apply(_a, [method].concat(args));
        var _a;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map