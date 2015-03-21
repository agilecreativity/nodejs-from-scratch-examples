var stream = require('stream');
var a = 0;
var b = 1;

var rs = new stream.Readable();

// Note: infinite producer here!
rs._read = function () {
  // Note: this will prevent the code from running infinitely!
  if (b < 144) {
    var c = a + b;
    a = b;
    b = c;
    rs.push('' + c + '\n');
  }
};

module.exports = rs;
