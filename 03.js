var arr = [1, 2, 3, -1, -2, -3]
var newArr = new Array()
arr.forEach(val => {
	if(val > 0) {
		newArr.push(val)
	}
})
console.log(newArr)