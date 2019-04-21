// __tests__/test_index.ts

import Get from "../index";

"use strict";

test("The Get methods should throw an error.", () => {
  // Set up our document body
  document.body.innerHTML =
    "<div>" +
    '  <span id="username" />' +
    '  <button class="button" />' +
    "  <div class='button'" +
    "</div>";

  expect(() => {
    Get.id("foo");
  }).toThrow(Error("Element #foo is missing !"));

  expect(() => {
    Get.class("foo");
  }).toThrow(Error("Elements .foo are missing !"));

  expect(() => {
    Get.query(".foo");
  }).toThrow(Error("Element .foo is missing !"));

  expect(() => {
    Get.queryAll(".foo");
  }).toThrow(Error("Elements .foo are missing !"));
});

test("The Get methods should return the element.s.", () => {
  // Set up our document body
  document.body.innerHTML =
    "<div>" +
    '  <span id="username" />' +
    '  <button class="button" />' +
    "  <div class='button'" +
    "</div>";

  expect(Get.id("username")).toBeInstanceOf(HTMLElement);

  expect(Get.class("button")).toBeInstanceOf(Array);

  expect(Get.query("#username")).toBeInstanceOf(Element);

  expect(Get.queryAll(".button")).toBeInstanceOf(Array);
});
