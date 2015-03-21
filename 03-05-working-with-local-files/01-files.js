var fs = require('fs');

fs.readFile('01-files.js', function(err, data) {
  console.log(data.toString());
});

fs.writeFile('text.txt', 'this is a content', function (err) {
  if (err) throw err;
  console.log(fs.readFileSync('text.txt').toString());
});
