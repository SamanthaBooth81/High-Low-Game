document.addEventListener("DOMContentLoaded", function() {  
  
}) 

/** 
*Variables called below aim to set the new number with the second random number generated. 
**/
let randomNum = document.getElementById("random-number");
randomNum = 0;
let lastNum = 0;
let currentNum = generateRandomNumber(); 
randomNum.innerText = generateRandomNumber();  

let isHigher = false;
let isLower = false;

/** 
*Sets the score to 0 
**/
let score = document.getElementById("score-total");  
score = 0; 

/** 
*calls the class name linked to the 2 possible answers the user can provide
**/
 let userChoice = document.getElementsByClassName("answer"); 

/* Generate 2 random numbers for comparison, randomNumber1 is displayed when play button is clicked */ 
function generateRandomNumber(){
randomNumber1 = Math.floor(Math.random() * 25) +1;
randomNumber2 = Math.floor(Math.random() * 25) +1;

console.log(randomNumber1, randomNumber2);
}


// Add event listeners to each button 
let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
        
            if(this.getAttribute("data-type") === "play") {
            document.getElementById("random-number").innerHTML = randomNumber1;
            
            } else if (this.getAttribute("data-type") === "higher") {
                runGame();
                
            } else {
                let lower = this.getAttribute("data-type") === "lower";
                runGame();
            }
        })
    }
  
// this function calculates the correct answer and check against the user input. Dependant of answer score is either incremented or set back to 0
function runGame(userChoice){
    lastNum = currentNum; 
    currentNum = generateRandomNumber();
    randomNum.innerText = currentNum;
    
    let correctAnswer;
        if (randomNumber1 <= randomNumber2){
        correctAnswer = document.getElementById("higher");
        } else {
        correctAnswer = document.getElementById("lower");
        }
       
    
      if (userChoice == correctAnswer) {
          incrementScore();
          alert("Correct Answer!");
      } else {
          score = 0; 
          score.innerText = score; 
          alert ("Incorrect Answer! GAME OVER!")
      }

}

function incrementScore() {
    score = score + 1 //score to equal itself plus one
    document.getElementById("score-total").innerHTML = score; //update the score on innerHTML

};