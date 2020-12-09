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

