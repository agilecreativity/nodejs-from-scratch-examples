// file: 01-util.js
var util = require('util');
var log1 = util.debuglog('fulcrum');
var log2 = util.debuglog('foobar');

log1('This is a message from a log 1');
log2('This is a message from a log 2');


var person = {
  name: 'Andrew',
  interests: ['javascript', 'books'],
};

// string and json
console.log(util.format('%s : %j', person, person));

// Output:
//
// [object Object] : {"name":"Andrew","interests":["javascript","books"]}
