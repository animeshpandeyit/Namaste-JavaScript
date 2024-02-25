// var n = 2;

// function square(num) {
//   var ans = num * num;
//   return ans;
// }

// var square2 = square(n);
// var square4 = square(4);

// console.log(square2);
// console.log(square4);

// var x = 7;

// function getName() {
//   console.log("namaste javascript");
// }
// getName();
// console.log(x);
// console.log(getName);

// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName() {
//   console.log("namaste javascript");
// }
//

var x = 1;
a();
b();

console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

function test() {
  console.log(a);
  var a = 10;
  console.log(a);
}

test();

/* The expression `console.log("5" + 3);` is concatenating the string "5" with the number 3. In
JavaScript, when you use the `+` operator with a string and a number, the number is implicitly
converted to a string and then concatenated with the other string. So, the output of this expression
will be the string "53". */
console.log("5" + 3);
/* The expression `console.log("5" - 3);` is attempting to subtract the number 3 from the string "5".
In JavaScript, when you use the `-` operator with a string and a number, the string is implicitly
converted to a number. So, in this case, the string "5" is converted to the number 5 and then
subtracted by 3. The output of this expression will be the number 2. */
console.log("5" - 3);

var a = 5;

console.log(a++);
console.log(a);

let array = [0, 1, 2, 3, 4, 5];

const lessThan = array
  .filter(function (x) {
    return x < 3;
  })
  .map((xy) => xy * 2)
  .reduce(function (acc, currentValue) {
    return acc + currentValue;
  }, 0);
console.log(lessThan);
