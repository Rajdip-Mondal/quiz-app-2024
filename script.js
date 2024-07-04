const questions=[

{
    question:"Which is the largest animal in the world?",
    answers:[
        {text:"shark",correct:false},
        {text:"Blue Whale", correct:true},
        {text:"Elephant", correct:false},
        {text:"Giraffe", correct:false}
    ]
}
,
{
    question:"which is the smallest cuntry in the world?"
     ,
     answers:[
        { text: "Vatican City", correct: true},
        { text: "Bhutan", correct: false},
        { text: "Nepal", correct: false},
        { text: "Shri Lanka", correct: false}
     ]
},

{
    question:  "Which is the largest desert in the world?",

    answers:[
        { text: "Kalahari", correct: false},
        { text: "Gobi", correct: false},
        { text: "Sahara", correct: false},
        { text: "Antarctica", correct: true},
    ]
},

{
    question: "Which is the smallest continent in the world?",
    answers: [
        { text: "Asia", correct: false},
        { text: "Australia", correct: true},
        { text: "Arctic", correct: false},
        { text: "Africa", correct: false},
    ]
}  



];

const questionElement=document.getElementById('question');
const answerBtn=document.getElementById('answer-buttons')
console.log(questions);
const nextBtn=document.getElementById('next-btn');
let currentQuestionIndex=0;
let score=0;


function startQuiz(){
    currentQuestionIndex=0;
    score=0
    nextBtn.innerHTML="Next"
    showQuestion();
     
}
function showQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text
        button.classList.add("btn");
        answerBtn.appendChild(button)
    })

}
startQuiz()

