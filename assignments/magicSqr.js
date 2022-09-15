const magicSquare = function (mat) {
  const n = mat.length;
  let prev = null;

  // diagonal sum
  let diagsum1 = 0,
    diagsum2 = 0;
  for (let i = 0; i < n; i++) {
    diagsum1 += mat[i][i];
    diagsum2 += mat[i][n - 1 - i];
  }
  if (diagsum1 !== diagsum2) return false;

  // row sum and col sum
  for (let i = 0; i < n; i++) {
    let rowsum = 0,
      colsum = 0;
    for (let j = 0; j < n; j++) {
      rowsum += mat[i][j];
      colsum += mat[j][i];
    }
    if (rowsum !== colsum || rowsum !== diagsum1) return false;
  }
  return true;
};

matrix = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

console.log(magicSquare(matrix));
