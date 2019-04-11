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
  if (userChoice === "r"){
    switch (computer_choice) {
      case "r":
        console.log("Draw!!");
        break;
      case "p":
        console.log("Paper covers rock. You lose!!");
        break;
      case "s":
        console.log("Rock breaks scissors. You win!!");
        break;
    }
  }
    if (userChoice === "p"){
      switch (computer_choice) {
        case "p":
          console.log("Draw!!");
          break;
        case "r":
          console.log("Paper covers rock. You win!!");
          break;
        case "s":
          console.log("Scissors cut paper. You lose!!");
          break;
        }
      }
      if (userChoice === "s"){
        switch (computer_choice) {
          case "s":
            console.log("Draw!!");
            break;
          case "p":
            console.log("Scissors cut paper. You win!!");
            break;
          case "r":
            console.log("Rock breaks scissors. You lose!!");
            break;
          }
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
