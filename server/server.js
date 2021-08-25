/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_main_Main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main/Main.component */ \"./src/pages/main/Main.component.tsx\");\n/* harmony import */ var _pages_start_Start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/start/Start.component */ \"./src/pages/start/Start.component.tsx\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.module.css */ \"./src/App.module.css\");\n/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: (_App_module_css__WEBPACK_IMPORTED_MODULE_5___default().App)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_start_Start_component__WEBPACK_IMPORTED_MODULE_3__.default, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/app/:m/:n/:x\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_main_Main_component__WEBPACK_IMPORTED_MODULE_2__.default, null)\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4___default()((_App_module_css__WEBPACK_IMPORTED_MODULE_5___default()))(App));\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/App.tsx?");

/***/ }),

/***/ "./src/actions/action.tsx":
/*!********************************!*\
  !*** ./src/actions/action.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_AMOUNT\": () => (/* binding */ ADD_AMOUNT),\n/* harmony export */   \"ADD_ROW\": () => (/* binding */ ADD_ROW),\n/* harmony export */   \"HIGHLIGHT\": () => (/* binding */ HIGHLIGHT),\n/* harmony export */   \"HIGHLIGHT_SUM\": () => (/* binding */ HIGHLIGHT_SUM),\n/* harmony export */   \"REMOVE_ROW\": () => (/* binding */ REMOVE_ROW),\n/* harmony export */   \"SET_CONSTS\": () => (/* binding */ SET_CONSTS),\n/* harmony export */   \"UNHIGHLIGHT\": () => (/* binding */ UNHIGHLIGHT),\n/* harmony export */   \"UNHIGHLIGHT_SUM\": () => (/* binding */ UNHIGHLIGHT_SUM)\n/* harmony export */ });\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/actions/actionTypes.ts\");\n\n\nvar SET_CONSTS = function SET_CONSTS(value) {\n  return {\n    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.SET_CONSTS,\n    value: value\n  };\n};\n\nvar ADD_ROW = function ADD_ROW() {\n  return {\n    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.ADD_ROW\n  };\n};\n\nvar REMOVE_ROW = function REMOVE_ROW() {\n  return {\n    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.REMOVE_ROW\n  };\n};\n\nvar ADD_AMOUNT = function ADD_AMOUNT(value) {\n  return {\n    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.ADD_AMOUNT,\n    value: value\n  };\n};\n\nvar HIGHLIGHT = function HIGHLIGHT(value) {\n  return {\n    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.HIGHLIGHT,\n    value: value\n  };\n};\n\nvar UNHIGHLIGHT = function UNHIGHLIGHT() {\n  return {\n    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.UNHIGHLIGHT\n  };\n};\n\nvar HIGHLIGHT_SUM = function HIGHLIGHT_SUM(id) {\n  return {\n    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.HIGHLIGHT_SUM,\n    value: id\n  };\n};\n\nvar UNHIGHLIGHT_SUM = function UNHIGHLIGHT_SUM() {\n  return {\n    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.UNHIGHLIGHT_SUM\n  };\n};\n\n\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/actions/action.tsx?");

/***/ }),

/***/ "./src/actions/actionTypes.ts":
/*!************************************!*\
  !*** ./src/actions/actionTypes.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActionTypes\": () => (/* binding */ ActionTypes)\n/* harmony export */ });\nvar ActionTypes = {\n  ADD_AMOUNT: \"ADD_AMOUNT\",\n  HIGHLIGHT: \"HIGHLIGHT\",\n  UNHIGHLIGHT: \"UNHIGHLIGHT\",\n  SET_CONSTS: \"SET_CONSTS\",\n  ADD_ROW: \"ADD_ROW\",\n  REMOVE_ROW: \"REMOVE_ROW\",\n  HIGHLIGHT_SUM: \"HIGHLIGHT_SUM\",\n  UNHIGHLIGHT_SUM: \"UNHIGHLIGHT_SUM\"\n};\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/actions/actionTypes.ts?");

/***/ }),

/***/ "./src/components/bottomSidebar/BottomSidebar.component.tsx":
/*!******************************************************************!*\
  !*** ./src/components/bottomSidebar/BottomSidebar.component.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.ts\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _bottomSidebar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bottomSidebar.module.css */ \"./src/components/bottomSidebar/bottomSidebar.module.css\");\n/* harmony import */ var _bottomSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bottomSidebar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction BottomSidebar(_ref) {\n  var items = _ref.items,\n      amountObj = _ref.amountObj,\n      table = _ref.table,\n      rowSum = _ref.rowSum;\n  var genSum = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {\n    return Object.values(amountObj).reduce(function (acc, cellValue) {\n      return acc + cellValue;\n    }, 0);\n  }, [amountObj]);\n  var colInfo = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.calcColAverage)(items.M, items.N, table, amountObj);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_bottomSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().bottom)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_bottomSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().bottomSidebar),\n    style: {\n      gridTemplateColumns: \"repeat(\".concat(items.N, \", 1fr)\")\n    }\n  }, colInfo.map(function (_ref2) {\n    var amount = _ref2.amount,\n        id = _ref2.id;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: \"_\".concat(id),\n      className: (_bottomSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().bsCell)\n    }, amount);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_bottomSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().bsGeneralSum)\n  }, genSum));\n}\n\nvar stateToProps = function stateToProps(state) {\n  return {\n    items: {\n      M: state.M,\n      N: state.N,\n      X: state.X\n    },\n    rowSum: state.rowSum,\n    table: state.table,\n    amountObj: state.amountObj\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default()((_bottomSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default()))((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(stateToProps)(BottomSidebar)));\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/bottomSidebar/BottomSidebar.component.tsx?");

/***/ }),

/***/ "./src/components/buttons/Buttons.component.tsx":
/*!******************************************************!*\
  !*** ./src/components/buttons/Buttons.component.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Buttons\": () => (/* binding */ Buttons),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/action */ \"./src/actions/action.tsx\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _buttons_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons.module.css */ \"./src/components/buttons/buttons.module.css\");\n/* harmony import */ var _buttons_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_buttons_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction Buttons(_ref) {\n  var add = _ref.add,\n      remove = _ref.remove;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: (_buttons_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttons)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    id: \"addRow\",\n    className: (_buttons_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n    onClick: add,\n    type: \"button\"\n  }, \"+\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    id: \"removeRow\",\n    className: (_buttons_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n    onClick: remove,\n    type: \"button\"\n  }, \"-\"));\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    add: function add() {\n      return dispatch((0,_actions_action__WEBPACK_IMPORTED_MODULE_2__.ADD_ROW)());\n    },\n    remove: function remove() {\n      return dispatch((0,_actions_action__WEBPACK_IMPORTED_MODULE_2__.REMOVE_ROW)());\n    }\n  };\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default()((_buttons_module_css__WEBPACK_IMPORTED_MODULE_4___default()))((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps)(Buttons)));\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/buttons/Buttons.component.tsx?");

/***/ }),

/***/ "./src/components/cell/Cell.component.tsx":
/*!************************************************!*\
  !*** ./src/components/cell/Cell.component.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar compareProps = function compareProps(currentProps, nextProps) {\n  if (nextProps.classes !== currentProps.classes || nextProps.amount !== currentProps.amount) {\n    return false;\n  }\n\n  return true;\n};\n\nfunction Cell(_ref) {\n  var classes = _ref.classes,\n      onClickHandler = _ref.onClickHandler,\n      amount = _ref.amount,\n      id = _ref.id,\n      mouseEnter = _ref.mouseEnter,\n      mouseLeave = _ref.mouseLeave;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: classes,\n    onClick: function onClick(e) {\n      return onClickHandler(e.currentTarget.id);\n    },\n    id: id,\n    onMouseEnter: mouseEnter,\n    onMouseLeave: mouseLeave\n  }, amount);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Cell, compareProps));\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/cell/Cell.component.tsx?");

/***/ }),

/***/ "./src/components/leftSidebar/LeftSidebar.component.tsx":
/*!**************************************************************!*\
  !*** ./src/components/leftSidebar/LeftSidebar.component.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/action */ \"./src/actions/action.tsx\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _leftSidebar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leftSidebar.module.css */ \"./src/components/leftSidebar/leftSidebar.module.css\");\n/* harmony import */ var _leftSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_leftSidebar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction LeftSidebar(_ref) {\n  var rowSum = _ref.rowSum,\n      highlight_sum = _ref.highlight_sum,\n      unHighlight_sum = _ref.unHighlight_sum;\n\n  var inHoverSumHandle = function inHoverSumHandle(e) {\n    highlight_sum(e.currentTarget.id);\n  };\n\n  var outHoverSumHandle = function outHoverSumHandle() {\n    unHighlight_sum();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: (_leftSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().leftSidebar)\n  }, rowSum.map(function (item) {\n    var backgroundStyles = item.isHoveredSum ? {\n      width: \"\".concat(item.rowPercent, \"%\")\n    } : {\n      width: \"\".concat(0, \"%\")\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      id: item.id,\n      key: item.id,\n      className: (_leftSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().lsSumCell),\n      onMouseEnter: inHoverSumHandle,\n      onMouseLeave: outHoverSumHandle\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: (_leftSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default().lsSumCellBack),\n      style: backgroundStyles\n    }), item.isHoveredSum ? \"\".concat(item.rowPercent, \"%\") : item.rowSum);\n  }));\n}\n\nvar stateToProps = function stateToProps(state) {\n  return {\n    items: {\n      M: state.M,\n      N: state.N,\n      X: state.X\n    },\n    rowSum: state.rowSum\n  };\n};\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    highlight_sum: function highlight_sum(id) {\n      return dispatch((0,_actions_action__WEBPACK_IMPORTED_MODULE_2__.HIGHLIGHT_SUM)(id));\n    },\n    unHighlight_sum: function unHighlight_sum() {\n      return dispatch((0,_actions_action__WEBPACK_IMPORTED_MODULE_2__.UNHIGHLIGHT_SUM)());\n    }\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default()((_leftSidebar_module_css__WEBPACK_IMPORTED_MODULE_4___default()))((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(stateToProps, mapDispatchToProps)(LeftSidebar)));\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/leftSidebar/LeftSidebar.component.tsx?");

/***/ }),

/***/ "./src/components/table/table.component.tsx":
/*!**************************************************!*\
  !*** ./src/components/table/table.component.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tableRow_TableRow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tableRow/TableRow.component */ \"./src/components/tableRow/TableRow.component.tsx\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _table_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.module.css */ \"./src/components/table/table.module.css\");\n/* harmony import */ var _table_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_table_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Table(_ref) {\n  var table = _ref.table,\n      amountObj = _ref.amountObj,\n      cellsHoHighlight = _ref.cellsHoHighlight,\n      hoverOut = _ref.hoverOut,\n      hoverEnter = _ref.hoverEnter,\n      click = _ref.click;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"table\", {\n    className: (_table_module_css__WEBPACK_IMPORTED_MODULE_3___default().table)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tbody\", null, table.map(function (_ref2) {\n    var row = _ref2.row,\n        id = _ref2.id;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tableRow_TableRow_component__WEBPACK_IMPORTED_MODULE_1__.default, {\n      key: id,\n      highlight: cellsHoHighlight,\n      row: row,\n      rowId: id,\n      hoverEnter: hoverEnter,\n      hoverOut: hoverOut,\n      click: click,\n      amountObj: amountObj\n    });\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()((_table_module_css__WEBPACK_IMPORTED_MODULE_3___default()))(Table));\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/table/table.component.tsx?");

/***/ }),

/***/ "./src/components/tableRow/TableRow.component.tsx":
/*!********************************************************!*\
  !*** ./src/components/tableRow/TableRow.component.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cell_Cell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cell/Cell.component */ \"./src/components/cell/Cell.component.tsx\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tableRow_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableRow.module.css */ \"./src/components/tableRow/tableRow.module.css\");\n/* harmony import */ var _tableRow_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tableRow_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction TableRow(_ref) {\n  var row = _ref.row,\n      amountObj = _ref.amountObj,\n      rowId = _ref.rowId,\n      highlight = _ref.highlight,\n      click = _ref.click,\n      hoverEnter = _ref.hoverEnter,\n      hoverOut = _ref.hoverOut;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, row.map(function (_ref2) {\n    var id = _ref2.id;\n    var cellClasses = [(_tableRow_module_css__WEBPACK_IMPORTED_MODULE_3___default().cell)];\n\n    if (highlight[rowId] && highlight[rowId][id]) {\n      cellClasses.push((_tableRow_module_css__WEBPACK_IMPORTED_MODULE_3___default().highlight));\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cell_Cell_component__WEBPACK_IMPORTED_MODULE_1__.default, {\n      key: id,\n      classes: cellClasses.join(\" \"),\n      amount: amountObj[id],\n      onClickHandler: click,\n      id: id,\n      mouseEnter: hoverEnter,\n      mouseLeave: hoverOut\n    });\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()((_tableRow_module_css__WEBPACK_IMPORTED_MODULE_3___default()))(TableRow));\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/tableRow/TableRow.component.tsx?");

/***/ }),

/***/ "./src/pages/main/Main.component.tsx":
/*!*******************************************!*\
  !*** ./src/pages/main/Main.component.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/action */ \"./src/actions/action.tsx\");\n/* harmony import */ var _components_bottomSidebar_BottomSidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/bottomSidebar/BottomSidebar.component */ \"./src/components/bottomSidebar/BottomSidebar.component.tsx\");\n/* harmony import */ var _components_buttons_Buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/buttons/Buttons.component */ \"./src/components/buttons/Buttons.component.tsx\");\n/* harmony import */ var _components_leftSidebar_LeftSidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/leftSidebar/LeftSidebar.component */ \"./src/components/leftSidebar/LeftSidebar.component.tsx\");\n/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/table/table.component */ \"./src/components/table/table.component.tsx\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main.module.css */ \"./src/pages/main/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Main_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Main.utils */ \"./src/pages/main/Main.utils.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction mapStateToProps(state) {\n  return {\n    items: {\n      M: state.M,\n      N: state.N,\n      X: state.X\n    },\n    table: state.table,\n    cellsToHighlight: state.cellsToHighlight,\n    amountObj: state.amountObj\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    increase: function increase(value) {\n      return dispatch((0,_actions_action__WEBPACK_IMPORTED_MODULE_3__.ADD_AMOUNT)(value));\n    },\n    highlight: function highlight(value) {\n      return dispatch((0,_actions_action__WEBPACK_IMPORTED_MODULE_3__.HIGHLIGHT)(value));\n    },\n    unHighlight: function unHighlight() {\n      return dispatch((0,_actions_action__WEBPACK_IMPORTED_MODULE_3__.UNHIGHLIGHT)());\n    }\n  };\n}\n\nfunction MainPage(_ref) {\n  var items = _ref.items,\n      table = _ref.table,\n      cellsToHighlight = _ref.cellsToHighlight,\n      increase = _ref.increase,\n      highlight = _ref.highlight,\n      amountObj = _ref.amountObj,\n      unHighlight = _ref.unHighlight;\n  var tempArr = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {\n    return table.reduce(function (acc, tableEl) {\n      return acc.concat(tableEl.row);\n    }, []).map(function (el) {\n      return _objectSpread(_objectSpread({}, el), {}, {\n        amount: amountObj[el.id]\n      });\n    }).sort(function (a, b) {\n      return a.amount - b.amount;\n    });\n  }, [amountObj, table]);\n  var inHoverCellHandle = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (e) {\n    highlight((0,_Main_utils__WEBPACK_IMPORTED_MODULE_10__.findClosestNumbersInTable)(tempArr, e.currentTarget.id, items.X));\n  }, [highlight, items.X, tempArr]);\n  var outHoverCellHandle = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {\n    return unHighlight();\n  }, [unHighlight]);\n\n  var increaseFunc = function increaseFunc(id) {\n    return increase(_objectSpread(_objectSpread({}, amountObj), {}, _defineProperty({}, id, amountObj[id] + 1)));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_9___default().mainPage)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/\",\n    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_9___default().title)\n  }, \"MEM-CRAB React table\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_9___default().mpTableWrapper)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_table_table_component__WEBPACK_IMPORTED_MODULE_7__.default, {\n    table: table,\n    cellsHoHighlight: cellsToHighlight,\n    hoverEnter: inHoverCellHandle,\n    hoverOut: outHoverCellHandle,\n    click: increaseFunc,\n    amountObj: amountObj\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_leftSidebar_LeftSidebar_component__WEBPACK_IMPORTED_MODULE_6__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_bottomSidebar_BottomSidebar_component__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_buttons_Buttons_component__WEBPACK_IMPORTED_MODULE_5__.default, null)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8___default()((_main_module_css__WEBPACK_IMPORTED_MODULE_9___default()))((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(MainPage)));\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/pages/main/Main.component.tsx?");

/***/ }),

/***/ "./src/pages/main/Main.utils.ts":
/*!**************************************!*\
  !*** ./src/pages/main/Main.utils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findClosestNumbersInTable\": () => (/* binding */ findClosestNumbersInTable)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar findClosestNumbersInTable = function findClosestNumbersInTable(tempArr, elId, X) {\n  var hoverElementIdx = tempArr.findIndex(function (el) {\n    return el.id === elId;\n  });\n  var mappedArr = tempArr.map(function (cell) {\n    return _objectSpread(_objectSpread({}, cell), {}, {\n      amount: Math.abs(cell.amount - tempArr[hoverElementIdx].amount)\n    });\n  });\n  var hoveredStart = Math.max(0, hoverElementIdx - X);\n  var hoveredEnd = Math.min(mappedArr.length, X * 2 + 1 + hoveredStart);\n  var splicedArr = mappedArr.slice(hoveredStart, hoveredEnd) // .filter((_, idx) => idx >= hoveredStart && idx <= hoveredEnd)\n  .sort(function (a, b) {\n    return a.amount - b.amount;\n  }).slice(0, X);\n  var objToHighlight = splicedArr.map(function (cell) {\n    return {\n      cellId: cell.id,\n      rowId: cell.rowId\n    };\n  }).reduce(function (acc, _ref) {\n    var rowId = _ref.rowId,\n        cellId = _ref.cellId;\n\n    if (!acc[rowId]) {\n      acc[rowId] = {};\n      acc[rowId][cellId] = true;\n    } else {\n      acc[rowId][cellId] = true;\n    }\n\n    return acc;\n  }, {});\n  return objToHighlight;\n};\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/pages/main/Main.utils.ts?");

/***/ }),

/***/ "./src/pages/start/Start.component.tsx":
/*!*********************************************!*\
  !*** ./src/pages/start/Start.component.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _start_modules_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.modules.css */ \"./src/pages/start/start.modules.css\");\n/* harmony import */ var _start_modules_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_start_modules_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _actions_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/action */ \"./src/actions/action.tsx\");\n/* harmony import */ var _utils_server_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/server.utils */ \"./src/utils/server.utils.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nfunction StartPage(_ref) {\n  var setConsts = _ref.setConsts;\n  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({\n    M: \"0\",\n    N: \"0\",\n    X: \"0\"\n  }),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      state = _React$useState2[0],\n      setState = _React$useState2[1];\n\n  var onChangeInputHandler = function onChangeInputHandler(e) {\n    var _e$currentTarget = e.currentTarget,\n        name = _e$currentTarget.name,\n        value = _e$currentTarget.value;\n    setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, name, +value)));\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var M = state.M,\n        N = state.N,\n        X = state.X;\n\n    if (+M <= 0 || +N <= 0 || +X <= 0 || +M * +N - 1 < +X) {\n      setState({\n        M: \"\",\n        N: \"\",\n        X: \"\"\n      });\n    } else {\n      var _M = state.M,\n          _N = state.N,\n          _X = state.X;\n      var initialState = (0,_utils_server_utils__WEBPACK_IMPORTED_MODULE_6__.genInitialState)({\n        M: _M,\n        N: _N,\n        X: _X\n      });\n      setConsts(initialState);\n      navigate(\"/app/\".concat(_M, \"/\").concat(_N, \"/\").concat(_X));\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: (_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default().startPage)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    className: (_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default().spForm),\n    onSubmit: handleSubmit,\n    id: \"startForm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: (_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default().spLabelWrapper)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: (_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default().spFormLabel)\n  }, \"M:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    className: (_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default().spInput),\n    type: \"number\",\n    name: \"M\",\n    required: true,\n    value: state.M,\n    onChange: onChangeInputHandler,\n    id: \"M\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: (_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default().spFormLabel)\n  }, \"N:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    className: (_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default().spInput),\n    type: \"number\",\n    name: \"N\",\n    required: true,\n    value: state.N,\n    onChange: onChangeInputHandler,\n    id: \"N\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: (_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default().spFormLabel)\n  }, \"X:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    className: (_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default().spInput),\n    type: \"number\",\n    name: \"X\",\n    required: true,\n    value: state.X,\n    onChange: onChangeInputHandler,\n    id: \"X\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: (_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default().spFormButton),\n    type: \"submit\"\n  }, \"submit\"))));\n}\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    setConsts: function setConsts(value) {\n      return dispatch((0,_actions_action__WEBPACK_IMPORTED_MODULE_5__.SET_CONSTS)(value));\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()((_start_modules_css__WEBPACK_IMPORTED_MODULE_3___default()))((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(null, mapDispatchToProps)(StartPage)));\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/pages/start/Start.component.tsx?");

/***/ }),

/***/ "./src/reducer/reducer.ts":
/*!********************************!*\
  !*** ./src/reducer/reducer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/actions/actionTypes.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar reducer = function reducer(state, actions) {\n  var stateModifications = {\n    newTable: state.table\n  };\n\n  switch (actions.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.ADD_AMOUNT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        amountObj: actions.value,\n        rowSum: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.calcRowSum)(state.table, actions.value),\n        colAverage: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.calcColAverage)(state.M, state.N, stateModifications.newTable, actions.value)\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.HIGHLIGHT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cellsToHighlight: actions.value\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.UNHIGHLIGHT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cellsToHighlight: {}\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.SET_CONSTS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        table: actions.value.table,\n        rowSum: actions.value.rowSum,\n        colAverage: actions.value.colAverage,\n        cellsToHighlight: actions.value.cellsToHighlight,\n        M: actions.value.M,\n        N: actions.value.N,\n        X: actions.value.X,\n        amountObj: actions.value.amountObj\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.ADD_ROW:\n      stateModifications = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.addRow)(state.table, state.N, state.amountObj);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        table: stateModifications.newTable,\n        amountObj: stateModifications.newAmountObj,\n        M: Number(state.M) + 1,\n        rowSum: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.calcRowSum)(stateModifications.newTable, stateModifications.newAmountObj),\n        colAverage: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.calcColAverage)(state.M, state.N, stateModifications.newTable, stateModifications.newAmountObj)\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.REMOVE_ROW:\n      if (state.table.length === 1) {\n        return _objectSpread({}, state);\n      }\n\n      stateModifications = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.removeRow)(state.table);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        M: state.M - 1,\n        table: stateModifications.newTable,\n        amountObj: stateModifications.newAmountObj,\n        rowSum: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.calcRowSum)(stateModifications.newTable, stateModifications.newAmountObj),\n        colAverage: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.calcColAverage)(state.M - 1, state.N, stateModifications.newTable, stateModifications.newAmountObj)\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.HIGHLIGHT_SUM:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        rowSum: state.rowSum.map(function (item) {\n          if (item.id === actions.value) {\n            item.isHoveredSum = true;\n          }\n\n          return item;\n        })\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.UNHIGHLIGHT_SUM:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        rowSum: state.rowSum.map(function (item) {\n          item.isHoveredSum = false;\n          return item;\n        })\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/reducer/reducer.ts?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_server_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/server.utils */ \"./src/utils/server.utils.ts\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _reducer_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducer/reducer */ \"./src/reducer/reducer.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar PORT = 8080;\nvar context = {};\n\nvar requestListener = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var htmlPath, preloadedState, queryObj, params, serverStore, serverState, css, insertCss, reactMarkup;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (req.url.includes(\".js\")) {\n              htmlPath = path.join(process.cwd(), \"build\", \"static\", \"bundle.client.js\");\n              fs.readFile(htmlPath, \"utf-8\", function (err, data) {\n                if (err) {\n                  res.end(err);\n                }\n\n                res.end(data);\n              });\n            } else {\n              preloadedState = {\n                M: 0,\n                N: 0,\n                X: 0,\n                table: [],\n                rowSum: [],\n                colAverage: [],\n                cellsToHighlight: {},\n                amountObj: {}\n              };\n              queryObj = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath)({\n                path: \"/app/:m/:n/:x\"\n              }, req.url);\n              console.log(queryObj);\n\n              if (queryObj) {\n                params = {\n                  M: +queryObj.params.m,\n                  N: +queryObj.params.n,\n                  X: +queryObj.params.x\n                };\n                preloadedState = (0,_utils_server_utils__WEBPACK_IMPORTED_MODULE_6__.genInitialState)(params);\n              }\n\n              serverStore = (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)(_reducer_reducer__WEBPACK_IMPORTED_MODULE_8__.default, preloadedState);\n              serverState = serverStore.getState();\n              css = new Set();\n\n              insertCss = function insertCss() {\n                for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {\n                  styles[_key] = arguments[_key];\n                }\n\n                return styles.forEach(function (style) {\n                  return css.add(style._getCss());\n                });\n              };\n\n              reactMarkup = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_4___default().Provider), {\n                value: {\n                  insertCss: insertCss\n                }\n              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n                store: serverStore\n              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.MemoryRouter, {\n                context: context,\n                location: req.url\n              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_App__WEBPACK_IMPORTED_MODULE_1__.default, null)))));\n              res.end((0,_utils_server_utils__WEBPACK_IMPORTED_MODULE_6__.renderFullPage)(reactMarkup, serverState, css));\n            }\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function requestListener(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar server = http.createServer(requestListener);\nserver.listen(PORT, function () {\n  console.log(\"Memcrab is running at http://localhost:\".concat(PORT, \"/\"));\n});\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/server.tsx?");

/***/ }),

/***/ "./src/utils/server.utils.ts":
/*!***********************************!*\
  !*** ./src/utils/server.utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateTable\": () => (/* binding */ generateTable),\n/* harmony export */   \"genMatrix\": () => (/* binding */ genMatrix),\n/* harmony export */   \"genInitialState\": () => (/* binding */ genInitialState),\n/* harmony export */   \"renderFullPage\": () => (/* binding */ renderFullPage),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils/utils.ts\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar generateTable = function generateTable(values) {\n  var M = values.M,\n      N = values.N,\n      X = values.X;\n  var table = genMatrix(M, N);\n  var amountObj = table.reduce(function (outerAcc, b) {\n    var tempArr = [].concat(b.row);\n    return _objectSpread(_objectSpread({}, outerAcc), tempArr.reduce(function (acc, elItem) {\n      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, elItem.id, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)()));\n    }, {}));\n  }, {});\n  var stateSetUp = {\n    table: table,\n    consts: {\n      M: M,\n      N: N,\n      X: X\n    },\n    amountObj: amountObj\n  };\n  return stateSetUp;\n};\nvar genMatrix = function genMatrix(rows, cols) {\n  var matrix = Array.from({\n    length: rows\n  }, function () {\n    var rowId = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateID)();\n    var row = Array.from({\n      length: cols\n    }, function () {\n      var cell = {\n        id: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateID)(),\n        rowId: rowId\n      };\n      return cell;\n    });\n    return {\n      id: rowId,\n      row: row\n    };\n  });\n  return matrix;\n};\nvar genInitialState = function genInitialState(values) {\n  var _generateTable = generateTable(values),\n      consts = _generateTable.consts,\n      table = _generateTable.table,\n      amountObj = _generateTable.amountObj;\n\n  return {\n    table: table,\n    rowSum: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcRowSum)(table, amountObj),\n    colAverage: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcColAverage)(consts.M, consts.N, table, amountObj),\n    cellsToHighlight: {},\n    M: consts.M,\n    N: consts.N,\n    X: consts.X,\n    amountObj: amountObj\n  };\n};\nvar renderFullPage = function renderFullPage(html, preloadedState, styles) {\n  return \"\\n    <!doctype html>\\n    <html>\\n      <head>\\n        <title>mem-crab ssr</title>\\n        <style>\".concat(_toConsumableArray(styles).join(\"\"), \"</style>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\").concat(html, \"</div>\\n        <script>\\n          window.__PRELOADED_STATE__ = \").concat(JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\"), \"\\n        </script>\\n        <script src=\\\"http://localhost:3000/bundle.client.js\\\"></script>\\n      </body>\\n    </html>\\n    \");\n};\nvar helpers = {\n  genInitialState: genInitialState,\n  renderFullPage: renderFullPage,\n  genMatrix: genMatrix,\n  generateTable: generateTable\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helpers);\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/utils/server.utils.ts?");

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomInt\": () => (/* binding */ getRandomInt),\n/* harmony export */   \"generateID\": () => (/* binding */ generateID),\n/* harmony export */   \"addRow\": () => (/* binding */ addRow),\n/* harmony export */   \"removeRow\": () => (/* binding */ removeRow),\n/* harmony export */   \"calcColAverage\": () => (/* binding */ calcColAverage),\n/* harmony export */   \"calcGenSum\": () => (/* binding */ calcGenSum),\n/* harmony export */   \"calcRowSum\": () => (/* binding */ calcRowSum)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar getRandomInt = function getRandomInt() {\n  return Math.floor(Math.random() * 899) + 100;\n};\nvar generateID = function generateID() {\n  return \"_\".concat(Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9));\n};\nvar addRow = function addRow(table, rowLength, amountObj) {\n  var newAmountObj = _objectSpread({}, amountObj);\n\n  var newTable = _toConsumableArray(table);\n\n  var rowId = generateID();\n  var rowValues = Array.from({\n    length: rowLength\n  }, function () {\n    var cellInfo = {\n      id: generateID(),\n      amount: getRandomInt()\n    };\n    newAmountObj = _objectSpread(_objectSpread({}, newAmountObj), {}, _defineProperty({}, cellInfo.id, cellInfo.amount));\n    return _objectSpread(_objectSpread({}, cellInfo), {}, {\n      rowId: rowId\n    });\n  });\n  newTable.push({\n    id: rowId,\n    row: rowValues\n  });\n  return {\n    newTable: newTable,\n    newAmountObj: newAmountObj\n  };\n};\nvar removeRow = function removeRow(table) {\n  var newTable = _toConsumableArray(table).filter(function (_, idx) {\n    return idx < table.length - 1;\n  });\n\n  var newAmountObj = newTable.reduce(function (outerAcc, b) {\n    var tempArr = [].concat(b.row);\n    return _objectSpread(_objectSpread({}, outerAcc), tempArr.reduce(function (acc, elItem) {\n      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, elItem.id, getRandomInt()));\n    }, {}));\n  }, {});\n  return {\n    newTable: newTable,\n    newAmountObj: newAmountObj\n  };\n};\nvar calcColAverage = function calcColAverage(M, N, table, amountObj) {\n  var colInfoArr = table.reduce(function (a, b) {\n    b.row.forEach(function (el, i) {\n      a[i].amount += amountObj[el.id];\n    });\n    return a;\n  }, Array.from({\n    length: N\n  }, function () {\n    return {\n      amount: 0,\n      id: generateID()\n    };\n  })).map(function (el) {\n    return _objectSpread(_objectSpread({}, el), {}, {\n      amount: Math.round(el.amount / M)\n    });\n  });\n  return colInfoArr;\n};\nvar calcGenSum = function calcGenSum(amountObj) {\n  return Object.values(amountObj).reduce(function (acc, cellValue) {\n    return acc + cellValue;\n  }, 0);\n};\nvar calcRowSum = function calcRowSum(table, amountObj) {\n  var rowSumArr = [];\n  var genSum = calcGenSum(amountObj);\n  table.forEach(function (_ref) {\n    var row = _ref.row;\n    var arrSum = row.reduce(function (acc, b) {\n      return acc + amountObj[b.id];\n    }, 0);\n    var percent = Number((arrSum * 100 / genSum).toFixed(1));\n    rowSumArr.push({\n      rowSum: arrSum,\n      rowPercent: percent,\n      isHoveredSum: false,\n      id: generateID()\n    });\n  });\n  return rowSumArr;\n};\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/utils/utils.ts?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.css ***!
  \****************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\\n    sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n._G6b1_A_gVTr3HyTzqEJ {\\n  min-width: 100%;\\n  min-height: 100vh;\\n  width: fit-content;\\n  height: fit-content;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  background: linear-gradient(#e66465, #9198e5);\\n  overflow: scroll;\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"App\": \"_G6b1_A_gVTr3HyTzqEJ\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/App.module.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/bottomSidebar/bottomSidebar.module.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/bottomSidebar/bottomSidebar.module.css ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".P2ehyjfHXtzl6BlX2jrC {\\n    display: flex;\\n}\\n\\n._t180ofLr0qFyIpVimqD {\\n    display: grid;\\n    grid-template-rows: 36px;\\n    margin-top: 15px;\\n}\\n\\n.vNqrAAX8bKBcOXrWVaO7 {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    border: 1px solid #000;\\n    padding: 3px 8px;\\n    width: 24.2px;\\n}\\n\\n.u8XFt9yotbfHS3dxFMAA {\\n    margin-top: 15px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    border: 1px solid #000;\\n    padding: 0 3px;\\n    margin-left: 20px;\\n    height: 34px;\\n    width: fit-content;\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"bottom\": \"P2ehyjfHXtzl6BlX2jrC\",\n\t\"bottomSidebar\": \"_t180ofLr0qFyIpVimqD\",\n\t\"bsCell\": \"vNqrAAX8bKBcOXrWVaO7\",\n\t\"bsGeneralSum\": \"u8XFt9yotbfHS3dxFMAA\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/bottomSidebar/bottomSidebar.module.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/buttons/buttons.module.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/buttons/buttons.module.css ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"._ixvTWJ5LUpEWkF085zT {\\n    margin-top: 25px;\\n    align-self: flex-end;\\n    width: fit-content;\\n    padding-right: 100px;\\n}\\n\\n.eD6WL0QiAXHxs0k31HPS {\\n    border: none;\\n    border-radius: 3px;\\n    background-color: #fff;\\n    height: 25px;\\n    width: 35px;\\n    margin: 0 5px;\\n    font-size: 18px;\\n    transition: all 0.5s;\\n}\\n\\n.eD6WL0QiAXHxs0k31HPS:hover {\\n    color: #fff;\\n    background: rgba(255, 255, 255, 0);\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"buttons\": \"_ixvTWJ5LUpEWkF085zT\",\n\t\"button\": \"eD6WL0QiAXHxs0k31HPS\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/buttons/buttons.module.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/leftSidebar/leftSidebar.module.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/leftSidebar/leftSidebar.module.css ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".HjPKPwgAyRQ8GZqBttWU {\\n    margin-left: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n}\\n\\n.stHshF_ydwaZlBeZMCDj {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    border: 1px solid #000;\\n    padding: 3px 10;\\n    height: 34px;\\n    width: 50px;\\n    position: relative;\\n    background-color: transparent;\\n    z-index: 2;\\n    transition: font-size 0.2s ease-out;\\n}\\n\\n.vVAVCGAmlL__z4SG9OhL {\\n    background-color: rgba(238, 40, 49, 0.576);\\n    background-color: rgba(19, 255, 251, 0.5);\\n    position: absolute;\\n    height: 100%;\\n    width: 0px;\\n    left: 0;\\n    z-index: -1;\\n    transition: width 0.4s ease-in-out;\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"leftSidebar\": \"HjPKPwgAyRQ8GZqBttWU\",\n\t\"lsSumCell\": \"stHshF_ydwaZlBeZMCDj\",\n\t\"lsSumCellBack\": \"vVAVCGAmlL__z4SG9OhL\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/leftSidebar/leftSidebar.module.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/table/table.module.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/table/table.module.css ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Na4Bk1ANG4ogwURHHugY {\\n    text-align: center;\\n    font-family: \\\"Trebuchet MS\\\", Arial, Helvetica, sans-serif;\\n    border-collapse: collapse;\\n    width: fit-content;\\n    height: fit-content;\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"table\": \"Na4Bk1ANG4ogwURHHugY\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/table/table.module.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/tableRow/tableRow.module.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/tableRow/tableRow.module.css ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Ko3hlSXvJbvOverchTPE {\\n    border: 1px solid #000;\\n    padding: 8px;\\n    padding-top: 12px;\\n    padding-bottom: 12px;\\n    text-align: center;\\n    background-color: transparent;\\n    color: #000;\\n}\\n\\n._TCGkUH2C7xin2REQI6x {\\n    background-color: rgba(238, 40, 49, 0.576);\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"cell\": \"Ko3hlSXvJbvOverchTPE\",\n\t\"highlight\": \"_TCGkUH2C7xin2REQI6x\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/tableRow/tableRow.module.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/main/main.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/main/main.module.css ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".sVRU6Veh73LP_wIAjn0z {\\n  min-width: 100%;\\n  min-height: 100vh;\\n  width: fit-content;\\n  height: fit-content;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  background: linear-gradient(#e66465, #9198e5);\\n  overflow: scroll;\\n}\\n\\n.Vulp6t3No_rmmXE1bXVP {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n._VVClZMzxYfSX7ps5ojC {\\n  margin: 0;\\n  margin-bottom: 35px;\\n  text-align: center;\\n  font-family: arial, sans-serif;\\n  color: #000;\\n  font-size: 36px;\\n  text-decoration: none;\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"mainPage\": \"sVRU6Veh73LP_wIAjn0z\",\n\t\"mpTableWrapper\": \"Vulp6t3No_rmmXE1bXVP\",\n\t\"title\": \"_VVClZMzxYfSX7ps5ojC\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/pages/main/main.module.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/start/start.modules.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/start/start.modules.css ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".apc4a_X3eAel8_iaXWkL {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n    height: 100vh;\\n    background: linear-gradient(#e66465, #9198e5);\\n}\\n\\n.eVRV6pxoFsw9LwI66788 {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.unrZMNV1rBAj5snY7Awr {\\n    margin-left: 3px;\\n    width: 65px;\\n    border: none;\\n    border-radius: 3px;\\n    height: 25px;\\n    background-color: rgba(0, 0, 0, 0.6);\\n    color: #fff;\\n    padding: 2px 5px;\\n    font-size: 16px;\\n}\\n\\n.unrZMNV1rBAj5snY7Awr:focus {\\n    outline: none;\\n}\\n\\n.H1X5TZVbHrfderrX_9f4 {\\n    width: fit-content;\\n    display: flex;\\n    flex-direction: row;\\n}\\n\\n.qSJdClFfrRkNs8MoiPDZ {\\n    display: flex;\\n    align-items: center;\\n    margin: 0 10px;\\n    color: #fff;\\n}\\n\\n.Q9NGpM_OGTPJpkbM_bWI {\\n    margin-top: 15px;\\n    align-self: flex-end;\\n    width: 110px;\\n    height: 25px;\\n    background-color: rgba(0, 0, 0, 0.6);\\n    border: none;\\n    border-radius: 5px;\\n    transition: all 0.5s;\\n    color: #fff;\\n}\\n\\n.Q9NGpM_OGTPJpkbM_bWI:hover {\\n    color: #000;\\n    background: rgba(255, 255, 255, 0.6);\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"startPage\": \"apc4a_X3eAel8_iaXWkL\",\n\t\"spForm\": \"eVRV6pxoFsw9LwI66788\",\n\t\"spInput\": \"unrZMNV1rBAj5snY7Awr\",\n\t\"spLabelWrapper\": \"H1X5TZVbHrfderrX_9f4\",\n\t\"spFormLabel\": \"qSJdClFfrRkNs8MoiPDZ\",\n\t\"spFormButton\": \"Q9NGpM_OGTPJpkbM_bWI\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://implement-ssr-of-react/./src/pages/start/start.modules.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://implement-ssr-of-react/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.module.css":
/*!****************************!*\
  !*** ./src/App.module.css ***!
  \****************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/postcss-loader/dist/cjs.js!./App.module.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.css\");\n    var insertCss = __webpack_require__(/*! !../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://implement-ssr-of-react/./src/App.module.css?");

/***/ }),

/***/ "./src/components/bottomSidebar/bottomSidebar.module.css":
/*!***************************************************************!*\
  !*** ./src/components/bottomSidebar/bottomSidebar.module.css ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./bottomSidebar.module.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/bottomSidebar/bottomSidebar.module.css\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/bottomSidebar/bottomSidebar.module.css?");

/***/ }),

/***/ "./src/components/buttons/buttons.module.css":
/*!***************************************************!*\
  !*** ./src/components/buttons/buttons.module.css ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./buttons.module.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/buttons/buttons.module.css\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/buttons/buttons.module.css?");

/***/ }),

/***/ "./src/components/leftSidebar/leftSidebar.module.css":
/*!***********************************************************!*\
  !*** ./src/components/leftSidebar/leftSidebar.module.css ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./leftSidebar.module.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/leftSidebar/leftSidebar.module.css\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/leftSidebar/leftSidebar.module.css?");

/***/ }),

/***/ "./src/components/table/table.module.css":
/*!***********************************************!*\
  !*** ./src/components/table/table.module.css ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./table.module.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/table/table.module.css\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/table/table.module.css?");

/***/ }),

/***/ "./src/components/tableRow/tableRow.module.css":
/*!*****************************************************!*\
  !*** ./src/components/tableRow/tableRow.module.css ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./tableRow.module.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/tableRow/tableRow.module.css\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://implement-ssr-of-react/./src/components/tableRow/tableRow.module.css?");

/***/ }),

/***/ "./src/pages/main/main.module.css":
/*!****************************************!*\
  !*** ./src/pages/main/main.module.css ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./main.module.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/main/main.module.css\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://implement-ssr-of-react/./src/pages/main/main.module.css?");

/***/ }),

/***/ "./src/pages/start/start.modules.css":
/*!*******************************************!*\
  !*** ./src/pages/start/start.modules.css ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./start.modules.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/start/start.modules.css\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://implement-ssr-of-react/./src/pages/start/start.modules.css?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack://implement-ssr-of-react/./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/polyfill");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/StyleContext");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/withStyles");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("@babel/polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.tsx");
/******/ 	
/******/ })()
;