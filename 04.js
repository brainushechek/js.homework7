function getDigitsSum(digit) {
	var sum = digit.toString().split('').reduce((prev, curr) => +prev + +curr)
	return sum 
}