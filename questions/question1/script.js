// Closures in Javascript
// lexical Scope

function subscribe() {
  const name = 'RoadSlideCoder';
  function displayName() {
    console.log(name);
  }

  return displayName;
}

const funct = subscribe();
funct();

// Closures Scope Chain

let e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));

// What will be logged in the console?

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); //print 1
  }
  console.log(count); //print 0
})();
