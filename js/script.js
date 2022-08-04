let computerWins = 0;
let gamerWins = 0;
let round = 0;
const rounds = 2;

function startGame() {
    runRound();
    if(playAgain()) {
        restartCounters();
        startGame();
    }
}       

function hasWinner() {
    if(gamerWins === rounds || computerWins === rounds) {
        declareWinner();
        return true;
    }
}

function restartCounters() {
    round = 0;
    gamerWins = 0;
    computerWins = 0;
}

function askForGamerChoice() {
    return parseInt(prompt("Escolha uma das opções: [1] Pedra / [2] Papel / [3] Tesoura"), 10);
}

function playAgain() {
    return confirm("Do you want to play again?");
}

function computerWin() {
    computerWins++;
    console.log(`Rodada ${round}: Vitória do computador`);
}

function gamerWin() {
    gamerWins++;
    console.log(`Rodada ${round}: Vitória do jogador`);
}

function draw() {
    console.log(`Rodada ${round}: Empate`);
}

function showRoundResult() {
    console.log(`PLACAR = Computador: ${computerWins} / Jogador: ${gamerWins}`);
    console.log('---- **** ----')
}

function declareWinner() {
    if(gamerWins > computerWins) console.log("GAME OVER - Vitória do jogador");
    else console.log("GAME OVER - Vitória da máquina");
}

function determineRoundWinner(gamerChoice, computerChoice) {
    if(gamerChoice === computerChoice) {
        draw();
    } else {
        switch(gamerChoice) {
            case 1:           
                computerChoice === 2 ? computerWin() : gamerWin();                                    
                break;
            case 2:
            computerChoice === 3 ? computerWin() : gamerWin();                 
            break;
            case 3:
                computerChoice === 1 ? computerWin() : gamerWin();                  
                break;
            default:
                alert("Erro: opção digitada não é válida.");
        }       
    }
}

function runRound() {
    round++;
    
    let gamerChoice = askForGamerChoice();
    let computerChoice = parseInt(Math.random()*3 + 1);
    console.log(`Opção do Jogador: ${gamerChoice}\nOpção do Computador: ${computerChoice}`);
    
    determineRoundWinner(gamerChoice, computerChoice);
    showRoundResult();
    if(!hasWinner()) {
        runRound();
    }
} 
