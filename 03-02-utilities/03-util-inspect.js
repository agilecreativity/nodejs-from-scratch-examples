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

// very verbose
console.log(util.inspect(util, { colors: true }));
// console.log(util.inspect(util));

// Output:
//
/**
[object Object] : {"name":"Andrew","interests":["javascript","books"]}
{ format: [Function],
  deprecate: [Function],
  debuglog: [Function],
  inspect:
   { [Function: inspect]
     colors:
      { bold: [Object],
        italic: [Object],
        underline: [Object],
        inverse: [Object],
        white: [Object],
        grey: [Object],
        black: [Object],
        blue: [Object],
        cyan: [Object],
        green: [Object],
        magenta: [Object],
        red: [Object],
        yellow: [Object] },
     styles:
      { special: 'cyan',
        number: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        symbol: 'green',
        date: 'magenta',
        regexp: 'red' } },
  isArray: [Function: isArray],
  isBoolean: [Function: isBoolean],
  isNull: [Function: isNull],
  isNullOrUndefined: [Function: isNullOrUndefined],
  isNumber: [Function: isNumber],
  isString: [Function: isString],
  isSymbol: [Function: isSymbol],
  isUndefined: [Function: isUndefined],
  isRegExp: [Function: isRegExp],
  isObject: [Function: isObject],
  isDate: [Function: isDate],
  isError: [Function: isError],
  isFunction: [Function: isFunction],
  isPrimitive: [Function: isPrimitive],
  isBuffer: [Function: isBuffer],
  log: [Function],
  inherits: [Function],
  _extend: [Function],
  p: [Function],
  exec: [Function],
  print: [Function],
  puts: [Function],
  debug: [Function],
  error: [Function],
  pump: [Function],
  _errnoException: [Function] }
**/
