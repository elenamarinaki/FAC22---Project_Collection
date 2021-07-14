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
* Child combinator: `>` => `ul > li` matches all `<li>` elements **_nested directly_** inside a `<ul>` element (directly children)
* General sibling combinator: `~` => `p ~ span` matches all `<span>` elements that follow `<p>`, immediately or not (both share the same parent)
* Adjacent sibling combinator: `+` => `h2 + p` matches all `<p>` elements that **_directly_** follow an `<h2>` (both share the same parent)
* Column combinator: `||` => selects nodes which belong to a column, e.g. `col || td` will match all `<td>` elements that belong to the scope of the `<col>`.
 