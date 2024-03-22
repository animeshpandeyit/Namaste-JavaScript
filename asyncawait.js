// // what is async?
// // what is await?
// // how they work?
// // error handling
// // interview
// // async await vs promise

// // async function getData() {
// //   return new Promise(function (resolve, reject) {
// //     setTimeout(function () {
// //       resolve("Hello");
// //     }, 1000);
// //   });
// //   //   return "Animesh.";
// // }

// // const dataPromise = getData();

// // console.log(dataPromise);

// // dataPromise.then((res) => console.log(res));
// const p = new Promise(function (resolve, reject) {
//   resolve("Promise resolved successfully...");
// });

// async function getData() {
//   //   return p;

//   const val = await p;
//   console.log(val);
// }
// getData();
// // const dataPromise = getData();
// // console.log(dataPromise);
// // dataPromise.then((res) => console.log(res));

// // using await with async
// // await can only be used inside a async function...*****

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise value resolved successfully...");
//   }, 10000);
// });

// async function handlingPromise() {
//   const val = await p;
//   console.log("Animesh Pandey....");
//   console.log(val);
// }

// handlingPromise();

// async function getData() {
//   const val = await p;
//   console.log(val);
// }

// function getData() {
//   p.then((res) => console.log(res));
//   console.log("no data");
// }

// getData();

// const p1 = new Promise((resole, reject) => {
//   setTimeout(() => {
//     resole("promise with 10 seconds");
//   }, 10000);
// });

// const p2 = new Promise((resole, reject) => {
//   setTimeout(() => {
//     resole("promise with 5 seconds");
//   }, 5000);
// });

// async function handlingPromise() {
//   console.log("hello world ");

//   const val = await p1;
//   console.log("await val 1 ");
//   console.log(val);

//   const val2 = await p2;
//   console.log("await val 2 ");
//   console.log(val2);
// }
// handlingPromise();

// const url = "https://randomuser.me/api/";

// function fetchDataFromAPI() {
//   return new Promise((resolve, reject) => {
//     const data = fetch(url);

//     data.then((res) => {
//       if (res.ok) {
//         return resolve(res);
//       } else {
//         const error = new Error("Failed to fetch");
//         return reject(error);
//       }
//     });
//   });
// }
// // console.log(data);
// // fetchDataFromAPI();
// // console.log(fetchDataFromAPI());

// fetchDataFromAPI().then((res) => {
//   console.log(res);
// });
const apiUrl = "https://randomuser.me/api/";

function handlingPromise() {
  return new Promise((resolve, reject) => {
    const data = fetch(apiUrl);
    data
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        resolve(res);
      });
  });
}
handlingPromise().then((response) => {
  console.log(response.results[0]);
});