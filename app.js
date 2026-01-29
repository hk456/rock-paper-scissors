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

function updateDisplay(userMove, computerMove){
    document.getElementById("wins").innerHTML = score.wins;
    document.getElementById("loss").innerHTML = score.losses;
    document.getElementById("draw").innerHTML = score.draws;

    document.getElementById('user-move').innerHTML = userMove;
    document.getElementById('computer-move').innerHTML = computerMove;
}