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

