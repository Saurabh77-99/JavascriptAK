const users = [
    {firstName:"sap",lastName:"tup",age:26},
    {firstName:"tap",lastName:"gup",age:75},
    {firstName:"gap",lastName:"sup",age:50},
    {firstName:"pat",lastName:"rip",age:26}
];

// list of full names of the user
const output = users.map(x => x.firstName +" " + x.lastName);
console.log(output);

// different age inside the arr and same age

const output1 = users.reduce(function(acc,curr){

    if(acc[curr.age]){
        acc[curr.age] == ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc;
},{})

console.log(output1)

const output2 = users.filter(x => x.age<30).map((x)=> x.firstName);
console.log(output2);
