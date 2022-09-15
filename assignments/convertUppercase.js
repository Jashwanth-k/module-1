// Problem 4
const convertUppercase = function (s) {
  const helper = s.split("\n");
  for (i of helper) console.log(i.toUpperCase());
};

const s = `divya
seetha
shanmugi
mohan khan
mohan tata`;
convertUppercase(s);
