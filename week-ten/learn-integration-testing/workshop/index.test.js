// UNIT TESTING
test('Adding numbers', () => {
  equal(calculate(2, '+', 3), 5);
  equal(calculate(2.3, '+', 3.6), 5.9);
  notEqual(calculate(2, '+', 3), 7);
});

test('Subtracting numbers', () => {
  equal(calculate(5, '-', 1), 4);
  equal(calculate(5, '-', 7), -2);
  equal(calculate(9.4, '-', 3.2), 6.2);
  notEqual(calculate(2, '-', 3), -1);
  notEqual(calculate(6, '-', 3), 6);
});

test('Adding string numbers', () => {
  equal(calculate('2', '+', '3'), 5);
});

// INTEGRATION TESTING
test('page updating', () => {
  const A = document.querySelector('input[name="a"]');
  const B = document.querySelector('input[name="b"]');
  const SIGN = document.querySelector('select');
  const SUBMIT = document.querySelector('button[type="submit"]');
  const RESULT = document.querySelector('#result');

  A.value = 5;
  B.value = 5;
  SIGN.value = '+';
  SUBMIT.click();
  equal(RESULT.textContent, '10');
  RESULT.textContent = '';

  A.value = 15;
  B.value = 5;
  SIGN.value = '*';
  SUBMIT.click();
  equal(RESULT.textContent, '75');
  RESULT.textContent = '';
});
