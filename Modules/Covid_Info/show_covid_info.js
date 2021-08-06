let fs = require('fs')

fs.readFile("./covid_info.json", (err, data) => {
    if(err)     console.log(err)
    else {
        const DATA = JSON.parse(data)
        const GLOBAL = DATA.Global
        const allCountries = DATA.Countries
        const MYANMAR = allCountries.find( c => c.Country === "Myanmar")

        console.log("Global:", GLOBAL, "Myanmar:", MYANMAR)
    }
})