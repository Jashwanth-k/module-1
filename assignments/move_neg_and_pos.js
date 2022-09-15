const moveNeg_andPos = function (arr) {
  const n = arr.length;
  const postiveArr = [];
  const negativeArr = [];
  for (i of arr) {
    i < 0 && postiveArr.push(i);
    i > 0 && negativeArr.push(i);
  }
  return [...postiveArr, ...negativeArr];
};

const a = [1, -1, 4, 5, 100, 5, -4, -32, -43, 10, 4];
console.log(moveNeg_andPos(a));

// this towpointer apprach works but it changes order of elements
const twoPointer = function (arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] < 0 && arr[j] > 0) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
      j--;
    } else if (arr[i] < 0) j--;
    else if (arr[j] > 0) i++;
    else {
      i++;
      j--;
    }
  }
  return arr;
};

console.log(twoPointer(a));
