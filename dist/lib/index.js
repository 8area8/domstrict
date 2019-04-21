"use strict";
/** Encapsulates basic Javascript functions to retrieve DOM elements.

Each method returns the element or an error (no "null" possible)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Get = /** @class */ (function () {
    function Get() {
    }
    /** Get an element by Id. Return the element or throw an Error. */
    Get.id = function (idName) {
        var $element = document.getElementById(idName);
        if (!$element) {
            throw new Error("Element #" + idName + " is missing !");
        }
        else {
            return $element;
        }
    };
    /** Get elements by class. Return an array or throw an Error. */
    Get.class = function (className) {
        var $elements = document.getElementsByClassName(className);
        if (!$elements.length) {
            throw new Error("Elements ." + className + " are missing !");
        }
        else {
            var arrayElements = Array.from($elements);
            return arrayElements;
        }
    };
    /** Get an element by query selector. Return the element or throw an Error. */
    Get.query = function (selector) {
        var $element = document.querySelector(selector);
        if (!$element) {
            throw new Error("Element " + selector + " is missing !");
        }
        else {
            return $element;
        }
    };
    /** Get an element by query selector. Return an array or throw an Error. */
    Get.queryAll = function (selector) {
        var $elements = document.querySelectorAll(selector);
        if (!$elements.length) {
            throw new Error("Elements " + selector + " are missing !");
        }
        else {
            var arrayElements = Array.from($elements);
            return arrayElements;
        }
    };
    return Get;
}());
exports.default = Get;
