parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WkKA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=n(require("react")),t=require("react-chartjs-2"),e=n(require("../../hooks/useInterval")),o=n(require("../../utils/getRandomInt"));function n(r){return r&&r.__esModule?r:{default:r}}function a(r){return l(r)||u(r)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function l(r){if(Array.isArray(r)){for(var t=0,e=new Array(r.length);t<r.length;t++)e[t]=r[t];return e}}function d(r,t){return s(r)||c(r,t)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(r,t){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)){var e=[],o=!0,n=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(o=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);o=!0);}catch(l){n=!0,a=l}finally{try{o||null==u.return||u.return()}finally{if(n)throw a}}return e}}function s(r){if(Array.isArray(r))return r}function b(o){var n=o.updateInterval,a=d((0,e.default)(p,n),1)[0];return r.default.createElement(t.Line,{data:a})}function p(){return{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a(new Array((0,o.default)(10,30))).map(function(){return(0,o.default)(20,80)})}]}}var y=r.default.memo(b);exports.default=y;
},{"react":"AQ6k","react-chartjs-2":"tBOf","../../hooks/useInterval":"ItQm","../../utils/getRandomInt":"wje9"}]},{},[], null)
//# sourceMappingURL=Line.b3ccd163.js.map