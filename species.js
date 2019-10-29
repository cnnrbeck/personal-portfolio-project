import { species } from './assets/species.js'

let mainArea = document.querySelector('main')
let mainHeader = document.querySelector('mainHeader')

species.forEach(function(race)
{
let speciesDiv = document.createElement('div')
let name = document.createElement('h1')
let language = document.createElement('h3')
let lifespan = document.createElement('h3')
let classification = document.createElement('p')

speciesDiv.id = "speciesDiv"

let pic = document.createElement('img')

pic.setAttribute('class', 'picDivs')
let charNum = getCharNum(race.url)

pic.src = `https://starwars-visualguide.com/assets/img/species/${charNum}.jpg`

speciesDiv.appendChild(pic)
speciesDiv.appendChild(name)
speciesDiv.appendChild(language)
speciesDiv.appendChild(lifespan)
speciesDiv.appendChild(classification)

name.textContent = "Species: " + race.name
language.textContent = "Language: " + race.language
lifespan.textContent = "Avg Lifespan (years): " + race.average_lifespan
classification.textContent = "Classification: " + race.classification


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

const mammals = species.filter(race => race.classification === 'mammal')
const reptiles = species.filter(race => race.classification === 'reptile')
const amphibians = species.filter(race => race.classification === 'amphibian')
const unknown = species.filter(race => race.classification === 'unknown')


const allDivs = Array.from(mainArea.querySelectorAll('div'))

console.log(allDivs)

let mammalButton = document.createElement('button')
mammalButton.textContent = "Mammals"
mammalButton.addEventListener('click', () => {
    let i = 0;
    mammals.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
            return element.lastChild.textContent === "Classification: " + elt.classification          
        })
        matchedDiv[i].setAttribute("style","display: visible;")
        i++
    }, allDivs[10].setAttribute("style", "display: visible;"))
    i = 0
    reptiles.forEach(elt => {
       let matchedDiv = allDivs.filter(element => {
            return element.lastChild.textContent === "Classification: " + elt.classification    
        })
        matchedDiv[i].setAttribute("style","display: none;")
        i++
    })
    i = 0
    amphibians.forEach(elt => {
       let matchedDiv = allDivs.filter(element => {
            return element.lastChild.textContent === "Classification: " + elt.classification    
        })
        matchedDiv[i].setAttribute("style","display: none;")
        i++
    })
    i = 0
    unknown.forEach(elt => {
       let matchedDiv = allDivs.filter(element => {
            return element.lastChild.textContent === "Classification: " + elt.classification    
        })
        matchedDiv[i].setAttribute("style","display: none;")
        i++
    })
    allDivs[0].setAttribute("style","display: none;")
    allDivs[23].setAttribute("style","display: none;")
    allDivs[25].setAttribute("style","display: none;")
    allDivs[34].setAttribute("style","display: none;")
    allDivs[36].setAttribute("style","display: none;")
})

let nonMammalButton = document.createElement('button')
nonMammalButton.textContent = "Non-Mammals"
nonMammalButton.addEventListener('click', () => {
    let i = 0;
    mammals.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
            return element.lastChild.textContent === "Classification: " + elt.classification
           
        })
        matchedDiv[i].setAttribute("style","display: none;")
        i++
    }, allDivs[10].setAttribute("style", "display: none;"))
    reptiles.forEach(elt => {
        let i = 0
        let matchedDiv = allDivs.filter(element => {
            return element.lastChild.textContent === "Classification: " + elt.classification
           
        })
        matchedDiv[i].setAttribute("style","display: visible;")
        i++
    })
    i = 0
    amphibians.forEach(elt => {
       let matchedDiv = allDivs.filter(element => {
            return element.lastChild.textContent === "Classification: " + elt.classification    
        })
        matchedDiv[i].setAttribute("style","display: visible;")
        i++
    })
    i = 0
    unknown.forEach(elt => {
       let matchedDiv = allDivs.filter(element => {
            return element.lastChild.textContent === "Classification: " + elt.classification    
        })
        matchedDiv[i].setAttribute("style","display: visible;")
        i++
    })
    allDivs[0].setAttribute("style","display: visible;")
    allDivs[23].setAttribute("style","display: visible;")
    allDivs[25].setAttribute("style","display: visible;")
    allDivs[34].setAttribute("style","display: visible;")
    allDivs[36].setAttribute("style","display: visible;")
})



// let reptileButton = document.createElement('button')
// reptileButton.textContent = "Reptiles"
// reptileButton.addEventListener('click', () => {
//     reptileButton.forEach(elt => {
//         elt.setAttribute("style","visibility: visible")
//     })
// })

mainHeader.appendChild(mammalButton)
mainHeader.appendChild(nonMammalButton)