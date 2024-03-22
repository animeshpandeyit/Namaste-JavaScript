// this async function always returns a promise.

// returns == a promise
// returns == "if it is a string" it will take the value and wrap it in a promise and return it a value

// const p = new Promise(function (resolve, reject) {
//   resolve("promise resolved value");
// });

// async function getData() {
//   //   return "animesh";
//   return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));
// p.then((res) => console.log(res));

//  ******async await is used to handel the promise

// const p = new Promise((resolve, reject) => {
//   resolve("promise resolved value");
// });
// async function handelPromise() {
//   const value = await p;
//   console.log(value);
// }
// handelPromise()

// function getData() {
//   p.then((res) => console.log(res));
// }

// getData();

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("promise resolved value"), 5000);
// });

// async function getData() {
//   const value = await p;
//   console.log(value);
// }
// getData();

// async function getData(url) {
//   const res = await fetch(url);
//   console.log(res);
//   const data = await res.json();
//   console.log(data);

// }

// const data = fetch(url);

// console.log(data);

// data
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

// async function getData(url) {}
// getData();
// const url = "https://randomuser.me/api/";

const url = "https://api.github.com/users/animeshpandeyit";

async function create() {
  const data = await fetch(url);

  const value = await data.json();

  console.log(value);
}
create();
