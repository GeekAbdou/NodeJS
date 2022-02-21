//printing orders

const fs = require("fs");

process.on("beforeExit", () => {
  console.log("fifth");
});

setTimeout(() => console.log("thrid"), 0);

process.nextTick(() => console.log("second"));

console.log("first");

fs.readFile(__filename, () => {
  setImmediate(() => console.log("forth"));
});

//Fisrt => nothing
//Second => nextTick
//Thrid => setTimeout
//Forth => setImmediate
//Fifth => process.on //This is the last thing done
