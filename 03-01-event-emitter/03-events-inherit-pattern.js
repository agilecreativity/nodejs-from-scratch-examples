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

var util = require('util');

function UserList() {
  this.list = [];
  EventEmitter.call(this);
}

// make UserList subclass of EventEmitter
util.inherits(UserList, EventEmitter);

UserList.prototype.add = function (name) {
  this.list.push(name);
  this.emit('new-user', name);
};

var list = new UserList();

list.on('new-user', function(name) {
  console.log('hello, ', name);
});

list.add('Max');
list.add('Mark');

// Output: =>
//
// hello,  Max
// hello,  Mark
