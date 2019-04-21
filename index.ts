/* Encapsulates basic Javascript functions to retrieve DOM elements.

Each method returns the element or an error (no "null" possible)
*/

export class Get {
  /* Get an element by Id. Return the element or throw an Error. */
  public id(idName: string): HTMLElement {
    const $element = document.getElementById(idName);

    if (!$element) {
      throw new Error(`Element ${$element} is missing !`);
    } else {
      return $element;
    }
  }

  /* Get elements by class. Return an array or throw an Error. */
  public class(idName: string): Element[] {
    const $elements = document.getElementsByClassName(idName);

    if (!$elements) {
      throw new Error(`Element ${$elements} is missing !`);
    } else {
      const arrayElements = Array.from($elements);
      return arrayElements;
    }
  }

  /* Get an element by query selector. Return the element or throw an Error. */
  public query(selector: string): Element {
    const $element = document.querySelector(selector);

    if (!$element) {
      throw new Error(`Element ${$element} is missing !`);
    } else {
      return $element;
    }
  }

  /* Get an element by query selector. Return the element or throw an Error. */
  public queryAll(selector: string): Element[] {
    const $elements = document.querySelectorAll(selector);

    if (!$elements) {
      throw new Error(`Element ${$elements} is missing !`);
    } else {
      const arrayElements = Array.from($elements);
      return arrayElements;
    }
  }
}
