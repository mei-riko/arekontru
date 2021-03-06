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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
    (0, _jquery2.default)("a.scroll").click(function () {
        (0, _jquery2.default)("html, body").animate({
            scrollTop: (0, _jquery2.default)((0, _jquery2.default)(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    // Input mask
    if ((0, _jquery2.default)('.phone').length > 0) {
        (0, _jquery2.default)(".phone").inputmask({
            mask: "8 999 999 99 99",
            placeholder: " ",
            showMaskOnHover: true,
            onincomplete: function onincomplete() {
                (0, _jquery2.default)(this).closest("form").addClass('error-phone');
                (0, _jquery2.default)(this).addClass('error');
                (0, _jquery2.default)(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер');
            },
            oncomplete: function oncomplete() {
                (0, _jquery2.default)(this).closest("form").removeClass('error-phone');
                (0, _jquery2.default)(this).removeClass('error');
                (0, _jquery2.default)(this).siblings(".error_phone").removeClass('error').html('');
            }
        });
    }
    (0, _jquery2.default)('input.phone').on('keydown', function (event) {
        if (event.keyCode === 13 && !(0, _jquery2.default)(this).inputmask("isComplete")) {
            event.preventDefault();
            (0, _jquery2.default)(this).blur();
            return false;
        }
    });

    // Product Slider
    if ((0, _jquery2.default)(".slider").length > 0) {
        (0, _jquery2.default)('.slider_for .slider__image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            fade: true,
            asNavFor: '.slider_for .slider__nav'
        });
        (0, _jquery2.default)('.slider_for .slider__nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider_for .slider__image',
            arrows: false,
            // dots: true,
            // centerMode: true,
            focusOnSelect: true
        });

        (0, _jquery2.default)('.header-block_card .list.slider').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            // arrows: false,
            // dots: false,
            // fade: true,
            responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true
                }
            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }]
        });
    }

    // Rent JS
    // Any change input
    var priceCalc = parseInt((0, _jquery2.default)("#priceCalc").text());
    var priceResult = (0, _jquery2.default)("#priceResult");
    var priceCount = (0, _jquery2.default)("#priceCount");
    var pricePeriod = (0, _jquery2.default)("#pricePeriod");
    (0, _jquery2.default)("#calculator .input").on("input", function (ev) {
        var inputChange = 0;
        if (priceCount.val() != '' && pricePeriod.val() != '') {
            inputChange = parseInt(priceCount.val()) * parseInt(pricePeriod.val()) * priceCalc;
            priceResult.text(inputChange);
        } else {
            priceResult.text('—');
        }
    });
    // Click Btn
    (0, _jquery2.default)("#modalRentBtn").on("click", function () {
        (0, _jquery2.default)("#modalCount").val(parseInt(priceCount.val()));
        (0, _jquery2.default)("#modalPeriod").val(parseInt(pricePeriod.val()));
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);