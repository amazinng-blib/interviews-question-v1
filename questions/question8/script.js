//Memoize/Caching polyfill in js

function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    var argsCached = JSON.stringify(args);
    if (!res[argsCached]) {
      res[argsCached] = fn.call(context || this, ...args);
    }
    return res[argsCached];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {
    return num1 * num2;
  }
};

const memoizeClumsyFunction = myMemoize(clumsyProduct);

console.time('First call');
console.log(memoizeClumsyFunction(9467, 7649));
console.timeEnd('First call');

console.time('second call');
console.log(memoizeClumsyFunction(9467, 7649));
console.timeEnd('second call');
