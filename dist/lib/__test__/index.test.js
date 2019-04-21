"use strict";
// __tests__/test_index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
"use strict";
test("The Get methods should throw an error.", function () {
    // Set up our document body
    document.body.innerHTML =
        "<div>" +
            '  <span id="username" />' +
            '  <button class="button" />' +
            "  <div class='button'" +
            "</div>";
    expect(function () {
        index_1.default.id("foo");
    }).toThrow(Error("Element #foo is missing !"));
    expect(function () {
        index_1.default.class("foo");
    }).toThrow(Error("Elements .foo are missing !"));
    expect(function () {
        index_1.default.query(".foo");
    }).toThrow(Error("Element .foo is missing !"));
    expect(function () {
        index_1.default.queryAll(".foo");
    }).toThrow(Error("Elements .foo are missing !"));
});
test("The Get methods should return the element.s.", function () {
    // Set up our document body
    document.body.innerHTML =
        "<div>" +
            '  <span id="username" />' +
            '  <button class="button" />' +
            "  <div class='button'" +
            "</div>";
    expect(index_1.default.id("username")).toBeInstanceOf(HTMLElement);
    expect(index_1.default.class("button")).toBeInstanceOf(Array);
    expect(index_1.default.query("#username")).toBeInstanceOf(Element);
    expect(index_1.default.queryAll(".button")).toBeInstanceOf(Array);
});
