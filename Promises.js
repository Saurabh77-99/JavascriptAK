// e-commerce website
const cart = ["shoes","pants","kurta"];

//passing  fucntions like this isn't reliable
// here we are passing a function
createOrder(cart,function(orderID){
    proceedToPayment(orderID);
});

const promise = createOrder(cart);// -> async operation
// promise is nothing but you can assume it to be empty object.
// Whenever this lines gets executed in js engine,this createorder api will return us a promise that is empty object.
// {data:undefined}
// after certain time the data will be filled by createorder api and once we have data inside this , callback function will be called
// here we are attaching a function
// control of the program will be with us
promise.then(function(orderID){
    proceedToPayment(orderID);
});


const Github_api = "https://github.com/users";
const user = fetch(Github_api);
console.log(user);

// when the fetch commands get run , the promise state is already in pending state.
// The data after will get filled and then it will turn to fulfilled state.
// rejected state -> The 3 states
// user -> immutable and resolved just once
user.then(function(data){
    console.log(data);
})
