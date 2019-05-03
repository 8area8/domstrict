/** Encapsulates basic Javascript functions to retrieve DOM elements.

Each method returns the element or an error (no "null" possible)
*/
export default class Get {
    /** Get an element by Id. Return the element or throw an Error. */
    static id(idName: string): HTMLElement;
    /** Get elements by class. Return an array or throw an Error. */
    static class(className: string): Element[];
    /** Get an element by query selector. Return the element or throw an Error. */
    static query(selector: string, $base?: HTMLElement | Document): Element;
    /** Get an element by query selector. Return an array or throw an Error. */
    static queryAll(selector: string, $base?: HTMLElement | Document): Element[];
}
