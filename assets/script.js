var QuestionList = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: '<javascript>',
            b: '<scripting>',
            c: '<script>',
            d: '<js>'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        answers: {
            a: 'document.getElementById("demo").innerHTML = "Hello World!";',
            b: 'document.getElement("p").innerHTML = "Hello World!";',
            c: '#demo.innerHTML = "Hello World!";',
            d: 'document.getElementByName("p").innerHTML = "Hello World!";'
        },
        correctAnswer: 'a'
    },
    {
        question: 'How do you call a function named "myFunction"?',
        answers: {
            a: 'call myFunction()',
            b: 'myFunction()',
            c: 'call function myFunction',
        },
        correctAnswer: 'b'
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            a: ' if (i == 5)',
            b: ' if i = 5 then',
            c: ' if i == 5 then',
            d: ' if i = 5'
        },
        correctAnswer: 'a'
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: '<!--This is a comment -->',
            b: '!This is a comment',
            c: '//this is a comment',
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            a: ' var colors = (1:"red", 2:"green", 3:"blue")',
            b: ' var colors = ["red", "green", "blue"]',
            c: ' var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            d: ' var colors = "red", "green", "blue"'
        },
        correctAnswer: 'b'
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: {
            a: ' rnd(7.25)',
            b: ' round(7.25)',
            c: ' Math.round(7.25)',
            d: ' Math.rnd(7.25)'
        },
        correctAnswer: 'c'
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: {
            a: ' Math.max(x, y)',
            b: ' top(x, y)',
            c: ' Math.ceil(x, y)',
            d: ' ceil(x, y)'
        },
        correctAnswer: 'c'
    },
    {
        question: "JavaScript is the same as Java.",
        answers: {
            a: 'False',
            b: 'True',
        },
        correctAnswer: 'a'
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: {
            a: 'onchange',
            b: 'onlick',
            c: 'onmouseover',
            d: 'onmouseclick'
        },
        correctAnswer: 'b'
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: {
            a: 'var carName',
            b: 'v carName',
            c: 'variable carName',
        },
        correctAnswer: 'a'
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: {
            a: '-',
            b: '=',
            c: 'x',
            d: '*'
        },
        correctAnswer: 'b'
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: {
            a: 'true',
            b: 'NaN',
            c: 'false',
        },
        correctAnswer: 'a'
    },
    {
        question: "Is JavaScript case-sensitive?",
        answers: {
            a: 'yes',
            b: 'No',
        },
        correctAnswer: 'a'
    },
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const answerBtn = document.querySelectorAll(".answerBtn");
const startButton = document.getElementById("start");
var Time = 60;
var timer = document.getElementById("time")
timer.textContent = Time
timerStarted = false


var startQuiz = function(questions, quizContainer, resultsContainer, submitButton){
    

    function showQuestions(questions, quizContainer){
       
        var output = [];
        

        for(var i=0; i<questions.length; i++){
            
            var answers = [];
    
            for(letter in questions[i].answers){
                answers.push(
                    '<label>' +
                    '<input type="radio" class="answerBtn" name="question'+i+'" value="'+letter+'">' +
                    letter +
                    ': ' +
                    questions[i].answers[letter] +
                    '</label>'
                );
            }
            output.push(
                '<div class="slide"><div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div> </div>'
            );
        }
        quizContainer.innerHTML = output.join('');
        
    }

    function showResults(questions, quizContainer, resultsContainer){

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
            }
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
      }

      function showNextSlide() {
        if (currentSlide === QuestionList.length-1){
            showResults(questions, quizContainer, resultsContainer);
        }else {
            showSlide(currentSlide + 1);
        }
    } 
    
      function showPreviousSlide() {
        showSlide(currentSlide - 1);
      }
    

    showQuestions(questions, quizContainer);
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    for (var i=0;i<answerBtn.length;i++){
        answerBtn[i].addEventListener("click", showNextSlide);
    }
}

var lowerTimer = function(seconds) {
    var timeLeft = parseInt(timer.textContent);
    timeLeft = Math.max(0, timeLeft - seconds);
    timer.textContent = timeLeft;
  }
  
  var countdown = function() {
    var updateTime = function () {
        if (startTimer){
            var timeLeft = parseInt(timer.textContent);
            if (timeLeft > 0) {
            lowerTimer(1);
            }
        }
    }
    setInterval(updateTime, 1000);
  };

var startTimer = function(){
    timerStarted = true
}

startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", () => {startQuiz(QuestionList, quizContainer, resultsContainer, submitButton)});
startButton.addEventListener("click", countdown);
