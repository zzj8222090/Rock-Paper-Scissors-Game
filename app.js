const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const rock_paper_scissors = {
  'r':0,
  'p':1,
  's':2
}

// console.log(rock_paper_scissors['s']);

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return Object.keys(obj)[keys.length * Math.random() << 0];
};

function game(userChoice){
  var computer_choice = randomProperty(rock_paper_scissors);
  console.log(computer_choice);
  if (computer_choice === userChoice){
    console.log("Draw!");
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
