function a(){
    var x = 0,z=10 ;
    return function b(){
        console.log(x);
    }
}

var y = a();
y();

// z will stay no longer in memory
