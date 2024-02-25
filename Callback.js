console.log("a");

setTimeout(function () {
  console.log("javascript");
}, 5000);

console.log("c");

const cart = ["shoes", "pants", "kurta"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });
//  callback HELL....
// ie this is pyramids of doom

// ------- Inversion -------------------- of controls --------------------------------
