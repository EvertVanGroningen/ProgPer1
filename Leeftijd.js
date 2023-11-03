var readlineSync = require('readline-sync');

var leeftijd = readlineSync.question("Goedenavond hoe oud bent u?");
if(leeftijd > 18) {
    var ID = readlineSync.question("Mag ik je ID zien?");
    if(ID =="ja") {
        console.log("Kom verder");
    } else {
        console.log("Dan mag je helaas niet naar binnen.");
    }
} else {
    console.log("Dan mag je helaas niet naar binnen.");
}
