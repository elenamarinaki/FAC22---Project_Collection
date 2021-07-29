# Set Operations

## Description 1

Implement a general-purpose `setUnion` function that returns the union of two sets.


**Example:**
------------------------------------------
```javascript
const union = setUnion(
  new Set([1, 2, 3]),
  new Set([2, 3, 4])
);
[union.has(1), union.has(2), union.has(3), union.has(4)];
```

_expected result_ => `[true, true, true, true]`



## Description 2

Implement a general-purpose `setIntersection` function that returns the intersection of two sets.


**Example:**
------------------------------------------
```javascript
const intersection = setIntersection(
  new Set([1, 2, 3]),
  new Set([2, 3, 4])
);
[
  intersection.has(1),
  intersection.has(2),
  intersection.has(3),
  intersection.has(4)
];
```

_expected result_ => `[false, true, true, false]`



## Description 3



![Good Luck](https://media.giphy.com/media/L3uegwiKeAY6GG1UmI/giphy.gif)