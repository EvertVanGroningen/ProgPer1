var readlineSync = require('readline-sync');

function dagen() {
    var jaar = readlineSync.question("Welk jaar ben je geboren");
    var maand = readlineSync.question("Welke maand ben je geboren");
    var dag = readlineSync.question("Welke dag ben je geboren");

    let now = new Date();
    let birth = new Date(jaar, maand, dag);
    let miliseconden = now - birth;

    let dagen = (miliseconden / 86400000);
    console.log("Jij bent " + Math.floor(dagen) + " dagen oud.");
}
dagen();