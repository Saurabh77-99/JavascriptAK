const { start } = require("repl");

console.log("Start"); 
// this will use Console API , it calls console api and runs log internally, console api is plugged to WINDOW through your code which is executed inside Global execution context and gets added to callstack
setTimeout(function cb(){
    console.log("Callback");
},5000);
// setTimeout -> setTimeout api and takes a callback -> registers callback inside web api and inside timer start. As the timer expires , the callback needs to run. but it can't directly run.IT will go through CALLBACK QUEUE after timer expiration.
// Event loop acts a gatekeeper , if it finds anything in callback queue, it puts it into callstack queue.

console.log("End");
// on top of "start" execution context

// -----------------------------------------------------------------------
console.log("Start"); 

setTimeout(function cbT(){ //-> this cbT goes into Callstack queue
    console.log("CB SetTimeout");
},5000);

fetch("https://api.netflix.com").
then(function cbF(){  //-> this cbF goes into microtask queue -> callback fn then event loop functions
    console.log("CB Netflix");
});

console.log("End");

// microtask queue has higher priority then callstack queue
// therefore cbF firsts than cbT
// start
// end
// CB Netflix
// CB setTimeout


