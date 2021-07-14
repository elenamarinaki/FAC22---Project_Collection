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
They represent entities that are not included on HTML. For every element on the page, you get two more free ones that you can do just about anything another HTML element could do. They unlock a whole lot of interesting design possibilities without negatively affecting the semantics of your markup.
* Multiple background canvases
* Shapes with a single element
* Show URL's links in printed web pages
* Clear floats
* Simulate `float: center;`
* Label blocks of code with the language it is in
```html
<pre rel="CSS"></pre>
```
```css
pre:after {
  content: attr(rel);
  position: absolute;
  top: 22px;
  right: 12px;
}
```
*
*
*

_Source:_ [A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)

## How might you create custom-styled checkboxes using both of the above?
[Under-Engineered Custom Radio Buttons and Checkboxen](https://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html)


--------------------------------------------------------
--------------------------------------------------------


# Useful Articles

* [Multiple Backgrounds and Borders with CSS 2.1](http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/)
* [The Shapes of CSS](https://css-tricks.com/the-shapes-of-css/)