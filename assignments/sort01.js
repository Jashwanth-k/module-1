const sort01 = function (arr) {
  let [i, j] = [0, arr.length - 1];
  while (i < j) {
    if (arr[i] === 1 && arr[j] === 0) {
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
      j--;
    } else if (arr[i] === 0) i++;
    else if (arr[j] === 1) j--;
  }
  return arr;
};

const arr = [0, 1, 1, 0, 1, 0, 0, 1];
console.log(sort01(arr));
