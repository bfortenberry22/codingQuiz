//variables
var beginButton = document.querySelector("#start-quiz");
var highScores = document.querySelector("#high-scores");

//function to run quiz
var quizTime = function(){
    alert("The quiz is about to begin!");
};

//timer function
var timeBegins = function(){

};

//function for highScore
var viewHighScores= function(){
    alert("There are no high scores at this time.");
}

//eventListeners
//eventListener to begin quiz
beginButton.addEventListener("click", quizTime);
//eventListener to view high scores
highScores.addEventListener("click", viewHighScores);