const maxUniqueElements = function (mat) {
  const [m, n] = [mat.length, mat[0].length];
  let max = 0;
  for (let i = 0; i < n; i++) {
    const freq = new Set();
    for (let j = 0; j < n; j++) {
      freq.add(mat[i][j]);
    }
    max = Math.max(max, freq.size);
  }
  return max;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(maxUniqueElements(matrix));
