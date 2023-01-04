let computer;
let player;
let winner;
let plScore = 0;
let cmScore = 0;
document.getElementById("rock").onclick = function() {
    player = "ROCK";
    document.getElementById("pl").innerHTML = player;
    computer = computer1();
    document.getElementById("com").innerHTML = computer;
    winner = checkWinner(player, computer);
    document.getElementById("who-won").innerHTML = winner;
    if(winner == "PLAYER WON!") {
        plScore += 1;
    } else if(winner == "COMPUTER WON!") {
        cmScore += 1;
    }
    document.getElementById("score1").innerHTML = plScore;
    document.getElementById("score2").innerHTML = cmScore;
}
document.getElementById("paper").onclick = function() {
    player = "PAPER";
    document.getElementById("pl").innerHTML = player;
    computer = computer1();
    document.getElementById("com").innerHTML = computer;
    winner = checkWinner(player, computer);
    document.getElementById("who-won").innerHTML = winner;
    if(winner == "PLAYER WON!") {
        plScore += 1;
    } else if(winner == "COMPUTER WON!") {
        cmScore += 1;
    }
    document.getElementById("score1").innerHTML = plScore;
    document.getElementById("score2").innerHTML = cmScore;
}
document.getElementById("scissors").onclick = function() {
    player = "SCISSORS";
    document.getElementById("pl").innerHTML = player;
    computer = computer1();
    document.getElementById("com").innerHTML = computer;
    winner = checkWinner(player, computer);
    document.getElementById("who-won").innerHTML = winner;
    if(winner == "PLAYER WON!") {
        plScore += 1;
    } else if(winner == "COMPUTER WON!") {
        cmScore += 1;
    }
    document.getElementById("score1").innerHTML = plScore;
    document.getElementById("score2").innerHTML = cmScore;
}
document.getElementById("res").onclick = function() {
    plScore = 0;
    cmScore = 0;
    document.getElementById("who-won").innerHTML = "RESTARTED";
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;
    document.getElementById("pl").innerHTML = "";
    document.getElementById("com").innerHTML = "";
}
function computer1() {
    const selections = ["ROCK", "PAPER", "SCISSORS"];
    let com = Math.floor(Math.random() * 3);
    return selections[com];
}
// 2 for com win
// 3 for pl win
function checkWinner(pl, cm) {
    if(pl == cm) {
        return "GAME TIED";
    } else if(pl == "ROCK") {
        if(cm == "PAPER") {
            return "COMPUTER WON!";
        } else {
            return "PLAYER WON!";
        }
    } else if(pl == "PAPER") {
        if(cm == "SCISSORS") {
            return "COMPUTER WON!";
        } else {
            return "PLAYER WON!";
        }
    } else if(pl == "SCISSORS") {
        if(cm == "ROCK") {
            return "COMPUTER WON!";
        } else {
            return "PLAYER WON!";
        }
    }
}