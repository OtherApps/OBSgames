const container = document.getElementById("alphabetButtons");
const hangManWin= document.getElementById("hangmanDiv");

var answerDisplay = document.getElementById("hold");
var answer = "";
var hint = "";
var life = 10;
var wordDisplay = [];
var winningCheck = "";

const livesDisplay = document.getElementById("mylives");
var myStickman = document.getElementById("stickman");
var context = myStickman.getContext("2d");

function generateButton() {
  var buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `<button
         class = "buttons2" 
         id="${letter}"
         >
        ${letter}
        </button>`
    )
    .join("");

  return buttonsHTML;
}

function handleClick(event) {
  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
  
    const buttonId = document.getElementById(event.target.id);
    buttonId.classList.add("selected");
  }
  return;
}

//word array
const question = [
];

const categories = [
  [
  
  ],
  [],
  []
];

const hints = [
  [
 
  ],
  [

  ],
  [

  ]
];

//set question,answer and hint




async function getRandomWord(len)
{
var wordurl= "https://random-word-api.herokuapp.com/word?lang=en&length="+len ;
let response = await fetch(wordurl);

let text = await response.text(); // read response body as text
let clean =String(text).substring(2,text.length-2);

console.log(clean);

setAnswer(clean)
}


var tempWord ; 

function setAnswer(words) {
  var categoryOrder  =null;
  var  chosenCategory =null;
  var wordOrder = null ;
  const chosenWord =words;;
  tempWord= words; 
  



  //console.log(chosenCategory);
  console.log(chosenWord);
  answer = chosenWord;
  hint ="";
  answerDisplay.innerHTML = generateAnswerDisplay(chosenWord);
}

function generateAnswerDisplay(word) {
  var wordArray = word.split("");
  //console.log(wordArray);
  for (var i = 0; i < answer.length; i++) {
    if (wordArray[i] !== "-") {
      wordDisplay.push("_");
    } else {
      wordDisplay.push("-");
    }
  }
  return wordDisplay.join(" ");
}

function showHint() {
  containerHint.innerHTML = `Clue - ${hint}`;
}


//setting initial condition



function showWord(){
displayPopUp2(tempWord);

}
	
function init() {
  answer = "";
  hint = "";
  life = 10;
  wordDisplay = [];
  winningCheck = "";
  context.clearRect(0, 0, 200, 200);
  canvas();
hangManWin.style.display="block";
  
  livesDisplay.innerHTML = `You have ${life} lives!`;
  //setAnswer();
  container.innerHTML = generateButton();
  container.addEventListener("click", handleClick);
  console.log(answer);
  //console.log(hint);
  getRandomWord(10)
  
  
}


//guess click
function guess(event) {
  const guessWord = event.target.id;
  const answerArray = answer.split("");
  var counter = 0;
  
if(life>0){
  
  if (answer === winningCheck) {
    livesDisplay.innerHTML = `YOU WIN!`;
    return;
  } else {
    if (life > 0) {
      for (var j = 0; j < answer.length; j++) {
        if (guessWord === answerArray[j]) {
          wordDisplay[j] = guessWord;
          console.log(guessWord);
          answerDisplay.innerHTML = wordDisplay.join(" ");
          winningCheck = wordDisplay.join("");
          //console.log(winningCheck)
          counter += 1;
        }
      }
      if (counter === 0) {
        life -= 1;
        counter = 0;
        animate();
      } else {
        counter = 0;
      }
      if (life > 1) {
        livesDisplay.innerHTML = `You have ${life} lives!`;
      } else if (life === 1) {
        livesDisplay.innerHTML = `You have ${life} life!`;
      } else {
        livesDisplay.innerHTML = `GAME OVER!`;
      }
    } else {
      return;
    }
    console.log(wordDisplay);
    //console.log(counter);
    //console.log(life);
    if (answer === winningCheck) {
      livesDisplay.innerHTML = `YOU WIN!`;
      return;
    }
  }
}

}

container.addEventListener("click", guess);

// Hangman
function animate() {
  drawArray[life]();
  //console.log(drawArray[life]);
}

function canvas() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
}

function head() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI * 2, true);
  context.stroke();
}

function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}

function frame1() {
  draw(0, 150, 150, 150);
}

function frame2() {
  draw(10, 0, 10, 600);
}

function frame3() {
  draw(0, 5, 70, 5);
}

function frame4() {
  draw(60, 5, 60, 15);
}

function torso() {
  draw(60, 36, 60, 70);
}

function rightArm() {
  draw(60, 46, 100, 50);
}

function leftArm() {
  draw(60, 46, 20, 50);
}

function rightLeg() {
  draw(60, 70, 100, 100);
}

function leftLeg() {
  draw(60, 70, 20, 100);
}

var drawArray = [
  rightLeg,
  leftLeg,
  rightArm,
  leftArm,
  torso,
  head,
  frame4,
  frame3,
  frame2,
  frame1
];



	function createClick(userInput){
	var btn = document.getElementById(userInput);
	
	handleClick(btn.click());
	
	}	