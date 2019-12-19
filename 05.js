var arr = [1, 10, -2, 12, 3, 5]
var newArr = new Array()
arr.forEach(val => {
	if(val > 0 && val < 10) {
		newArr.push(val)
	}
}
)
console.log(newArr)