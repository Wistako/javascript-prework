let scoreComputer = 0;
let scorePlayer = 0;
let howMany = 0;

function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return "kamień";
        } else if (argMoveId == 2) {
            return `papier`;
        } else if (argMoveId == 3) {
            return `nożyce`;
        }

        printMessage("Nie znam ruchu o id " + argMoveId + ".");
        return "nieznany ruch";
    }

    function displayResult(argComputerMove, argPlayerMove) {
        console.log("moves:", argComputerMove, argPlayerMove);
        if (argComputerMove == argPlayerMove) {
            return "Remis!";
        } else if (argComputerMove == "kamień" && argPlayerMove == "papier") {
            return "Wygrałeś!";
        } else if (argComputerMove == `papier` && argPlayerMove == "nożyce") {
            return "Wygrałeś!";
        } else if (argComputerMove == `nożyce` && argPlayerMove == "kamień") {
            return "Wygrałeś!";
        } else if (
            argPlayerMove == `papier` ||
            argPlayerMove == `nożyce` ||
            argPlayerMove == `kamień`
        ) {
            return "Przegrałeś!";
        } else {
            return "Źle wybrałeś liczbe!";
        }
    }
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    //console.log("Wylosowana liczba to: " + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage("Mój ruch to: " + computerMove);

    //console.log("Gracz wpisał: " + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage("Twój ruch to: " + playerMove);

    printMessage(displayResult(computerMove, playerMove));
    if (displayResult(computerMove, playerMove) == "Wygrałeś!") {
        scorePlayer++;
    } else if (displayResult(computerMove, playerMove) == "Przegrałeś!") {
        scoreComputer++;
    }
    printResult(
        scorePlayer +
            " - " +
            scoreComputer +
            " = " +
            (scorePlayer - scoreComputer)
    );
    howMany++;
    printResult("Grałeś: " + howMany + " razy");
}

//
// printResult("Liczba gier: " + moves);
// printResult("Ilość wygranych: " + result);
for (let i = 0; i < 100; i++) {
    document.getElementById("play-rock").addEventListener("click", function () {
        playGame(1);
    });
}
document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function () {
    playGame(3);
});
