// Async programming
function oddsSync(arr) {
  return arr.filter(function (n) { return n % 2; });
}

// var numbers = [1,2,3,4,5,6,7,8,9];
// var oddNums = oddsSync(numbers);

// Note this is sync programming
// console.log(oddNums);

// Async code

function odds(arr, callback) {
  var oddNums = arr.filter(function (n) { return n % 2; });
  var err = arr.indexOf(3) > -1 ? new Error('No 3s Allowed'): null;

  // Simulate the blocking call
  setTimeout(function () {
     callback(err, oddNums);
  }, 1000);
}

// Main start here
// numbers = [1,2,3,4,5,6,7,8,9]; // note with 3 will throw error
numbers = [1,2,4,5,6,7,8,9];
odds(numbers, function(err, data) {
  if (err) throw err;
  console.log('data:', data);
});

// Note: this will run immediately
console.log("This comes after the odds() call..");

// Output: =>
//
// This comes after the odds() call..
// data: [ 1, 5, 7, 9 ]
