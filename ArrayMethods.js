let LongArray = ["Fruit", 69, true, "vegetables", 420, false];
let size = LongArray.length;
console.log(size);
console.log(LongArray.toString());
console.log(LongArray.join(" * "));
console.log(LongArray.pop());
console.log(LongArray);
let length = LongArray.push("Meat");
console.log(LongArray);
let Arr = LongArray.shift();
console.log(Arr);
console.log(LongArray);
LongArray.unshift("Food");
console.log(LongArray);
LongArray[LongArray.length] = "Consumables"
console.log(LongArray);
delete LongArray[6];
console.log(LongArray);
let ShortArray = ["no", true, 13];
let SuperArray = LongArray.concat(ShortArray);
console.log(SuperArray);
let OtherArray = [[1,2], [true, false], ["Word", "Sentance"]];
let NewArray = OtherArray.flat();
console.log(NewArray);
LongArray.splice(2, 0, "Another", 1);
console.log(LongArray);
LongArray.splice(8, 1);
console.log(LongArray);
let Samurai = LongArray.slice(1);
console.log(Samurai);