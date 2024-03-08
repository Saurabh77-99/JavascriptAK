setTimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
}
x(function y(){
    console.log("y");
});