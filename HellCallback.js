
const cart = ["shoes","pants","kurta"];

// this is callback Hell
// structure of doom
api.createOrder(cart,function(){
    api.proceedToPayment(function () {
        api.showOrderSummary(function(){
            api.updateWallet();
        })
    })
})

// we are believing createorder api a lot.We cant call proceedtopayment. createorder will call proceedtoPayment

