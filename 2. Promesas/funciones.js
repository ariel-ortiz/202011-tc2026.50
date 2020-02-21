/**
 * Adds one to its argument.
 */
function add1(x) {
  return x + 1;
}

console.log(add1(add1(5) + add1(10)));

const x = [4, 1, 7, 2];
const y = [];

for (let e of x) {
  y.push(add1(e));
}

console.log(y);