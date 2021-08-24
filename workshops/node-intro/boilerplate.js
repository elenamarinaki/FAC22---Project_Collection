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
// Asynchronous version
const fs = require('fs');
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//   console.log('i*m in the callback!');
//   if (err) throw err;
// });

// console.log('I come after the mkdir in the file!!');

// Synchronous version

// fs.mkdirSync('Cats');

// console.log('I come after the mkdir in the file!!');

// --------------------------------------------------------------------------
// BOILERPLATE
// --------------------------------------------------------------------------

const folderName = process.argv[2] || 'Project';
try {
  fs.mkdirSync(folderName);

//   the fs.writeFileSync needs 2nd argument!!!
  fs.writeFileSync(`${folderName}/index.html`, 'html');
  fs.writeFileSync(`${folderName}/style.css`, 'css');
  fs.writeFileSync(`${folderName}/script.js`, 'js');
} catch (e) {
  console.log('something went wrong');
  console.log(e);
}
