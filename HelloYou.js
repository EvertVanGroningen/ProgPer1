var readlineSync = require('readline-sync');
var punten = (0)

console.log("Hello you!");
console.log("Ik ben Evert");

var naam = readlineSync.question("Hoe heet jij?");
console.log("Hello " + naam);

console.log("Om mij beter te leren kennen gaan we een quiz doen. Door het beantwoorden van de vragen leer je mij kennen.");

antwoord = "kat"
huisdier = ["Hond", "kat", "vogel", "Hagadis"];
index = readlineSync.keyInSelect(huisdier, "Wat heb ik als huisdier?");

if ( antwoord === huisdier[index] ) {
    console.log("Dat is het juiste antwoord! Nu krijg je de hoofdprijs van ... compleet niks!")
    punten = punten + 1
} else {
    console.log("Dat is fout, er zin nu een bom in je brievenbus!")
}


antwoord = "Enkhuizen"
stad = ["Amsterdam", "Hoorn", "Grootebroek", "Enkhuizen"];
index = readlineSync.keyInSelect(stad, "Waar wwoon ik?");

if ( antwoord === stad[index] ) {
    console.log("Dat is het juiste antwoord! Nu krijg je de hoofdprijs van ... compleet niks!")
    punten = punten + 1
} else {
    console.log("Dat is fout, er zin nu een bom in je brievenbus!")
}

antwoord = "65 uur"
muziek = ["60 uur", "65 uur", "70 uur", "75 uur"];
index = readlineSync.keyInSelect(muziek, "hoe lang is mijn spotify playlist?");

if ( antwoord === muziek[index] ) {
    console.log("Dat is het juiste antwoord! Nu krijg je de hoofdprijs van ... compleet niks!")
    punten = punten + 1
} else {
    console.log("Dat is fout, er zin nu een bom in je brievenbus!")
}

antwoord = "Geen"
vriendinnen = ["3", "2", "1", "Geen"];
index = readlineSync.keyInSelect(vriendinnen, "Hoeveel vriendinnen heb ik gehad in mijn leven?");

if ( antwoord === vriendinnen[index] ) {
    console.log("Dat is het juiste antwoord! Nu krijg je de hoofdprijs van ... compleet niks!")
    punten = punten + 1
} else {
    console.log("Dat is fout, er zin nu een bom in je brievenbus!")
}

antwoord = "171cm"
lengte = ["167cm", "169cm", "171cm", "173cm"];
index = readlineSync.keyInSelect(lengte, "Hoe lang benn ik?");

if ( antwoord === lengte[index] ) {
    console.log("Dat is het juiste antwoord! Nu krijg je de hoofdprijs van ... compleet niks!")
    punten = punten + 1
} else {
    console.log("Dat is fout, er zin nu een bom in je brievenbus!")
}

if ( punten = 0) {
    console.log("wouw je hebt niks goed je bent hier echt slecht in, trouwens die bommen waren geen grap je moet misschien een bomb squad bellen")
} else if ( punten = 1) {
    console.log("nou je hebt er ten minste 1 goed, nog steeds je bent echt slecht maar ja")
} else if ( punten = 2) {
    console.log("ah jammer net niet over de helft misschien ligt je tallent ergens anders :)")
} else if ( punten = 3) {
    console.log("net over de helft, goed genoeg")
} else if ( punten = 4) {
    console.log("net niet allemaal, ik hoop voor je dat je geen perfectionist ben")
} else if ( punten = 5) {
    console.log("allemaal goed, gefeliciteerd je bent nu mijn beste stalker")
}
