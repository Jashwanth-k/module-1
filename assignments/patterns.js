const printHelper = function (i, n, rev = false) {
  const helper = [];
  for (let j = i; j <= n; j++) {
    helper.push(j);
  }
  rev
    ? console.log(" ".repeat(i - 1), helper.reverse().join(" "))
    : console.log(" ".repeat(i - 1), helper.join(" "));
};

const printPattern1 = function (n, rev = false) {
  for (let i = 1; i <= n; i++) {
    printHelper(i, n, rev);
  }
  for (let i = n - 1; i >= 1; i--) {
    printHelper(i, n, rev);
  }
};

printPattern1(7);
console.log();
printPattern1(7, true);
