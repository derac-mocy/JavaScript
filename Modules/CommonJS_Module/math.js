const PI = 3.14

function add(a, b) {
    return a + b
}

function div(x, y) {
    if(y === 0) console.log("Can't divided by zero")
    else return x / y
}

module.exports = {PI, add, div}
