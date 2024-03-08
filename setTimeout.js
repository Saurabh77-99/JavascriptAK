function x(){
    for(var i = 1;i<=5;i++){
        function close(i){
            setTimeout(function() {
                console.log(i);
            }, x * 1000);
        }
        close(i);
}
    console.log("Hey");
}
x();

// let is a block scoped

// function x(){
//     for(let i = 1;i<=5;i++){
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }
//     console.log("Hey");
// }
// x();