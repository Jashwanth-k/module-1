const selectionSort = function (arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let maxim = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[maxim]) maxim = j;
    }
    [arr[maxim], arr[i]] = [arr[i], arr[maxim]];
  }
};

const arr1 = [...Array(101).keys()];
selectionSort(arr1);
console.log(arr1);

const insertionSort = function (arr) {
  const n = arr.length;
  let i = 0;
  while (i < n - 2) {
    let curr = arr[i];
    let j = i + 1;
    while (j < n && arr[j] > curr) {
      arr[j - 1] = arr[j];
      j++;
    }
    arr[j - 1] = curr;

    if (arr[i] > arr[i + 1]) i++;
  }
};

const arr2 = [...Array(101).keys()];
insertionSort(arr2);
console.log(arr2);
