const cart = ["shoes","pants","kurta"];

createOrder(cart) // this createorder is api and it returns us an order ID
.then(function(orderId) {
    console.log(orderId);
    return orderId;
})
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    return console.log(paymentInfo);
})
.catch(function (err) {
    console.log(err.message);
});

// Producer end
function createOrder(cart) {

    const pr = new Promise(function(resolve,reject) {
        // createOrder
        // validate card
        // order ID
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err)
        }//logic of createOrder

        const orderId = "12345";
        if(orderId){
            setTimeout(function () {
                
                resolve(orderId);
            },5000)
        }
    });
    return pr;
}

function proceedToPayment(orderId) {
    /// 
    return new Promise(function(resolve,reject) {
        resolve("Payment successful")
    });
}

function validateCart(cart) {
    return true;   
    // return false; -> reject a promise   
}