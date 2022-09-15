const multiplication = function (arr) {
  const newArr = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    i == 0 && newArr.push(arr[i] * arr[i + 1]);
    i == n - 1 && newArr.push(arr[i] * arr[i - 1]);
    i != 0 && i != n - 1 && newArr.push(arr[i - 1] * arr[i + 1]);
  }
  return newArr;
};

const a = [2, 3, 4, 5, 6];
console.log(multiplication(a));
