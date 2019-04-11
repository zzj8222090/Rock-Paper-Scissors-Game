let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
const rock_paper_scissors = {
  'r':0,
  'p':1,
  's':2
}

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return Object.keys(obj)[keys.length * Math.random() << 0];
};

function convetToWord(letter){
  if(letter === 'r') return "Rock";
  if(letter === 'p') return "Paper";
  return "Scissors";

}


function win(userChoice, computerChoice){
  console.log("win!");
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convetToWord(userChoice) + smallUserWord + " beats " + convetToWord(computerChoice) + smallCompWord + ". You win! 😜"
}

function lose(userChoice, computerChoice){
  console.log("lose!");
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convetToWord(computerChoice) + smallCompWord + " beats " + convetToWord(userChoice) + smallUserWord + ". You lose! 😢"
}

function draw(userChoice, computerChoice){
  console.log("draw!");
  result_p.innerHTML = "Come on! It's a draw! 🤨"
}


function game(userChoice){
  const computerChoice = randomProperty(rock_paper_scissors);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
      break;

  }
}

function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissors_div.addEventListener('click', function(){
    game("s");
  })
}

main();
