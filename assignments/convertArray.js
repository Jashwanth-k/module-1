const convertArray = function (arr) {
  const n = arr.length;
  const res = [...Array(n).fill(0)];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) res[i]++;
    }
  }
  return res;
};

const arr = [1, 5, 4, 3, 21, 23, 4, 3];
console.log(convertArray(arr));
