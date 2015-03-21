var trans = require('stream').Transform();

// similar to writeStream
trans._transform = function(chunk, enc, done) {
  // create a shift cypher
  this.push(chunk.toString().split('').map(function(char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }).join(''));
  done();
};

process.stdin.pipe(trans).pipe(process.stdout);

// To run this:
// $echo "nodejs is cool" | node 02-transform-stream.js
// result: =>
// opefkt!jt!dppm
