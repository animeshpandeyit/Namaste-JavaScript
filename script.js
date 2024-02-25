// getName();

// console.log(x);
// console.log(getName);

// var x = 7;

// function getName() {
//   console.log("namaste javascript");
// }

// getName();

// console.log(x);
// console.log(getName);

// const fruits = ["apple", "orange", "mango", "grape"];

// // fruits.pop();

// console.log(fruits);

// Array.prototype.myPop = function () {
//   if (this.length === 0) {
//     return undefined;
//   } else {
//     const lastIndex = this.length - 1;
//     const poppedElement = this[lastIndex];
//     this.length = lastIndex;
//     return poppedElement;
//   }
// };

// fruits.myPop();
// console.log(fruits);

// // How functions work in javascript
// console.log("How functions work in javascript");

// var x = 1;

// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }
// The Scope Chain, 🔥Scope & Lexical Environment | Namaste JavaScript Ep. 7
// console.log(
//   "The Scope Chain, 🔥Scope & Lexical Environment | Namaste JavaScript Ep. 7"
// );

// function a() {
//   var b = 10;

//   c();

//   function c() {
//     console.log(b);
//   }
// }

// a();

// console.log(b);
// a = 10;
// var b = 100;
// console.log("BLOCK SCOPE & Shadowing in JS 🔥| Namaste JavaScript 🙏 Ep. 9");
// {
//   var a = 1;
//   let b = 10;
//   const c = 100;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
console.log("Closures in JS 🔥 | Namaste JavaScript Episode 10");

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
// b
// function c(a) {
//   return a + b;
// }

// c(20);
// console.log(c(10));

// function clickHandler(color) {
//   return function () {
//     document.body.style.backgroundColor = `${color}`;
//   };
// }

// // document.getElementById('orange').onclick = clickHandler("orange");
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("orange").onclick = clickHandler("orange");
//   document.getElementById("green").onclick = clickHandler("green");
// });

// function outer() {
//   const b = 50;

//   function inner() {
//     const a = 100;
//     console.log(`a is ${a} and b is ${b}, the sum is ${a + b}`);
//   }
//   return inner;
// }
// // first invocation of outer
// const fnFirst = outer();
// // second invocation of outer
// const fnSecond = outer();
// // what's inside?
// // note console.dir() and not console.log() command
// console.dir(fnFirst);
// console.dir(fnSecond);
console.log(
  "setTimeout + Closures Interview Question 🔥 | Namaste 🙏 JavaScript Ep. 11 "
);

console.log(
  "FIRST CLASS FUNCTIONS 🔥ft. Anonymous Functions | Namaste JavaScript Ep. 13"
);

// function x() {
//   function hello() {
//     console.log("==>", "hello");
//     return hello();
//   }
// }

// const fnFirst = x();
// console.log(fnFirst);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
/* The line `sum += arr[i];` is shorthand for `sum = sum + arr[i];`. It is adding the value at index
  `i` of the array `arr` to the current value of `sum`, effectively calculating the sum of all
  elements in the array. */
// sum +=
/* The `+=` operator is a shorthand assignment operator in JavaScript. It adds the value on the
  right-hand side of the operator to the variable on the left-hand side and assigns the result
  back to the variable. */
// arr[i];
// }
// console.log(sum);

console.log(
  "Callback Functions in JS ft. Event Listeners 🔥| Namaste JavaScript Ep. 14"
);

// setTimeout(function () {
//   console.log("Callback Functions in JS ft. Event");
// }, 5000);

// function x(y) {
//   console.log("x");
//   // y();
// }

// x(function y() {
//   console.log("y");
// });

//

// document.getElementById("clickMe").addEventListener("click", function() {
//   console.log("clickMe button clicked");
// });

// document.addEventListener("DOMContentLoaded", function () {
//   function attachEventListener() {
//     let count = 0;
//     document.getElementById("click").addEventListener("click", function xyz() {
//       console.log("Button clicked", count++);
//     });
//   }
//   attachEventListener();
// });

console.log(
  "Asynchronous JavaScript & EVENT LOOP from scratch 🔥 | Namaste JavaScript Ep.15"
);

// console.log("Starting");

// setTimeout(function () {
//   console.log("Callback");
// }, 5000);
// console.log("End");
//

// console.log("Start");
// document.getElementById("btn").addEventListener("click", function cb() {
//   console.log("Callback");
// });
// console.log("error");

let username = "animesh pandey is awesome";

const capitalize = username.toLocaleUpperCase();
console.log(capitalize);

console.log("TRUST ISSUES with setTimeout() | Namaste JavaScript Ep.17");

// console.log("Starting");

// setTimeout(function cb() {
//   console.log("Callback");
// }, 5000);

// console.log("End");

// let startDate = new Date().getTime();

// let endDate = startDate;

// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("while expiration");

console.log(
  "Higher-Order Functions ft. Functional Programming | Namaste JavaScript Ep. 18"
);

// const radius = [2, 3, 4, 5, 6];

// const calculateOutput = function (radius) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateOutput(radius));

//
/* This code snippet defines an array `radius` with values `[3, 1, 2, 4]`. */
const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const calculate = function (radius, logic) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

/* The `console.log(calculate(radius, area));` statement is calling the `calculate` function with the
`radius` array and the `area` function as arguments. */
console.log(calculate(radius, area));

//

const arr = [5, 1, 3, 2, 6];

// filter odd numbers

const oddNumber = arr.filter(function odd(value) {
  return value % 2 != 0;
});
console.log(oddNumber);
//

const carProducts = [
  {
    name: "Toyota Camry",
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 30000,
    color: "Silver",
    features: ["Automatic transmission", "Leather seats", "Backup camera"],
  },
  {
    name: "Honda Civic",
    make: "Honda",
    model: "Civic",
    year: 2024,
    price: 25000,
    color: "Red",
    features: ["Manual transmission", "Cloth seats", "Sunroof"],
  },
  {
    name: "Ford Mustang",
    make: "Ford",
    model: "Mustang",
    year: 2022,
    price: 40000,
    color: "Black",
    features: ["Automatic transmission", "Leather seats", "Navigation system"],
  },
  // Add more car products as needed
];

// console.log(carProducts);

// // filter according to color of car products

// const filterByColor = carProducts.filter(function clr(color) {
//   return color.color === "Black";
// });

// console.log(filterByColor);

console.log(carProducts);

// filter according to color of car products
// const filterByColor = carProducts.filter(function (car) {
//   return car.color === "Black";
// });

// console.log(filterByColor);

// const filteredCarByDateofManufacturer = [];

// const filterManufraction = carProducts.filter(function mfg(car) {
//   return car.year
// });

// console.log(carProducts);

// // Filter by manufacturing date in ascending order
// const sortByManufacturingDate = carProducts.slice().sort(function (car1, car2) {
//   return car1.year - car2.year;
// });

// console.log(sortByManufacturingDate);
const filteredCarByDateofManufacturer = carProducts
  .filter(function (car) {
    // Specify the condition for filtering based on manufacturing date
    return car.year > 0; // You can adjust this condition as needed
  })
  .sort(function (car1, car2) {
    // Sort the filtered array by manufacturing date in ascending order
    return car1.year - car2.year;
  });

console.log(filteredCarByDateofManufacturer);

//

const array = [5, 1, 3, 2, 6];

// find the maximum

function findMax(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(findMax(array));

//  lets do it with reduce function

const output = array.reduce(function (max, current) {
  if (current > max) {
    max = current;
  }
  return max;
}, 0);
console.log(output);
//
const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    age: 16,
  },

  {
    firstName: "Aice",
    lastName: "Joh",
    age: 30,
  },

  {
    firstName: "Alce",
    lastName: "Json",
    age: 99,
  },

  {
    firstName: "Alie",
    lastName: "Son",
    age: 13,
  },

  {
    firstName: "Alic",
    lastName: "Ohson",
    age: 35,
  },
];

console.log(users);

// list of full names
// {John Doe, Jane Smith,.....}

const fullName = users.map(function (users) {
  return users.firstName + " " + users.lastName;
});
console.log(fullName);

// {how many people have age 26  26:2,75:1}

/* This code snippet is using the `reduce` method on the `users` array to create an object `age` that
stores the count of users based on their age. */
const age = users.reduce(function (accumulator, user) {
  /* This code snippet is using the `reduce` method to iterate over the `users` array and create an
object `age` that stores the count of users based on their age. */
  /* The line `if (accumulator[user.age]) {` is checking if the `accumulator` object already has a
  property corresponding to the current user's age. If the property exists (i.e., if it is truthy),
  it increments the count of users with that age by 1. If the property does not exist (i.e., it is
  falsy), it initializes the count for that age to 1. This logic is used to keep track of the number
  of users with each unique age in the `users` array. */
  if (accumulator[user.age]) {
    accumulator[user.age]++;
  } else {
    accumulator[user.age] = 1;
  }
  return accumulator;
}, {});

console.log(age);

// list of all the people whoes  age is less than 30..

// const young = users.filter(function (x) {
//   const xyz = x.age < 30;
//   return xyz;
// });
// console.log(young);

const young = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(young);

//

// const youngPeople = users.reduce(function (accumulator, current) {
//   if (current.age < 30) {
//     accumulator.push(current.firstName);
//   }
//   return accumulator;
// }, {});

// console.log(youngPeople);

const output1 = users.reduce((acc, current) => {
  if (current.age < 30) {
    /* The line `acc.push(current.firstName);` is adding the `firstName` property of the current user
      object to the `acc` array. This is done for users whose age is less than 30, as part of
      filtering out and collecting the first names of young people from the `users` array. */
    acc.push(current.firstName);
  }

  return acc;
}, []);

console.log("dasdaa", output1);

//

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15

const maximum = numbers.reduce(function (accumulator, currentValue) {
  /* The above code is checking if the `currentValue` is greater than the `accumulator`. If it is, then
it assigns the `currentValue` to the `accumulator`. This code is likely part of a loop or function
where it is used to find the maximum value among a series of values. */
  if (currentValue > accumulator) {
    accumulator = currentValue;
  }
  return accumulator;
}, 0);

console.log("maximum", maximum);

const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = arrays.reduce(function (accumulator, currentValue) {
  accumulator.concat(currentValue);
}, []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
