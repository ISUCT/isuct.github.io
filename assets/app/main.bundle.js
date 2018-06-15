webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"height:20px\"></div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-calculator></app-calculator>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calculator_calculator_component__ = __webpack_require__("./src/app/calculator/calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subject_element_subject_element_component__ = __webpack_require__("./src/app/subject-element/subject-element.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__calculator_calculator_component__["a" /* CalculatorComponent */],
                __WEBPACK_IMPORTED_MODULE_5__subject_element_subject_element_component__["a" /* SubjectElementComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculator/Exam.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exam; });
var Exam = /** @class */ (function () {
    function Exam() {
    }
    return Exam;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-subject-element (delExam)=\"delExam($event)\" *ngFor=\"let el of exams\" [exam]=\"el\"></app-subject-element>\n  <div class=\"row justify-content-end\">\n    <div class=\"col-md-2\">\n      <button (click)=\"addExam()\" class=\"btn btn-success mb-2\">+</button>\n      <button (click)=\"calculate()\" class=\"btn btn-success mb-2\">Рассчитать</button>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <h3>Ваш рейтинг: {{rating}}</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Exam__ = __webpack_require__("./src/app/calculator/Exam.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
        this.exams = [];
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        this.addExam();
    };
    CalculatorComponent.prototype.addExam = function () {
        var exam = new __WEBPACK_IMPORTED_MODULE_1__Exam__["a" /* Exam */]();
        this.exams.push(exam);
    };
    CalculatorComponent.prototype.delExam = function (exam) {
        var index = this.exams.indexOf(exam);
        this.exams.splice(index, 1);
    };
    CalculatorComponent.prototype.calculate = function () {
        var a = 0;
        var b = 0;
        for (var _i = 0, _a = this.exams; _i < _a.length; _i++) {
            var exam = _a[_i];
            var singleA = exam.hours / 10.0;
            if (exam.isSport) {
                singleA = 1;
            }
            a += singleA;
            b += exam.value * singleA / 100.0;
        }
        this.rating = b * 100.0 / a;
        console.log(this.rating);
    };
    CalculatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-calculator',
            template: __webpack_require__("./src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__("./src/app/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/subject-element/subject-element.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/subject-element/subject-element.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n      <label  for=\"hours\">Число часов</label>\n  </div>\n  <div class=\"col-md-4\">\n    <label for=\"inlineFormInputGroupUsername2\">Баллы</label>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div *ngIf=\"!exam.isSport\">\n      <input type=\"number\" class=\"form-control mb-2 mr-sm-2\" id=\"hours\" [(ngModel)]=\"exam.hours\" placeholder=\"Число часов\">\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <input type=\"number\" class=\"form-control\" id=\"inlineFormInputGroupUsername2\" [(ngModel)]=\"exam.value\" placeholder=\"Баллы\">\n  </div>\n  <div class=\"col-md-2\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineFormCheck\" [(ngModel)]=\"exam.isSport\">\n      <label class=\"form-check-label\" for=\"inlineFormCheck\" >\n        Физкультура\n      </label>\n  </div>\n  <div class=\"col-md-1\">\n    <button (click)=\"clickDel(exam)\" class=\"btn btn-danger mb-2\">-</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/subject-element/subject-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator_Exam__ = __webpack_require__("./src/app/calculator/Exam.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectElementComponent = /** @class */ (function () {
    function SubjectElementComponent() {
        this.delExam = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    SubjectElementComponent.prototype.ngOnInit = function () {
        console.log(this.exam);
    };
    SubjectElementComponent.prototype.clickDel = function () {
        this.delExam.emit(this.exam);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__calculator_Exam__["a" /* Exam */])
    ], SubjectElementComponent.prototype, "exam", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SubjectElementComponent.prototype, "delExam", void 0);
    SubjectElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-subject-element',
            template: __webpack_require__("./src/app/subject-element/subject-element.component.html"),
            styles: [__webpack_require__("./src/app/subject-element/subject-element.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubjectElementComponent);
    return SubjectElementComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map