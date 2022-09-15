const totalSum = function (arr, i = 0, res = 0) {
  if (i == arr.length) return res;
  return totalSum(arr, i + 1, res + arr[i]);
};

const arr = [1, 5, 4, 3, 2, 5, 3, 2, 6];
console.log(totalSum(arr));
