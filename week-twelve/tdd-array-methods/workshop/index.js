// function map(array) {
//   return array;
// }

// const { result } = require('cypress/types/lodash');

// function map(array, fn) {
//   const first = array[0];
//   const result = fn(first);
//   return [result];
// }

// function map(array, fn) {
//   const resultArr = [];

//   for (let i = 0; i < array.length; i++) {
//     resultArr.push(fn(array[i]));
//   }

//   return resultArr;
// }

function map(array, fn) {
  const resultArr = [];

  for (let i = 0; i < array.length; i++) {
    resultArr.push(fn(array[i], i));
  }

  return resultArr;
}
