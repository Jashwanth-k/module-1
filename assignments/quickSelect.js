// quickSort

swap = (nums, a, b) => ([nums[a], nums[b]] = [nums[b], nums[a]]);

function partition(nums, l, r, pIndex) {
  const pivot = nums[pIndex];
  swap(nums, pIndex, r);
  pIndex = l;

  for (let i = l; i < r; i++) {
    if (nums[i] < pivot) swap(nums, pIndex++, i);
  }
  swap(nums, pIndex, r);
  return pIndex;
}

const quickSort = function (nums, k) {
  const n = nums.length;
  const stack = [
    [0, k - 1],
    [k + 1, n - 1],
  ];

  while (stack.length !== 0) {
    [l, r] = stack.pop();
    if (l >= r) continue;
    let pIndex = parseInt(Math.random() * (r - l + 1) + l);
    let pivot = partition(nums, l, r, pIndex);
    stack.push([l, pivot - 1]);
    stack.push([pivot + 1, r]);
  }
};

const nums = [1, 1, 15, 21, 12, -23, 2, 23, 12, 1, 2, -1, 6, 5, -3];
quickSort(nums, 3);
console.log(nums);

// helpers

const quickSelect = function (arr, l, r, k) {
  if (l > r) return -1;

  const pIndex = parseInt(Math.random() * (r - l + 1) + l);
  let pivot = partition(arr, l, r, pIndex);
  if (pivot === arr.length - k) return arr[pivot];
  if (pivot < arr.length - k) return quickSelect(arr, pivot + 1, r, k);
  else return quickSelect(arr, l, pivot - 1, k);
};

const arr = [1, 2, 2, 3, 3];
const k = 2;
console.log(quickSelect(arr, 0, arr.length - 1, k));
