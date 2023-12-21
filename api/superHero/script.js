// https://superheroapi.com/api/access-token/character-id/

const SUPERHERO_TOKEN = '122108651366147515'
const BASE_URL = `https://superheroapi.com/api.php/${ SUPERHERO_TOKEN }`

const newHeroButton = document.getElementById("newHeroButton")
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

const getSuperHero = (id,name) => {
    // name : 👉 base_url/search/batman
    // json.results[0].image.url
    // id : 👉 base_url/id
    // json.image.url

    fetch(`${ BASE_URL }/${ id }`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            // const name = `<h2>${ json.name }</h2>`
            // const intelligence = `<p>intelligence : ${ json.powerstats.intelligence }</p>`
            // const combat = `<p>combat : ${ json.powerstats.combat }</p>`
            // const durability = `<p>durability : ${ json.powerstats.durability }</p>`
            // const power = `<p>power : ${ json.powerstats.power }</p>`
            // const speed = `<p>speed : ${ json.powerstats.speed }</p>`
            // const strength = `<p>strength : ${ json.powerstats.strength }</p>`
            // heroImageDiv.innerHTML = `${ name }<img src="${ json.image.url }" height="200" width="200"/>${ intelligence }${ combat }${ durability }${ power }${ speed }${ strength }`
            const superHero = json
            showHeroInfo(superHero)
        })
}

// const statToEmoji = {
//     intelligence: '🧠',
//     strength: '💪',
//     speed: '⚡',
//     durability: '🏋️‍♂️',
//     power: '📊',
//     combat: '⚔️',
// }

const showHeroInfo = (character) => {
    // const name = `<h2>${ character.name }</h2>`
    // const img = `<img src="${ character.image.url }" height=200 width=200/>`
    // const stats = Object.keys(character.powerstats).map(stat => {
    //     return `<p>${ statToEmoji[ stat ] } ${ stat.toUpperCase() } : ${ character.powerstats[ stat ] }</p>`
    // }).join(' ')
    // heroImageDiv.innerHTML = `${ name }${ img }${ stats }`

    const name = `<h2>${ character.name.toUpperCase() }</h2>`;
    const intelligence = `<p>intelligence: ${ character.powerstats.intelligence }</p>`;
    const combat = `<p>combat: ${ character.powerstats.combat }</p>`;
    const durability = `<p>durability: ${ character.powerstats.durability }</p>`;
    const power = `<p>power: ${ character.powerstats.power }</p>`;
    const speed = `<p>speed: ${ character.powerstats.speed }</p>`;
    const strength = `<p>strength: ${ character.powerstats.strength }</p>`;
    heroImageDiv.innerHTML = `${ name }<img src="${ character.image.url }" height="200" width="200"/>${ intelligence.toUpperCase() }${ combat.toUpperCase() }${ durability.toUpperCase() }${ power.toUpperCase() }${ speed.toUpperCase() }${ strength.toUpperCase() }`;
}

const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
    searchInput.value = ''

    fetch(`${ BASE_URL }/search/${ name }`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[ 0 ]
            console.log(hero)
            // const name = `<h2>${ hero.name }</h2>`
            // const intelligence = `<p>intelligence : ${ hero.powerstats.intelligence }</p>`
            // const combat = `<p>combat : ${ hero.powerstats.combat }</p>`
            // const durability = `<p>durability : ${ hero.powerstats.durability }</p>`
            // const power = `<p>power : ${ hero.powerstats.power }</p>`
            // const speed = `<p>speed : ${ hero.powerstats.speed }</p>`
            // const strength = `<p>strength : ${ hero.powerstats.strength }</p>`
            // heroImageDiv.innerHTML = `${ name } <img src = "${ hero.image.url }" height = "200" width = "200" />${ intelligence }${ combat }${ durability }${ power }${ speed }${ strength }`
            showHeroInfo(hero)
        })
}

const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}

newHeroButton.onclick = () => getSuperHero(randomHero())

newHeroButton.oclick = () => { getSuperHero(randomHero()) }

searchButton.onclick = () => { getSearchSuperHero(searchInput.value) }