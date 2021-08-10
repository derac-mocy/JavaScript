function add1000() {
    let result = 0

    for(let i = 1; i <= 1000; i++) {
        result++
    }
    return result
}

async function add1000later() {
    let task = await add1000()
    console.log(result)
}

console.log("Some Processes")
add1000later()
console.log("More Processes")