const computeExponent = function (nbr) {
  const findpow = function (n, p) {
    if (p === 0) return 1;
    if (p === 1) return n;
    if (p % 2 === 0) return findpow(n * n, parseInt(p / 2));
    return n * findpow(n, p - 1);
  };

  const p = nbr % 10,
    n = parseInt(nbr / 10);
  return findpow(n, p);
};

const nbr = 2324;
console.log(computeExponent(nbr));
