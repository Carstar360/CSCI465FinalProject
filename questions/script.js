//Carson Lee
//Coding ideas derived from Web Dev Simplified youtube video
//https://www.youtube.com/watch?v=riDzcEQbX6k&t=994s
let questionOrder, index
var start = document.getElementById('start')
//Start the game by pressing start button
start.addEventListener('click', startGame)
var next = document.getElementById('next')
//Go to next Question, increment Question #
next.addEventListener('click', () => {
        index++
        nextQ()
})
var myContainer = document.getElementById('myQuestions')
//Start the game
//Hide the start button after pressing start, then display the first question
function startGame() {
        start.classList.add('hide')
        questionOrder = questions.sort()
        index = 0
        myContainer.classList.remove('hide')
        nextQ()
}
//Call reset which hides the current page and displays the next question
function nextQ() {
        document.body.classList.remove('correct')
        document.body.classList.remove('wrong')
        next.classList.add('hide')
        while (myAnswers.firstChild) {
                myAnswers.removeChild(myAnswers.firstChild)
        }
        showQuestion(questionOrder[index])
}


var myQuestions = document.getElementById('curQuestion')
var myAnswers = document.getElementById('myButtons')
//Display question then display each answer inside separate buttons
//If correct answer selected then change the background color to match
function showQuestion(question) {
        myQuestions.innerText = question.question
        question.answers.forEach(answer => {
                var button = document.createElement('button')
                button.innerText = answer.text
                button.classList.add('btn')
                if (answer.correct) {
                        button.dataset.correct = answer.correct
                }
                button.addEventListener('click', selectAnswer)
                myAnswers.appendChild(button)
        })
}
//Choose answer, if we reach the final question it displays a prompt asking to play again
//If not then we move onto next question and next is hidden
function selectAnswer(x) {
        var choice = x.target
        var correct = choice.dataset.correct
        curStatus(document.body, correct)
        if (8 > index + 1) {
                //Displays next button after answering
                next.classList.remove('hide')
        }
        else {
                start.innerText = 'Would you like to Play Again?'
                start.classList.remove('hide')
                index = 0
        }
}
//Removes background coloring
//If answer is correct then it changes body css to green
//If wrong it changes body css to red
//Each call resets the color scheme 
function curStatus(myVar, correct) {
        myVar.classList.remove('correct')
        myVar.classList.remove('wrong')
        if (correct) {
                myVar.classList.add('correct')
        }
        else {
                myVar.classList.add('wrong')
        }
}

//MCU Questions
var questions = [
        {
                question: 'Opponent: Steve Rogers',
                answers: [
                        { text: 'Split', correct: true },
                        { text: 'Steal', correct: false }
                ]
        },
        {
                question: 'Opponent: Tony Stark',
                answers: [
                        { text: 'Split', correct: true },
                        { text: 'Steal', correct: false },
                ]
        },
        {
                question: 'Opponent: Thanos',
                answers: [
                        { text: 'Split', correct: true },
                        { text: 'Steal', correct: false },
                ]
        },
        {
                question: 'Opponent: Deadpool',
                answers: [
                        { text: 'Split', correct: false },
                        { text: 'Steal', correct: true },
                ]
        },
        {
                question: 'Opponent: Spiderman',
                answers: [
                        { text: 'Split', correct: true },
                        { text: 'Steal', correct: false },
                ]
        },
        {
                question: 'Opponent: Shang-Chi',
                answers: [
                        { text: 'Split', correct: true },
                        { text: 'Steal', correct: false },
                ]
        },
        {
                question: 'Opponent: Rocket',
                answers: [
                        { text: 'Split', correct: false },
                        { text: 'Steal', correct: true },
                ]
        },
        {
                question: 'Opponent: Loki',
                answers: [
                        { text: 'Split', correct: false },
                        { text: 'Steal', correct: true },
                ]
        }
]
