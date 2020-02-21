/**
 * Adds one to its argument.
 */
function add1(x) {
  return x + 1;
}

/**
 * Returns true if x is even, false otherwise.
 */
function isEven(x) {
  return x % 2 == 0;
}

console.log(add1(add1(5) + add1(10)));

const x = [4, 1, 7, 2];
const y = x.map(add1);
const z = x.filter(isEven);
const a = x.filter(t => t > 4);
const b = x.reduce((acum, elem) => acum + elem, 0);

console.log(x, y, z, a, b);
x.forEach(e => console.log(e));

const c = (f, g) => {
  console.log(f * g);
};

c(5, 4);

console.log((x => x * x)(3));

((a, b, c) => {
  console.log('------------');
  console.log(a);
  console.log(b);
  console.log(c);
  console.log('------------');
})(1, 2, 3);

