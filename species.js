import { species } from './assets/species.js'

let mainArea = document.querySelector('main')

species.forEach(function(species)
{
let speciesDiv = document.createElement('div')
let name = document.createElement('h1')
let language = document.createElement('h3')
let lifespan = document.createElement('h3')
let classification = document.createElement('p')

speciesDiv.id = "speciesDiv"

let pic = document.createElement('img')

pic.setAttribute('class', 'picDivs')
let charNum = getCharNum(species.url)

pic.src = `https://starwars-visualguide.com/assets/img/species/${charNum}.jpg`

speciesDiv.appendChild(pic)
speciesDiv.appendChild(name)
speciesDiv.appendChild(language)
speciesDiv.appendChild(lifespan)
speciesDiv.appendChild(classification)

name.textContent = "Species: " + species.name
language.textContent = "Language: " + species.language
lifespan.textContent = "Avg Lifespan (years): " + species.average_lifespan
classification.innerText = "Classification: " + species.classification


mainArea.appendChild(speciesDiv)
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