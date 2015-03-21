// just import the instance of Writable
var ws = new (require('stream').Writable)();

// local require
var fib = require('./02-readable-stream');

// control the processing of input
var count = 0;

ws._write = function (chunk, encoding, next) {
  console.log(chunk.toString());

  // control the output from the readble stream
  if (count++ < 10) next();

  // Or we can use something like the next line
  // setTimeout(next, 100);
}

fib.pipe(ws);
