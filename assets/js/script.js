// Global Variables
var viewHS = document.getElementById("view-high-score");
var timer = document.getElementById("time");
var main = document.getElementById("main");
var startQuiz = document.getElementById("start-quiz");
var startBtn = document.getElementById("start-btn");
var questions = document.getElementById("questions");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var endQuiz = document.getElementById("end-of-quiz");
var nameInput = document.getElementById("name");
var HSSaveBtn = document.getElementById("hsSaveBtn");
var highScoresPage = document.getElementById("high-scores");
var highScoreList = document.getElementById("hs-list");
var returnQuizStart = document.getElementById ("return-quiz-start");
var feedbackDiv = document.getElementById("feedback-div");
var feedback = document.getElementById("feedback");
// Quiz State Variables
var currentQuestionIndex = 0;
var totalTime = 120;
var score = 0;

// The array of questions, choices and correct answers.
const questionsBank= [
    {   question: 'Arrays in Javascript can be used to store __________.', 
        answer: '4. all of the above', 
        choices: [{choice: '1. numbers'}, {choice: '2. booleans'}, {choice: '3. strings'}, {choice: '4. all of the above'}]
    },
    {   question: 'Inside which HTML element do we put the javascript?', 
        answer: '3. <script>', 
        choices: [{choice: '1. <h1>'}, {choice: '2. <js>'}, {choice: '3. <script>'}, {choice: '4. <henswerd>'}]
    },
    {   question: 'In the code -- setinterval(time(),1000) -- what is time()?', 
        answer: '1. callback function', 
        choices: [{choice: '1. callback function'}, {choice: '2. undefined'}, {choice: '3. variable'}, {choice: '4. all of the above'}]
    },
    {   question: 'What syntax would call a function?', 
        answer: '4. function()', 
        choices: [{choice: '1. var function'}, {choice: '2. function'}, {choice: '3. call function'}, {choice: '4. function()'}]
    },
    {   question: 'When did javascript first appear?', 
        answer: '1. 1995', 
        choices: [{choice: '1. 1995'}, {choice: '2. Roaring twenties'}, {choice: '3. 2005'}, {choice: '4. 2000'}]
    },
    {   question: 'What does DOM stand for?', 
        answer: '2. Document Object Model', 
        choices: [{choice: '1. Do Overnight Modules'}, {choice: '2. Document Object Model'}, {choice: '3. Divas Obviously Model'}, {choice: '4. Do Oo Mo'}]
    },
    {   question: 'What is getItem commonly used for?', 
        answer: '2. local storage', 
        choices: [{choice: '1. adding drama'}, {choice: '2. local storage'}, {choice: '3. online shopping'}, {choice: '4. naming a variable'}]
    },
];



// Start Timer
function countdown () {
        
    var timeInterval = setInterval(function() {
        // As long as the `timeLeft` is greater than 1
        if (totalTime > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timer.textContent = totalTime + ' seconds remaining';
            // Decrement `timeLeft` by 1
            totalTime--;
        } else if (totalTime === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timer.textContent = totalTime + ' second remaining';
            totalTime--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timer.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `endQuiz()` function
            quizEnd();
            console.log(time)
        }
    }, 1000)
};


var quizBegin = function () {
    startQuiz.classList.add("hidden");
    viewHS.classList.add("hidden");
    questions.classList.remove("hidden");
    countdown ();
    quizQuestion ();
};

//Repeat 7 times
var quizQuestion = function () {
    //Pull question from array
    var currentQuestion = questionsBank[currentQuestionIndex];
    var choices = document.getElementById("choices");
    // Clear question and choices
    question.innerHTML = "";
    choices.innerHTML = "";
    //Update h1 with current question
    question.textContent = currentQuestion.question;

    //loop over questionBank
    currentQuestion.choices.forEach(function(bank, i) {
        //generating question choices
        var bankOption = document.createElement("button");
        bankOption.setAttribute("class", "bank btn choice");
        bankOption.setAttribute("value", bank.choice);

        bankOption.textContent = bank.choice ;
        //click event for question choices
        bankOption.onclick = checkAns;
        
        //list choices on screen
        choices.appendChild(bankOption);
    });
    
};

//Listen for choice
var checkAns = function (event) {
    console.log (score)
    var currentQuestion = questionsBank[currentQuestionIndex];
    
    //Check if choice is correct
    var currentAns = currentQuestion.answer;
    var correctAns = event.target.textContent
    var feedbackTime = 4
    
    if (currentAns === correctAns) {
        feedback.textContent=("Correct!");
        //Increase score by 10 points
        score = score + 10;
    }else{
        feedback.textContent=('Incorrect');
        //If incorrect then -10 sec
        totalTime = totalTime-10;
    }
    //Feedback CORRECT or INCORRECT for 2.5 sec
    var feedbackTimer = setInterval( function() {
        //If 'feedbackTime' is 
        if (feedbackTime > 0) {
            // Decrement `feedbackTime` by 1
            feedbackTime--;
        }
        // When `feedbackTime` is less than or equal to 0 then the H1 is cleared
        else {
            // Set the `textContent` of `feedback` to an empty string
            feedback.textContent=("");
            // Use `clearInterval()` to stop the timer
            clearInterval(feedbackTimer);
            
        }
    }, 1000);
    //Check is quiz is ended
    quizEnd();
};

var quizEnd = function () {
    //Check if time remains or if questions are done
    if (totalTime <= 0 || currentQuestionIndex >= 6 ) {
        // If user gets 100% add the remaining time to their score
        if(score >= 70){
            score = score + totalTime;
            console.log(score);
        }
        // Set totalTime to 0 to stop the timer
        totalTime = 0;
        //If quiz ends then call logScore()
        revealLogScore();
    }
    else {
        currentQuestionIndex++;
        quizQuestion();
    }
    
    
};

const revealLogScore = function() {
    //Hide questions and reveal end-of-quiz
    questions.classList.add("hidden");
    endQuiz.classList.remove("hidden");
    var hsText = document.getElementById("hs-text")
    hsText.innerHTML = "You got a score of "+score+".";

};

HSSaveBtn.addEventListener("click", function() {
    //verify name input
    if (nameInput === ""){
        window.prompt ("Your high score name cannot be empty. Please enter a name.")
    }
    else {
        //send name to storage
        var highScoreLog = {
            name: nameInput.value.trim(),
            score: score
        }
        console.log (highScoreLog)
        
        // get saved scores from local storage, or if not any, set to empty array
        var highScores =
        JSON.parse(window.localStorage.getItem("highScores")) || [];

        // save to localStorage
        highScores.push(highScoreLog);
        window.localStorage.setItem("highScores", JSON.stringify(highScores));

        //go to highScore
        revealHighScoreScreen()
    }

});


var revealHighScoreScreen = function () {
    main.classList.add("hidden");
    viewHS.classList.add ("hidden");
    highScoresPage.classList.remove("hidden");
    returnQuizStart.classList.remove("hidden");
    highScoreScreen();
}

var highScoreScreen = function () {
    //pull from array storage
    var loadHighScores = JSON.parse(localStorage.getItem ("highScores"));
    //arrange from high to low score
    loadHighScores.sort(function(a,b){
        return b.score - a.score;
    });
    console.log (loadHighScores);
    //display scores
    for (var i=0; i<loadHighScores.length; i++) {
        var listHighScore = document.createElement("li");
        listHighScore.textContent = loadHighScores[i].name + " - " + loadHighScores[i].score;
        highScoreList.appendChild(listHighScore);
        console.log (listHighScore);
    }
    //listen for button to go to quizBegin
    returnQuizStart.addEventListener('click', closeHighScorePage);
};

//when called the DOM is reloaded resetting all of the hidden presets 
const closeHighScorePage = () =>{
    window.location.reload();
};


const startScreen = function() {
    highScores.classList.add("hidden");
    main.classList.remove("hidden");
    startQuiz.classList.remove("hidden");
};

startBtn.addEventListener("click", quizBegin);
viewHS.addEventListener("click", revealHighScoreScreen);
