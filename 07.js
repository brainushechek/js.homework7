function getDevisors(val) {
	var arrayOfDivisors = new Array(), i = 1
	while (i <= val) {
 		if (val % i == 0) {
 			arrayOfDivisors.push(i)
		}
		i++
	}
	return arrayOfDivisors
}