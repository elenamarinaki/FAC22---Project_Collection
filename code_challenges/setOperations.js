function setUnion(set1, set2) {
  return new Set([...set1, ...set2]);
}

const union = setUnion(new Set([1, 2, 3]), new Set([2, 3, 4]));
[union.has(1), union.has(2), union.has(3), union.has(4)];

// [true, true, true, true]

// -----------------------------------------

function setIntersection(set1, set2) {
  return new Set(Array.from(set1).filter((n) => set2.has(n)));
}

const intersection = setIntersection(new Set([1, 2, 3]), new Set([2, 3, 4]));
[
  intersection.has(1),
  intersection.has(2),
  intersection.has(3),
  intersection.has(4),
];

// [false, true, true, false]

// -----------------------------------------

function setDifference(set1, set2) {
  return new Set(Array.from(set1).filter((n) => !set2.has(n)));
}

const difference = setDifference(new Set([1, 2, 3]), new Set([2, 3, 4]));
[difference.has(1), difference.has(2), difference.has(3), difference.has(4)];

//   [true, false, false, false]
