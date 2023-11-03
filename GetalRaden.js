let rs = require("readline-sync");

function rollDice(){
    let rand = Math.ceil(Math.random() * 100);
    return rand;
}
rollDice()
let RandomGetal = rollDice();

let vraag = rs.question("Wat is het getal tussen 0 en 100")

while (vraag != RandomGetal) {
    while(vraag < RandomGetal){
        vraag = rs.question("nee hoger. Wat is het getal tussen 0 en 100")
    }
    while(vraag > RandomGetal){
        vraag = rs.question("nee lager. Wat is het getal tussen 0 en 100")
    }
}

if (vraag == RandomGetal){
    console.log("goed geraden, het was" + RandomGetal)
} 