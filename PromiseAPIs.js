const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 is fulfilled");
    // reject("promise 1 is failed....");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 is fulfilled");
    // reject("promise 2 is failed....");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3 is fulfilled");
    reject("promise 3 is failed....");
  }, 5000);
});

// Promise.all([p1, p2, p3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.allSettled([p1, p2, p3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
//  it gives us the object...

Promise.race([p1, p2, p3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });
//  the first setelled promise will ( in case of fullfilled or rejection)

Promise.any;
// (if will wait for first setelled success (resolved promise...) promise)
//  aggregate error ==> if all promises are rejected
