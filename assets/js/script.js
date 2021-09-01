/** 
 *Variables called below aim to set the new number with the second random number generated. 
 **/
let currentNum = 0;
let randomNumber = generateRandomNumber(); 
let randomNumberElem = document.getElementById("random-number");
// let randomNum = document.getElementById("random-number");
// let randomNum = null;


// randomNum.innerText = nextNum;

/** 
 *Sets the score to 0 
 **/
const scoreElm = document.getElementById("score-total");
let score = 0;

/* Generate 2 random numbers for comparison, randomNumber1 is displayed when play button is clicked */
function generateRandomNumber() {
    return Math.floor(Math.random() * 99) + 1;

    console.log(randomNumber1);
}
let nextNum = generateRandomNumber();
console.log(nextNum, "nextNum");

// Added event listeners to each button 
let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", function () {
        
        if (this.getAttribute("data-type") === "play") {
            // generateRandomNumber();
            document.getElementById("random-number").innerHTML = generateRandomNumber();

        } else if (this.getAttribute("data-type") === "higher") {
            // if (randomNum = 0)
            //     alert("Press Play");
            runGame("higher");

        } else {
            this.getAttribute("data-type") === "lower";
            // if (randomNum = 0)
            //     alert("Press Play");
            runGame("lower");
        }
    })
}

// this function calculates the correct answer and check against the user input. Dependant of answer score is either incremented or set back to 0
function runGame(userChoice) {

    currentNum = nextNum;
    // randomNum.innerText = nextNum;

    let isAnswerCorrect = false;
    if (randomNumber < currentNum && userChoice === "higher"){
        //  correctAnswer == document.getElementById("higher");
         isAnswerCorrect = true; 
         incrementScore();
         

    } else if (randomNumber > currentNum && userChoice === "lower"){
        // correctAnswer == document.getElementById("lower");
        isAnswerCorrect = true; 
        incrementScore();
    } 

    if (isAnswerCorrect){
        currentNum = randomNumber;
        randomNumber = generateRandomNumber();
        randomNumberElem.innerText = randomNumber;
        alert("Correct Answer!");
        
        console.log(randomNumber);
    }
    else {
        score = 0;
        score.innerText = score;
        alert("Incorrect Answer! GAME OVER!");
        document.location.reload();
        clearInterval(interval);
    } 
}

function incrementScore() {
    score = score + 1 //score to equal itself plus one
    scoreElm.innerHTML = score; //update the score on innerHTML
};