function add1000() {
    let result = 0

    for(let i = 1; i <= 1000; i++) {
        result++
    }
    return result
}

let pending = function() {
    return new Promise( (resolve, reject) => {
        let task = add10000()

        if(task) {
            setTimeout(() => {
                resolve(task)
            }, 1000)
        } else {
            reject(new Error("Whoops!"))
        }
    }) 
}

console.log("Some Processes")
pending()
    .then( result => console.log(result))
    .catch( err => alert(err))
console.log("More Processes")