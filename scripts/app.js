const puzzleEl = document.querySelector('#puzzle')
const messageEl = document.querySelector('#message')
let game1 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
    
})

const render = () =>{
    puzzleEl.innerHTML = ''
    messageEl.textContent = game1.statusMessage

    puzzleEl.innerHTML = game1.puzzle.split('').map((char)=>{
        return  `<span>${char}</span>`
    }).join('')    
}

const startGame = async () =>{
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle,5)
    render()
}

document.querySelector('#reset').addEventListener('click',startGame)

startGame()



