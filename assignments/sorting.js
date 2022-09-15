// T.C = O(nlogn)
// S.C = O(n)

const merge = function (arr, si, ei, mid) {
  let [i, j, m, n] = [si, mid + 1, mid, ei];
  while (i < m && j < n) {
    if (arr[i] <= arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    } else {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      j++;
    }
  }

  return;
};

const mergeSort = function (arr, si, ei) {
  if (si >= ei) return;

  const mid = parseInt(si + (ei - si) / 2);
  mergeSort(arr, 0, mid);
  mergeSort(arr, mid + 1, ei);
  merge(arr, si, ei);
};

const arr = [1, 5, 6, 7, 3, 2, 1, 4];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
