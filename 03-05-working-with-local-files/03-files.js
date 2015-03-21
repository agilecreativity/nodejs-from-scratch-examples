var fs = require('fs');

var readStream = fs.createReadStream('03-files.js');

readStream.pipe(process.stdout);
