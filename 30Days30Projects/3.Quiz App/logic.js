const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
    }
];

const queEle = document.getElementById("question");
const ansOpt = document.getElementById("answer-buttons");
const nxtBtn = document.getElementById("next");

let curQueindex = 0;
let score = 0;

function startquiz() {
    curQueindex = 0;
    score = 0;
    nxtBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    reset();
    let curquestion = questions[curQueindex];
    let quesNo = curQueindex + 1;

    queEle.innerHTML = quesNo + ". " + curquestion.question;

    curquestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAnswer);
        ansOpt.appendChild(button);
    });
}

function reset() {
    nxtBtn.style.display = "none";
    while (ansOpt.firstChild) {
        ansOpt.removeChild(ansOpt.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        score++;
    }
    Array.from(ansOpt.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
    });
    if (curQueindex < questions.length - 1) {
        nxtBtn.style.display = "block";
    } else {
        nxtBtn.innerHTML = "Restart";
        nxtBtn.style.display = "block";
    }
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

nxtBtn.addEventListener("click", () => {
    curQueindex++;
    if (curQueindex < questions.length) {
        showQuestion();
    } else {
        startquiz();
    }
});

startquiz();