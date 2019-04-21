/** Encapsulates basic Javascript functions to retrieve DOM elements.

Each method returns the element or an error (no "null" possible)
*/

export default class Get {
  /** Get an element by Id. Return the element or throw an Error. */
  static id(idName: string): HTMLElement {
    const $element = document.getElementById(idName);

    if (!$element) {
      throw new Error(`Element #${idName} is missing !`);
    } else {
      return $element;
    }
  }

  /** Get elements by class. Return an array or throw an Error. */
  static class(className: string): Element[] {
    const $elements = document.getElementsByClassName(className);

    if (!$elements.length) {
      throw new Error(`Elements .${className} are missing !`);
    } else {
      const arrayElements = Array.from($elements);
      return arrayElements;
    }
  }

  /** Get an element by query selector. Return the element or throw an Error. */
  static query(selector: string): Element {
    const $element = document.querySelector(selector);

    if (!$element) {
      throw new Error(`Element ${selector} is missing !`);
    } else {
      return $element;
    }
  }

  /** Get an element by query selector. Return an array or throw an Error. */
  static queryAll(selector: string): Element[] {
    const $elements = document.querySelectorAll(selector);

    if (!$elements.length) {
      throw new Error(`Elements ${selector} are missing !`);
    } else {
      const arrayElements = Array.from($elements);
      return arrayElements;
    }
  }
}
