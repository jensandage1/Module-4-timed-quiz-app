var questionContainer = document.querySelector(".question-container");
var nextQuestionBtn = document.querySelector(".next-question-btn");
var startQuizBtn = document.querySelector(".start-quiz-btn");

var questions = [{
    question: "what does HTML stand for?",
    answer: [{ text: "Hypertext Markup Language", isCorrect: true },
            { text: "Hyped up Male Language", isCorrect: false }, 
            {text:"It doesn't stand for anything", isCorrect: false}
            ],
    correct: "Hypertext Markup Language"
},
{
    question: "what does CSS stand for?",
    answer: [{ text: "cats stand silly", isCorrect: false},
            { text: "cascading style sheets", isCorrect: true},
            {text: "curly style sans", isCorrect: false}
            ],
    correct: "cascading style sheets"
},
{
    question: "Which is a website used to store code?",
    answer: [{ text: "github.com", isCorrect: true},
            {text: "google.com", isCorrect: false},
            {text: "facebook.com", isCorrect: false}
            ], 
    correct: "github.com"
},
{
  question: "What is the keyboard shortcut to copy information?",
  answer: [{ text: "ctrl+V", isCorrect: false},
          {text: "alt+C", isCorrect: false},
          {text: "ctrl+C", isCorrect: true},
        ],
  correct: "ctrl+C"
}
]

var currentQuestion = 0;



//function showQuestions works 
function showQuestions () {
  document.getElementById("question-container").style.display = "block"; //div shows up. 
  document.querySelector(".question").textContent = questions[currentQuestion].question;
  var answersList = document.getElementById("answers");

  for(var i=0; i < questions[currentQuestion].answer.length; i++) {
    var li = document.createElement("li");
    li.innerText = questions[currentQuestion].answer[i].text;
    answersList.appendChild(li);
  }

function nextQuestion () //works except question 3 is missing. 
 { answersList.replaceChildren();
  if (currentQuestion < questions.length -1) {
    currentQuestion++;
    showQuestions(); //missing third question 
  }
 }

nextQuestionBtn.addEventListener("click", nextQuestion);

var score = 0;
var correctWrong = document.getElementById("correct-wrong");
var scoreDisplay = document.getElementById("counter");
//counter.textContent = 0;
answersList.addEventListener("click", rightWrong);

function rightWrong (e) {
  if (e.target.textContent == questions[currentQuestion].correct) {  
    correctWrong.textContent = "Correct";
    score++;
    scoreDisplay.textContent = score + "/ 4"; //works for the first one and then it takes extra clicks to update the score..
    //display correct, and add counter.
  } else {
    correctWrong.textContent = "Wrong";

    //display wrong. need to subtract extra 2 seconds here. 
  }
}}

startQuizBtn.addEventListener("click", showQuestions); //works, div show on button click. 
startQuizBtn.addEventListener("click", hideStartScreen); //works

function hideStartScreen () {
  document.querySelector(".start-screen").style.display = "none"; //works
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


//click on view highscores and get directed to highscores html page. 
var highScore = document.getElementById("view-highscores");

highScore.addEventListener("click", function() {
    document.location.href = `high-scores.html`;
});


//TODO : 
//1. when last question is gone through, have "enter initials" div comeup. Save that to local storage. 
//2. have local storage populate on high-scores.html page. 
//3. have enter initials pop up when the timer runs out. 
//4. timer must reduce when wrong answer is clicked. 
//5. must register right and wrong when clicking anwers and total score. 
//6. general css 