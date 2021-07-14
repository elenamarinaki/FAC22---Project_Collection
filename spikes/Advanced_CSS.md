# Advanced CSS

## CSS selectors

**_CSS selectors define the elements to which a set of CSS rules apply._**

>Note: There are no selectors or combinators to select parent items, siblings of parents, or children of parent siblings.

### Basic Selectors

* Universal selector: `*`, `ns|*` (namespace?), `*|*`
* Type selector: all elements that have the given node name
* Class selector: `.classname`
* ID selector: `idname`
* Attribute selector: `[autoplay]` will match all elements that have the `autoplay` attribute set to any value

### Grouping Selectors

* Selector list: `,` => `div, span` matches both `<span>` and `<div>` elements

### Combinators

* Descendant combinator:   `  `(space) => `div span` matches **all** `<span>` elements that are inside a `<div>`
* Child combinator: `>` => `ul > li` matches all `<li>` elements nested directly inside a `<ul>` element.
