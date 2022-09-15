const secondSmallest = function (arr) {
  let [firSmallest, secSmallest] = [1e10, 1e10];
  for (i of arr) {
    if (i < firSmallest) {
      secSmallest = firSmallest;
      firSmallest = i;
    } else if (i !== firSmallest) secSmallest = Math.min(secSmallest, i);
  }
  return secSmallest;
};

const arr = [11, 34, 54, 22, 13, 78];
console.log(secondSmallest(arr));
