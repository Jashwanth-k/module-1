// Steps
// we need to find elements divisble by n
// iterate over the arr and take out the elements that are divisble and retrun them
// the best way to do the above operation is using filter. It filters the elements out of the array based on given condition

// T.C = O(n) one iteration
// S.C = O(k) here k is the no.of elements that are divisible by n

// code
const divisbleBy_n = function (arr, n) {
  return arr.filter((ele) => ele % n === 0);
};

const a = [23, 34, 56, 43, 16, 24, 81, 18];
const n = 9;
console.log(divisbleBy_n(a, n));
