const cart = ["shoes","pants","kurta"];

createOrder(cart,function(orderID){
    proceedToPayment(orderID,function (paymentInfo) {
        showOrderSummary(paymentInfo,function () {
            updateWalletBalance();
        })
    });
});

createOrder(cart)
.then(function (orderID) {
    return proceedToPayment(orderID);
})
.then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
})
// this both code are the same 
createOrder(cart)
.then((orderID)=> proceedToPayment(orderID))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo))

