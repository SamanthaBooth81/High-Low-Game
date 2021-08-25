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
                alert("You clicked higher");
            } else {
                let lower = this.getAttribute("data-type") === "lower";
                alert("You clicked lower");
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

function displayRandomNumber(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}
