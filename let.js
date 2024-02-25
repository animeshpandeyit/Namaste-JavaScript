// console.log(b);
// console.log(a);

// let a = 10;
// var b = 100;

let friend = "Jennifer";

function getFriend() {
  console.log(friend);

  let enemy = "Peter";
  return function getEnemy() {
    console.log(enemy);
  };
}

getFriend();

function x() {
  var x = 7;

  function y() {
    console.log(x);
  }
  y();
}
x();
