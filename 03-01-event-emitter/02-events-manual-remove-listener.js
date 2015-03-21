var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

ee.on('someEvent', function (data) {
  console.log('someEvent:', data);
});

// Note: this will happen only once
ee.once('someEvent', function() {
  console.log("only once");
});

function callback() {
  console.log('manual once');
  // remove itself from the listener
  ee.removeListener('someEvent', callback);
}

ee.on('someEvent', callback);
ee.emit('someEvent', { option: true });
ee.emit('someEvent', { option: false });

// Output: =>
//
// someEvent: { option: true }
// only once
// manual once
// someEvent: { option: false }
