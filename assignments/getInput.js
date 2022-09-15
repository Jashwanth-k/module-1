// Problem 2
// Node.js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("How are you", (input) => {
  console.log(input);
  readline.close();
});

// prompt in browser
const greet = prompt("How are you", "Good");
console.log(greet);
