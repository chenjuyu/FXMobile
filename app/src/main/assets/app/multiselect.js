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
/******/ 	return __webpack_require__(__webpack_require__.s = 341);
/******/ })
/************************************************************************/
/******/ ({

/***/ 255:
/***/ (function(module, exports) {

module.exports = {
  "grid-option": {
    "justifyContent": "center",
    "borderRadius": "8",
    "borderWidth": "2",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "text-title": {
    "lines": 2,
    "lineHeight": "30",
    "textOverflow": "ellipsis",
    "textAlign": "center",
    "fontSize": "35"
  },
  "image-checked": {
    "position": "absolute",
    "right": 0,
    "bottom": 0,
    "width": "38",
    "height": "34"
  },
  "divright": {
    "position": "absolute",
    "lineHeight": "45",
    "left": "0",
    "top": "0",
    "alignItems": "center",
    "justifyContent": "center",
    "textAlign": "center",
    "WebkitBorderRadius": "24",
    "borderRadius": "24",
    "color": "#FFFFFF",
    "fontSize": "20",
    "backgroundColor": "#FF0000",
    "width": "45",
    "height": "45"
  }
}

/***/ }),

/***/ 256:
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
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    index: {
      type: Number,
      default: -1
    },
    // 是否选中
    checked: {
      type: Boolean,
      default: false
    },
    // 是否可选
    disabled: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    tipqty: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '166px'
    },
    height: {
      type: String,
      default: '72px'
    },
    // 默认 x
    icon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1IAByhgMPMeJjy1XdXXasrXXa-38-34.png'
    },
    // 正常状态文字色值
    color: {
      type: String,
      default: '#3d3d3d'
    },
    // 选中状态文字色值
    checkedColor: {
      type: String,
      default: '#3d3d3d'
    },
    // 不可选状态文字色值
    disabledColor: {
      type: String,
      default: '#9b9b9b'
    },
    // 正常状态边框色值
    borderColor: {
      type: String,
      default: 'transparent'
    },
    // 选中状态边框色值
    checkedBorderColor: {
      type: String,
      default: '#ffb200'
    },
    // 不可选状态边框色值
    disabledBorderColor: {
      type: String,
      default: 'transparent'
    },
    // 正常状态背景色值
    backgroundColor: {
      type: String,
      default: '#f6f6f6'
    },
    // 选中状态背景色值
    checkedBackgroundColor: {
      type: String,
      default: '#ffffff'
    },
    // 不可选状态背景色值
    disabledBackgroundColor: {
      type: String,
      default: '#f6f6f6'
    }
  },
  computed: {
    cWrapperStyle: function cWrapperStyle() {
      var checked = this.checked,
          disabled = this.disabled,
          width = this.width,
          height = this.height,
          borderColor = this.borderColor,
          checkedBorderColor = this.checkedBorderColor,
          disabledBorderColor = this.disabledBorderColor,
          backgroundColor = this.backgroundColor,
          checkedBackgroundColor = this.checkedBackgroundColor,
          disabledBackgroundColor = this.disabledBackgroundColor;

      return {
        width: width,
        height: height,
        borderColor: disabled ? disabledBorderColor : checked ? checkedBorderColor : borderColor,
        backgroundColor: disabled ? disabledBackgroundColor : checked ? checkedBackgroundColor : backgroundColor
      };
    },
    cTitleStyle: function cTitleStyle() {
      var checked = this.checked,
          disabled = this.disabled,
          color = this.color,
          checkedColor = this.checkedColor,
          disabledColor = this.disabledColor;

      return {
        color: disabled ? disabledColor : checked ? checkedColor : color
      };
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.disabled) {
        this.$emit('select', this.index);
      }
    }
  }
};

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid-option"],
    style: _vm.cWrapperStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": (_vm.title + "," + (_vm.checked?'已选中':'未选中'))
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.title) ? _c('text', {
    staticClass: ["text-title"],
    style: _vm.cTitleStyle
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.tipqty) ? _c('text', {
    staticClass: ["divright"]
  }, [_vm._v(_vm._s(_vm.tipqty))]) : _vm._e(), (_vm.checked && _vm.icon) ? _c('image', {
    staticClass: ["image-checked"],
    attrs: {
      "src": _vm.icon
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = {
  "grid-select": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  }
}

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _option = __webpack_require__(267);

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal');
exports.default = {
    components: { option: _option2.default },
    props: {
        // 标识, 当界面展示多个grid, 防止v-for :key重复
        id: {
            type: String,
            default: 'one'
        },
        // 列数
        cols: {
            type: Number,
            default: 4
        },
        // 是否单选
        single: {
            type: Boolean,
            default: false
        },
        // 数据
        list: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        // 选择个数限制
        limit: {
            type: Number
        },
        // 用户自定义样式，用于个性化设置option样式
        customStyles: {
            type: Object,
            default: function _default() {
                return {};
            }
        }, tipqty: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {
            dList: this.initList()
        };
    },

    computed: {
        cHackList: function cHackList() {
            var list = this.list,
                cols = this.cols;

            var remainder = list.length % cols;
            var len = remainder ? cols - remainder : 0;

            return Array.apply(null, { length: len });
        }
    },
    watch: {
        list: function list() {
            this.dList = this.initList();
            immediate: true;
        }
    },
    created: function created() {
        // 行间距
        this.lineSpacing = this.customStyles.lineSpacing || '12px';
    },

    methods: {
        onSelect: function onSelect(index) {
            var checked = this.dList[index].checked;
            if (this.limit <= this.checkedCount && !checked) {
                this.$emit('overLimit', this.limit);
            } else {
                this.updateList(index);
                this.$emit('select', {
                    selectIndex: index,
                    checked: !checked,
                    checkedList: this.dList.filter(function (item) {
                        return item.checked;
                    })
                });
            } //JSON.stringify(this.dList)
            // modal.alert({message:JSON.stringify(this.dList)})
        },
        initList: function initList() {
            var single = this.single;
            var checkedCount = 0;

            var dList = this.list.map(function (item, i) {
                var checked = item.checked,
                    disabled = item.disabled;

                disabled = !!disabled;
                // disabled为true时认为checked无效，同时单选模式下只认为第一个checked为true的为有效值
                checked = !disabled && !!checked && (!single || checkedCount === 0);
                if (item.checked) checkedCount += 1;
                return _extends({}, item, {
                    checked: checked,
                    disabled: disabled
                });
            });

            this.checkedCount = checkedCount;
            return dList;
        },
        updateList: function updateList(index) {
            var single = this.single;
            var checkedCount = 0;
            this.dList = this.dList.map(function (item, i) {
                if (single) {
                    item.checked = index === i && !item.checked;
                } else {
                    if (i === index) item.checked = !item.checked;
                }
                if (item.checked) checkedCount += 1;

                return item;
            });
            this.checkedCount = checkedCount;
        }
    }
};

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(255)
)

/* script */
__vue_exports__ = __webpack_require__(256)

/* template */
var __vue_template__ = __webpack_require__(257)
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
__vue_options__.__file = "D:\\weexplus-demo\\src\\native\\component\\option.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a5db2ffc"
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


/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid-select"]
  }, [_vm._l((_vm.dList), function(item, index) {
    return _c('option', _vm._b({
      key: index,
      style: {
        marginTop: _vm.lineSpacing
      },
      attrs: {
        "index": index
      },
      on: {
        "select": function($event) {
          _vm.onSelect(index)
        }
      }
    }, 'option', Object.assign({}, _vm.customStyles, item), false))
  }), _vm._l((_vm.cHackList), function(item, index) {
    return _c('option', _vm._b({
      key: _vm.id + index,
      style: {
        opacity: 0,
        marginTop: _vm.lineSpacing
      }
    }, 'option', Object.assign({}, _vm.customStyles, item), false))
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(265)
)

/* script */
__vue_exports__ = __webpack_require__(266)

/* template */
var __vue_template__ = __webpack_require__(268)
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
__vue_options__.__file = "D:\\weexplus-demo\\src\\native\\component\\wxc-grid-select.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ff409f0a"
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


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var module1 = new Object({

    isIntNum: function isIntNum(val) {
        var regPos = /^[0-9]+.?[0-9]*$/;
        ; // 非负整数
        var regNeg = /^\-[1-9][0-9]*$/; // 负整数 regPos.test(val) || regNeg.test(val)
        var d = /^\d+(\.\d+)?$/;
        if (d.test(val) || regNeg.test(val)) {
            return true;
        } else {
            return false;
        }
    }
});
// import module1 from './jstools/mytool' 引用方式
exports.default = module1;

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(342)
)

/* script */
__vue_exports__ = __webpack_require__(343)

/* template */
var __vue_template__ = __webpack_require__(344)
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
__vue_options__.__file = "D:\\weexplus-demo\\src\\native\\multiselect.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-14bde297"
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

/***/ 342:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "display": "block",
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#ffffff"
  },
  "goodsimg": {
    "flexDirection": "row",
    "width": "750"
  },
  "dec": {
    "height": "250"
  },
  "unitprice": {
    "flexDirection": "row",
    "height": "100"
  },
  "scroller": {
    "flex": 1,
    "height": "490"
  },
  "demo": {
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingLeft": "24",
    "borderBottomWidth": "1",
    "borderColor": "#eeeeee"
  },
  "res": {
    "marginTop": "24",
    "color": "#666666",
    "fontSize": "26",
    "lineHeight": "36"
  },
  "cell": {
    "flexDirection": "row",
    "top": 0,
    "left": 0,
    "right": 0
  },
  "cellTitle": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "height": "70"
  },
  "text": {
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "fontSize": "35",
    "width": "230",
    "flexDirection": "row"
  },
  "text2": {
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "fontSize": "35",
    "width": "230",
    "flexDirection": "row"
  },
  "text3": {
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "fontSize": "35",
    "width": "320"
  },
  "inputdiv": {
    "flexDirection": "row",
    "width": "320",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "fontSize": "35"
  },
  "input": {
    "width": "80",
    "height": "70",
    "borderWidth": "1",
    "borderColor": "#eeeeee",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "bar-ic": {
    "fontSize": "60",
    "color": "#FFFFFF",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#eeeeee",
    "width": "80",
    "height": "70",
    "textAlign": "center"
  },
  "bar-ic2": {
    "fontSize": "60",
    "color": "#FFFFFF",
    "backgroundColor": "#eeeeee",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "80",
    "height": "70",
    "textAlign": "center"
  },
  "bottom": {
    "display": "block",
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "width": "750",
    "backgroundColor": "#0085ee"
  },
  "heji": {
    "flexDirection": "row",
    "backgroundColor": "#1EA5FC",
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "height": "80",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "submit": {
    "position": "absolute",
    "bottom": 0,
    "right": 0,
    "height": "80",
    "width": "200",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "backgroundColor": "#FFA500"
  },
  "size": {
    "fontSize": "35"
  },
  "cellitem": {
    "width": "230",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "lineHeight": "70",
    "fontSize": "35"
  }
}

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcGridSelect = __webpack_require__(286);

var _wxcGridSelect2 = _interopRequireDefault(_wxcGridSelect);

var _mytool = __webpack_require__(287);

var _mytool2 = _interopRequireDefault(_mytool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var nav = weex.requireModule('navigator');
var net = weex.requireModule('net');
var pref = weex.requireModule('pref');
var modal = weex.requireModule('modal');
exports.default = {
    components: { gridselect: _wxcGridSelect2.default },
    data: function data() {
        return {
            goods: {},
            retailsales: 99.00,
            unitprice: 80.00,
            discountrate: 8.0,
            imgurl: 'root:img/logo.png',
            res1: '',
            res2: '',
            res3: '',
            qtytotal: '',
            Amttotal: '',
            customStyles: {
                lineSpacing: '14px',
                width: '120px',
                height: '50px',
                icon: 'https://gw.alicdn.com/tfs/TB1IAByhgMPMeJjy1XdXXasrXXa-38-34.png',
                color: '#333333',
                checkedColor: '#ffffff',
                disabledColor: '#eeeeee',
                borderColor: '#666666',
                checkedBorderColor: '#ffb200',
                backgroundColor: '#ffffff',
                checkedBackgroundColor: '#ffb200'
            },
            inputlist: [], //用于记录总的录入数量
            colorid: '', //当前选中的颜色ID
            selectIndex: '', //数组选中项
            checkedList: [],
            qtysum: 0, //单个颜色尺码数量和
            sizelist: [{ 'GoodsID': '00AQ', 'ColorID': '0BA', 'SizeID': '0A1', 'Size': '35', 'x': 'x_1', 'Quantity': '', 'Amount': '100' }, { 'GoodsID': '00AQ', 'ColorID': '0BA', 'SizeID': '0A2', 'Size': '36', 'x': 'x_2', 'Quantity': '', 'Amount': '100' }, { 'GoodsID': '00AQ', 'ColorID': '0BA', 'SizeID': '0A3', 'Size': '37', 'x': 'x_3', 'Quantity': '', 'Amount': '100' }, { 'GoodsID': '00AQ', 'ColorID': '0BB', 'SizeID': '0A1', 'Size': '38', 'x': 'x_1', 'Quantity': '', 'Amount': '100' }, { 'GoodsID': '00AQ', 'ColorID': '0BB', 'SizeID': '0A2', 'Size': '39', 'x': 'x_2', 'Quantity': '', 'Amount': '100' }, { 'GoodsID': '00AQ', 'ColorID': '0BB', 'SizeID': '0A3', 'Size': '40', 'x': 'x_3', 'Quantity': '', 'Amount': '100' }, { 'GoodsID': '00AQ', 'ColorID': '0BC', 'SizeID': '0A1', 'Size': '41', 'x': 'x_1', 'Quantity': '', 'Amount': '100' }, { 'GoodsID': '00AQ', 'ColorID': '0BC', 'SizeID': '0A2', 'Size': '42', 'x': 'x_2', 'Quantity': '', 'Amount': '100' }, { 'GoodsID': '00AQ', 'ColorID': '0BC', 'SizeID': '0A3', 'Size': '43', 'x': 'x_3', 'Quantity': '', 'Amount': '100' }],
            testData3: [{ 'GoodsID': '00AQ',
                'ColorID': '0BA',
                'title': '红色',
                'checked': true,
                'tipqty': ''
            }, { 'GoodsID': '00AQ',
                'ColorID': '0BB',
                'title': '蓝色',
                'tipqty': ''
            }, { 'GoodsID': '00AQ',
                'ColorID': '0BC',
                'title': '白色',
                'tipqty': ''
            }, {
                'title': '合肥'
            }, {
                'title': '武汉'
            }, {
                'title': '长沙'
            }, {
                'title': '南昌'
            }, {
                'title': '太原'
            }, {
                'title': '西安'
            }, {
                'title': '郑州'
            }, {
                'title': '福州'
            }]
        };
    },
    directives: {
        trigger: {
            inserted: function inserted(el, binging) {
                //el.blur()
                //$(el).trigger('click')
                if (binging) {
                    el.blur();
                }
                //  $(el).trigger('blur')
            }
        }, focus: {
            inserted: function inserted(el, _ref) {
                var value = _ref.value;

                console.log(el, { value: value });
                if (value) {
                    el.focus();
                }
            }

        }, blur: {
            inserted: function inserted(el, _ref2) {
                var value = _ref2.value;

                console.log(el, { value: value });
                if (value) {
                    el.blur();
                }
            }

        }
    },
    methods: {
        onLoad: function onLoad(p) {
            var param = {};
            param.GoodsID = p.GoodsID;
            param.DeptID = '007';
            param.onLineId = '0000-0000';
            param.userId = 1;
            var _this = this;

            modal.toast({
                message: 'GoodsID的值：' + param.GoodsID,
                duration: 0.3
            });

            // _this.colorid='0BA'
            net.post(pref.getString('ip') + '/common.do?getColorAndSize', param, {}, function () {

                //start
            }, function (res) {
                //success
                // _this.alert(res.res.obj.[colors])
                if (res.res.success) {
                    _this.testData3 = res.res.attributes.colors;
                    // _this.alert('testData3:'+ _this.testData3)
                    _this.goods = res.res.attributes.goods;
                    _this.sizelist = res.res.obj;
                    // _this.alert( 'sizelist:'+JSON.stringify(_this.sizelist))
                    _this.colorid = _this.testData3.filter(function (item) {
                        return item.checked;
                    })[0].ColorID;
                    //_this.alert('filter:'+JSON.stringify(_this.testData3.filter(item=>item.checked)))
                    // _this.alert( 'colorid:'+_this.colorid)
                }
            }, function (res) {//compelete

            }, function (res) {//exception
            });
        },
        jian: function jian(ls) {
            ls.Quantity = Number(ls.Quantity) - 1;
            this.total();
        },
        add: function add(ls) {
            ls.Quantity = Number(ls.Quantity) + 1;
            this.total();
        },
        submit: function submit() {
            var p = {};
            p.sizelist = this.sizelist.filter(function (item) {
                return Number(item.Quantity) !== 0;
            });
            pref._SendN(this.sizelist.filter(function (item) {
                return Number(item.Quantity) !== 0;
            }));
            //  nav.backFull(p,false)
            //this.alert(this.sizelist.filter(item=>Number(item.Quantity)>0))
            //return https://weex.apache.org/zh/docs/api/broadcast-channel.html#%E9%80%9A%E4%BF%A1%E8%BF%87%E7%A8%8B
            //  const cjy = new BroadcastChannel('sizelist')
            // let list=this.sizelist.filter(item=>Number(item.Quantity)>0)
            // cjy.postMessage({list})
            //  var p={};
            /*  p.sizelist=this.sizelist.filter(item=>Number(item.Quantity)>0)
              var notify=weex.requireModule("notify")
              notify.send('key',p)
            */
            //  nav.backTo('sd')
            //   nav.backFull(this.sizelist.filter(item=>Number(item.Quantity)>0),false)
        },
        onSelect: function onSelect(res, _ref3) {
            var selectIndex = _ref3.selectIndex,
                checked = _ref3.checked,
                checkedList = _ref3.checkedList;

            var _this = this;
            Vue.set(this, res, '\u672C\u6B21\u9009\u62E9\u7684index\uFF1A' + selectIndex + '\n\u662F\u5426\u9009\u4E2D\uFF1A' + (checked ? '是' : '否') + ' \n \u9009\u4E2D\u7684id: ' + checkedList.map(function (item) {
                return item.ColorID;
            }) + ' \n\u9009\u4E2D\u5217\u8868\uFF1A' + checkedList.map(function (item) {
                return item.title;
            }).join(','));

            // _this.alert('inputlist:'+JSON.stringify(_this.inputlist))
            _this.colorid = checkedList.map(function (item) {
                return item.ColorID;
            }).toString();
            _this.selectIndex = selectIndex;
            _this.checkedList = checkedList;
            // checkedList.map(item => item.tipqty=8) //这种方式可以更新
            //  _this.alert('checkedList:'+JSON.stringify(_this.$refs.glist.dList))

            var dList = _this.$refs.glist.dList.filter(function (item) {
                return item.checked === false;
            });
            for (var i = 0; i < dList.length; i++) {
                var map = dList[i];
                map.tipqty = _this.tipqtytotal(map.GoodsID, map.ColorID);
                if (map.tipqty > 99) {
                    map.tipqty = '99+';
                }
            }

            // _this.alert( JSON.stringify(_this.checkedList.filter(item =>item.checked)))


            //  _this.checkedList.map(item => item.tipqty=_this.qtysum)

        },
        onOverLimit: function onOverLimit(limit) {
            modal.toast({
                message: '\u6700\u591A\u9009\u62E9' + limit + '\u4E2A',
                duration: 0.8
            });
        },
        sizefilter: function sizefilter(sizelist, colorid) {
            return sizelist.filter(function (map) {
                return map.ColorID === colorid;
            });
        },
        tipqtytotal: function tipqtytotal(GoodsID, ColorID) {
            var _this = this;
            _this.qtysum = Number(0);
            for (var i = 0; i < _this.sizelist.length; i++) {
                if (_this.sizelist[i].GoodsID === GoodsID && _this.sizelist[i].ColorID === ColorID) {
                    _this.qtysum = _this.qtysum + Number(_this.sizelist[i].Quantity);
                }
            }
            return _this.qtysum;
        },
        total: function total() {
            var q = Number(0);
            var a = Number(0);
            for (var i = 0; i < this.sizelist.length; i++) {
                q = q + Number(this.sizelist[i].Quantity);
                a = a + Number(this.sizelist[i].Amount);
            }
            this.qtytotal = q;
            this.Amttotal = a;
        },
        input: function input(ls) {
            //输入时触发


            if (!_mytool2.default.isIntNum(ls.Quantity)) {
                this.alert('请输入数字');
                return;
            }
            this.total();
        },
        blur: function blur(ls) {
            var _this = this;

            if (ls.qty != '' || ls.qty != null) {
                //尺码的每一行记录
                var map = {};
                map.GoodsID = '01AQ';
                map.ColorID = ls.colorid;
                map.SizeID = ls.sizeid;
                map.Quantity = ls.qty;
                //   _this.alert(_this.inputlist)

                var mapData = _this.getList(map);

                if (mapData === null) {
                    //这个为不存在
                    _this.inputlist.unshift(map);
                } else {
                    mapData.Quantity = map.Quantity;
                }
                //   _this.qtysum=Number(_this.qtysum)+Number(map.Quantity)
                //   _this.alert(qtysum)
            }
        },
        getList: function getList(barcode) {
            //检查ListView中的重复记录  参数也为map

            for (var i = 0; i < this.inputlist.length; i++) {
                var tempMap = this.inputlist[i];

                if (barcode.GoodsID === tempMap.GoodsID && barcode.ColorID === tempMap.ColorID && barcode.SizeID === tempMap.SizeID) {
                    var Quantity = tempMap.Quantity;

                    if (barcode.Quantity > 0 && Quantity > 0) {
                        return tempMap;
                    } else if (barcode.Quantity < 0 && Quantity < 0) {
                        return tempMap;
                    }
                }
            }

            return null;
        }
    }
};

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('head', {
    attrs: {
      "rightText": "",
      "title": "多颜色多尺码",
      "rightButton": ""
    }
  }), _c('div', {
    staticClass: ["goodsimg"]
  }, [_c('image', {
    staticStyle: {
      width: "250px",
      height: "250px",
      borderStyle: "dashed",
      borderWidth: "1px"
    },
    attrs: {
      "src": _vm.imgurl
    }
  }), _c('div', {
    staticClass: ["dec"]
  }, [_c('text', {
    staticClass: ["size"],
    staticStyle: {
      height: "60px",
      marginTop: "10px"
    }
  }, [_vm._v("货品名称")]), _c('text', {
    staticClass: ["size"],
    staticStyle: {
      height: "60px"
    }
  }, [_vm._v("货品编码")]), _c('text', {
    staticClass: ["size"],
    staticStyle: {
      height: "60px"
    }
  }, [_vm._v("零售价￥:" + _vm._s(_vm.retailsales))]), _c('div', {
    staticClass: ["unitprice"]
  }, [_c('text', {
    staticClass: ["size"],
    staticStyle: {
      height: "60px"
    }
  }, [_vm._v("单价:")]), _c('input', {
    staticStyle: {
      width: "100px",
      height: "50px",
      borderBottomWidth: "2px",
      borderColor: "#eeeeee"
    },
    attrs: {
      "type": "number",
      "value": (_vm.unitprice)
    },
    on: {
      "input": function($event) {
        _vm.unitprice = $event.target.attr.value
      }
    }
  }), _c('text', {
    staticClass: ["size"],
    staticStyle: {
      height: "60px"
    }
  }, [_vm._v("折扣:")]), _c('input', {
    staticStyle: {
      width: "100px",
      height: "50px",
      borderBottomWidth: "2px",
      borderColor: "#eeeeee"
    },
    attrs: {
      "type": "number",
      "value": (_vm.discountrate)
    },
    on: {
      "input": function($event) {
        _vm.discountrate = $event.target.attr.value
      }
    }
  })])])]), _c('div', {
    staticClass: ["demo"]
  }, [_c('scroller', {
    staticStyle: {
      height: "200px"
    }
  }, [_c('gridselect', {
    ref: "glist",
    attrs: {
      "single": true,
      "cols": 5,
      "list": _vm.testData3
    },
    on: {
      "select": function (params) { return _vm.onSelect('res3', params); }
    }
  })], 1)]), _vm._m(0), _c('list', {
    staticStyle: {
      height: "490px",
      marginBottom: "5px"
    }
  }, _vm._l((_vm.sizefilter(_vm.sizelist, _vm.colorid)), function(ls, index) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('text', {
      staticClass: ["cellitem"]
    }, [_vm._v(_vm._s(ls.Size))]), _c('text', {
      staticClass: ["cellitem"]
    }, [_vm._v(_vm._s(ls.Size) + "/" + _vm._s(ls.Size))]), _c('div', {
      staticClass: ["inputdiv"]
    }, [_c('text', {
      staticClass: ["iconfont", "bar-ic"],
      on: {
        "click": function($event) {
          _vm.jian(ls)
        }
      }
    }, [_vm._v("")]), _c('input', {
      staticClass: ["input"],
      attrs: {
        "type": "text",
        "returnKeyType": "next",
        "value": (ls.Quantity)
      },
      on: {
        "input": [function($event) {
          _vm.$set(ls, "Quantity", $event.target.attr.value)
        }, function($event) {
          _vm.input(ls)
        }]
      }
    }), _c('text', {
      staticClass: ["iconfont", "bar-ic2"],
      on: {
        "click": function($event) {
          _vm.add(ls)
        }
      }
    }, [_vm._v("")])])])
  })), _c('div', {
    staticClass: ["bottom"]
  }, [_c('div', {
    staticClass: ["heji"]
  }, [_c('text', {
    staticClass: ["size"],
    staticStyle: {
      color: "#FFFFFF"
    }
  }, [_vm._v("合计:")]), _c('text', {
    staticClass: ["size"],
    staticStyle: {
      marginLeft: "20px",
      color: "#FFFFFF"
    }
  }, [_vm._v(_vm._s(_vm.qtytotal))]), _c('text', {
    staticClass: ["size"],
    staticStyle: {
      marginLeft: "20px",
      color: "#FFFFFF"
    }
  }, [_vm._v("￥" + _vm._s(_vm.Amttotal))]), _c('div', {
    staticClass: ["submit"],
    on: {
      "click": _vm.submit
    }
  }, [_c('text', {
    staticClass: ["size"],
    staticStyle: {
      color: "#FFFFFF"
    }
  }, [_vm._v("确认")])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cellTitle"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("尺码")]), _c('text', {
    staticClass: ["text2"]
  }, [_vm._v("采购数/可发数")]), _c('text', {
    staticClass: ["text3"]
  }, [_vm._v("输入数")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });