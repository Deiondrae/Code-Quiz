var QuestionList = [
    {
        question: "What is 10/2",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 30/3",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is 1 + 2",
        answers: {
            a: '1',
            b: '2',
            c: '3'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is 110/5",
        answers: {
            a: '22',
            b: '5',
            c: '2'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is Kristi's butt",
        answers: {
            a: 'smol',
            b: 'big',
            c: 'HUGE'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

startQuiz(QuestionList, quizContainer, resultsContainer, submitButton);

function startQuiz(questions, quizContainer, resultsContainer, submitButton){
    
    
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
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    var answerBtn = document.querySelectorAll(".answerBtn")
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

