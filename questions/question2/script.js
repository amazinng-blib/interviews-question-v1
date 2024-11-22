// Write a function that will allow you to do this

function createBase(num) {
  return function (nextNum) {
    console.log(num + nextNum);
  };
}

var addSix = createBase(6);
addSix(10); //returns  16
addSix(21); //returns 27
