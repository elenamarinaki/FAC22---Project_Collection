// 1st way ... DOES NOT WORK --- 
// cannot use import statement outside a module ⚠ 
// import { mkdir } from 'fs';

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// mkdir('/tmp/a/apple', { recursive: true }, (err) => {
//   console.log('i*m in the callback!');
//   if (err) throw err;
// });
// console.log('I come after the mkdir in the file!!');

// --------------------------------------------------------------------------
// 2nd way ...
const fs = require('fs');
fs.mkdir('Dogs', { recursive: true }, (err) => {
  console.log('i*m in the callback!');
  if (err) throw err;
});

console.log('I come after the mkdir in the file!!');
