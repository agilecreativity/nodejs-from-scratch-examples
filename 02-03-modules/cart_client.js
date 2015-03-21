// require a module using the relative path
var cart = require('./cart');

// console.log(cart);
cart.addItem('first', 10);
cart.addItem('second', 5);

console.log('Total:', cart.total());

// Output: =>
// Total: 15
