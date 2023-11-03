let rl = require('readline-sync');

let zin = rl.question("Zeg een zin:");

console.log(mockZin(zin));

function mockZin(zin){
    let nieuweZin = ""
    for (let i = 0; i < zin.length; i++) {
        let element = zin[i]
        if (Math.random() < 0.5) {
            element = element.toUpperCase()
        }
        nieuweZin += element
    }
    return nieuweZin
}