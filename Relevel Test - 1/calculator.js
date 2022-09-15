function calculator(no1, no2, operation) {
  let ans;
  if (operation === "+") {
    ans = no1 + no2;
  } else if (operation === "-") {
    ans = no1 - no2;
  } else if (operation === "/") {
    ans = Number((no1 / no2).toFixed(2));
  } else {
    ans = no1 * no2;
  }

  console.log(ans);
  return ans;
}

calculator(4, 5, "+"); // 9

calculator(3867, 9347, "+"); // 13214

calculator(9, 3, "/"); // 3

calculator(3, 9, "/"); // 0.33  to roundOff fractional part use .toFixed(2)

calculator(56, 89, "*"); // 4984

calculator(-5, 5, "-"); // -10

calculator(56, 89, "-"); // -33

calculator(10, 1000, "+");
