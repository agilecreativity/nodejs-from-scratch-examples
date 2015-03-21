process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('chunk:' + chunk.toString());
});

// when the stream end
process.stdin.on('end', function () {
  process.stdout.write('end');
});

// Note: to run this just try something like
// $cat 01-standard.js | node 01-standard.js
