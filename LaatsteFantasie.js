let rl = require("readline-sync");
let slimeHP = 20
let playerHP = 20

function AskName() {
    slimeHP=20
    playerHP=20
    var naam = rl.question("Hello traveler, may I ask for you name");
    if(naam == "nee" || naam == "Nee" || naam == "no" || naam == "No" || naam == "Liever niet" || naam == "I'd prefer not to") {
        console.log("Well okay I guess not");
        return;
    } else {
        console.log("Hello " + naam + " ,Its time to play a game.");
        StartSpel();
    }
}

AskName();

function StartSpel() {
    console.log("");
    console.log("it is time to go exploratorin.");
    console.log("");
    console.log("It is time for battle. You encounter a slime");
    StartBattle();
}

function StartBattle() {
    console.log("");
    console.log("The slime gets ready to attack, it has " + slimeHP + " HP.");
    console.log("");
    console.log("You have " + playerHP + " HP");
    console.log("");
    console.log("What do you do?");
    console.log("1.Attack");
    console.log("2.Run");
    console.log("3.Cry")
    let Action = rl.question("well?");
    if(Action == "1" || Action == "Attack" || Action == "attack") {
        PlayerAttack();
    } else if(Action == "2" || Action == "Run" || Action == "run") {
        Runnin();
    } else if(Action == "3" || Action == "Cry" || Action == "cry") {
        console.log("You sit in a corner and cry");
        SlimeAttack();
    } else {
        console.log("Sorry but that isn't an option, try again.");
        StartBattle();
    }
}

function Runnin() {
    console.log("You run away from the battle and go home to suck on your thumb or something.");
    return
}

function PlayerAttack() {
    let rand = Math.ceil(Math.random() * 7);
    console.log("You attack the slime, you do " + rand + " damage");
    slimeHP -= rand
    SlimeDeath();
}

function SlimeAttack() {
    console.log("The slime attacks you and does 3 damage");
    playerHP -= 3
    PlayerDeath();
}

function PlayerDeath() {
    if(playerHP <= 0) {
        console.log("You died");
        console.log("Do you want to try again?");
        let TryAgain = rl.question("Yes or no?");
        if(TryAgain == "Yes" || TryAgain == "yes" || TryAgain == "Ja" || TryAgain == "ja") {
            AskName();
        } else if(TryAgain == "No" || TryAgain == "no" || TryAgain == "nee" || TryAgain == "Nee") {
            console.log("Game over");
            return
        }
    } else {
        StartBattle();
    }
}

function SlimeDeath() {
    if(slimeHP <= 0) {
        console.log("The slime dies, you win.");
        console.log("Do you want to try again?");
        let TryAgain2 = rl.question("Yes or no?");
        if(TryAgain2 == "Yes" || TryAgain2 == "yes" || TryAgain2 == "Ja" || TryAgain2 == "ja") {
            AskName();
        } else if(TryAgain2 == "No" || TryAgain == "no" || TryAgain == "nee" || TryAgain == "Nee") {
            console.log("The end.");
        }
    } else {
        SlimeAttack();
    }
}