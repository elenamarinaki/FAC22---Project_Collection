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
 
### Pseudo

* Pseudo classes: the `:` pseudo allow the _selection of elements_ based on state information that is _not contained_ in the document tree => `a:visited` matches all `<a>` elements that have been visited by the user
* Pseudo elements: the `::` pseudo represent entities that are not included in HTML => `p::first-line` matches the first line of all `<p>` elements

>**! In contrast to `pseudo-elements`, `pseudo-classes` can be used to style an element based on its _state_.**

_Source:_ [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)


--------------------------------------------------------
--------------------------------------------------------

## What are “combinator” selectors? Can you provide examples where they’re useful?
CSS combinators are explaining the **relationship** between two selectors. CSS selectors are the patterns used to select elements for style purpose. They can be either simple or complex when they are combined together.

## What are pseudo-elements? Can you provide examples where they’re useful?
They represent entities that are not included on HTML.