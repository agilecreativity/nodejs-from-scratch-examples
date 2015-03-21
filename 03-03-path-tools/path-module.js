var path = require('path');

console.log(path.normalize('/this//is/a/somthing/../././path')); //=> 'this/is/a/path'
console.log(path.join('this', 'is', '/a/', 'path'));             //=> 'this/is/a/path'
console.log(path.resolve('/this', 'is/some/path/to', '.././', 'a', 'dir')); //=> '/this/is/some/path/a/dir'
console.log(path.isAbsolute('/yes/'))              //=> true
console.log(path.isAbsolute('not/this/one/../..')) //=> false
console.log(path.relative('/this/is/a/', '/path')) //=> '../../../path'
console.log(path.dirname('/this/is/a/path.txt'));  //=> '/this/is/a'
console.log(path.basename('/this/is/a/path.txt'));  //=> 'path.txt'
console.log(path.basename('/this/is/a/path.txt', '.txt'));  //=> 'path'
console.log(path.extname('/this/is/a/path.txt'));  //=> '.txt'
console.log(path.sep); //=> '/'

// Sample use-case
console.log("this/is/a/path".split("/")); //=> ["this", "is", "a", "path"]

// Better works proper on different OS
console.log("this/is/a/path".split(path.sep)); //=> ["this", "is", "a", "path"]

console.log(path.parse("/this/is/a/path.txt"));
// Output:
// { root: '/',
//   dir: '/this/is/a',
//   base: 'path.txt',
//   ext: '.txt',
//   name: 'path' }

console.log(path.format({ dir: 'this/is', base: 'file.txt' })); // 'this/is/file.txt'
