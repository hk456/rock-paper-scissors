let score = {
    wins: 0,
    losses: 0,
    draws: 0
}

function playGame(userMove) {
    const computerMove = pickComputerMove();

    if (userMove == computerMove) {
        score.draws++;
    }
    else if ((userMove == 'rock' && computerMove == 'scissors')
        || (userMove == 'scissors' && computerMove == 'paper')
        || (userMove == 'paper' && computerMove == 'rock')) {
        score.wins++;
    }
    else {
        score.losses++;
    }

    updateDisplay(userMove, computerMove);
}

function pickComputerMove() {
    // Gives a number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let move;
    switch (randomNumber) {
        case 1:
            move = "rock";
            break;
        case 2:
            move = "paper";
            break;
        case 3:
            move = "scissor";
            break;
    }

    return move;
}

function reset(){
    score.wins = 0;
    score.losses = 0;
    score.draws = 0;
    updateGameValues();
    updateDisplay('-','-');
}

function autoplay(){
    const computerMove1 = pickComputerMove();
    const computerMove2 = pickComputerMove();
    if (computerMove1 == computerMove2) {
        score.draws++;
    }
    else if ((computerMove1 == 'rock' && computerMove2 == 'scissors')
        || (computerMove1 == 'scissors' && computerMove2 == 'paper')
        || (computerMove1 == 'paper' && computerMove2 == 'rock')) {
        score.wins++;
    }
    else {
        score.losses++;
    }
    updateGameValues();
    document.getElementById('user-move').innerHTML = '-';
    document.getElementById('computer-move').innerHTML = computerMove1 + ", " + computerMove2;
}

function updateGameValues(){
    document.getElementById("wins").innerHTML = score.wins;
    document.getElementById("loss").innerHTML = score.losses;
    document.getElementById("draw").innerHTML = score.draws;
}

function updateDisplay(userMove, computerMove){
    updateGameValues();
    document.getElementById('user-move').innerHTML = userMove;
    document.getElementById('computer-move').innerHTML = computerMove;
}