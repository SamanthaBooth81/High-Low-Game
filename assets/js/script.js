document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "play") {
                // onclick = document.getElementById("random-number").innerHTML = generateNumber;
                document.getElementById('play-button').onclick = function () {
                    document.getElementById("random-number").innerHTML = randomNumber();
                };
            } else if (this.getAttribute("data-type") === "higher") {
                checkAnswer();
                /* alert("You clicked higher"); */
            } else {
                let lower = this.getAttribute("data-type") === "lower";
                checkAnswer();
                /* alert("You clicked lower"); */
            }
        })
    }
})

/**
 * Used to help generate random button functionality 
 * https://wordpress.stackexchange.com/questions/354184/insert-a-button-on-a-page-with-random-number-generation 
 */ 

let randomNumber = function(){
    return Math.floor(Math.random() * 100) + 1;
};

// function generateNumber() {

//     // Generates the random number the user will make their guesses from
//     let randomNumber = Math.floor((Math.random) * 100) +1;  
    
// }

function calculateCorrectAnswer(){

    let randomNumber2 = Math.floor(Math.random() * 100) + 1;

    randomNumber = parseInt(documet.getElementById("random-number").innerText);
    
    if (randomNumber >= randomNumber2) {
    calculateCorrectAnswer === "higher";
    } else {
    calculateCorrectAnswer === "lower";
    }
}

function checkAnswer(){

    let userAnswer = parseInt(document.getElementById("higher-button", "lower-button")); 
    
    let calculatedAnswer = calculateCorrectAnswer();
    
    let isCorrect = userAnswer === calculatedAnswer[0];
    
    if (isCorrect) {
    alert("Correct Answer!")
    } else {
    alert ("Opps! Incorrect Answer :( Game Over!");
    }

}

function incrementScore(){

}
