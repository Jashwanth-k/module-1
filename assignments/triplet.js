const findTriplet = function (arr, tar) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1,
      k = n - 1;
    const curtar = tar - arr[i];
    while (j < k) {
      if (arr[j] + arr[k] > curtar) k--;
      else if (arr[j] + arr[k] < curtar) j++;
      else return [arr[i], arr[j], arr[k]];
    }
  }
  return "no triplet found";
};

const arr = [1, 3, 10, 2, 5, 4, 3];
const tar = 19;
console.log(findTriplet(arr, tar));
