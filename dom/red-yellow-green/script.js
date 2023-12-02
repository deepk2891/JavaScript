let redButton = document.getElementById('red')
let yellowButton = document.querySelector('#yellow')
let greenButton = document.querySelector('#green')

// redButton.onclick = () => { console.log('Red') }
// yellowButton.onclick = () => { console.log('Yellow') }
// greenButton.onclick = () => { console.log('Green') }

const squares = document.querySelectorAll('.colorSquare')

// forEach
const timesClicked = { 'red': 0,'yellow': 0,'green': 0 }

squares.forEach((square) => {
    square.onclick = () => {
        timesClicked[ square.value ] += 1
        square.innerText = timesClicked[ square.value ]
    }
})


function clearScores () {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach((square) => {
        square.innerText = 0
    })
}

const clearScoreBtn = document.querySelector('#clearScore')
clearScoreBtn.onclick = () => clearScores() 
