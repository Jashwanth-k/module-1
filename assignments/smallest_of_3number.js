const findMin = function (...helper) {
  let ans = Infinity;
  for (i of helper) ans = Math.min(ans, i);
  return ans;
};

console.log(findMin(12, 44, 2));
