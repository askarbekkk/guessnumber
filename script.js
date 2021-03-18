let button = document.querySelector('.guess-submit')
let lastGuesses = document.querySelector('.previous-result')
let lastResult = document.querySelector('.last-result')
let lowOrHigh = document.querySelector('.lowOrHigh')
let guessField = document.querySelector('.guessField')

let guesses = 1 // создаем переменную, которая отвечает за кол-во попыток
let randomNumber = Math.floor(Math.random() * 100) + 1 // генеррируем число от 1 до 100
let resetButton
console.log(randomNumber)
let checkGuess = () => {
 if(guessField.value.length > 0){
     let userGuess = Number(guessField.value)
     if (guesses === 1){
         lastGuesses.textContent = 'Previous guesses:'
         lastGuesses.style.fontSize = '30px'
         lastGuesses.style.color = 'white'
     }
     lastGuesses.textContent += userGuess  + ' '
     if (userGuess === randomNumber){ // если угадали число
         lastResult.textContent = 'Поздравляем, ты угадал число! Купи себе  мак...'
         lastResult.style.backgroundColor = 'green'
         lastResult.style.fontSize = '25px'
         lowOrHigh.textContent = ''
         setGameOver()
     } else if (guesses === 10){ // если кол-во попыток больше 10
         lastResult.textContent = 'Игра окончена! Превышено количество попыток'
         button.disabled = true
         setGameOver()
     }else { // если не угадали число
         lastResult.textContent = 'Неправильно -_-'
         lastResult.style.backgroundColor = 'red'
         lastResult.style.color = 'yellow'
         lastResult.style.fontSize = '30px'
         if (userGuess - randomNumber <= 5 && userGuess - randomNumber  > -5){ // если мы близки к загадонному числу
             lowOrHigh.textContent = 'НО, Вы близко!0_о'
             lowOrHigh.style.color = 'green'
             lowOrHigh.style.fontSize = '25px'
         } else if (userGuess > 100){ // если число которое мы ввели, больше 100
             lowOrHigh.textContent = 'Вы ввели число больше 100, шо за логика!'
             lowOrHigh.style.fontSize = '25px'
             lowOrHigh.style.backgroundColor = 'yellow'
         }else if (userGuess < 0){// если число которое мы ввели, меньше 0
             lowOrHigh.textContent = 'Вы ввели число меньше 0, ...мдаа, слов нет!'
             lowOrHigh.style.fontSize = '25px'
             lowOrHigh.style.backgroundColor = 'red'
         }else {
             lowOrHigh.textContent = 'Невтемщик... иди, гуляй! -_- '
             lowOrHigh.style.color = 'red'
             lowOrHigh.style.fontSize = '25px'
         }
     }
     guesses++
 }
}

let  setGameOver = () => {
    guessField.disabled = true // выключаем инпут
    button.disabled = true // выключаем кнопку
    resetButton = document.createElement('button') // создаем переменную, в которой создаем новую кнопку
    resetButton.textContent = 'Начать игру заново'// в значение этой кнопки записываем Начать игру заново
    resetButton.style.border= 'none'// в значение этой кнопки записываем Начать игру заново
    resetButton.style.borderRadius= '10px'// в значение этой кнопки записываем Начать игру заново
    resetButton.style.backgroundColor= 'green'// в значение этой кнопки записываем Начать игру заново
    resetButton.style.color= 'white'// в значение этой кнопки записываем Начать игру заново
    resetButton.style.fontSize= '20px'// в значение этой кнопки записываем Начать игру заново
    resetButton.style.padding= '20px'// в значение этой кнопки записываем Начать игру заново
    document.body.appendChild(resetButton)  // помещаем данную кнопку  в body через appendChild
    resetButton.addEventListener('click', resetGame)   // навешиваем на кнопку события клика, при котором выполнится функция



}

let resetGame = () => {
    guesses = 1
    lastResult.textContent = ''
    lastGuesses.textContent = ''
    lowOrHigh.textContent = ''
    guessField.disabled = false
    button.disabled = false
    lastResult.style.backgroundColor = 'white'
    resetButton.parentNode.removeChild(resetButton)

}

button.addEventListener('click', () => {
    checkGuess()
    guessField.value = ''
})