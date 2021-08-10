fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => {
      const GLOBAL = data.Global
      const COUNTRIES = data.Countries
      const MYANMAR = COUNTRIES.find( c => c.Country === "Myanmar" )

      console.log("Global:", GLOBAL, "Myanmar:", MYANMAR)
  })


async function covidInfo() {
    const RESPONSE = await fetch('https://api.covid19api.com/summary')
    const DATA = await RESPONSE.json()

    const GLOBAL = DATA.Global
    const COUNTRIES = DATA.Countries
    const MYANMAR = COUNTRIES.find( c => c.Country === "Myanmar" )

    console.log("Global:", GLOBAL, "Myanmar:", MYANMAR)
}