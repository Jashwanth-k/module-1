// rotate 90 deg = transpose + reverse rows

const rotateMat = function (mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = i; j < mat[0].length; j++) {
      let temp = mat[j][i];
      mat[j][i] = mat[i][j];
      mat[i][j] = temp;
    }
    mat[i] = mat[i].reverse();
  }
  console.log(mat);
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotateMat(mat);
