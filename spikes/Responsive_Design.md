# Responsive Design

## Units

Everything we see on the web is made up of little dots of light: pixels. We have to think about if _thinking in terms of pixels_ while using CSS does actually make sense.

Not all screens are rendering the pixels the same way, as is apparent from the existence of various pixel geometries. With most modern displays using sub-pixel rendering, as well as the many different screen resolutions that are offered today, the notion of 1px has maybe a more fluid meaning in actuality. 1px of CSS in one screen can be 1px of a bigger pixel of CSS in another one with a higher resolution.

Realization: there is no pixel perfection!

### Scaling & Accessibility 

When setting fonts using px, the browser assumes a fixed size. It is like the font is hardcoded in a way. This limits the users who adjust their default font size in browser settings, disregarding that way the browser itself!

When using units em, rem etc., we can solve this problem, since these are _relative_ to the defaults set by the user. The browser will translate these values into pixels according to the device's hardware specifications.

### Relativity

The base `font-size` (root font size) is __1rem__. All paragraphs elements should be represented by the base font size and this does not have to be set explicitly in CSS. To keep the hierarchy intact, elements like headings should be adjusted proportionally. 

### Proportionality and maintainability

When all elements are set in relative units, adjustments in dimensions are seamless. All we have to do is change the root size and all affected elements will adjust proportionally. 
The same thing is less easily accomplished when the initial values are set in `px`, since each element has to be modified separately.

### Viewport units

Width-based `@media` queries should be avoided. Using this method, we hard code the layout configuration, providing less flexibility in scaling and spacing. Following this method, we have to also chose specific _breakpoints_ after or before which new rules would apply. This raises the question of the kind of criteria being used to chose them.

An alternate approach to this would be the use of __viewport units__, which are relative to the browser's viewport size.

* `1vw` is equal to 1% of the screen's width
* `1vh` is equal to 1% of the screen's height



>Using viewport units and calc() we can create an algorithm whereby dimensions are scaled proportionately, but from a minimum value.

```css
:root {
  font-size: calc(1rem + 0.5vw);
}
```

>The 1rem part of the equation ensures the font-size never drops below the default (system/browser/user defined) value. That is, 1rem + 0vw is 1rem.


### The `em` unit

The `em` unit is relative to the `rem` unit. For example, if we need to use `<strong>` for an `h2` after we have define its font size in `rems`, _we are going to use `ems` to basically refer back to how many times `ems` we need_. If we'd use just `rems`, the `<strong> h2` wouldn't scale with its parent.

_Source:_ [Units - Every Layout](https://every-layout.dev/rudiments/units/)


--------------------------------------------------------
--------------------------------------------------------


## The Lengths of CSS

Properties that take length as a value: 
* width, height
* margin, padding
* border
* box-shadow

### The Absolute Lengths

* `px`
  * not literal screen pixels, it's an angular measurement
  * supposed to be normalized across devices and displays

* `in`
  * in CSS, they map directly to pixels
  * 1in == 96px

* `cm`
  * also map to pixels
  * 1cm == 37.8px

* `mm`
  * 1mm == 0.1cm == 3.78px


### The Font-Relative Lengths

* `em`
  * originally a typographic measurement
  * 1em = 16px
  * _if CSS changes the font size at any level in the document, **1em becomes whatever the new `font-size` is**_
  * `em` units multiply upon themselves
  * do not change when change the `font-family`???

* `rem`
  * relative unit, like `em`
  * always relative to the "root" element??


### The Viewport Percentage Lengths

* `vw` / `vh`
  * `1vw` is equal to 1% of the width of the viewport
  * `1vh` is equal to 1% of the height of the viewport
  * value remains consistent of all elements regardless of their parent elements

* `vmin` / `vmax`
  * these values will be whichever are _smaller_ or _larger_ at the moment, `vw` or `vh`.


### Odd Ball Out

* `%`
  * not technically a length unit
  * based on the length of the same property of the parent

_Source:_ [The Lengths of CSS](https://css-tricks.com/the-lengths-of-css/)


--------------------------------------------------------
--------------------------------------------------------

## How To Write Mobile-first CSS

### Mobile-first approach

* styles are applied first to mobile devices
* styles for larger screens are then added via `@media` queries
* this approach uses `min-width` media queries

e.g. => `.content` sidebar takes 100% width on mobile and %66 on desktop.
* a `<div>` has a width of 100% by default 

_Source:_ [How To Write Mobile-first CSS](https://zellwk.com/blog/how-to-write-mobile-first-css/)




--------------------------------------------------------
--------------------------------------------------------






![Lines](https://media.giphy.com/media/cNTobeyDPsv9xUeAOR/giphy.gif){width=70%}



## What CSS units should we use for dimensions? What are absolute and relative units? 
We have so far discussed the problem of units focusing mainly on the fonts so far. The same principles can apply to many other measurements, like `margin`, `padding`, `border`, etc.. 
The reason we start from the text first, is that it is a primitive web medium and thus designing a layout can be a derivative of our text's dimensions.
Using relative values, we provide the browser with the flexibility to translate these values into pixels according to specific hardware as well as the user's configurations.

## When should you use a media query? Are they only for screen size?
`@media` queries represent the hard coding of layout reconfigurations and are not sensitive to the immediate available space actually afforded the element or component in question. Scaling at a specific _breakpoint_ is quite arbitrary.
So, using them depends upon the units chosen to represent basic elements, such as text. **If we adopt for example a `px` approach, it would make sense to use `@media` queries. The lack of relative and proportional sizing in this case would require adjusting individual elements case-by-case.**

## How can mobile-first CSS make responsive styling easier?

Code for larger screens is usually more complicated, so coding mobile-first simplifies the code.
On the contrary, if we go desktop-first, we will have to _restore_ the default properties for smaller viewports most of the time.

``` css
.content {
  // Properties for larger screens.
  float: left;
  width: 60%;

  // Properties for smaller screens.
  // Note that we have to write two default properties to make the layout work
  @media (max-width: 800px) {
    float: none;
    width: 100%;
  }
}
``` 