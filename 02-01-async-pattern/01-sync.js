function odds(arr) {
  return arr.filter(function (n) { return n % 2; });
}

var numbers = [1,2,3,4,5,6,7,8,9];
var oddNums = odds(numbers);

// Note this is sync programming
console.log(oddNums);

// Output: =>
//
// [ 1, 3, 5, 7, 9 ]
