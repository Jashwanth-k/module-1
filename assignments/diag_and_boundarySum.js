const diagonalAndBoundarySum = function (arr) {
  const n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        i === 0 ||
        j === 0 ||
        i === n - 1 ||
        j === n - 1 ||
        i === j ||
        j === n - i - 1
      )
        sum += arr[i][j];
    }
  }
  return sum;
};

const arr = [
  [1, 2, 3, 4, 1],
  [5, 6, 7, 8, 2],
  [9, 10, 11, 12, 13],
  [13, 14, 15, 16, 15],
  [11, 12, 15, 19, 15],
];
console.log(diagonalAndBoundarySum(arr));
