const arr = [5,1,3,2,6]

// Double - [10,2,6,4,12]
// Triple -[15,3,9,6,18]
// Binary - ["101","1","11","10","110"]

function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

const output = arr.map(double);
const output1 = arr.map(triple);


const output2 = arr.map(function binary(x){
    return x.toString(2);
});
// const output2 = arr.map((x)=>x.toString(2));

console.log(output);
console.log(output1);
console.log(output2);

// filter odd values

function isEven(x){
    return x % 2 === 0;
}

const even = arr.filter(isEven)
console.log(even);

//
function findSum(arr){
    let sum = 0;
    for(let i = 0;i < arr.length;i++){
        sum = sum + arr[i]
    }
    return sum;
}

console.log(findSum(arr));

function findMax(arr){
    let max = 0;
    for( let i = 0;i < arr.length ; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}
console.log(findMax(arr));
// accumulator - sum 
// current - arr[i ]
const redarr = arr.reduce(function (acc,curr) {
    acc = acc + curr;
    return acc;
},0);
console.console.log((redarr));

const Maxarr = arr.reduce(function(max,curr){
    if(curr > max){
        max = curr
    }
    return max
},0);