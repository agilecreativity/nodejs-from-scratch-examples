var stream = require('stream');

var a = 0;
var b = 1;

// 0, 1, 1, 2, 3, 5, 8, ..

var rs = new stream.Readable();

rs._read = function () {
  // upper limit
  if (b < 144) {
    setTimeout(function() {

      var c = a + b;

      a = b;
      b = c;

      rs.push('' + c + '\n'); // make this string
    }, 100);
  } else {
    // stop condition for now
    this.push(null);
  }
};

rs.pipe(process.stdout);
process.stdout.on('error', process.exit);
