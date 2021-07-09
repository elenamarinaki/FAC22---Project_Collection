# Spikes - Week: 3

## CSS Architecture

A CSS architecture brings reasoning to CSS authoring. It is about the guidelines and practices used to help us writing maintainable and reusable code, regardless of scale. It is a modular approach that promotes organization and prevents us from writing massive, indivisible code.

### The BEM Methodology 

According to McDonnell, the BEM approach is less confusing than others, while it still provides a good architecture with a recognizable terminology.

## BEM = Blocks, Elements and Modifiers
----------------------------------------

### The Button Example

In this example, we take a look at the 3 different states of a github button. We create a generic `.button` class that defines its main characteristics. For the other two states - let's say *success* and *danger*, we are creating two different classes according to the BEM naming convention `block--modifier-value`, that target the characteristics of the button that need to change, so that its appearance reflects its functionality.
This way, we can have a `.button--state-success` class, as well as a `.button--state-danger` class.

----------------------------------------

### Benefits of the Methodology

* __Modularity__: Every block is a standalone entity that has meaning on its own. That means that, by default, block styles cannot depend on other elements on a page and thus _no cascading problems_ arise.
They also provide flexibility, since they are transferable among projects, so not only they reduce the amount of code per project, but they also help us being consistent throughout all our collection.
* __Reusability__: Building on the last sentence above, it is apparent that the smallest autonomous building blocks are reusable and can help us build our own _library of blocks_. This way the amount of CSS code is being reduced and more easily maintainable. 
* __Structure__: As a result, the structure is simple and easy to understand, as is being showed by the strict naming conventions as well. 

_Source:_ [BEM Methodology](http://getbem.com/introduction/)

----------------------------------------
----------------------------------------

## CSS Guidelines

The three main goals are:
1. keep stylesheets maintainable
1. transparent code, sane & readable
1. scalable stylesheets

Coding styleguides (not visual!) should be learned, understood and implemented at all times on a project and any potential deviation should be fully justified to be accepted.

### Multiple Files

It is often the case that developers are splitting CSS across multiple files. These are concatenated during a build step.

### Table of Contents 

An up-to-date table of contents provides a team with a single, canonical catalogue of what is in a CSS project, what it does, and in what order. This section provides a project-wide view of what is being used where and why.

### 80 Characters Wide

* ability to have multiple files side by side
* comfortable line length for comments
* is not an unbreakable rule, eg. URLs

### Titling

Begin every major section of CSS with its own title in comments. It is good practice to _prefix the title with a hash(#)_, since this allows us to perform targeted searches (eg. `grep`), instead of searching just for a word that may be appearing multiple times anywhere in our file.

### Anatomy of a Ruleset

```css
[selector] {
  [property]: [value];
  [<--declaration--->]
}
```

__>CORRECT:__
```css
.foo, .foo--bar,   
.baz {  
  display: block;  
  background-color: green;  
  color: red;  
}
```


__>INCORRECT:__
```css
.foo, .foo--bar, .baz
{
	display:block;
	background-color:green;
	color:red }
```

### Indenting

Indent entire related rulesets to signal their relation to one another.
>This quasi-replication of the DOM tells developers a lot about where classes are expected to be used without them having to refer to a snippet of HTML.

### Regarding HTML

When multiple classes are related to each other, this syntax is a recommended: 
```html
<div class="[ box  box--highlight ]  [ bio  bio--long ]">
```

### Commenting

It is considered a good practice to comment anything that does not inherently make sense.

* __High Level Commenting:__ at the beginning of a CSS file, section or component, to describe relationships among projects and provide an overview of the main inheritance relationships.

* __Low Level Commenting:__ on specific declarations in a ruleset. 

### Removing Comments 

>It should go without saying that no comments should make their way into production environments—all CSS should be minified, resulting in loss of comments, before being deployed.

### Naming Conventions

* what type of thing a class does?
* where can it be used?
* what might be related to?

---> __Hyphen Delimited:__
    all strings are delimited with a hyphen

---> __BEM-like Naming:__
    for larger, more interrelated pieces of UI that require a number of classes. For more details, check this: [Naming](http://getbem.com/naming/)


    ```css
    .person { }
    .person__head { }
    .person--tall { }
    ```
## to be CONTINUED ...
_Source:_ [CSS Guidelines](https://cssguidelin.es/)

----------------------------------------
----------------------------------------

## Composition

__Composition over Inheritance Principle__ 
By combining simple independent parts, we gain more flexibility and efficiency, than connecting everything through inheritance to a common origin.

>The inheritance mindset encourages us to think about what finalized parts of UI should be called before we’ve even decided what they do, or what other, smaller parts can do for them. That’s where composition comes in.

### Layout Primitives

The term "primitive" refers to something that has its own meaning or purpose, independent of other elements and can be used as a __building block__ in a composition. 
A primitive data type (eg Boolean) has very little meaning by itself. It provides no context whatsoever about a JavaScript application is found into.
On the other hand, a data type that is __not__ primitive (eg Object), has its own meaning, since each one of those types has designated properties. That means that they provide context about the JavaScript application they are to be found into.

### _Intrinsically Responsive_

`@media` queries breakpoints are considered "manual overrides" and primitives do not depend on them.

Without primitive data types, we would have to be teaching our programming language how to perform basic operations again and again. Focusing on the meaningful task itself would require more effort and could even be problematic. 

_Source:_ [Composition](https://every-layout.dev/rudiments/composition/)