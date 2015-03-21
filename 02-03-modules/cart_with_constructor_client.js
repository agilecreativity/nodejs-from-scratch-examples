Cart = require('./cart_with_constructor')

c = new Cart();
d = new Cart();
c.addItem('first', 5);
c.addItem('second', 10);

d.addItem('third', 15);
d.addItem('four', 20);

console.log('Total (c):', c.total());
console.log('Total (d):', d.total());

// Output: =>
//
// Total (c): 15
// Total (d): 35
