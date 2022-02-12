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
var name = document.getElementById("name");
var highScores = document.getElementById("high-scores");
var feedbackDiv = document.getElementById("feedback-div");
var feedback = document.getElementById("feedback");
var currentQuestionIndex = 0;

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
    var totalTime = 90;
    
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
            console.log(time)
        }
    }, 1000)
};


var quizBegin = function () {
    startQuiz.classList.add("hidden");
    questions.classList.remove("hidden");
    countdown ();
    quizQuestion ();
};
//Repeat 7 times
var quizQuestion = function () {
    //Pull question from array
    var currentQuestion = questionsBank[currentQuestionIndex];
    //Update h1 with current question
    var choices = document.getElementById("question");
    choices.textContent = currentQuestion.question;
    // Clear choices
    choices.innerHTML = "";

    //loop over questionBank
    currentQuestion.choices.forEach(function(bank, i) {
        //generating question choices
        var bankOption = document.createElement("button");
        bankOption.setAttribute("class", "bank btn choice");
        bankOption.setAttribute("value", bank);

        bankOption.textContent = i + 1 + ". " + bank ;
        //click event for question choices
        bankOption.onclick = checkAns;

        //list choices on screen
        choices.appendChild(bankOption);
    });

};

//Listen for choice
var checkAns = function () {
    //Check if choice is correct
    //Feedback CORRECT or INCORRECT for 2.5 sec
    //If incorrect then -10 sec

}
    //Remove question
    //Check if time remains
    //If quiz ends then quizEnd
    
    var quizEnd = function () {
        //hide questions
        //reveal end-of-quiz
        //button listener
        // verify name input
        //send name to storage
        //got to highScore
        
        
    };
    
    var highScore = function () {
        //pull from array storage
        //arrange from high to low score
        //display scores
        //listen for button
        //go to quizBegin
    };
    
    const startScreen = function() {
        highScores.classList.add("hidden");
        main.classList.remove("hidden");
        startQuiz.classList.remove("hidden");
    };
    
startBtn.addEventListener("click", quizBegin);