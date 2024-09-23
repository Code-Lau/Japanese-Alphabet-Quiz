/* jshint esversion: 11 */

/* Hard Coded Questions: https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=4 
Questions aren't hard coded but I still used code from this tutorial*/

const urlParams = new URLSearchParams(window.location.search);
const quizParam = urlParams.get("quiz");
const selectedLanguage = urlParams.get("lang") || 'en';

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const CORRECT_BONUS = 10;
let MAX_QUESTIONS = 5;
let selectedQuiz;

switch(quizParam) {
    case "vowels":
        selectedQuiz = vowelsShuffled;
        break;
    case "k":
        selectedQuiz = kLettersShuffled;
        break;
    case "s":
        selectedQuiz = sLettersShuffled;
        break;
    case "t":
        selectedQuiz = tLettersShuffled;
        break;
    case "n":
        selectedQuiz = nLettersShuffled;
        break;
    case "h":
        selectedQuiz = hLettersShuffled;
        break;
    case "m":
        selectedQuiz = mLettersShuffled;
        break;
    case "w":
        selectedQuiz = wLettersShuffled;
        break;
    case "r":
        selectedQuiz = rLettersShuffled;
        break;
    case "g":
        selectedQuiz = gLettersShuffled;
        break;
    case "z":
        selectedQuiz = zLettersShuffled;
        break;
    case "d":
        selectedQuiz = dLettersShuffled;
        break;
    case "b":
        selectedQuiz = bLettersShuffled;
        break;
    case "p":
        selectedQuiz = pLettersShuffled;
        break;
    case "all":
        selectedQuiz = allLettersShuffled;
        break;
    default:
        selectedQuiz = vowelsShuffled;
}

startGame = () => {
    MAX_QUESTIONS = selectedQuiz.length;
    questionCounter = 0;
    score = 0;
    getNewQuestion();
};

getNewQuestion = () => {
    if (selectedQuiz.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('quizend.html');
    }
    /* Progress Bar: https://www.youtube.com/watch?v=4bctmtuZVcM&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=7 */
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const currentLetter = selectedQuiz[0];

    let answerPool = [...selectedQuiz].sort(() => Math.random() - 0.5).slice(0, 4);

    if (!answerPool.includes(currentLetter)) {
        answerPool[Math.floor(Math.random() * 4)] = currentLetter;
    }

    question.innerText = `What character is this? ${currentLetter.jp}`;
    
    choices.forEach((choice, i) => {
        const letter = answerPool[i];
        
        choice.dataset.i = letter.jp;
    
        switch(selectedLanguage) {
            case 'en':
                choice.innerText = letter.en;
                break;
            case 'ru':
                choice.innerText = letter.ru;
                break;
            case 'zh':
                choice.innerText = letter.zh;
                break;
            default:
                choice.innerText = letter.en;
        }
    });

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.i;

        disableChoices();

        /* Display Feedback: https://www.youtube.com/watch?v=_LYxkClHnV0&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=5 */
        const classToApply = selectedAnswer == selectedQuiz[0].jp ? "correct" : "incorrect";
    
        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
            question.innerText = `CORRECT - ${selectedQuiz[0].jp} = ${selectedQuiz[0].en}`;
        } else {
            question.innerText = `INCORRECT - ${selectedQuiz[0].jp} = ${selectedQuiz[0].en}`;
        }

        selectedChoice.classList.add(classToApply);
        
        setTimeout(() => {
            enableChoices();
            selectedQuiz.push(selectedQuiz.splice(0, 1)[0]);
            selectedChoice.classList.remove(classToApply);
            getNewQuestion();
        }, 2000);
    });
});


function disableChoices() {
    choices.forEach(choice => {
        choice.classList.add("disable");
    });
}

function enableChoices() {
    choices.forEach(choice => {
        choice.classList.remove("disable");
    });
}

// /* Score Increment: https://www.youtube.com/watch?v=BOQLbu_Crc0&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=6 */
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

document.addEventListener("DOMContentLoaded", () => {
    startGame();
});



