
const questions = [
    {
        question: "This is question number ?",
        catagory:"Catagory 1",
        title:"Title A",
        answers: [
            {text:"option1",correct:false},
            {text:"option2",correct:true}
        ]
    },
    {
        question: "This is question number ?",
        catagory:"Catagory 1",
        title:"Title A",
        answers: [
            {text:"option1",correct:false},
            {text:"option2",correct:true}
        ]
    },
    {
        question: "This is question number ?",
        catagory:"Catagory 2",
        title:"title B",
        answers: [
            {text:"option1",correct:false},
            {text:"option2",correct:true}
        ]
    },
    {
        question: "This is question number ?",
        catagory:"Catagory 2",
        title:"title B",
        answers: [
            {text:"option1",correct:false},
            {text:"option2",correct:true}
        ]
    },
    {
        question: "This is question number ?",
        catagory:"Catagory 3",
        title:"title c",
        answers: [
            {text:"option1",correct:false},
            {text:"option2",correct:true}
        ]
    },
    {
        question: "This is question number ?",
        catagory:"Catagory 3",
        title:"title c",
        answers: [
            {text:"option1",correct:false},
            {text:"option2",correct:true}
        ]
    },
    {
        question: "This is question number ?",
        catagory:"Catagory 4",
        title:"title D",
        answers: [
            {text:"option1",correct:false},
            {text:"option2",correct:true}
        ]
    },
    {
        question: "This is question number ?",
        catagory:"Catagory 4",
        title:"title D",
        answers: [
            {text:"option1",correct:false},
            {text:"option2",correct:true}
        ]
    },
    {
        question: "This is question number ?",
        catagory:"Catagory 5",
        title:"title E",
        answers: [
            {text:"option1",correct:false},
            {text:"option2",correct:true}
        ]
    },
    {
        question: "This is question number ?",
        catagory:"Catagory 5",
        title:"title E",
        answers: [
            {text:"option1",correct:false},
            {text:"option2",correct:true}
        ]
    },
]

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('btn-group');
const next = document.getElementById('nxt-btn');
const catagory=document.getElementById('catagory');
const title= document.getElementById('title');
let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    next.innerHTML="next";
    showQuestion();
    
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML=questionNumber + " : " + currentQuestion.question;


    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('btn');
        
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',(e)=>{
            var selectedButton=e.target;
            var isCorrect = selectedButton.dataset.correct=="true";
            if(isCorrect){
                selectedButton.classList.add("correct");
                score++;
                next.style.display="block";
            }
            else{
                selectedButton.classList.add('wrong');
                next.style.display="block";
            }
            Array.from(answerButton.children).forEach(button=>{
                if(button.dataset.correct==="true"){
                    button.classList.add("correct");
                }
                button.disabled=true;
            })
        })
    })
    
    
    
}
function resetState(){
    
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
next.addEventListener('click',()=>{

    if(currentQuestionIndex === 9){
        next.style.display='none'
        showScore();
        
    }
    
    currentQuestionIndex =currentQuestionIndex+1;
    
    showQuestion();
    next.style.display='none'
    console.log(currentQuestionIndex)
    catagory.innerHTML=questions[currentQuestionIndex].catagory;

    title.innerHTML=questions[currentQuestionIndex].title;
})

function showScore(){
    questionElement.innerHTML = "Your Score is " + score;
    questionElement.style.textAlign="center";
}
startQuiz();
