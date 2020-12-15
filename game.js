// Defined variables for questions, progress bar, score and choices
var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Listed quiz questions and answers that will be displayed during the game
let questions = [
    {
        question: 'Which of the following function of Array object removes the last element from an array and returns that element?',
        choice1: 'pop()',
        choice2: 'push()',
        choice3: 'join()',
        choice4: 'map()',
        answer: 1,
    },
    {
        question: 'Which of the following function of Array object adds and/or removes elements from an array?',
        choice1: 'toSource()',
        choice2: 'sort()',
        choice3: 'splice()',
        choice4: 'unshift()',
        answer: 3,
    },
    {
        question: 'What is the HTML tag under which one can write the JavaScript code?',
        choice1: '<javascript>',
        choice2: '<scripted>',
        choice3: '<script>',
        choice4: '<js>',
        answer: 3,
    },
    {
        question: 'Which of the following is not a reserved word in JavaScript?',
        choice1: 'interface',
        choice2: 'throws',
        choice3: 'program',
        choice4: 'short',
        answer: 3,
    },
    {
        question: 'Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?',
        choice1: 'concat()',
        choice2: 'match()',
        choice3: 'replace()',
        choice4: 'search()',
        answer: 3,
    }
]
// Defined score points per question and the maximum number of questions to display

var score_points = 100;
var max_questions = 5;

//Functions
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > max_questions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./endgame.html')
    }

    (function () {
        var sec = 60;
        function startTimer() {
            var timer = setInterval(function () {
                sec--;
                document.getElementById('timerDisplay').innerHTML = '00:' + sec;
                if (sec < 0) {
                    clearInterval(timer);
                }
            }, 1000);
        }
        document.getElementById('incorrect').addEventListener('click', function () {
            sec -= 5;
            document.getElementById('timerDisplay').innerHTML = '00:' + sec;
        });
        startTimer();
    })();

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${max_questions}`
    progressBarFull.style.width = `${(questionCounter / max_questions) * 100}%`

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
        if (!acceptingAnswers) return

        acceptingAnswers = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(score_points)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()

