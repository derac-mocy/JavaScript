let fs = require('fs')
let https = require('https')

https.get("https://api.covid19api.com/summary", res => {
    let result = ""
    res.on('data', chunk => {
        result += chunk

        return result
    })

    res.on('done', () => {
        fs.writeFile("./covid_info.json", result, () => {
            console.log("Save File: Success")
        })
    })
})