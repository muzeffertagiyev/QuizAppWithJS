const quizData = [
    {
        question: '1.How old is Florin?',
        a:'10',
        b:'17',
        c:'26',
        d:'100',
        correct:'c'
    },{
        question:'2.What is the most used programming language in 2019?',
        a:'Java',
        b:'C',
        c:'Python', 
        d:'JavaScript',
        correct:'a'
    },{
        question:'3.Who was the President of US in 2019?',
        a:'Florin Pop',
        b:'Donald Trump',
        c:'Barack Obama',
        d:'Joe Biden',
        correct:'b'
    },{
        question:'4.What does HTML stand for?',
        a:'Hypertext Markup Language',
        b:'Cascading stylesheet',
        c:'Jason Object Notation',
        d:'Application Programming Interface',
        correct:'a'
    },{
        question:'5.What year was JavaScript launched',
        a:'1990',
        b:'2003',
        c:'1945',
        d:"none of the above",
        correct:'d'
    }
    
]
const result = document.querySelector('#result')
const answerEls = document.querySelectorAll('.answer')

const question = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.querySelector('#submit')

let currentQuestion = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswers()
    const currentQuestionData = quizData[currentQuestion]
    question.innerHTML = currentQuestionData.question;
    a_text.innerHTML = currentQuestionData.a;
    b_text.innerHTML = currentQuestionData.b;
    c_text.innerHTML = currentQuestionData.c;
    d_text.innerHTML = currentQuestionData.d;
    
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false
    });
}

function getSelected(){
    let answer = undefined
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
        
    });
    return answer;
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        }
        else{
            result.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2><button onclick="location.reload()">Reload</button>`
        }
    }
})
