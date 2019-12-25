var arr = [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, {key: 'name', age: 18}]
function recurs(argument) {
    var currentValue = argument.shift()
    if (typeof(currentValue) === 'object' && currentValue !== null) {
        var valuesOfObject = Object.values(currentValue)
        recurs(valuesOfObject)
        valuesOfObject.shift()
    }
    if (typeof(currentValue) !== 'object' || currentValue === null) {
        console.log(currentValue)
    }
    if (argument.length) {
        recurs(argument)
    }
}

recurs(arr)