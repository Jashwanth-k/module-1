const { rejects } = require("assert");
const { resolve } = require("path");

function excelColumnToNumber(comb) {
  let result = 0;

  for (let i = comb.length - 1; i >= 0; i--) {
    let multiplier = Math.pow(26, comb.length - i - 1);
    result =
      result + (comb[i].charCodeAt(0) - "A".charCodeAt(0) + 1) * multiplier;
  }
  return result;
}

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("", (numberOfEle) => {
//   readline.question("", (input) => {
//     console.log(input);
//   });
// });

const num1 = 20;
const num2 = 10;
const findGCD = (num1, num2) => {
  let a = Math.abs(num1);
  let b = Math.abs(num2);
  while (a && b && a !== b) {
    if (a > b) {
      [a, b] = [a - b, b];
    } else {
      [a, b] = [a, b - a];
    }
  }
  return a || b;
};
// console.log(findGCD(num1, num2));

const readInput = async function () {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ans = await new Promise((resolve, _) => {
    readline.question("enter positions :", (a) => {
      readline.close();
      resolve(a);
    });
  });

  return ans;
};

// const takeInput = async function () {
//   let res = await readInput();
//   console.log(res);
// };
