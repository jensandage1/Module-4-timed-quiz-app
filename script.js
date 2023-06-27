var questionContainer = document.querySelector(".question-container");
var nextQuestionBtn = document.querySelector(".next-question-btn");
var startQuizBtn = document.querySelector(".start-quiz-btn");

var questionsArr = [question1, question2, question3, question4];

var question1 = "What does HTML stand for?";
var answer1 = ["hypertext markup language", "something else", "another thing"];
var correct1 = "hypertext markup language";
var question2 = "What does CSS stand for?";
var answer2 = ["cascading style sheets", "it doesnt", "dunno"];
var correct2 = "cascading style sheets";
var question3 = "Is Java the same as JavaScript?";
var answer3 = ["true", "false", "there arent any other options"];
var correct3 = "false";
var question4 = "What is the keyboard command to copy and item?";
var answer4 = ["ctrl v" , "ctrl j", "ctrl 8", "ctrl jkl"];
var correct4 = "ctrl v";





//click on view highscores and get directed to highscores html page. 
var highScore = document.getElementById("view-highscores");

highScore.addEventListener("click", function() {
    document.location.href = `high-scores.html`;
});

//function showQuestions shows question and answers.  
function showQuestions () {
  document.getElementById("question-container").style.display = "block";
  document.querySelector(".question").textContent = question1;
  var answersList = document.getElementById("answers");
  for(i=0; i <answer1.length; i++) {
    var li = document.createElement("li");
    li.innerText = answer1[i];
    answersList.appendChild(li);
  }

var correctWrong = document.getElementById("correct-wrong");
var counter = document.getElementById("counter");
answersList.addEventListener("click", rightWrong);

function rightWrong () {
  /*if ( WHAT GOES HERE?!?!?!?? ) { 
    correctWrong.textContent = "Correct";
    counter++;
    //display correct add counter.
  } else {
    correctWrong.textContent = "Wrong";
    //display wrong.
  }*/
}}

startQuizBtn.addEventListener("click", showQuestions); //works, div show on button click. 
startQuizBtn.addEventListener("click", hideStartScreen);

function hideStartScreen () {
  document.querySelector(".start-screen").style.display = "none";
}



var timerDiv = document.getElementById("timer-div");
var timer = document.querySelector(".timer");
var secondsLeft = 30;

function startTimer() {
var timerInterval = setInterval(function() {
  secondsLeft--;
  timerDiv.textContent = secondsLeft + " seconds remaining";


  if (secondsLeft === 0 ) {
    clearInterval(timerInterval);
    timeUp();
  }
}, 1000)
}

function timeUp() {
  timerDiv.textContent = "TIME IS UP";
}

startQuizBtn.addEventListener("click", startTimer);