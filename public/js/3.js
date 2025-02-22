(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/Pages/Login.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Login.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ \"./node_modules/@inertiajs/inertia/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Login = function Login(props) {\n  var errors = props.errors;\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var data = {\n      username: e.target.username.value,\n      password: e.target.password.value\n    };\n    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__[\"Inertia\"].post(\"/login\", data);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"Login\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      marginBottom: \"1rem\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    href: \"/register\"\n  }, \"Not registered?\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    htmlFor: \"username\"\n  }, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"username\",\n    name: \"username\",\n    required: true,\n    autoFocus: true\n  }), errors.username && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"code\", null, errors.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"password\",\n    id: \"password\",\n    name: \"password\",\n    required: true\n  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"code\", null, errors.password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    type: \"submit\"\n  }, \"Login\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvTG9naW4uanM/NWRjNiJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiZXJyb3JzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInVzZXJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJwYXNzd29yZCIsIkluZXJ0aWEiLCJwb3N0IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBQyxLQUFLLEVBQUk7QUFBQSxNQUNiQyxNQURhLEdBQ0ZELEtBREUsQ0FDYkMsTUFEYTs7QUFFckIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxJQUFJLEdBQUc7QUFDWEMsY0FBUSxFQUFFSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0QsUUFBVCxDQUFrQkUsS0FEakI7QUFFWEMsY0FBUSxFQUFFTixDQUFDLENBQUNJLE1BQUYsQ0FBU0UsUUFBVCxDQUFrQkQ7QUFGakIsS0FBYjtBQUtBRSw4REFBTyxDQUFDQyxJQUFSLENBQWEsUUFBYixFQUF1Qk4sSUFBdkI7QUFDRCxHQVJEOztBQVVBLHNCQUNFO0FBQU0sWUFBUSxFQUFFSDtBQUFoQixrQkFDRSwrRUFERixlQUVFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xVLGtCQUFZLEVBQUU7QUFEVDtBQURULGtCQUtFO0FBQUcsUUFBSSxFQUFDO0FBQVIsdUJBTEYsQ0FGRixlQVNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsZ0JBVEYsZUFVRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUUsRUFBQyxVQUF0QjtBQUFpQyxRQUFJLEVBQUMsVUFBdEM7QUFBaUQsWUFBUSxNQUF6RDtBQUEwRCxhQUFTO0FBQW5FLElBVkYsRUFXR1gsTUFBTSxDQUFDSyxRQUFQLGlCQUNDLG1GQUNFLHlFQUFPTCxNQUFNLENBQUNLLFFBQWQsQ0FERixDQVpKLGVBZ0JFO0FBQU8sV0FBTyxFQUFDO0FBQWYsZ0JBaEJGLGVBaUJFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsTUFBRSxFQUFDLFVBQTFCO0FBQXFDLFFBQUksRUFBQyxVQUExQztBQUFxRCxZQUFRO0FBQTdELElBakJGLEVBa0JHTCxNQUFNLENBQUNRLFFBQVAsaUJBQ0MsbUZBQ0UseUVBQU9SLE1BQU0sQ0FBQ1EsUUFBZCxDQURGLENBbkJKLGVBdUJFO0FBQVEsUUFBSSxFQUFDO0FBQWIsYUF2QkYsQ0FERjtBQTJCRCxDQXZDRDs7QUF5Q2VWLG9FQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL1BhZ2VzL0xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gXCJAaW5lcnRpYWpzL2luZXJ0aWFcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2dpbiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGVycm9ycyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICB1c2VybmFtZTogZS50YXJnZXQudXNlcm5hbWUudmFsdWUsXHJcbiAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC5wYXNzd29yZC52YWx1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBJbmVydGlhLnBvc3QoXCIvbG9naW5cIiwgZGF0YSk7XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8YSBocmVmPVwiL3JlZ2lzdGVyXCI+Tm90IHJlZ2lzdGVyZWQ/PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHJlcXVpcmVkIGF1dG9Gb2N1cyAvPlxyXG4gICAgICB7ZXJyb3JzLnVzZXJuYW1lICYmIChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxjb2RlPntlcnJvcnMudXNlcm5hbWV9PC9jb2RlPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiByZXF1aXJlZCAvPlxyXG4gICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxjb2RlPntlcnJvcnMucGFzc3dvcmR9PC9jb2RlPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Pages/Login.js\n");

/***/ })

}]);