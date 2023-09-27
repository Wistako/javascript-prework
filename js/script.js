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

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if (randomNumber == 1) {
    computerMove = "kamień";
} else if (randomNumber == 2) {
    computerMove = `papier`;
} else {
    computerMove = `nożyce`;
}
*/

printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(playerInput);

/*
if (playerInput == "1") {
    playerMove = "kamień";
} else if (playerInput == "2") {
    playerMove = "papier";
} else {
    playerMove = "nożyce";
}
*/

printMessage("Twój ruch to: " + playerMove);

printMessage(displayResult(computerMove, playerMove));
/*
if (computerMove == playerMove) {
    printMessage("Remis!");
} else if (computerMove == "kamień" && playerMove == "papier") {
    printMessage("Wygrałeś!");
} else if (computerMove == `papier` && playerMove == "nożyce") {
    printMessage("Wygrałeś!");
} else if (computerMove == `nożyce` && playerMove == "kamień") {
    printMessage("Wygrałeś!");
} else {
    printMessage("Przegrałeś!");
}
*/
