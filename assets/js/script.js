/** 
 *Variables called below set the replace the current number with a new random number 
 **/
let currentNum = 0;
let randomNumber = generateRandomNumber();
let randomNumberElem = document.getElementById("random-number");

/** 
 *Sets the score to 0 
 **/
const scoreElm = document.getElementById("score-total");
let score = 0;

/** 
 * Generates a number at random, randomNumber function is used when play button 
 * is clicked and when the users choice is correct
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * 99) + 1;

    console.log(randomNumber1);
}

/** 
 * Generates a new number for the computer to use as comparison against the previous random number generated
 */
let nextNum = generateRandomNumber();
console.log(nextNum);

/**
 * Add event listener for the 'How to Play' button. On click displays game description. 
 */

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

document.getElementById("game-rules").addEventListener("click", togglePopup);

/**
 * Added event listeners to each button, play to start the game 
 * and higher and lower to register the users choice
 */


let buttons = document.getElementsByClassName("game-btn");
for (let button of buttons) {
    button.addEventListener("click", function () {
    
        if (this.getAttribute("data-type") === "play") {
            if (randomNumberElem.innerText > 0) {
                document.location.reload(); // added to restart the game if the user presses the play button mid-game(to prevent cheating)
                clearInterval(interval); // added to restart the game if the user presses the play button mid-game(to prevent cheating)
            } else {
                document.getElementById("random-number").innerHTML = generateRandomNumber();
            };

        } else if (this.getAttribute("data-type") === "higher") {
            
            if (randomNumberElem.innerText === "0") {
                alert("Press play to start!"); // Alerts the user to press Play to begin the game
            } else {
                runGame("higher");
            }

        } else {
            this.getAttribute("data-type") === "lower";
            
            if (randomNumberElem.innerText === "0") {
                alert("Press Play to start!"); // Alerts the user to press Play to begin the game
            } else {
                runGame("lower");
            }
        }
    })
}

/**
 * This function calculates the correct answer and checks against the user input. 
 * Dependant of answer score is either incremented or the game is restarted
 */
function runGame(userChoice) {

    currentNum = nextNum;
    nextNum = generateRandomNumber();
    randomNumber.innerText = nextNum;
    console.log(nextNum);

    if (randomNumberElem === 0) {
        alert("Press play to start!")
    }

    let isAnswerCorrect = false;
    if (randomNumber < currentNum && userChoice === "higher") {
        //  correctAnswer == document.getElementById("higher");
        isAnswerCorrect = true;
        incrementScore();


    } else if (randomNumber > currentNum && userChoice === "lower") {
        // correctAnswer == document.getElementById("lower");
        isAnswerCorrect = true;
        incrementScore();
    }

    if (isAnswerCorrect) {
        currentNum = randomNumber;
        randomNumber = generateRandomNumber();
        randomNumberElem.innerText = randomNumber;
        alert("Correct Answer!");
    } else {
        score = 0;
        score.innerText = score;
        alert("Incorrect Answer! GAME OVER");
        document.location.reload();
        clearInterval(interval);
    }
}

/**
 * function increments the score if the answer is correct
 */
function incrementScore() {
    score = score + 1 //score to equal itself plus one
    scoreElm.innerHTML = score; //update the score on innerHTML
};

