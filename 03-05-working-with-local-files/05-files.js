var fs = require('fs');

// var readStream = fs.createReadStream('03-files.js');
// readStream.pipe(process.stdout);

var writeStream = fs.createWriteStream('04-fib.txt');

var fib = require('./04-fib');

fib.pipe(writeStream);
