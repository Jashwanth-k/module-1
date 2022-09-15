// Transpose of matrix is simply inverting rows,cols [i,j] to [j,i]
// to create empty 2d array in js 4*4
// create an empty arr of size 4
// use map on the array and for every ele create empty array of size 4

const transpose = function (mat) {
  const [m, n] = [mat.length, mat[0].length];
  const output = Array(n)
    .fill(0)
    .map((subarr) => Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      output[j][i] = mat[i][j];
    }
  }
  console.log(output);
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
transpose(mat);
