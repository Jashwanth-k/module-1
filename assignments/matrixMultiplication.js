const matrixMul = function (mat1, mat2) {
  const m1 = mat1.length,
    n1 = mat1[0].length,
    m2 = mat2.length,
    n2 = mat2[0].length;
  if (n1 !== m2) return;
  const roatm2 = [...Array(n2)].map((el) => [...Array(m2)]);
  for (let i = 0; i < m2; i++) {
    for (let j = 0; j < n2; j++) {
      roatm2[j][i] = mat2[i][j];
    }
  }

  const res = [];
  for (let i = 0; i < m1; i++) {
    const curmat = [];
    let submat1 = mat1[i];
    for (let j = 0; j < n2; j++) {
      let submat2 = roatm2[j];
      let cur = 0;
      for (let k = 0; k < n1; k++) {
        cur += submat1[k] * submat2[k];
      }
      curmat.push(cur);
    }
    res.push(curmat);
  }
  return res;
};

const mat1 = [
  [2, 3, 6],
  [1, 2, 5],
  [5, 6, 7],
];
const mat2 = [
  [2, 1],
  [5, 3],
  [4, 2],
];
console.log(matrixMul(mat1, mat2));

// m1 * n1 is matrix1
// m2 * n2 is matrix2
// T.C
// O(m1 * n1 * n2) worst case
// S.C
// O(m1 * n2) for result matrix + O(m2 * n2) for rotating matrix2 worst cases
