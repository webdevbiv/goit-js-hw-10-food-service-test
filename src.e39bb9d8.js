parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qwQt":[function(require,module,exports) {
const e={themeSwitch:document.getElementById("theme-switch-toggle"),themeBody:document.querySelector("body")},t={LIGHT:"light-theme",DARK:"dark-theme"},h=localStorage.getItem("theme");"dark-theme"===h&&(e.themeBody.classList.add("dark-theme"),e.themeSwitch.checked=!0),console.log(h),e.themeSwitch.addEventListener("change",h=>{e.themeBody.classList.toggle("dark-theme"),e.themeSwitch.checked&&(localStorage.removeItem("theme"),localStorage.setItem("theme",t.DARK)),e.themeSwitch.checked||(localStorage.removeItem("theme"),localStorage.setItem("theme",t.LIGHT))}),console.log("win");
},{}],"chxP":[function(require,module,exports) {
const e=document.querySelector(".js-menu");
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./js/theme.js"),require("./js/gallery.js");
},{"./js/theme.js":"qwQt","./js/gallery.js":"chxP"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.e39bb9d8.js.map