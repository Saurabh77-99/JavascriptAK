//function statement
function a(){
    console.log("a called");
}
a();

// function expression - function acts like value
// param1, param2 -> are local variables 
var b = function(param1,param2){
    console.log("b called");
}
b(1,2); //-> this are arguements 

//first class func
var c = function(param1){
    return function xyz(){

    }
}
console.log(b());
// Anonymous function
// function  (){
    
    // }

//Named function Expression
var b = function xyz(){
    console.log("b called");
}
b();
// xyz(); -> it will give error as it is not in global scope
    
