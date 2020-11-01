var background = $("body");
var correct = $(".status");
var scoreBoard = $(".score");

var headers = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
    "Question 6",
    "Question 7",
    "Question 8",
    "Question 9",
    "Question 10",
    "Question 11",
    "Question 12",
    "Question 13",
    "Question 14",
    "Question 15",
    "Question 16",
    "Question 17",
    "Question 18",
    "Question 19",
    "Question 20"
]

var questions = [
    // 1
    "Which of the following is an efficiency mechanism?", 
    // 2
    "How do you write 'Hello World' in an alert box?", 
    // 3
    "How do you create a function in JavaScript?", 
    // 4
    "Inside which HTML element do we put the JavaScript?", 
    // 5
    "How do you call a function named 'myFunction'?", 
    // 6
    "How to write an IF statement in JavaScript?", 
    // 7
    "How can you add a comment in a JavaScript?", 
    // 8
    "What is the correct way to write a JavaScript array?", 
    // 9
    "How do you round the number 7.25, to the nearest integer?", 
    // 10
    "Which of the following is a Boolean Value?", 
    // 11
    "Which event occurs when the user clicks on an HTML element?", 
    // 12
    "How do you declare a JavaScript variable?", 
    // 13
    "Which operator is used to assign a value to a variable?", 
    // 14
    "What will be returned with console.log(typeof(14))", 
    // 15
    "What is the term describes the capitalization of this phrase 'needBucketAndMop'", 
    // 16
    "what is this selecting? .querySelector('.big')", 
    // 17
    "Which of the following can be use to turn a string into an interger?", 
    // 18
    "What is a Method?", 
    // 19
    "In this array, ['running', 'out', 'of', 'ideas'] What is the index of 'running'?", 
    // 20
    "Who created Javascript?"
]

var answers = [
    // 1
    ["pomdoro timer", "meditation", "excersise", "all of the above"], 
    // 2
    ["msg('Hello World');", "prompt('Hello World');", "<h1>Hello World</h1>", "alert('Hello World');"], 
    // 3
    ["function = myFunc()", "function myFunc = ()", "function:myFunc", "function myFunc()"], 
    // 4
    ["<style>", "<script>", "<p>", "<div>"], 
    // 5
    ["myFunction()", "call: myFunction", "hey siri, call myFunction", "callFunction(myFunction)"], 
    // 6
    ["if(i == 5)", "if i == 5 then", "if i = 5", "if(i) = then(5)"], 
    // 7
    ["<!-- commnet -->", "` comment `", "//comment", "$('<comment>')"], 
    // 8
    ["var colors = (1:'red', 2:'green')", "var colors = ['red', 'green']", "var colors = 'red', 'green'", "var colors = ('red'), ('green')"], 
    // 9
    ["(7.25).round", "round(7.25)", "Math.round(7.25)", "Math(7.25)"], 
    // 10
    ["word", "facts", "true", "straight up"],
    // 11
    ["onmouseover", "onclick", "onchange", "keydown"], 
    // 12
    ["var pizzaSlice;", "var = pizzaSlice;", "variable(pizzaSlice);", "pizzaSlice.var;"], 
    // 13
    ["®", "=", "=>", "&&"], 
    // 14
    ["number", "string", "boolean", "NaN"], 
    // 15
    ["sentence case", "camel case", "lowercase", "random case"], 
    // 16
    ["id='big'", "<big>", "class='big'", "big-div"], 
    // 17
    ["Math.floor", "ParseInt", "ParseFloat", "Parsley"], 
    // 18
    ["two functions", "a good function", "a long variable", "a function within an object"], 
    // 19
    ["1", "2", "0", "undefined"], 
    // 20
    ["Brendan Eich", "Linus S. Java", "Mr.Script", "Twitter"]
]

var key = [
    // 1
    "all of the above", 
    // 2
    "alert('Hello World');",
    // 3
    "function myFunc()",
    // 4
    "<script>",
    // 5
    "myFunction()",
    // 6
    "if(i == 5)",
    // 7
    "//comment",
    // 8
    "var colors = ['red', 'green']",
    // 9
    "Math.round(7.25)",
    // 10
    "true",
    // 11
    "onclick",
    // 12
    "var pizzaSlice;",
    // 13
    "=",
    // 14
    "number",
    // 15
    "camel case",
    // 16
    "class='big",
    // 17
    "ParseInt",
    // 18
    "a function within an object",
    // 19
    "0",
    // 20
    "Brendan Eich"
]


var timer = $(".timer");
let time = 60;
function updateCountdown() {
    time--;
    timer.text("0:" + time);
}
function showQuestion() {
    $(".content").show();
}
function clearQuestion() {
    $(".choices").empty();
    $(".question").empty();
    $(".card-head").empty();
}
function clearStart () {
    $(".ready").hide();
}



var questionNum = 0;
var userScore = 0;

scoreBoard.text("score: " + userScore);

// console.log(typeof(userScore)); 

function displayQuestion() {

    var questionHead = $("<h2>");
    questionHead.text(headers[questionNum]);
    questionHead.appendTo(".card-head");

    var questionText = $("<h4>");
    questionText.text(questions[questionNum]);
    questionText.appendTo(".question");

    for(i = 0; i < 4; i++) {
        var answerBtn = $("<div>");
    answerBtn.addClass("answer six columns");
    answerBtn.text(answers[questionNum][i])
    answerBtn.appendTo(".choices");
    }
}
function defaultColor() {
    //returns stat-bar to default color
    var bar = $(".status-bar")
    bar.css("background", "#ffffff");
    correct.empty();
}   

function correctColor() {
    //sets color to green for 1 second then back to default
    var bar = $(".status-bar")
    bar.css("background", "#018e42");
    setTimeout(defaultColor, 1000);
}
function wrongColor() {
    //sets color to orange for 1 second then back to default
    var bar = $(".status-bar")
    bar.css("background", "#fa824c");
    setTimeout(defaultColor, 1000);
}

$(".start").click(function() {
    clearStart();
    displayQuestion();
    showQuestion();
    setInterval(updateCountdown, 1000);
}) 



$(".choices").on("click", function(event) {
        if(event.target.textContent == key[questionNum]) {
            clearQuestion();
            
            questionNum++;
            userScore++;
            
            scoreBoard.text("score: " + userScore);
            correct.text("Correct!");
            correctColor();

            console.log("correct"); 
            console.log(userScore);
            

            displayQuestion();
        }
        else {
            clearQuestion();

            questionNum++;
            //time --

            
            correct.text("Wrong!");
            wrongColor();

            displayQuestion();
         }
    });