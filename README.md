# domstrict

wrapper for the "getElement" and "querySelector" methods. Return the element or an error.

## News

Add the `$base` parameter for query and queryAll.
**Todo**: Create tests and update the documentation.

## Installation

```sh
npm install @8area8/domstrict --save
```

## Usage

### Javascript

```javascript
var get = require("@8area8/domstrict");
var $element = get.id("foo");
```

```sh
- Returns an HTMLElement OR throws an Error.
```

### TypeScript

```typescript
import Get from "@8area8/domstrict";
const $element = Get.queryAll(".bar");
```

```sh
- Returns an Array<Element> OR throws an Error.
```

## API

```typescript
class Get {
  static id(idName: string): HTMLElement;
  static class(idName: string): Element[];
  static query(selector: string): Element;
  static queryAll(selector: string): Element[];
}
```

```typescript
/** Get an element by Id. Return the element or throw an Error. */
static id(idName: string): HTMLElement;
```

```typescript
/** Get elements by class. Return an array or throw an Error. */
static class(className: string): Element[]
```

```typescript
/** Get an element by query selector. Return the element or throw an Error. */
static query(selector: string): Element
```

```typescript
/** Get an element by query selector. Return an array or throw an Error. */
static queryAll(selector: string): Element[]
```

## Test

```sh
npm run test
```
