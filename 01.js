var arr = [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, {key: 'name', age: 18}]
arr.forEach( function elementOutput(val) {
    if (typeof(val) === 'object'){
        Object.values(val).forEach((val) => elementOutput(val))
    } else console.log(val)
})