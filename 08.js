var arr = [1, 10, -2, 12, 3, 5]
var newArr = arr.filter(val => {
	return val % 2 === 0
})
console.log(newArr)