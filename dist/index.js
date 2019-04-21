"use strict";
/* Encapsulates basic Javascript functions to retrieve DOM elements.

Each method returns the element or an error (no "null" possible)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Get = /** @class */ (function () {
    function Get() {
    }
    /* Get an element by Id. Return the element or throw an Error. */
    Get.prototype.id = function (idName) {
        var $element = document.getElementById(idName);
        if (!$element) {
            throw new Error("Element " + $element + " is missing !");
        }
        else {
            return $element;
        }
    };
    /* Get elements by class. Return an array or throw an Error. */
    Get.prototype.class = function (idName) {
        var $elements = document.getElementsByClassName(idName);
        if (!$elements) {
            throw new Error("Element " + $elements + " is missing !");
        }
        else {
            var arrayElements = Array.from($elements);
            return arrayElements;
        }
    };
    /* Get an element by query selector. Return the element or throw an Error. */
    Get.prototype.query = function (selector) {
        var $element = document.querySelector(selector);
        if (!$element) {
            throw new Error("Element " + $element + " is missing !");
        }
        else {
            return $element;
        }
    };
    /* Get an element by query selector. Return the element or throw an Error. */
    Get.prototype.queryAll = function (selector) {
        var $elements = document.querySelectorAll(selector);
        if (!$elements) {
            throw new Error("Element " + $elements + " is missing !");
        }
        else {
            var arrayElements = Array.from($elements);
            return arrayElements;
        }
    };
    return Get;
}());
exports.Get = Get;
