const findOppositeSign = function (a, b) {
  return (a > 0 && b < 0) || (a < 0 && b > 0);
};

const res = findOppositeSign(-10, 40);
console.log(res);
