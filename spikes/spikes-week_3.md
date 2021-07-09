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
