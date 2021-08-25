let randomNumber1 = Math.floor(Math.random() * 100) + 1;
let randomNumber2 = Math.floor(Math.random() * 100) + 1; 

function generateNumber() {

// Generates the random number the user will make their guesses from
randomNumber1 = Math.floor(Math.random() * 100) + 1; 
randomNumber2 = Math.floor(Math.random() * 100) + 1; 
    
}

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "play") {
            document.getElementById("random-number").innerHTML = randomNumber1;
            } else if (this.getAttribute("data-type") === "higher") {
                checkAnswer();
            } else {
                let lower = this.getAttribute("data-type") === "lower";
                checkAnswer();
            }
        })
    }
})
console.log(randomNumber1, randomNumber2);

function calculateCorrectAnswer(){

    randomNumber1 = parseInt(document.getElementById("random-number").innerText); 
    
    if (randomNumber1 => randomNumber2) {
    calculateCorrectAnswer === document.getElementById("higher-button");
    } else {
    calculateCorrectAnswer === document.getElementById("lower-button");
    }
}

function checkAnswer(){

    let userAnswer = parseInt(document.getElementById("higher-button", "lower-button")); 
    
    let calculatedAnswer = calculateCorrectAnswer();
    
    let isCorrect = userAnswer === calculatedAnswer;
    
    if (isCorrect) {
    alert("Correct Answer!")
    } else {
    alert ("Opps! Incorrect Answer :(");
    }
}


function incrementScore(){

}