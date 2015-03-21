var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

ee.on('someEvent', function (data) {
  console.log('someEvent:', data);
});

// Note: this will happen only once
ee.once('someEvent', function() {
  console.log("only once");
});

ee.emit('someEvent', { option: true });
ee.emit('someEvent', { option: false });

// Output: =>
// someEvent: { option: true }
// only once
// someEvent: { option: false }
