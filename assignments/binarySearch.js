const binSearch = function (arr, tar, si = 0, ei = arr.length - 1) {
  if (si > ei) return -1;
  let mid = si + parseInt((ei - si) / 2);
  if (arr[mid] === tar) return mid;
  if (arr[mid] > tar) return binSearch(arr, tar, si, mid - 1);
  return binSearch(arr, tar, mid + 1, ei);
};

const arr = [0, 1, 2, 3, 4, 5];
console.log(binSearch(arr, 3));
