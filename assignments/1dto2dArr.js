const covertArray = function (arr) {
  const n = arr.length;
  return arr.reduce(
    (acc, el, idx) => {
      if (idx <= Math.floor((n - 1) / 2)) {
        acc[0].push(el);
        return acc;
      }
      acc[1].push(el);
      return acc;
    },
    [[], []]
  );
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(covertArray(arr));
