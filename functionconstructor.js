function Counter(){
    var count = 0;
    this.incCounter = function(){
       count++; 
       console.log(count);
    }
    this.dncCounter = function(){
        count--; 
        console.log(count);   
    }
}

var counter1 = new Counter();
counter1.incCounter();
counter1.dncCounter();