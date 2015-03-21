var util = require('util');

function User() {
}

User.prototype.loggedIn = function() {
  return true;
}

function Admin() {
}

util.inherits(Admin, User);
// e.g. this is the same as if
// Admin.prototype.prototype === User.prototype;

admin = new Admin();
console.log(admin.loggedIn());

// Output: =>
//
// true
