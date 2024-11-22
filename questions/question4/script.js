//Closures in Javascript
//Block Scope and setTimeout Output

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

//above prints 3 3 times because var is a function scope

// fix 1. replacing var with let
// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

//fix 2. using closures

function a() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function log() {
        console.log(i);
      }, i * 1000);
    }
    inner(i);
  }
}

a();
