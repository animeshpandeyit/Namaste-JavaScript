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

promise
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((PaymentInfo) => {
    console.log(PaymentInfo);
    return showOrderSummary(PaymentInfo);
  })
  .then((orderSummary) => {
    console.log(orderSummary); // Log or do something with the order summary
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const error = new Error("Invalid cart");
      return reject(error);
    }

    const orderId = "1234556789";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      console.log("Payment successful!!!");
    } else {
      const error = new Error("Invalid order id");
      return reject(error);
    }
  });
}

function showOrderSummary(PaymentInfo) {
  return new Promise((resolve, reject) => {
    if (PaymentInfo) {
      const orderSummary = "Order summary"; // Replace this with actual order summary data
      resolve(orderSummary);
      console.log(orderSummary);
      
    } else {
      const error = new Error("Invalid PaymentInfo");
      reject(error);
    }
  });
}

function validateCart(cart) {
  return true;
}
