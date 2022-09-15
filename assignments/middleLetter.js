// Problem 3
const startMiddleLetter = function (s) {
  const n = s.length;
  const mid = Math.floor(n / 2);
  let res = "";
  for (let i = mid; i < n * 2 - (n - mid); i++) {
    res += s[i % n] + " ";
    console.log(res);
  }
};

const s = "WELCOME";
startMiddleLetter(s);
