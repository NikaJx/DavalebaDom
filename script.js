//დავალება 1

// const divEl = document.querySelector('#div_el');
// const btn = document.querySelector('#btn__cl');

// btn.addEventListener('click', () => {
//     divEl.style.display = 'none';
// });

// //დავალება 2

// const divBlock = document.createElement('div');
// divBlock.setAttribute('id', 'card');

// const h2El = document.createElement('h2');

// const textH2 = document.createTextNode('Gandalf');
// h2El.appendChild(textH2);

// const aEl = document.createElement('a');
// aEl.setAttribute('href', 'facebook.com');
// const textA = document.createTextNode('Go to profile');
// aEl.appendChild(textA);

// divBlock.appendChild(h2El);
// divBlock.appendChild(aEl);

// დავალება 3 თავისი ბონუსით :)

const quizData = [
    {
        question: "ვინ შექმნა Javascipt",
        a: "Brendan Eich",
        b: "James Bond",
        c: "Shalva Natelashvili",
        d: "Guido van Rossum",
        correct: "a",
    },
    {
        question: "ვინ იყო ამერიკის პირველი პრეზიდენტი?",
        a: "Florin Pop",
        b: "George Washington",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "რომელ წელს შეიქმნა Javascript?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1941",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});