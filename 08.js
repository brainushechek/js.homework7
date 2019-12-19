var arr = [1, 10, -2, 12, 3, 5]
var newArr = new Array()
arr.forEach(val => {
	if(val % 2 === 0) {
		newArr.push(val)
	}
})
console.log(newArr)