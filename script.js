const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    // Add more quiz questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });

    nextButton.disabled = true;
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect!";
    }
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        resultElement.textContent = "";
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = `Quiz completed! Your score: ${score} out of ${quizData.length}`;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    resultElement.textContent = "";
}

loadQuestion();
nextButton.addEventListener("click", nextQuestion);
