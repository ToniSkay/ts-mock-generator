(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ITRANSITION.CORP/a.chuevsky/Documents/ts-mock-generator/src/main.ts */"zUnb");


/***/ }),

/***/ "0OHh":
/*!********************************************!*\
  !*** ./src/shared/utils/get-random-int.ts ***!
  \********************************************/
/*! exports provided: getRandomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


/***/ }),

/***/ "Aw3O":
/*!*****************************************************************************!*\
  !*** ./src/app/components/interface-to-mock/interface-to-mock.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InterfaceToMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceToMockComponent", function() { return InterfaceToMockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _interface_input_interface_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interface-input/interface-input.component */ "RZMH");
/* harmony import */ var _mock_input_mock_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-input/mock-input.component */ "UoDK");



class InterfaceToMockComponent {
}
InterfaceToMockComponent.ɵfac = function InterfaceToMockComponent_Factory(t) { return new (t || InterfaceToMockComponent)(); };
InterfaceToMockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterfaceToMockComponent, selectors: [["app-interface-to-mock"]], decls: 4, vars: 0, consts: [[1, "input-areas"]], template: function InterfaceToMockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-interface-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-mock-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_interface_input_interface_input_component__WEBPACK_IMPORTED_MODULE_1__["InterfaceInputComponent"], _mock_input_mock_input_component__WEBPACK_IMPORTED_MODULE_2__["MockInputComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcmZhY2UtdG8tbW9jay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
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

/***/ "BO9B":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mock-to-interface/mock-to-interface.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MockToInterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockToInterfaceComponent", function() { return MockToInterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mock_input_mock_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-input/mock-input.component */ "UoDK");
/* harmony import */ var _interface_input_interface_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface-input/interface-input.component */ "RZMH");



class MockToInterfaceComponent {
}
MockToInterfaceComponent.ɵfac = function MockToInterfaceComponent_Factory(t) { return new (t || MockToInterfaceComponent)(); };
MockToInterfaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MockToInterfaceComponent, selectors: [["app-mock-to-interface"]], decls: 4, vars: 2, consts: [[1, "input-areas"], [3, "isInterfaceToMockMode"]], template: function MockToInterfaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-mock-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-interface-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isInterfaceToMockMode", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isInterfaceToMockMode", false);
    } }, directives: [_mock_input_mock_input_component__WEBPACK_IMPORTED_MODULE_1__["MockInputComponent"], _interface_input_interface_input_component__WEBPACK_IMPORTED_MODULE_2__["InterfaceInputComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2NrLXRvLWludGVyZmFjZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Jl3k":
/*!***********************************************!*\
  !*** ./src/app/services/generator.service.ts ***!
  \***********************************************/
/*! exports provided: GeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorService", function() { return GeneratorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mock_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-generator.service */ "rHd3");
/* harmony import */ var _interface_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface-generator.service */ "ZENc");



class GeneratorService {
    constructor(mockGeneratorService, interfaceGeneratorService) {
        this.mockGeneratorService = mockGeneratorService;
        this.interfaceGeneratorService = interfaceGeneratorService;
    }
    generate(isInterfaceToMockMode) {
        if (isInterfaceToMockMode) {
            this.mockGeneratorService.generateMock();
        }
        else {
            this.interfaceGeneratorService.generateInterface();
        }
    }
}
GeneratorService.ɵfac = function GeneratorService_Factory(t) { return new (t || GeneratorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mock_generator_service__WEBPACK_IMPORTED_MODULE_1__["MockGeneratorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_interface_generator_service__WEBPACK_IMPORTED_MODULE_2__["InterfaceGeneratorService"])); };
GeneratorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneratorService, factory: GeneratorService.ɵfac });


/***/ }),

/***/ "Kbfh":
/*!**************************************************!*\
  !*** ./src/shared/utils/generate-system-name.ts ***!
  \**************************************************/
/*! exports provided: generateSystemName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSystemName", function() { return generateSystemName; });
function generateSystemName() {
    return 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const random = Math.round(Math.random() * 16);
        const value = c === 'x' ? random : (random && 0x3) || 0x8;
        return value.toString(16);
    });
}


/***/ }),

/***/ "NPuz":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/components/additional-interface/components/additional-interface-modal/additional-interface-modal.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: AdditionalInterfaceModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalInterfaceModalComponent", function() { return AdditionalInterfaceModalComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _enums_additional_interface_form_field_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/additional-interface-form-field.enum */ "va0O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_additional_interface_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/additional-interface.service */ "maQ4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AdditionalInterfaceModalComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r1);
} }
class AdditionalInterfaceModalComponent {
    constructor(additionalInterfaceService) {
        this.additionalInterfaceService = additionalInterfaceService;
        this.typeOptions = ['Interface', 'Enum'];
        this.formField = _enums_additional_interface_form_field_enum__WEBPACK_IMPORTED_MODULE_1__["AdditionalInterfaceFormField"];
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
    }
    ngAfterViewInit() {
        this.formGroup.reset();
    }
    save() {
        this.additionalInterfaceService.saveAdditionalValue(this.formGroup.getRawValue());
        this.close();
    }
    close() {
        document.getElementById('close-btn').click();
    }
}
AdditionalInterfaceModalComponent.ɵfac = function AdditionalInterfaceModalComponent_Factory(t) { return new (t || AdditionalInterfaceModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_additional_interface_service__WEBPACK_IMPORTED_MODULE_3__["AdditionalInterfaceService"])); };
AdditionalInterfaceModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdditionalInterfaceModalComponent, selectors: [["app-additional-interface-modal"]], decls: 22, vars: 5, consts: [[1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "id", "close-btn", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-control", "form-control", 3, "formControl"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function AdditionalInterfaceModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Add additional interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AdditionalInterfaceModalComponent_option_10_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdditionalInterfaceModalComponent_Template_button_click_18_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdditionalInterfaceModalComponent_Template_button_click_20_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.formGroup.get(ctx.formField.Type));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.typeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.formGroup.get(ctx.formField.Name));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.formGroup.get(ctx.formField.Value));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".modal-control[_ngcontent-%COMP%] {\n  width: 350px;\n  margin: 10px;\n  display: block;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin: 0 10px 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FkZGl0aW9uYWwtaW50ZXJmYWNlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGIiwiZmlsZSI6ImFkZGl0aW9uYWwtaW50ZXJmYWNlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRyb2wge1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAxMHB4O1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "RZMH":
/*!*************************************************************************!*\
  !*** ./src/app/components/interface-input/interface-input.component.ts ***!
  \*************************************************************************/
/*! exports provided: InterfaceInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceInputComponent", function() { return InterfaceInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mock_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mock-generator.service */ "rHd3");
/* harmony import */ var _services_interface_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interface-generator.service */ "ZENc");
/* harmony import */ var _services_generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/generator.service */ "Jl3k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _additional_interface_additional_interface_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../additional-interface/additional-interface.component */ "UkVn");







function InterfaceInputComponent_textarea_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.mockGeneratorService.interfaceControl);
} }
function InterfaceInputComponent_pre_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.interfaceGeneratorService.json));
} }
function InterfaceInputComponent_app_additional_interface_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-additional-interface");
} }
function InterfaceInputComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterfaceInputComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.generatorService.generate(ctx_r4.isInterfaceToMockMode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Generate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InterfaceInputComponent {
    constructor(mockGeneratorService, interfaceGeneratorService, generatorService) {
        this.mockGeneratorService = mockGeneratorService;
        this.interfaceGeneratorService = interfaceGeneratorService;
        this.generatorService = generatorService;
        this.isInterfaceToMockMode = true;
    }
}
InterfaceInputComponent.ɵfac = function InterfaceInputComponent_Factory(t) { return new (t || InterfaceInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mock_generator_service__WEBPACK_IMPORTED_MODULE_1__["MockGeneratorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interface_generator_service__WEBPACK_IMPORTED_MODULE_2__["InterfaceGeneratorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_generator_service__WEBPACK_IMPORTED_MODULE_3__["GeneratorService"])); };
InterfaceInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterfaceInputComponent, selectors: [["app-interface-input"]], inputs: { isInterfaceToMockMode: "isInterfaceToMockMode" }, decls: 7, vars: 4, consts: [[1, "interface-input-container"], [1, "input-name"], ["class", "default-input form-control", 3, "formControl", 4, "ngIf"], ["class", "default-input form-control", "contenteditable", "true", 4, "ngIf"], [4, "ngIf"], ["class", "btn btn-primary generate-btn", 3, "click", 4, "ngIf"], [1, "default-input", "form-control", 3, "formControl"], ["contenteditable", "true", 1, "default-input", "form-control"], [1, "btn", "btn-primary", "generate-btn", 3, "click"]], template: function InterfaceInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "INTERFACE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InterfaceInputComponent_textarea_3_Template, 1, 1, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InterfaceInputComponent_pre_4_Template, 3, 3, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InterfaceInputComponent_app_additional_interface_5_Template, 1, 0, "app-additional-interface", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InterfaceInputComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInterfaceToMockMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isInterfaceToMockMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInterfaceToMockMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isInterfaceToMockMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _additional_interface_additional_interface_component__WEBPACK_IMPORTED_MODULE_6__["AdditionalInterfaceComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: [".interface-input-container[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ludGVyZmFjZS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiaW50ZXJmYWNlLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludGVyZmFjZS1pbnB1dC1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header-content.component */ "WhF9");


class AppComponent {
    constructor() {
        this.title = 'ts-mock-generator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-content");
    } }, directives: [_components_header_header_content_component__WEBPACK_IMPORTED_MODULE_1__["HeaderContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UkVn":
/*!***********************************************************************************!*\
  !*** ./src/app/components/additional-interface/additional-interface.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdditionalInterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalInterfaceComponent", function() { return AdditionalInterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_additional_interface_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/additional-interface.service */ "maQ4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_additional_interface_modal_additional_interface_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/additional-interface-modal/additional-interface-modal.component */ "NPuz");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function AdditionalInterfaceComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditionalInterfaceComponent_div_4_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.additionalInterfaceService.remove(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const interface_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", interface_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](interface_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", interface_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", interface_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](interface_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", interface_r1.value);
} }
class AdditionalInterfaceComponent {
    constructor(additionalInterfaceService) {
        this.additionalInterfaceService = additionalInterfaceService;
    }
    identify(index) {
        return index;
    }
}
AdditionalInterfaceComponent.ɵfac = function AdditionalInterfaceComponent_Factory(t) { return new (t || AdditionalInterfaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_additional_interface_service__WEBPACK_IMPORTED_MODULE_1__["AdditionalInterfaceService"])); };
AdditionalInterfaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdditionalInterfaceComponent, selectors: [["app-additional-interface"]], decls: 6, vars: 2, consts: [[1, "additional-interfaces"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-link", "btn-sm"], [1, "title"], ["class", "interface", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "exampleModal", 1, "modal", "fade"], [1, "interface"], ["hideToggle", ""], [1, "title", 3, "title"], [1, "delete-button", 3, "click"], ["disabled", "", 1, "interface-name", "form-control", 3, "value"], ["element", ""], ["disabled", "", 1, "interface-value", "form-control", 3, "value"]], template: function AdditionalInterfaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+ Add additional data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdditionalInterfaceComponent_div_4_Template, 19, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-additional-interface-modal", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.additionalInterfaceService.additionalValues)("ngForTrackBy", ctx.identify);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_additional_interface_modal_additional_interface_modal_component__WEBPACK_IMPORTED_MODULE_3__["AdditionalInterfaceModalComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.interface[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 400px;\n  margin-bottom: 20px;\n  padding: 5px;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.delete-button[_ngcontent-%COMP%]:hover {\n  color: red;\n  transition: all 0.5s ease-out;\n}\n\n[_nghost-%COMP%]  mat-panel-description {\n  justify-content: flex-end;\n  margin: 0;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 305px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  color: #325ED7;\n  text-decoration: none;\n  font-weight: 500;\n  margin-bottom: 10px;\n  margin-top: 5px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.interface-name[_ngcontent-%COMP%], .interface-value[_ngcontent-%COMP%] {\n  width: 350px;\n  margin-bottom: 10px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZGl0aW9uYWwtaW50ZXJmYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiYWRkaXRpb25hbC1pbnRlcmZhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmludGVyZmFjZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG5cbjpob3N0OjpuZy1kZWVwIG1hdC1wYW5lbC1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMzA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnRuLWxpbmsge1xuICBjb2xvcjogIzMyNUVENztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmludGVyZmFjZS1uYW1lLCAuaW50ZXJmYWNlLXZhbHVlIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "UoDK":
/*!***************************************************************!*\
  !*** ./src/app/components/mock-input/mock-input.component.ts ***!
  \***************************************************************/
/*! exports provided: MockInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockInputComponent", function() { return MockInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mock_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mock-generator.service */ "rHd3");
/* harmony import */ var _services_interface_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interface-generator.service */ "ZENc");
/* harmony import */ var _services_generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/generator.service */ "Jl3k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function MockInputComponent_textarea_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.interfaceGeneratorService.mockControl);
} }
function MockInputComponent_pre_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.mockGeneratorService.json));
} }
function MockInputComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MockInputComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.generatorService.generate(ctx_r3.isInterfaceToMockMode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Generate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MockInputComponent {
    constructor(mockGeneratorService, interfaceGeneratorService, generatorService) {
        this.mockGeneratorService = mockGeneratorService;
        this.interfaceGeneratorService = interfaceGeneratorService;
        this.generatorService = generatorService;
        this.isInterfaceToMockMode = true;
    }
}
MockInputComponent.ɵfac = function MockInputComponent_Factory(t) { return new (t || MockInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mock_generator_service__WEBPACK_IMPORTED_MODULE_1__["MockGeneratorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interface_generator_service__WEBPACK_IMPORTED_MODULE_2__["InterfaceGeneratorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_generator_service__WEBPACK_IMPORTED_MODULE_3__["GeneratorService"])); };
MockInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MockInputComponent, selectors: [["app-mock-input"]], inputs: { isInterfaceToMockMode: "isInterfaceToMockMode" }, decls: 6, vars: 3, consts: [[1, "mock-input-container"], [1, "input-name"], ["class", "default-input form-control", 3, "formControl", 4, "ngIf"], ["class", "default-input form-control", "contenteditable", "true", 4, "ngIf"], ["class", "btn btn-primary generate-btn", 3, "click", 4, "ngIf"], [1, "default-input", "form-control", 3, "formControl"], ["contenteditable", "true", 1, "default-input", "form-control"], [1, "btn", "btn-primary", "generate-btn", 3, "click"]], template: function MockInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MOCK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MockInputComponent_textarea_3_Template, 1, 1, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MockInputComponent_pre_4_Template, 3, 3, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MockInputComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isInterfaceToMockMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInterfaceToMockMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInterfaceToMockMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: [".mock-input-container[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vY2staW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6Im1vY2staW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9jay1pbnB1dC1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "WhF9":
/*!***************************************************************!*\
  !*** ./src/app/components/header/header-content.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContentComponent", function() { return HeaderContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _interface_to_mock_interface_to_mock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface-to-mock/interface-to-mock.component */ "Aw3O");
/* harmony import */ var _mock_to_interface_mock_to_interface_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-to-interface/mock-to-interface.component */ "BO9B");




class HeaderContentComponent {
}
HeaderContentComponent.ɵfac = function HeaderContentComponent_Factory(t) { return new (t || HeaderContentComponent)(); };
HeaderContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderContentComponent, selectors: [["app-header-content"]], decls: 6, vars: 2, consts: [[3, "label"]], template: function HeaderContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-interface-to-mock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-mock-to-interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Interface to Mock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Mock to Interface");
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _interface_to_mock_interface_to_mock_component__WEBPACK_IMPORTED_MODULE_2__["InterfaceToMockComponent"], _mock_to_interface_mock_to_interface_component__WEBPACK_IMPORTED_MODULE_3__["MockToInterfaceComponent"]], styles: ["app-interface-to-mock[_ngcontent-%COMP%], app-mock-to-interface[_ngcontent-%COMP%] {\n  display: block;\n  width: 960px;\n  margin: 0 auto;\n  text-align: left;\n  padding-top: 150px;\n}\n\n[_nghost-%COMP%]  .mat-tab-header {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n[_nghost-%COMP%]  .mat-tab-labels {\n  display: flex;\n  justify-content: center;\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHRTtFQUNFLHVDQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURKIiwiZmlsZSI6ImhlYWRlci1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWludGVyZmFjZS10by1tb2NrLFxuYXBwLW1vY2stdG8taW50ZXJmYWNlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAge1xuICAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_interface_to_mock_interface_to_mock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/interface-to-mock/interface-to-mock.component */ "Aw3O");
/* harmony import */ var _services_mock_generator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/mock-generator.service */ "rHd3");
/* harmony import */ var _components_additional_interface_additional_interface_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/additional-interface/additional-interface.component */ "UkVn");
/* harmony import */ var _components_additional_interface_components_additional_interface_modal_additional_interface_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/additional-interface/components/additional-interface-modal/additional-interface-modal.component */ "NPuz");
/* harmony import */ var _services_additional_interface_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/additional-interface.service */ "maQ4");
/* harmony import */ var _components_header_header_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header-content.component */ "WhF9");
/* harmony import */ var _components_interface_input_interface_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/interface-input/interface-input.component */ "RZMH");
/* harmony import */ var _components_mock_input_mock_input_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mock-input/mock-input.component */ "UoDK");
/* harmony import */ var _components_mock_to_interface_mock_to_interface_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mock-to-interface/mock-to-interface.component */ "BO9B");
/* harmony import */ var _services_interface_generator_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/interface-generator.service */ "ZENc");
/* harmony import */ var _services_generator_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/generator.service */ "Jl3k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [_services_mock_generator_service__WEBPACK_IMPORTED_MODULE_10__["MockGeneratorService"], _services_additional_interface_service__WEBPACK_IMPORTED_MODULE_13__["AdditionalInterfaceService"], _services_interface_generator_service__WEBPACK_IMPORTED_MODULE_18__["InterfaceGeneratorService"], _services_generator_service__WEBPACK_IMPORTED_MODULE_19__["GeneratorService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_interface_to_mock_interface_to_mock_component__WEBPACK_IMPORTED_MODULE_9__["InterfaceToMockComponent"],
        _components_additional_interface_additional_interface_component__WEBPACK_IMPORTED_MODULE_11__["AdditionalInterfaceComponent"],
        _components_additional_interface_components_additional_interface_modal_additional_interface_modal_component__WEBPACK_IMPORTED_MODULE_12__["AdditionalInterfaceModalComponent"],
        _components_header_header_content_component__WEBPACK_IMPORTED_MODULE_14__["HeaderContentComponent"],
        _components_interface_input_interface_input_component__WEBPACK_IMPORTED_MODULE_15__["InterfaceInputComponent"],
        _components_mock_input_mock_input_component__WEBPACK_IMPORTED_MODULE_16__["MockInputComponent"],
        _components_mock_to_interface_mock_to_interface_component__WEBPACK_IMPORTED_MODULE_17__["MockToInterfaceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"]] }); })();


/***/ }),

/***/ "ZENc":
/*!*********************************************************!*\
  !*** ./src/app/services/interface-generator.service.ts ***!
  \*********************************************************/
/*! exports provided: InterfaceGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceGeneratorService", function() { return InterfaceGeneratorService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_utils_convertToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/convertToObject */ "uQmp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class InterfaceGeneratorService {
    constructor() {
        this.interfaceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](JSON.stringify({}), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.mockControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    }
    get json() {
        return JSON.parse(this.interfaceControl.value);
    }
    generateInterface() {
        Object.keys(Object(_shared_utils_convertToObject__WEBPACK_IMPORTED_MODULE_1__["convertToObject"])(this.mockControl.value)).map((key) => {
            this.setInterface(this.getUpdatedInterface(key));
        });
    }
    getUpdatedInterface(key) {
        const currentInterface = JSON.parse(this.interfaceControl.value);
        currentInterface[key] = typeof Object(_shared_utils_convertToObject__WEBPACK_IMPORTED_MODULE_1__["convertToObject"])(this.mockControl.value)[key];
        return currentInterface;
    }
    setInterface(currentInterface) {
        this.interfaceControl.reset();
        this.interfaceControl.setValue(JSON.stringify(currentInterface));
    }
}
InterfaceGeneratorService.ɵfac = function InterfaceGeneratorService_Factory(t) { return new (t || InterfaceGeneratorService)(); };
InterfaceGeneratorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: InterfaceGeneratorService, factory: InterfaceGeneratorService.ɵfac });


/***/ }),

/***/ "dHpn":
/*!**************************************************!*\
  !*** ./src/shared/enums/primitive-types.enum.ts ***!
  \**************************************************/
/*! exports provided: PrimitiveTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimitiveTypes", function() { return PrimitiveTypes; });
var PrimitiveTypes;
(function (PrimitiveTypes) {
    PrimitiveTypes["String"] = "string";
    PrimitiveTypes["Number"] = "number";
    PrimitiveTypes["Boolean"] = "boolean";
})(PrimitiveTypes || (PrimitiveTypes = {}));


/***/ }),

/***/ "euF+":
/*!*********************************************************!*\
  !*** ./src/shared/enums/additional-value-types.enum.ts ***!
  \*********************************************************/
/*! exports provided: AdditionalValueTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalValueTypes", function() { return AdditionalValueTypes; });
var AdditionalValueTypes;
(function (AdditionalValueTypes) {
    AdditionalValueTypes["Interface"] = "Interface";
    AdditionalValueTypes["Enum"] = "Enum";
})(AdditionalValueTypes || (AdditionalValueTypes = {}));


/***/ }),

/***/ "maQ4":
/*!**********************************************************!*\
  !*** ./src/app/services/additional-interface.service.ts ***!
  \**********************************************************/
/*! exports provided: AdditionalInterfaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalInterfaceService", function() { return AdditionalInterfaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdditionalInterfaceService {
    constructor() {
        this.additionalValues = [];
    }
    saveAdditionalValue({ name, value, type }) {
        this.additionalValues = [
            ...this.additionalValues,
            { name, value, type },
        ];
    }
    remove(name) {
        this.additionalValues.find((item, index) => {
            if (item.name === name) {
                this.additionalValues.splice(index, 1);
            }
        });
    }
}
AdditionalInterfaceService.ɵfac = function AdditionalInterfaceService_Factory(t) { return new (t || AdditionalInterfaceService)(); };
AdditionalInterfaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdditionalInterfaceService, factory: AdditionalInterfaceService.ɵfac });


/***/ }),

/***/ "rHd3":
/*!****************************************************!*\
  !*** ./src/app/services/mock-generator.service.ts ***!
  \****************************************************/
/*! exports provided: MockGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockGeneratorService", function() { return MockGeneratorService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_utils_convertToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/convertToObject */ "uQmp");
/* harmony import */ var _shared_utils_generate_system_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/generate-system-name */ "Kbfh");
/* harmony import */ var _shared_enums_primitive_types_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/enums/primitive-types.enum */ "dHpn");
/* harmony import */ var _shared_utils_get_random_int__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/get-random-int */ "0OHh");
/* harmony import */ var _shared_enums_additional_value_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/enums/additional-value-types.enum */ "euF+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _additional_interface_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./additional-interface.service */ "maQ4");








class MockGeneratorService {
    constructor(additionalInterfaceService) {
        this.additionalInterfaceService = additionalInterfaceService;
        this.interfaceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.mockControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](JSON.stringify({}), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    }
    get json() {
        return JSON.parse(this.mockControl.value);
    }
    generateMock() {
        this.mockControl.setValue(JSON.stringify({}));
        Object.keys(Object(_shared_utils_convertToObject__WEBPACK_IMPORTED_MODULE_1__["convertToObject"])(this.interfaceControl.value)).map((key) => this.generateMockValue(Object(_shared_utils_convertToObject__WEBPACK_IMPORTED_MODULE_1__["convertToObject"])(this.interfaceControl.value)[key], key));
    }
    generateMockValue(type, key) {
        const currentMock = JSON.parse(this.mockControl.value);
        this.setMock(currentMock, key, this.getMockValue(type, key));
    }
    setMock(currentMock, mockKey, mockValue) {
        currentMock[mockKey] = mockValue;
        this.mockControl.setValue(JSON.stringify(currentMock));
    }
    isSystemName(key) {
        return key.includes('systemName') || key.includes('SystemName');
    }
    isPrimitive(type) {
        return (type === _shared_enums_primitive_types_enum__WEBPACK_IMPORTED_MODULE_3__["PrimitiveTypes"].String
            || type === _shared_enums_primitive_types_enum__WEBPACK_IMPORTED_MODULE_3__["PrimitiveTypes"].Number
            || type === _shared_enums_primitive_types_enum__WEBPACK_IMPORTED_MODULE_3__["PrimitiveTypes"].Boolean);
    }
    getMockValue(type, key) {
        switch (true) {
            case this.isSystemName(key):
                return Object(_shared_utils_generate_system_name__WEBPACK_IMPORTED_MODULE_2__["generateSystemName"])();
            case this.isInterface(type):
                return this.getValueByInterface(type);
            case this.isEnum(type):
                return this.getValueByEnum(type);
            case this.isPrimitive(type):
                return this.getValueByType(type);
            default:
                return null;
        }
    }
    getValueByType(type) {
        switch (type) {
            case _shared_enums_primitive_types_enum__WEBPACK_IMPORTED_MODULE_3__["PrimitiveTypes"].String: {
                return 'test string';
            }
            case _shared_enums_primitive_types_enum__WEBPACK_IMPORTED_MODULE_3__["PrimitiveTypes"].Number: {
                return Object(_shared_utils_get_random_int__WEBPACK_IMPORTED_MODULE_4__["getRandomInt"])(20);
            }
            case _shared_enums_primitive_types_enum__WEBPACK_IMPORTED_MODULE_3__["PrimitiveTypes"].Boolean: {
                return !!Object(_shared_utils_get_random_int__WEBPACK_IMPORTED_MODULE_4__["getRandomInt"])(2);
            }
            default: {
                return null;
            }
        }
    }
    getValueByInterface(interfaceName) {
        let additionalInterface = {};
        return Object.keys(this.getProcessedInterface(interfaceName))
            .map((key) => {
            additionalInterface = Object.assign(Object.assign({}, additionalInterface), { [key]: this.getMockValue(this.getProcessedInterface(interfaceName)[key], key) });
            return additionalInterface;
        })
            .pop();
    }
    getProcessedInterface(interfaceName) {
        return Object(_shared_utils_convertToObject__WEBPACK_IMPORTED_MODULE_1__["convertToObject"])(this.additionalInterfaceService.additionalValues.find(({ name }) => name === interfaceName).value);
    }
    getValueByEnum(enumName) {
        const processedEnum = this.getProcessedEnum(enumName);
        const firstEnumKey = Object.keys(processedEnum)[0];
        return processedEnum[firstEnumKey];
    }
    getProcessedEnum(enumName) {
        return Object(_shared_utils_convertToObject__WEBPACK_IMPORTED_MODULE_1__["convertToObject"])(this.additionalInterfaceService.additionalValues.find(({ name }) => name === enumName).value);
    }
    isInterface(interfaceName) {
        return Boolean(this.additionalInterfaceService.additionalValues.find(({ name, type }) => name === interfaceName && type === _shared_enums_additional_value_types_enum__WEBPACK_IMPORTED_MODULE_5__["AdditionalValueTypes"].Interface));
    }
    isEnum(enumName) {
        return Boolean(this.additionalInterfaceService.additionalValues.find(({ name, type }) => name === enumName && type === _shared_enums_additional_value_types_enum__WEBPACK_IMPORTED_MODULE_5__["AdditionalValueTypes"].Enum));
    }
}
MockGeneratorService.ɵfac = function MockGeneratorService_Factory(t) { return new (t || MockGeneratorService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_additional_interface_service__WEBPACK_IMPORTED_MODULE_7__["AdditionalInterfaceService"])); };
MockGeneratorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: MockGeneratorService, factory: MockGeneratorService.ɵfac });


/***/ }),

/***/ "uQmp":
/*!*********************************************!*\
  !*** ./src/shared/utils/convertToObject.ts ***!
  \*********************************************/
/*! exports provided: convertToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToObject", function() { return convertToObject; });
function convertToObject(data) {
    const json = data.replace(/\s/g, '')
        .replace(/\n/g, '')
        .replace(/\?/g, '')
        .replace(/=/g, ':')
        .replace(/\|/g, '')
        .replace(/undefined/g, '')
        .replace(/;(?=})/g, '')
        .replace(/,(?=})/g, '')
        .replace(/;/g, ',')
        .replace('export default', '')
        .replace(/(\r\n|\n|\r)/gm, '')
        .replace(/ /g, '')
        .replace(/"/g, '')
        .replace(/'/g, '')
        .replace(/{/g, '{"')
        .replace(/}/g, '"}')
        .replace(/:/g, '":"')
        .replace(/,/g, '","')
        .replace(/:"{/g, ':{')
        .replace(/}"}/g, '}}')
        .replace(/}","{/g, '},{')
        .replace(/]"}/g, ']}')
        .replace(/:"\[/g, ':["')
        .replace(/]",/g, '],')
        .replace(/],/g, '"],')
        .replace(/]}/g, '"]}')
        .replace(/\(/g, '("')
        .replace(/\)/g, '")')
        .replace(/"{/g, '{')
        .replace(/}"/g, '}');
    const obj = JSON.parse(json);
    Object.keys(obj).forEach((k) => {
        const int = parseInt(obj[k], 10);
        if (!Number.isNaN(int) && typeof (obj[k]) !== 'object') {
            obj[k] = int;
        }
    });
    return obj;
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "va0O":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/additional-interface/enums/additional-interface-form-field.enum.ts ***!
  \***********************************************************************************************/
/*! exports provided: AdditionalInterfaceFormField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalInterfaceFormField", function() { return AdditionalInterfaceFormField; });
var AdditionalInterfaceFormField;
(function (AdditionalInterfaceFormField) {
    AdditionalInterfaceFormField["Name"] = "name";
    AdditionalInterfaceFormField["Type"] = "type";
    AdditionalInterfaceFormField["Value"] = "value";
})(AdditionalInterfaceFormField || (AdditionalInterfaceFormField = {}));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map