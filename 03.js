var arr = [1, 2, 3, -1, -2, -3]
var positiveNumbers = arr.filter(function(value) {
  return value > 0
})
console.log(positiveNumbers)