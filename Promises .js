// // // const cart = ["shoes", "pants", "kurtas"];

// // // // createOrder(cart, function () {
// // // //   proceedToPayment(orderId);
// // // // });

// // // const promise = createOrder(cart);

// // const url = "https://api.github.com/users/animeshpandeyit";

// // const user = fetch(url);

// // console.log(user);

// // /* The code `user.then(function (data) { console.log(data); });` is using the `then` method to handle
// // the asynchronous response from the `fetch` function. */
// // user.then(function (data) {
// //   console.log(data);
// // });

// // const cart = ["shoes", "pants", "kurtas"];

// /* The ShoppingCart class is a JavaScript class that represents a shopping cart with an array of items. */
// // class ShoppingCart {
// //   constructor() {
// //     this.items = [];
// //   }
// // }

// const cart = ["shoes", "pants", "kurtas"];

// // createOrder(cart); //orderId

// // proceedToPayment(orderId);

// function createOrder(cart) {

// }
// ----------------------------------------------------------------

// Creating a Promise, Chaining & Error Handling | Ep 03 Season 02 Namaste JavaScript

// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }

//   addItem(item) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         this.items.push(item);
//         resolve(`${item.name} added to the cart.`);
//       }, 1000);
//     });
//   }
// }
// const cart = new ShoppingCart();

// cart.addItem({ name: "Laptop", price: 999.99 }).then((message) => {
//   console.log(message);
//   return cart.addItem({ name: "Headphones", price: 49.99 });
// });

const cart = ["Laptop", "Headphones", "Shoes", "Vegetables"];

const promise = createOrder(cart);

promise.then((orderId) => {
  console.log(orderId);
  proceedToPayment(orderId);
});

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const error = new Error("Invalid cart");
      return reject(error);
    }
    // else {
    //   resolve(cart);
    // }
    const orderId = "1234556789";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  const paymentPromise = new Promise((resolve, reject) => {
    if (orderId) {
      resolve(orderId);
    } else {
      const error = new Error("Invalid order id");
      return reject(error);
    }
  });
}
