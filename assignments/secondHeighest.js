const secondHighestValue = function (arr) {
  let firstHighest = -1e10;
  let secondHighest = -1e10;
  // arr = new Set(arr);
  for (i of arr) {
    if (i > firstHighest) {
      secondHighest = firstHighest;
      firstHighest = i;
    } else if (i !== firstHighest) {
      secondHighest = Math.max(secondHighest, i);
    }
  }
  return secondHighest;
};

const a = [1, 2, 10, 4, 5, 10, 7, 10, 9, 1, 10];
console.log(secondHighestValue(a));
