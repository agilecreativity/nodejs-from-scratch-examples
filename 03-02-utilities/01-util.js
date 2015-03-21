var util = require('util');
var log1 = util.debuglog('fulcrum');
var log2 = util.debuglog('foobar');

log1('This is a message from a log 1');
log2('This is a message from a log 2');

// Note: for this to work we need to do something like
// $NODE_DEBUG=fulcrum,foobar node 01-util.js
// Output: =>
//
// FULCRUM 85881: This is a message from a log 1
// FOOBAR 85881: This is a message from a log 2
