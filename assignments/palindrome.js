const printPalindromes = function (n) {
  const reverseNumber = function (nbr) {
    let copiedNbr = nbr;
    let ans = 0;
    while (copiedNbr > 0) {
      ans = ans * 10 + (copiedNbr % 10);
      copiedNbr = Math.floor(copiedNbr / 10);
    }
    return ans == nbr;
  };

  for (let i = 0; i < n; i++) reverseNumber(i) && console.log(i);
};

printPalindromes(50);
