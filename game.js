var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What day is it?',
        choice1: 'Sunday',
        choice2: 'Monday',
        choice3: 'Friday',
        choice4: 'Saturday',
        answer: 1,
    },
    {
        question: 'What month is it?',
        choice1: 'December',
        choice2: 'April',
        choice3: 'March',
        choice4: 'July',
        answer: 1,
    },
    {
        question: 'What year is it?',
        choice1: '2015',
        choice2: '2020',
        choice3: '2016',
        choice4: '2017',
        answer: 2,
    },
    {
        question: 'What time of the day is it?',
        choice1: 'Midnight',
        choice2: 'Morning',
        choice3: 'Dawn',
        choice4: 'Evening',
        answer: 4,
    },
    {
        question: 'What holiday is next?',
        choice1: 'Halloween',
        choice2: 'NYE',
        choice3: 'Christmas',
        choice4: 'Thanksgiving',
        answer: 3,
    }
]

var SCORE_POINTS = 100
var MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./endgame.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

