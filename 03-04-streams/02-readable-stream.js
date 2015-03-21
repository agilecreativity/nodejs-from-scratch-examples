var stream = require('stream');
var a = 0;
var b = 1;
// 0, 1, 1, 2, 3, 5, 8, ..
var rs = new stream.Readable();

// Note: infinite producer here!
rs._read = function () {
  var c = a + b;
  a = b;
  b = c;
  rs.push('' + c);
};

module.exports = rs;
