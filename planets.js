import { planets } from './assets/planets.js'



    let mainArea = document.querySelector('main')

    planets.forEach(function(planet)
    {
    let planetDiv = document.createElement('div')
    let planetInfo = document.createElement('div')
    let flipInner = document.createElement('div')
    let flipCard = document.createElement('div')
    let pic = document.createElement('img')
    let name = document.createElement('h1')
    let climate = document.createElement('h2')
    let population = document.createElement('h2')
    let yearLength = document.createElement('h2')
    let dayLength = document.createElement('h2')
    let diameter = document.createElement('h2')

    planetDiv.className = "flip-card-front"
    planetInfo.className = "flip-card-back"
    flipInner.className = "flip-card-inner"
    flipCard.className = "flip-card"

    pic.setAttribute('class', 'picDivs')
    let charNum = getCharNum(planet.url)
    console.log(charNum)

    planetDiv.appendChild(pic)
    planetDiv.appendChild(name)
    planetInfo.appendChild(climate)
    planetInfo.appendChild(population)
    planetInfo.appendChild(dayLength)
    planetInfo.appendChild(yearLength)
    planetInfo.appendChild(diameter)


    pic.src = `https://starwars-visualguide.com/assets/img/planets/${charNum}.jpg`

    pic.onerror = function() { pic.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"}
    name.textContent = planet.name
    climate.textContent = "climate: " + planet.climate
    population.textContent = "population: " + planet.population
    dayLength.textContent = "Length of Day: " + planet.rotation_period + " hrs"
    yearLength.textContent = "Length of Year: " + planet.orbital_period + " days"
    diameter.textContent = "Diameter: " + planet.diameter

    console.log(planet)
    mainArea.appendChild(flipCard)
    flipCard.appendChild(flipInner)
    flipInner.appendChild(planetDiv)
    flipInner.appendChild(planetInfo)
    })

function getCharNum(charURL){
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1)
    {
        return charID.slice(1,2)
    }
    else 
    {
        return charID
    }
}
