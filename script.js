var questionContainer = document.querySelector(".question-container");
var nextQuestionBtn = document.querySelector(".next-question-btn");
var startQuizBtn = document.querySelector(".start-quiz-btn");

var questionsArr = [question1, question2, question3, question4];

var question1 = "What does HTML stand for?";
var answer1 = ["hypertext markup language", "something else", "another thing"];
var question2 = "What does CSS stand for?";
var answer2 = ["cascading style sheets", "it doesnt", "dunno"];
var question3 = "Is Java the same as JavaScript?";
var answer3 = ["true", "false", "there arent any other options"];
var question4 = "What is the keyboard command to copy and item?";
var answer4 = ["ctrl v" , "ctrl j", "ctrl 8", "ctrl jkl"];





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

}

startQuizBtn.addEventListener("click", showQuestions); //works, div show on button click. 

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