function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-material.module.ts":
  /*!****************************************!*\
    !*** ./src/app/app-material.module.ts ***!
    \****************************************/

  /*! exports provided: AppMaterialModule */

  /***/
  function srcAppAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function () {
      return AppMaterialModule;
    });

    var AppMaterialModule = function AppMaterialModule() {
      _classCallCheck(this, AppMaterialModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/button-toggle/index.ngfactory */
    "./node_modules/@angular/material/button-toggle/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/toolbar/index.ngfactory */
    "./node_modules/@angular/material/toolbar/index.ngfactory.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/form-field/index.ngfactory */
    "./node_modules/@angular/material/form-field/index.ngfactory.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _components_highlighter_highlighter_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/highlighter/highlighter.component.ngfactory */
    "./src/app/components/highlighter/highlighter.component.ngfactory.js");
    /* harmony import */


    var _components_highlighter_highlighter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/highlighter/highlighter.component */
    "./src/app/components/highlighter/highlighter.component.ts");
    /* harmony import */


    var _services_highlighter_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/highlighter.service */
    "./src/app/services/highlighter.service.ts");
    /* harmony import */


    var _services_dom_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/dom.service */
    "./src/app/services/dom.service.ts");
    /* harmony import */


    var _components_highlighter_filter_highlighter_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/highlighter-filter/highlighter-filter.component.ngfactory */
    "./src/app/components/highlighter-filter/highlighter-filter.component.ngfactory.js");
    /* harmony import */


    var _components_highlighter_filter_highlighter_filter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/highlighter-filter/highlighter-filter.component */
    "./src/app/components/highlighter-filter/highlighter-filter.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-button-toggle", [["class", "mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "focus"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).focus() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [[2, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var currVal_7 = _v.context.$implicit.value;

        _ck(_v, 1, 0, currVal_7);
      }, function (_ck, _v) {
        var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).buttonToggleGroup;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).checked;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).appearance === "standard";
        var currVal_4 = 0 - 1;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

        var currVal_6 = null;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _v.context.$implicit.value;

        _ck(_v, 2, 0, currVal_8);
      });
    }

    function View_AppComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-button-toggle", [["class", "mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "focus"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).focus() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, [[12, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var currVal_7 = _v.context.$implicit.value;

        _ck(_v, 1, 0, currVal_7);
      }, function (_ck, _v) {
        var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).buttonToggleGroup;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).checked;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).appearance === "standard";
        var currVal_4 = 0 - 1;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

        var currVal_6 = null;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _v.context.$implicit.value;

        _ck(_v, 2, 0, currVal_8);
      });
    }

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 62, "div", [["class", "app"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "header", [["class", "app-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]], {
        color: [0, "color"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _toolbarRows: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "h1", [["class", "app-logo m-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Angular Select Highlighter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 55, "section", [["class", "app-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 14, "div", [["class", "d-flex justify-content-center mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "mat-button-toggle-group", [["appearance", "legacy"], ["aria-label", "Highlight Color"], ["class", "mat-button-toggle-group"], ["name", "highlightColor"], ["role", "group"]], [[1, "aria-disabled", 0], [2, "mat-button-toggle-vertical", null], [2, "mat-button-toggle-group-appearance-standard", null]], [[null, "change"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _co.onHighlightColorChange($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroupMultiple"], null, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 1130496, null, 1, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], {
        appearance: [0, "appearance"],
        name: [1, "name"],
        value: [2, "value"]
      }, {
        change: "change"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _buttonToggles: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "button", [["class", "ml-2"], ["color", "primary"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.onEraser() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Eraser"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "button", [["class", "ml-2"], ["color", "warn"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.onReset() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Reset"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 26, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 19, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 18, "mat-form-field", [["class", "w-100 mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        _controlNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, {
        _controlStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        _labelChildNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, {
        _labelChildStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        _placeholderChild: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _errorChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        _hintChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        _prefixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        _suffixChildren: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, [[5, 4], [6, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Enter text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, 1, 4, "textarea", [["cdkAutosizeMaxRows", "25"], ["cdkAutosizeMinRows", "18"], ["cdkTextareaAutosize", ""], ["class", "cdk-textarea-autosize mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["rows", "1"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._noopInputHandler() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._focusChanged(false) !== false;
          ad = pd_1 && ad;
        }

        if ("focus" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._focusChanged(true) !== false;
          ad = pd_2 && ad;
        }

        if ("input" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._onInput() !== false;
          ad = pd_3 && ad;
        }

        if ("input" === en) {
          var pd_4 = _co.onTextChange($event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 4603904, [["autosize", 4]], 0, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["CdkTextareaAutosize"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        minRows: [0, "minRows"],
        maxRows: [1, "maxRows"],
        enabled: [2, "enabled"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[3, 4], [4, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 5, "div", [["class", "col d-flex pb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 4, "app-highlighter", [], null, [[null, "selectionText"], [null, "mouseup"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mouseup" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onSelectionText($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectionText" === en) {
          var pd_1 = _co.onTextSelection($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _components_highlighter_highlighter_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_HighlighterComponent_0"], _components_highlighter_highlighter_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_HighlighterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 573440, null, 0, _components_highlighter_highlighter_component__WEBPACK_IMPORTED_MODULE_20__["HighlighterComponent"], [_services_highlighter_service__WEBPACK_IMPORTED_MODULE_21__["HighlighterService"], _services_dom_service__WEBPACK_IMPORTED_MODULE_22__["DomService"]], {
        color: [0, "color"],
        text: [1, "text"],
        data: [2, "data"]
      }, {
        selectionText: "selectionText"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Filters:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 7, "mat-button-toggle-group", [["appearance", "legacy"], ["aria-label", "Filter Color"], ["class", "mb-3 mat-button-toggle-group"], ["multiple", ""], ["name", "filterColor"], ["role", "group"]], [[1, "aria-disabled", 0], [2, "mat-button-toggle-vertical", null], [2, "mat-button-toggle-group-appearance-standard", null]], [[null, "change"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _co.onFilterColorChange($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroupMultiple"], null, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 1130496, null, 1, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], {
        appearance: [0, "appearance"],
        name: [1, "name"],
        value: [2, "value"],
        multiple: [3, "multiple"]
      }, {
        change: "change"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        _buttonToggles: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 2, "app-highlighter-filter", [], null, null, null, _components_highlighter_filter_highlighter_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_HighlighterFilterComponent_0"], _components_highlighter_filter_highlighter_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_HighlighterFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 49152, null, 0, _components_highlighter_filter_highlighter_filter_component__WEBPACK_IMPORTED_MODULE_24__["HighlighterFilterComponent"], [], {
        data: [0, "data"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = "primary";

        _ck(_v, 3, 0, currVal_2);

        var currVal_6 = "legacy";
        var currVal_7 = "highlightColor";

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform(_co.$color));

        _ck(_v, 12, 0, currVal_6, currVal_7, currVal_8);

        var currVal_9 = _co.colors;

        _ck(_v, 16, 0, currVal_9);

        var currVal_12 = "primary";

        _ck(_v, 18, 0, currVal_12);

        var currVal_15 = "warn";

        _ck(_v, 21, 0, currVal_15);

        var currVal_47 = "18";
        var currVal_48 = "25";
        var currVal_49 = "";

        _ck(_v, 40, 0, currVal_47, currVal_48, currVal_49);

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 41, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).transform(_co.$text));

        _ck(_v, 41, 0, currVal_50);

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 46, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).transform(_co.$color));

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 46, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).transform(_co.$text));

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 46, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).transform(_co.$selections));

        _ck(_v, 46, 0, currVal_51, currVal_52, currVal_53);

        var currVal_57 = "legacy";
        var currVal_58 = "filterColor";

        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 55, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).transform(_co.$filterColors));

        var currVal_60 = "";

        _ck(_v, 55, 0, currVal_57, currVal_58, currVal_59, currVal_60);

        var currVal_61 = _co.colors;

        _ck(_v, 59, 0, currVal_61);

        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 61, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).transform(_co.$filteredItems));

        _ck(_v, 61, 0, currVal_62);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._toolbarRows.length > 0;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._toolbarRows.length === 0;

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).vertical;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).appearance === "standard";

        _ck(_v, 9, 0, currVal_3, currVal_4, currVal_5);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled || null;
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._animationMode === "NoopAnimations";

        _ck(_v, 17, 0, currVal_10, currVal_11);

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations";

        _ck(_v, 20, 0, currVal_13, currVal_14);

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).appearance == "standard";
        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).appearance == "fill";
        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).appearance == "outline";
        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).appearance == "legacy";

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._control.errorState;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._canLabelFloat;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._shouldLabelFloat();

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._hasFloatingLabel();

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._hideControlPlaceholder();

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._control.disabled;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._control.autofilled;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._control.focused;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).color == "accent";
        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).color == "warn";

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._shouldForward("untouched");

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._shouldForward("touched");

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._shouldForward("pristine");

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._shouldForward("dirty");

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._shouldForward("valid");

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._shouldForward("invalid");

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._shouldForward("pending");

        var currVal_37 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._animationsEnabled;

        _ck(_v, 25, 1, [currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37]);

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._isServer;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).id;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).placeholder;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).required;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._isNativeSelect || null;
        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._ariaDescribedby || null;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).errorState;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).required.toString();

        _ck(_v, 39, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46);

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).disabled;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).vertical;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).appearance === "standard";

        _ck(_v, 52, 0, currVal_54, currVal_55, currVal_56);
      });
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_26__["Store"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".app[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n}\n.app-header[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  -webkit-box-flex: 0;\n          flex: none;\n  text-align: center;\n}\n.app-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n}\nmat-button-toggle[_ngcontent-%COMP%] {\n  color: #17181a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9IZXphcmQvYW5ndWxhci1zZWxlY3QtaGlnaGxpZ2h0ZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9IZXphcmQvYW5ndWxhci1zZWxlY3QtaGlnaGxpZ2h0ZXIvc3JjL3Njc3MvdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtBQ0RGO0FER0U7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtVQUFBLFVBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxjQUFBO0FDRko7QURNQTtFQUNFLGNFZks7QURZUCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3ZhcnMnIGFzICo7XG5cbi5hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZmxleDogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgZmxleDogMCAxIGF1dG87XG4gIH1cbn1cblxubWF0LWJ1dHRvbi10b2dnbGUge1xuICBjb2xvcjogJGRhcms7XG59XG4iLCIuYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmFwcC1oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGZsZXg6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtY29udGVudCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZsZXg6IDAgMSBhdXRvO1xufVxuXG5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGNvbG9yOiAjMTcxODFhO1xufSIsIi8vIG1haW4gY29sb3JzXG4kYmx1ZTogIzAwNmZjNjtcbiRncmVlbjogIzc2ZDBhNDtcbiRyZWQ6ICNkMzNhMmM7XG4keWVsbG93OiAjZmVkZDBlO1xuJGdyYXk6ICNlOGViZWQ7XG4kZ3JheS1kYXJrZXI6ICNiYWJjYmY7XG4kZGFyazogIzE3MTgxYTtcbiR3aGl0ZTogI2ZmZjtcblxuJHByaW1hcnk6ICRibHVlO1xuJHNlY29uZGFyeTogJHJlZDtcbiR0ZXh0LWNvbG9yOiAkZGFyaztcblxuJGdyaWQtZ3V0dGVyOiAxcmVtO1xuXG4kc2l6ZXM6IChcbiAgMDogMCxcbiAgMTogMC41cmVtLFxuICAyOiAxcmVtLFxuICAzOiAxLjVyZW0sXG4gIDQ6IDJyZW1cbik7XG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constants */
    "./src/app/constants/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./store/app.actions */
    "./src/app/store/app.actions.ts");
    /* harmony import */


    var _store_app_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./store/app.selectors */
    "./src/app/store/app.selectors.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(store) {
        _classCallCheck(this, AppComponent);

        this.store = store;
        this.colors = _constants__WEBPACK_IMPORTED_MODULE_0__["colors"];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.$color = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getColor"]));
          this.$text = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getText"]));
          this.$selections = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getSelections"]));
          this.$filterColors = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getFilters"]));
          this.$filteredItems = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getFilteredSelections"]));
        }
      }, {
        key: "onTextChange",
        value: function onTextChange(_ref) {
          var text = _ref.target.value;
          this.store.dispatch(Object(_store_app_actions__WEBPACK_IMPORTED_MODULE_2__["textChange"])({
            text: text
          }));
        }
      }, {
        key: "onTextSelection",
        value: function onTextSelection(selections) {
          this.store.dispatch(Object(_store_app_actions__WEBPACK_IMPORTED_MODULE_2__["selectionsChange"])({
            selections: selections
          }));
        }
      }, {
        key: "onHighlightColorChange",
        value: function onHighlightColorChange(_ref2) {
          var highlightColor = _ref2.value;
          this.store.dispatch(Object(_store_app_actions__WEBPACK_IMPORTED_MODULE_2__["colorChange"])({
            highlightColor: highlightColor
          }));
        }
      }, {
        key: "onFilterColorChange",
        value: function onFilterColorChange(_ref3) {
          var filterColors = _ref3.value;
          this.store.dispatch(Object(_store_app_actions__WEBPACK_IMPORTED_MODULE_2__["filtersChange"])({
            filterColors: filterColors
          }));
        }
      }, {
        key: "onEraser",
        value: function onEraser() {
          this.store.dispatch(Object(_store_app_actions__WEBPACK_IMPORTED_MODULE_2__["colorChange"])({
            highlightColor: null
          }));
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.store.dispatch(Object(_store_app_actions__WEBPACK_IMPORTED_MODULE_2__["resetAll"])());
        }
      }]);

      return AppComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/snack-bar/index.ngfactory */
    "./node_modules/@angular/material/snack-bar/index.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/error-handler.service */
    "./src/app/services/error-handler.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _app_material_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./app-material.module */
    "./src/app/app-material.module.ts");
    /* harmony import */


    var _store_app_reducer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./store/app.reducer */
    "./src/app/store/app.reducer.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["SimpleSnackBarNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_9__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["State"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["State"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["INITIAL_STATE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_a"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_b"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_i"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _services_error_handler_service__WEBPACK_IMPORTED_MODULE_16__["ErrorHandlerService"], [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_material_module__WEBPACK_IMPORTED_MODULE_30__["AppMaterialModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_30__["AppMaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_k"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_k"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ReducerManagerDispatcher"], null, [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_k"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_i"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_w"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_i"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_k"], {
        root: _store_app_reducer__WEBPACK_IMPORTED_MODULE_31__["default"]
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_l"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_k"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_k"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_l"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["combineReducers"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_r"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["USER_RUNTIME_CHECKS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_bd"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_r"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_s"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_z"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["USER_RUNTIME_CHECKS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["META_REDUCERS"], function (p0_0, p1_0) {
        return [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_bb"](p0_0), _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_ba"](p1_0)];
      }, [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_s"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_s"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["USER_PROVIDED_META_REDUCERS"], [], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_q"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_x"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["META_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["USER_PROVIDED_META_REDUCERS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["REDUCER_FACTORY"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["createReducerFactory"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_q"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ReducerManager"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ReducerManagerDispatcher"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["REDUCER_FACTORY"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ReducerObservable"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ScannedActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_i"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_f"], {
        maxAge: 25,
        logOnly: false
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_e"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_h"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_j"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_j"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_i"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_e"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_k"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtools"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtools"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_k"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ReducerObservable"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ScannedActionsSubject"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["INITIAL_STATE"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StateObservable"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["ɵngrx_modules_store_devtools_store_devtools_d"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtools"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["Store"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StateObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_h"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_y"], [[3, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["Store"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreRootModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["Store"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_store_store_h"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/components/highlighter-filter/highlighter-filter.component.ngfactory.js":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/highlighter-filter/highlighter-filter.component.ngfactory.js ***!
    \*****************************************************************************************/

  /*! exports provided: RenderType_HighlighterFilterComponent, View_HighlighterFilterComponent_0, View_HighlighterFilterComponent_Host_0, HighlighterFilterComponentNgFactory */

  /***/
  function srcAppComponentsHighlighterFilterHighlighterFilterComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_HighlighterFilterComponent", function () {
      return RenderType_HighlighterFilterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HighlighterFilterComponent_0", function () {
      return View_HighlighterFilterComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HighlighterFilterComponent_Host_0", function () {
      return View_HighlighterFilterComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlighterFilterComponentNgFactory", function () {
      return HighlighterFilterComponentNgFactory;
    });
    /* harmony import */


    var _highlighter_filter_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./highlighter-filter.component.scss.shim.ngstyle */
    "./src/app/components/highlighter-filter/highlighter-filter.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _highlighter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./highlighter-filter.component */
    "./src/app/components/highlighter-filter/highlighter-filter.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_HighlighterFilterComponent = [_highlighter_filter_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_HighlighterFilterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_HighlighterFilterComponent,
      data: {}
    });

    function View_HighlighterFilterComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "]))], function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "highlighter__selection highlighter__selection--", _v.context.$implicit.variant, "");

        _ck(_v, 2, 0, currVal_0);
      }, function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.value;

        _ck(_v, 3, 0, currVal_1);
      });
    }

    function View_HighlighterFilterComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HighlighterFilterComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"],
        ngForTrackBy: [1, "ngForTrackBy"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.data;
        var currVal_1 = _co.trackByFn;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_HighlighterFilterComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-highlighter-filter", [], null, null, null, View_HighlighterFilterComponent_0, RenderType_HighlighterFilterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _highlighter_filter_component__WEBPACK_IMPORTED_MODULE_3__["HighlighterFilterComponent"], [], null, null)], null, null);
    }

    var HighlighterFilterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-highlighter-filter", _highlighter_filter_component__WEBPACK_IMPORTED_MODULE_3__["HighlighterFilterComponent"], View_HighlighterFilterComponent_Host_0, {
      data: "data"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/components/highlighter-filter/highlighter-filter.component.scss.shim.ngstyle.js":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/highlighter-filter/highlighter-filter.component.scss.shim.ngstyle.js ***!
    \*************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsHighlighterFilterHighlighterFilterComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%]:not(:empty) {\n  display: block;\n  padding: 1.5rem;\n  border: 1px solid #e8ebed;\n  border-radius: 3px;\n  max-height: 18.25rem;\n  overflow-y: auto;\n}\n\n.highlighter__selection[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  display: inline;\n}\n\n.highlighter__selection[_ngcontent-%COMP%]:after {\n  content: \"\\a\";\n  white-space: pre;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9IZXphcmQvYW5ndWxhci1zZWxlY3QtaGlnaGxpZ2h0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2hpZ2hsaWdodGVyLWZpbHRlci9oaWdobGlnaHRlci1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGlnaGxpZ2h0ZXItZmlsdGVyL2hpZ2hsaWdodGVyLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRElFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hpZ2hsaWdodGVyLWZpbHRlci9oaWdobGlnaHRlci1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwidmFyc1wiIGFzICo7XG5cbjpob3N0IHtcbiAgJjpub3QoOmVtcHR5KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXgtaGVpZ2h0OiAxOC4yNXJlbTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59XG5cbi5oaWdobGlnaHRlcl9fc2VsZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdcXEEnO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gIH1cbn1cbiIsIjpob3N0Om5vdCg6ZW1wdHkpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZWJlZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXgtaGVpZ2h0OiAxOC4yNXJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmhpZ2hsaWdodGVyX19zZWxlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5oaWdobGlnaHRlcl9fc2VsZWN0aW9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGFcIjtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/components/highlighter-filter/highlighter-filter.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/highlighter-filter/highlighter-filter.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: HighlighterFilterComponent */

  /***/
  function srcAppComponentsHighlighterFilterHighlighterFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlighterFilterComponent", function () {
      return HighlighterFilterComponent;
    });

    var HighlighterFilterComponent =
    /*#__PURE__*/
    function () {
      function HighlighterFilterComponent() {
        _classCallCheck(this, HighlighterFilterComponent);
      }

      _createClass(HighlighterFilterComponent, [{
        key: "trackByFn",
        value: function trackByFn(_, item) {
          return item.id;
        }
      }]);

      return HighlighterFilterComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/highlighter/highlighter.component.ngfactory.js":
  /*!***************************************************************************!*\
    !*** ./src/app/components/highlighter/highlighter.component.ngfactory.js ***!
    \***************************************************************************/

  /*! exports provided: RenderType_HighlighterComponent, View_HighlighterComponent_0, View_HighlighterComponent_Host_0, HighlighterComponentNgFactory */

  /***/
  function srcAppComponentsHighlighterHighlighterComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_HighlighterComponent", function () {
      return RenderType_HighlighterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HighlighterComponent_0", function () {
      return View_HighlighterComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HighlighterComponent_Host_0", function () {
      return View_HighlighterComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlighterComponentNgFactory", function () {
      return HighlighterComponentNgFactory;
    });
    /* harmony import */


    var _highlighter_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./highlighter.component.scss.shim.ngstyle */
    "./src/app/components/highlighter/highlighter.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _highlighter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./highlighter.component */
    "./src/app/components/highlighter/highlighter.component.ts");
    /* harmony import */


    var _services_highlighter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/highlighter.service */
    "./src/app/services/highlighter.service.ts");
    /* harmony import */


    var _services_dom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/dom.service */
    "./src/app/services/dom.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_HighlighterComponent = [_highlighter_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_HighlighterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_HighlighterComponent,
      data: {}
    });

    function View_HighlighterComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_HighlighterComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "highlighter__selection--", _v.parent.context.$implicit["variant"], "");

        _ck(_v, 1, 0, currVal_0);
      }, function (_ck, _v) {
        var currVal_1 = _v.parent.context.$implicit["value"];

        _ck(_v, 2, 0, currVal_1);
      });
    }

    function View_HighlighterComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HighlighterComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["selectionNode", 2]], null, 0, null, View_HighlighterComponent_4))], function (_ck, _v) {
        var currVal_0 = !_v.context.$implicit["id"];

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3);

        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_HighlighterComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HighlighterComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"],
        ngForTrackBy: [1, "ngForTrackBy"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.content;
        var currVal_1 = _co.trackByFn;

        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_HighlighterComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HighlighterComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.text;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_HighlighterComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-highlighter", [], null, [[null, "mouseup"]], function (_v, en, $event) {
        var ad = true;

        if ("mouseup" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onSelectionText($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, View_HighlighterComponent_0, RenderType_HighlighterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _highlighter_component__WEBPACK_IMPORTED_MODULE_3__["HighlighterComponent"], [_services_highlighter_service__WEBPACK_IMPORTED_MODULE_4__["HighlighterService"], _services_dom_service__WEBPACK_IMPORTED_MODULE_5__["DomService"]], null, null)], null, null);
    }

    var HighlighterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-highlighter", _highlighter_component__WEBPACK_IMPORTED_MODULE_3__["HighlighterComponent"], View_HighlighterComponent_Host_0, {
      color: "color",
      text: "text",
      data: "data"
    }, {
      selectionText: "selectionText"
    }, []);
    /***/

  },

  /***/
  "./src/app/components/highlighter/highlighter.component.scss.shim.ngstyle.js":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/highlighter/highlighter.component.scss.shim.ngstyle.js ***!
    \***********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsHighlighterHighlighterComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%]:not(:empty) {\n  display: block;\n  padding: 1.5rem;\n  border: 1px solid #e8ebed;\n  border-radius: 3px;\n  max-height: 18.25rem;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9IZXphcmQvYW5ndWxhci1zZWxlY3QtaGlnaGxpZ2h0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2hpZ2hsaWdodGVyL2hpZ2hsaWdodGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hpZ2hsaWdodGVyL2hpZ2hsaWdodGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oaWdobGlnaHRlci9oaWdobGlnaHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6Y29sb3InO1xuQHVzZSAndmFycycgYXMgKjtcblxuOmhvc3Qge1xuICAmOm5vdCg6ZW1wdHkpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgbWF4LWhlaWdodDogMTguMjVyZW07XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuIiwiOmhvc3Q6bm90KDplbXB0eSkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlYmVkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1heC1oZWlnaHQ6IDE4LjI1cmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/components/highlighter/highlighter.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/highlighter/highlighter.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HighlighterComponent */

  /***/
  function srcAppComponentsHighlighterHighlighterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlighterComponent", function () {
      return HighlighterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);

    var HighlighterComponent =
    /*#__PURE__*/
    function () {
      function HighlighterComponent(highlighterService, domService) {
        _classCallCheck(this, HighlighterComponent);

        this.highlighterService = highlighterService;
        this.domService = domService;
        this.content = null;
        this.selectionText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HighlighterComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.text || changes.data) {
            this.content = this.highlighterService.updateContent(this.data, this.text);
          }
        }
      }, {
        key: "onSelectionText",
        value: function onSelectionText(_ref4) {
          var currentTarget = _ref4.currentTarget;
          var color = this.color,
              data = this.data;
          var selection = window.getSelection();
          var anchorNode = selection.anchorNode,
              anchorOffset = selection.anchorOffset,
              focusOffset = selection.focusOffset;
          var value = selection.toString(); // skip outer events of container and empty selections

          if (!data && !data.length && !color || !value || !currentTarget.contains(anchorNode)) {
            selection.empty();
            return;
          } // find && update indexes if we replace existing highlight elements


          var currentIndex = this.domService.findSelectionIndex(currentTarget.childNodes, selection);
          var isBackward = this.domService.isSelectionBackward(selection);
          var item = Object.assign({
            id: uuid__WEBPACK_IMPORTED_MODULE_1___default()(),
            value: value,
            variant: color
          }, isBackward ? {
            start: focusOffset + currentIndex,
            end: focusOffset + currentIndex + value.length
          } : {
            start: anchorOffset + currentIndex,
            end: anchorOffset + currentIndex + value.length
          });
          var collection = this.highlighterService.updateSelections(data, item, !color);
          this.selectionText.emit(collection);
          selection.empty();
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(_, item) {
          return item.id;
        }
      }]);

      return HighlighterComponent;
    }();
    /***/

  },

  /***/
  "./src/app/constants/index.ts":
  /*!************************************!*\
    !*** ./src/app/constants/index.ts ***!
    \************************************/

  /*! exports provided: colors, defaultText */

  /***/
  function srcAppConstantsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "colors", function () {
      return colors;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultText", function () {
      return defaultText;
    });

    var colors = [{
      id: 0,
      value: 'red'
    }, {
      id: 1,
      value: 'green'
    }, {
      id: 2,
      value: 'yellow'
    }];
    var defaultText = // tslint:disable-next-line: max-line-length
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    /***/
  },

  /***/
  "./src/app/services/dom.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/dom.service.ts ***!
    \*****************************************/

  /*! exports provided: DomService */

  /***/
  function srcAppServicesDomServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomService", function () {
      return DomService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DomService =
    /*#__PURE__*/
    function () {
      function DomService() {
        _classCallCheck(this, DomService);
      }

      _createClass(DomService, [{
        key: "isSelectionBackward",
        value: function isSelectionBackward(selection) {
          var position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
          return !position && selection.anchorOffset > selection.focusOffset || position === Node.DOCUMENT_POSITION_PRECEDING;
        }
      }, {
        key: "findSelectionIndex",
        value: function findSelectionIndex(nodeList, _ref5) {
          var anchorNode = _ref5.anchorNode,
              focusNode = _ref5.focusNode;
          var currentIndex = 0;
          var nodes = [].slice.call(nodeList);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var node = _step.value;
              var firstChild = node.firstChild;
              var sibling = node.nextSibling; // skip comments nodes for safety iteration

              if (node.nodeType === 8) {
                continue;
              }

              if (firstChild && firstChild === anchorNode || node === anchorNode || firstChild && firstChild === focusNode || node === focusNode) {
                break;
              }

              currentIndex += firstChild && firstChild.length || node.length;

              if (sibling === anchorNode || sibling === focusNode || sibling && sibling.firstChild === anchorNode || sibling && sibling.firstChild === focusNode) {
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return currentIndex;
        }
      }]);

      return DomService;
    }();

    DomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function DomService_Factory() {
        return new DomService();
      },
      token: DomService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/error-handler.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/error-handler.service.ts ***!
    \***************************************************/

  /*! exports provided: ErrorHandlerService */

  /***/
  function srcAppServicesErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function () {
      return ErrorHandlerService;
    });
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");

    var ErrorHandlerService =
    /*#__PURE__*/
    function () {
      function ErrorHandlerService(snackBar, zone) {
        _classCallCheck(this, ErrorHandlerService);

        this.snackBar = snackBar;
        this.zone = zone;
      }

      _createClass(ErrorHandlerService, [{
        key: "handleError",
        value: function handleError(error) {
          if (error instanceof Error) {
            this.showError('An Error occured. Try to reload page.');

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              console.error(error);
            }
          }
        }
      }, {
        key: "showError",
        value: function showError(message) {
          var _this = this;

          this.zone.run(function () {
            _this.snackBar.open(message, null, {
              duration: 2000,
              verticalPosition: 'top',
              horizontalPosition: 'end'
            });
          });
        }
      }]);

      return ErrorHandlerService;
    }();

    ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function ErrorHandlerService_Factory() {
        return new ErrorHandlerService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      },
      token: ErrorHandlerService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/highlighter.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/highlighter.service.ts ***!
    \*************************************************/

  /*! exports provided: HighlighterService */

  /***/
  function srcAppServicesHighlighterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlighterService", function () {
      return HighlighterService;
    });
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HighlighterService =
    /*#__PURE__*/
    function () {
      function HighlighterService() {
        _classCallCheck(this, HighlighterService);
      }

      _createClass(HighlighterService, [{
        key: "updateSelections",
        value: function updateSelections(selections, target) {
          var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return selections.reduce(function (arr, curr) {
            if (target.start <= curr.start && target.end >= curr.end) {
              return _toConsumableArray(arr);
            } // target inside existing selection


            if (target.start > curr.start && target.end < curr.end) {
              var before = {
                id: uuid__WEBPACK_IMPORTED_MODULE_0___default()(),
                start: curr.start,
                end: target.start,
                value: curr.value.substr(0, target.start - curr.start),
                variant: curr.variant
              };
              var after = {
                id: uuid__WEBPACK_IMPORTED_MODULE_0___default()(),
                start: target.end,
                end: curr.end,
                value: curr.value.substr(target.end - curr.end),
                variant: curr.variant
              };
              return [].concat(_toConsumableArray(arr), [before, after]);
            } // target overlaped at the beginig


            if (target.start <= curr.start && target.end < curr.end && target.end > curr.start) {
              var result = {
                id: uuid__WEBPACK_IMPORTED_MODULE_0___default()(),
                start: target.end,
                end: curr.end,
                value: curr.value.substr(target.end - curr.end),
                variant: curr.variant
              };
              return [].concat(_toConsumableArray(arr), [result]);
            } // target overlaped at the end


            if (target.end >= curr.end && target.start > curr.start && target.start < curr.end) {
              var _result = {
                id: uuid__WEBPACK_IMPORTED_MODULE_0___default()(),
                start: curr.start,
                end: target.start,
                value: curr.value.substr(0, target.start - curr.start),
                variant: curr.variant
              };
              return [].concat(_toConsumableArray(arr), [_result]);
            }

            return [].concat(_toConsumableArray(arr), [curr]);
          }, []).concat(exclude ? [] : target).sort(function (a, b) {
            return a.start - b.start;
          });
        }
      }, {
        key: "updateContent",
        value: function updateContent(data, text) {
          var length = data && data.length;
          var position = 0;
          var content = text;

          if (length) {
            return data.reduce(function (children, node, index) {
              var before = content.substr(0, node.start - position) || [];
              content = content.substr(node.end - position);
              var after = index === length - 1 && content || [];
              position = node.end;
              return children.concat(before).concat(node).concat(after);
            }, []);
          }

          return [text];
        }
      }]);

      return HighlighterService;
    }();

    HighlighterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function HighlighterService_Factory() {
        return new HighlighterService();
      },
      token: HighlighterService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/store/app.actions.ts":
  /*!**************************************!*\
    !*** ./src/app/store/app.actions.ts ***!
    \**************************************/

  /*! exports provided: colorChange, textChange, filtersChange, selectionsChange, resetAll */

  /***/
  function srcAppStoreAppActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "colorChange", function () {
      return colorChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "textChange", function () {
      return textChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filtersChange", function () {
      return filtersChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectionsChange", function () {
      return selectionsChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resetAll", function () {
      return resetAll;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var PREFIX = 'APPLICATION';
    var TEXT_CHANGE = "".concat(PREFIX, "/TEXT_CHANGE");
    var SELECTIONS_CHANGE = "".concat(PREFIX, "//SELECTIONS_CHANGE");
    var FILTERS_CHANGE = "".concat(PREFIX, "//FILTERS_CHANGE");
    var COLOR_CHANGE = "".concat(PREFIX, "//COLOR_CHANGE");
    var RESET = "".concat(PREFIX, "//RESET");
    var colorChange = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(COLOR_CHANGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var textChange = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(TEXT_CHANGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var filtersChange = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(FILTERS_CHANGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var selectionsChange = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SELECTIONS_CHANGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var resetAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(RESET);
    /***/
  },

  /***/
  "./src/app/store/app.reducer.ts":
  /*!**************************************!*\
    !*** ./src/app/store/app.reducer.ts ***!
    \**************************************/

  /*! exports provided: initialState, default, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 */

  /***/
  function srcAppStoreAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
      return ɵ1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
      return ɵ2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ3", function () {
      return ɵ3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ4", function () {
      return ɵ4;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.actions */
    "./src/app/store/app.actions.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants/index.ts");

    var initialState = {
      highlightColor: null,
      filterColors: [],
      text: _constants__WEBPACK_IMPORTED_MODULE_2__["defaultText"],
      selections: []
    };

    var ɵ0 = function ɵ0(state, _ref6) {
      var highlightColor = _ref6.highlightColor;
      return Object.assign(Object.assign({}, state), {
        highlightColor: highlightColor
      });
    },
        ɵ1 = function ɵ1(state, _ref7) {
      var text = _ref7.text;
      return Object.assign(Object.assign({}, state), {
        selections: [],
        text: text
      });
    },
        ɵ2 = function ɵ2(state, _ref8) {
      var selections = _ref8.selections;
      return Object.assign(Object.assign({}, state), {
        selections: _toConsumableArray(selections)
      });
    },
        ɵ3 = function ɵ3(state, _ref9) {
      var filterColors = _ref9.filterColors;
      return Object.assign(Object.assign({}, state), {
        filterColors: _toConsumableArray(filterColors)
      });
    },
        ɵ4 = function ɵ4() {
      return Object.assign({}, initialState);
    };

    var appReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_1__["colorChange"], ɵ0), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_1__["textChange"], ɵ1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_1__["selectionsChange"], ɵ2), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_1__["filtersChange"], ɵ3), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_1__["resetAll"], ɵ4));

    function reducer(state, action) {
      return appReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/app.selectors.ts":
  /*!****************************************!*\
    !*** ./src/app/store/app.selectors.ts ***!
    \****************************************/

  /*! exports provided: getSelections, getColor, getText, getFilters, getFilteredSelections, ɵ0 */

  /***/
  function srcAppStoreAppSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSelections", function () {
      return getSelections;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getColor", function () {
      return getColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getText", function () {
      return getText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFilters", function () {
      return getFilters;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFilteredSelections", function () {
      return getFilteredSelections;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var getSelections = function getSelections(_ref10) {
      var root = _ref10.root;
      return root.selections;
    };

    var getColor = function getColor(_ref11) {
      var root = _ref11.root;
      return root.highlightColor;
    };

    var getText = function getText(_ref12) {
      var root = _ref12.root;
      return root.text;
    };

    var getFilters = function getFilters(_ref13) {
      var root = _ref13.root;
      return root.filterColors;
    };

    var ɵ0 = function ɵ0(filters, selections) {
      return selections.filter(function (item) {
        return filters.includes(item.variant);
      });
    };

    var getFilteredSelections = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFilters, getSelections, ɵ0);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      hmr: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/hmr.ts":
  /*!********************!*\
    !*** ./src/hmr.ts ***!
    \********************/

  /*! exports provided: hmrBootstrap */

  /***/
  function srcHmrTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function () {
      return hmrBootstrap;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angularclass/hmr */
    "./node_modules/@angularclass/hmr/dist/index.js");
    /* harmony import */


    var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);

    var hmrBootstrap = function hmrBootstrap(module, bootstrap) {
      var ngModule;
      module.hot.accept();
      bootstrap().then(function (mod) {
        return ngModule = mod;
      });
      module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) {
          return c.location.nativeElement;
        });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
      });
    };
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: ɵ0 */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hmr */
    "./src/hmr.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    var bootstrap = function bootstrap() {
      return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppModuleNgFactory"]);
    };

    var ɵ0 = bootstrap;

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hmr) {
      // tslint:disable-next-line: no-string-literal
      if (false) {} else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
      }
    } else {
      bootstrap().catch(function (err) {
        return console.log(err);
      });
    }
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/Hezard/angular-select-highlighter/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map