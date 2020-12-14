//Declare the variables that will be used for options, questions and scorecard.
alert("Press OK to get started!");

var option1 = document.getElementById('option1');
var option2 = document.getElementById('option3');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var submitAnswer = document.getElementById('submitAnswer');
var container = document.getElementById('container');
var scoreCard = document.getElementById('scoreCard');
var question = document.getElementById('question');

let currentQuestion = {};
let acceptedAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = 
    ([
    [
        question = 'what day is it?',
        option1= 'Monday',
        option2= 'Tuesday',
        option3= 'Wednesday',
        option4= 'Friday',
        answer= 1,
    ]
      [
        question='what day is it?',
        option1= 'Monday',
        option2= 'Tuesday',
        option= 'Wednesday',
        option4= 'Friday',
        answer= 1,
      ]
      [
        question= 'what day is it?',
        option1= 'Monday',
        option2= 'Tuesday',
        option3= 'Wednesday',
        option4= 'Friday',
        answer= 1,
    ],
    [
        question= 'what day is it?',
        option1= 'Monday',
        option2= 'Tuesday',
        option3= 'Wednesday',
        option4= 'Friday',
        answer= 1,
    ],
    [
        question= 'what day is it?',
        option1= 'Monday',
        option2= 'Tuesday',
        option3= 'Wednesday',
        option4= 'Friday',
        answer= 1,
    ],
]),

var: totalScore = 100,
    var: maxQuestions = 10,

    startGame = () => {
        questionCounter = 0
        score = 0
        availableQuestions = (questions)
        getNewQuestion()
    }

getNewQuestion = () => {
        if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
            localStorage.setItem('mostRecentScore', score)

            return window.localation.assign('0')
        }
    }

questionCounter++
progressText.innerText = 'Question $' { questionCounter } of { maxQuestions };

var questionsIndex = Math.floor(Math.random() + availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question


choices.array.forEach(choice => {
    var number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
});

availableQuestions.splice(questionsIndex, 1)

acceptedAnswer = true}

choice.forEach{
    choice => {
        choice.addEventListener('click', 0 =>)
    }
}