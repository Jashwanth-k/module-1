const shiftNegative = function (arr) {
  const negativeArr = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < 0) {
      negativeArr.push(arr.splice(i, 1));
      continue;
    }
    i += 1;
  }
  return arr + negativeArr;
};

console.log(shiftNegative([-5, 3, -4, 88, -9, -10, 21, 5, 6]));
console.log(shiftNegative([1, -10, 3, 0, -2, -5, 23, 3]));
