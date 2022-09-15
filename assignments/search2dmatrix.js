const search2D_matrix = function (mat, tar) {
  const [m, n] = [mat.length, mat[0].length];
  let [si, ei] = [0, m - 1];

  // binary search on last column of matrix. and find row index with value just > target
  while (si <= ei) {
    const mid = si + Math.floor((ei - si) / 2);
    if (mat[mid][n - 1] === tar) return true;
    else if (mat[mid][n - 1] < tar) si = mid + 1;
    else ei = mid - 1;
  }
  if (si === m) return false;

  // after getting ceil value in rightmost column we just binary search on that particular row
  let idx = si;
  [si, ei] = [0, n - 1];
  while (si <= ei) {
    const mid = si + Math.floor((ei - si) / 2);
    if (mat[idx][mid] === tar) return true;
    else if (mat[idx][mid] < tar) si = mid + 1;
    else ei = mid - 1;
  }
  return false;
};

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

console.log(search2D_matrix(matrix, 24));
