/* eslint-disable no-undef */
// testing map()

test('map() should return an array with the same number of elements', () => {
  const result = map([1], () => {});
  equal(result.length, 1);
  console.log('--------------------------');
  const result1 = map([1, 2], () => {});
  equal(result1.length, 2);
  console.log('--------------------------');
  const result2 = map([1, 2], () => {});
  equal(result2.length, 3);
});

test('map() should transform each element of the array using the fn argument', () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
  equal(result[0], 1);
  console.log('--------------------------');
  const result1 = map([1, 2], (x) => x + 2);
  equal(result1[0], 3);
  equal(result1[1], 3);
});

test('map() should work for every array element', () => {
  const result = map([1, 2, 3], (x) => x + 1);
  equal(result[0], 2);
  equal(result[1], 3);
  equal(result[2], 4);
  const result1 = map([1, 2, 3], (x) => x + 1);
  equal(result1[0], 3);
  equal(result1[1], 4);
  equal(result1[2], 5);
});

test('map() should pass the index of the element', () => {
  const result = map(['zero', 'one'], (elem, idx) => `${elem} - ${idx}`);
  equal(result[0], 'zero - 0');
  equal(result[1], 'one - 1');
});
