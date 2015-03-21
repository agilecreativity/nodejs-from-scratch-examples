// private variable
var items = [];

function addItem(name, price) {
  items.push({
    name: name,
    price: price
  });
}

// other ways to export a function
exports.total = function total() {
  return items.reduce( function (a, b) {
    return a + b.price;
  }, 0);
}

// or the normal way to export the function
exports.addItem = addItem;
