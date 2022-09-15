const smallest_of_3numbers = function (a, b, c) {
  return [a, b, c].sort((a, b) => a - b)[0];
};

console.log(smallest_of_3numbers(10, 30, 4));
