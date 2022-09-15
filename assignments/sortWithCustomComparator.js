const sortWithComparator = function (seq, arr) {
  const priority = {};
  [...seq].forEach((el, idx) => (priority[el] = idx));
  arr.sort((a, b) => priority[a] - priority[b]);
  return arr;
};

const seq = "2356481790";
const arr = [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0];
console.log(sortWithComparator(seq, arr));
