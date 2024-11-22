// Closures in Javascript
// Time optimisation

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const Closures = find();
console.time('6');
Closures(6);
console.timeEnd('6');
console.time('12');
Closures(12);
console.timeEnd('12');
