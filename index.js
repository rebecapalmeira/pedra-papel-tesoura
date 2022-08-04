let gamerChoice;
let computerChoice;
let computer = 0;
let human = 0;
let round = 0;
const placarFinal = 2;

function startGame() {
    runRound();
}       

function hasWinner() {
    if(human === placarFinal || computer === placarFinal) {
        declareWinner();
        round = 0;
        return true;
    }
}

function computerWin() {
    computer++;
    console.log(`Rodada ${round}: Vitória do computador`);
}

function gamerWin() {
    human++;
    console.log(`Rodada ${round}: Vitória do jogador`);
}

function draw() {
    console.log(`Rodada ${round}: Empate`);
    showRoundResult();
}

function showRoundResult() {
    console.log(`PLACAR = Computador: ${computer} / Jogador: ${human}`);
    console.log('---- **** ----')
}

function declareWinner() {
    if(human > computer) console.log("GAME OVER - Vitória do jogador");
    else console.log("GAME OVER - Vitória da máquina");
}

function runRound() {
    round++;
    
    gamerChoice = parseInt(prompt("Escolha uma das opções: [1] Pedra / [2] Papel / [3] Tesoura"), 10);
    computerChoice = parseInt(Math.random()*3 + 1);
    console.log(`Opção do Jogador: ${gamerChoice}\nOpção do Computador: ${computerChoice}`);
    
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
            case gamerChoice === computerChoice:
                draw();
                break;
            default:
                alert("Erro: opção digitada não é válida.");
        }
        showRoundResult();
    }
    if(!hasWinner()) {
        runRound()
    }
} 
