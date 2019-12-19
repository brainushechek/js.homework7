var numb = 1234567892 //any other number;

function sum() {
    numb = numb.toString().split('').reduce((prev, curr) => +prev + +curr)
    if (numb < 9) {
        return console.log(numb)
    }
    sum()
} 