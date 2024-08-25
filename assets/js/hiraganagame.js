/* jshint esversion: 11 */

/* Hard Coded Questions: https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=4 */

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question:'What character is this? あ',
        choice1:'I',
        choice2:'O',
        choice3:'A',
        choice4:'E',
        answer:3,
    },
    {
        question:'What character is this? い',
        choice1:'A',
        choice2:'I',
        choice3:'U',
        choice4:'E',
        answer:2,
    },
    {
        question:'What character is this? う',
        choice1:'A',
        choice2:'O',
        choice3:'I',
        choice4:'U',
        answer:4,
    },
    {
        question:'What character is this? え',
        choice1:'E',
        choice2:'A',
        choice3:'U',
        choice4:'O',
        answer:1,
    },
    {
        question:'What character is this? お',
        choice1:'A',
        choice2:'U',
        choice3:'O',
        choice4:'I',
        answer:1,
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/hiraganaend.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();