// { "framework": "Vue"}

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 363);
/******/ })
/************************************************************************/
/******/ ({

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(364)
)

/* script */
__vue_exports__ = __webpack_require__(365)

/* template */
var __vue_template__ = __webpack_require__(366)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\weexplus-demo\\src\\native\\test.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d4654340"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = {
  "layout": {
    "justifyContent": "center",
    "backgroundColor": "#eeeeee",
    "textAlign": "center"
  },
  "text": {
    "color": "#000000",
    "marginTop": "30",
    "fontSize": "30"
  },
  "text1": {
    "width": "110",
    "height": "60",
    "fontSize": "50",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#00B4FF",
    "textAlignAll": "center"
  },
  "submit": {
    "display": "block",
    "marginTop": "50",
    "direction": "rtl"
  },
  "input": {
    "borderWidth": "1",
    "marginBottom": "10",
    "height": "100"
  }
}

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

var pref = weex.requireModule('pref');
var modal = weex.requireModule('modal');
exports.default = {
    data: function data() {
        return {
            name: "test",
            ip: ''
        };
    },

    methods: {
        onLoad: function onLoad(p) {
            // debugger
            // this.alert(p);
            //this.name=p.name;
            this.ip = pref.getString('ip');
            var GoodsID = p.GoodsID;
            var ActivityName = p.ActivityName;
            modal.toast({
                message: ActivityName,
                duration: 0.3
            });
            modal.toast({
                message: 'GoodsID的值：' + GoodsID,
                duration: 0.3
            });
        },
        save: function save() {
            pref.setString('ip', this.ip);
            this.toast("保存成功");
            //  this.alert(pref.getString('ip'));
            this.push("root:index.js");
        }
    },
    created: function created(e) {
        var _this = this;

        //alert(e)
        // this.navigator = weex.requireModule('navigator')

        var globalEvent = weex.requireModule('globalEvent');
        globalEvent.addEventListener("onPageInit", function (param) {
            var p = param;
            if (param && p.param && p.bubbles) p = p.param;
            if (_this.onLoad != undefined) _this.onLoad(p);
        });
    }
};

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["layout"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("服务器地址:")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入服务器地址",
      "returnKeyType": "default",
      "value": (_vm.ip)
    },
    on: {
      "input": function($event) {
        _vm.ip = $event.target.attr.value
      }
    }
  }), _c('div', {
    staticClass: ["submit"]
  }, [_c('text', {
    staticClass: ["text1"],
    on: {
      "click": _vm.save
    }
  }, [_vm._v("保存")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });