class Hangman{
    constructor(word, guesses){
        this.word = word
        this.characters = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle(){
        return this.characters.map((char) => {
            if (char !== ' ' && !this.guessedLetters.includes(char))
                return '*'
            else
                return char
        }).join('')
    }
    makeGuess(guess){
        if (this.status === 'playing') {
            guess = guess.toLowerCase()
            const isUnique = !this.guessedLetters.includes(guess)
            const isBadGuess = !this.characters.includes(guess)
            if (isUnique) {
                this.guessedLetters.push(guess)
                isBadGuess && --this.guesses
            }

            this.calculateStatus()
        }
    }
    calculateStatus(){
        const finished = this.characters.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.guesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        } 
    }
    get statusMessage(){
        switch (this.status) {
            case 'playing':
                return `Guesses left: ${this.guesses}`
            case 'failed':
                return `Nice try! The word was "${this.word}".`
            case 'finished':
                return `Great work! you guessed the word.`
        }
    }
}