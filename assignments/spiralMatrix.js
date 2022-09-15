// steps
// initialize top,down,left,right as boundaries of matrix
// we need to walk in spiral order
// direction === 0: left to right
// direction === 1: top to down
// direction === 2: right to left
// direction === 3; down to top
// we will repeat the same loop till left <= right and top <= down
// if we break this conditions means we already explored all the cells in the matrix

// m = rows, n = cols
// T.C = O(M*N)
// S.C = O(1)

const printSpiralMatrix = function (mat) {
  const [m, n] = [mat.length, mat[0].length];
  let [top, down, left, right] = [0, m - 1, 0, n - 1];
  let direction = 0;

  while (top <= down && left <= right) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        console.log(mat[top][i]);
      }
      top++;
    } else if (direction === 1) {
      for (let i = top; i <= down; i++) {
        console.log(mat[i][right]);
      }
      right--;
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) {
        console.log(mat[down][i]);
      }
      down--;
    } else if (direction === 3) {
      for (let i = down; i >= top; i--) {
        console.log(mat[i][left]);
      }
      left++;
    }

    direction = (direction + 1) % 4;
  }
  return;
};

const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
printSpiralMatrix(mat);
