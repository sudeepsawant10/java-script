// console.log("js linked");

function printName(name, greetText){
    // let name1 = "name 1 "     local scope
    console.log(greetText+" "+ name);
    // console.log(name + " is a good boy")
}

function sum(a,b,c){
    let d = a+b+c;
    return d;
}
let name1 = "sudeep";
let name2 = "neel";
let name3 = "sri";
let name4 = "prajval";
let name5 = "poojari";
let greetText = "Good morning";

console.log(sum(1,2,3));
printName(name1,greetText);
printName(name2,greetText);
printName(name3,greetText);
printName(name4,greetText);
printName(name5,greetText );