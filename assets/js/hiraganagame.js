/* jshint esversion: 11 */

/* Hard Coded Questions: https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=4 */

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById("progressText")
const scoreText = document.getElementById("score")
const progressBarFull = document.getElementById("progressBarFull")


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

const vowels = [
    {
        jp: "あ",
        en: "A"
    },
    {
        jp: "い",
        en: "I"
    },
    {
        jp: "う",
        en: "U"
    },
    {
        jp: "え",
        en: "E"
    },
    {
        jp: "お",
        en: "O"
    }
];

let vowelsShuffled = vowels.sort(() => Math.random() - 0.5);

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    getNewQuestion();
};

getNewQuestion = () => {
    if (vowelsShuffled.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('hiraganaend.html');
    }
    questionCounter++;
    /* Progress Bar: https://www.youtube.com/watch?v=4bctmtuZVcM&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=7 */
    progressText.innerText = "Question " + questionCounter + "/" + MAX_QUESTIONS;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    vowelsShuffled.forEach((vowel, i) => {
        if (i <= 3) {
            question.innerText = `What character is this? ${vowelsShuffled[0].jp}`;
            let randomOrder = Math.floor(Math.random() * 5);
            choices[i].style.order = randomOrder;
            choices[i].dataset["char"] = vowel.jp;
            choices[i].innerText = vowel.en;
        }
    });

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["char"];

        /* Display Feedback: https://www.youtube.com/watch?v=_LYxkClHnV0&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=5 */
        const classToApply = 
          selectedAnswer == vowelsShuffled[0].jp ? "correct" : "incorrect";
    
        if (classToApply == "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.classList.add(classToApply);
        
        setTimeout( () => {
            vowelsShuffled.push(vowelsShuffled.splice(0, 1)[0]);
            selectedChoice.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});
// /* Score Increment: https://www.youtube.com/watch?v=BOQLbu_Crc0&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=6 */
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}


startGame();