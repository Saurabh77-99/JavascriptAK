function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();

//-------------------------------------------------//

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();
console.log(z);
z();

// ---------------------------------------//

//1
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();
//2
function x(){
    var a = function y(){
        console.log(a);
    }
    y();
}
x();

//3
function x(){
    var a = 7;
    y();
}
x(function y(){
    console.log(a);
});

//4
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
x();