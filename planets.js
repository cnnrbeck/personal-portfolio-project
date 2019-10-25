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
let climate = document.createElement('p')
let population = document.createElement('p')

planetDiv.id = "flip-card-front"
planetInfo.id = "flip-card-back"
flipInner.id = "flip-card-inner"
flipCard.id = "flip-card"

pic.setAttribute('class', 'picDivs')
let charNum = getCharNum(planet.url)
console.log(charNum)

planetDiv.appendChild(pic)
planetDiv.appendChild(name)
planetInfo.appendChild(climate)
planetInfo.appendChild(population)


pic.src = `https://starwars-visualguide.com/assets/img/planets/${charNum}.jpg`

pic.onerror = function() { pic.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"}
name.textContent = planet.name
climate.textContent = "climate: " + planet.climate
population.textContent = "population: " + planet.population

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
