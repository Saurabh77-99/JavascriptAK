console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
},5000);

//SetTimeout -> 0 seconds -> output -> Start End Callback
setTimeout(function cb(){
    console.log("Callback");
},0);
console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}
console.log("while expires");

