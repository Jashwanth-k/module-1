// steps
// Iterate over every cell in the matrix
// if the cell is bomb i.e -1
// increment its neighbours by +1 if it's neighbour is not a -1;

// T.C = O(M*N*4) in worst case every cell is a bomb and for every cell we are exploring in 4 diretions
// S.C = O(1)

const helper = function (mat, r, c, m, n) {
  const paths = [
    [r, c + 1],
    [r, c - 1],
    [r + 1, c],
    [r - 1, c],
  ];
  for ([nr, nc] of paths) {
    if (nr >= 0 && nr < m && nc >= 0 && nc < n && mat[nr][nc] !== -1)
      mat[nr][nc]++;
  }
};
const explodeBombs = function (mat) {
  const [m, n] = [mat.length, mat[0].length];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === -1) helper(mat, i, j, m, n);
    }
  }
  console.log(mat);
};

const mat = [
  [-1, 0, 0, 0],
  [0, 0, -1, 0],
  [0, -1, -1, 0],
];
explodeBombs(mat);
