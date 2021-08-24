document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "play") {
                onclick = document.getElementById("random-number").innerHTML = generateNumber;
            } else if (this.getAttribute("data-type") === "higher") {
                alert("You clicked higher");
            } else {
                let lower = this.getAttribute("data-type") === "lower";
                alert("You clicked lower");
            }
        })
    }
})


function generateNumber() {

    // Generates the random number the user will make their guesses from
    let randomNumber = Math.floor((Math.random) * 100) +1;  
    
}

function displayRandomNumber(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}
