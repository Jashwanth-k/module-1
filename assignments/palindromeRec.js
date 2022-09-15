const checkPalin = function (s, si = 0, ei = s.length - 1) {
  if (si > ei) return true;
  return s[si] === s[ei] && checkPalin(s, ++si, --ei);
};

const s = "adsffsda";
console.log(checkPalin(s));
