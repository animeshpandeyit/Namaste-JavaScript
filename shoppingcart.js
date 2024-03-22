const cart = ["telescope", "telescope2", "telescope3", "telescope4"];

const wallet = 499;

createOrder(cart)
  .then(function (orderID) {
    console.log(orderID);
    return orderID;
  })
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (wallet) {
    {
      return updateWallet(wallet);
    }
  });

function createOrder(cart) {
  console.log("cart: " + cart);

  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const error = new Error("Invalid cart");
      return reject(error);
    }
    const orderID = "1234567";
    if (orderID) {
      resolve(orderID);
    }
  });
}

function proceedToPayment(orderID) {
  console.log("orderID: " + orderID);

  return new Promise((resolve, reject) => {
    if (orderID) {
      resolve({
        paymentStatus: true,
        message: "Payment Successful!",
      });
      console.log("Payment Successful.....");
    } else {
      const error = new Error("Invalid order id");
      return reject(error);
    }
  });
}

function showOrderSummary(paymentInfo) {
  console.log("Show Order Summary::::::", paymentInfo);

  return new Promise((resolve, reject) => {
    if (paymentInfo) {
      resolve({ status: "success" });
      console.log("Order summary");
    } else {
      const error = new Error("Invalid order id");
      return reject(error);
    }
  });
}

function updateWallet(walletBalance) {
  console.log("wallet Balance", walletBalance);

  return new Promise((resolve, reject) => {
    if (walletBalance.status === "success") {
      console.log("money balance updated");
      let amount = 30;
      const resBalance = wallet - amount;
      resolve({
        balance: resBalance,
        message: "Updated Balance",
      });
      console.log(resBalance);
    }
  });
}

function validateCart(cart) {
  return true;
}
