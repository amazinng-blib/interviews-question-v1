//Make this function run only once

// let view;
// function likeTheVideo() {
//   let called = 0;
//   return function () {
//     if (called > 0) {
//       console.log('Already Subscribed to Roadside-Coder');
//     } else {
//       view = 'Roadside-Coder';
//       console.log('Subscribe to', view);
//       called++;
//     }
//   };
// }

// let isSubScribed = likeTheVideo();
// isSubScribed();
// isSubScribed();
// isSubScribed();
// isSubScribed();
// isSubScribed();
// isSubScribed();

//Another way of doing this

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

const hello = once((q, b) => console.log('hello', q, b));

hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
