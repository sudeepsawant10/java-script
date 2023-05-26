// function x(){
//     var i = 10;
//     setTimeout(function (){
//         console.log(i);
//     }, 3000);
//     console.log("Hello...");
// }
// x();

// // var i = 10;
// for(var i = 1; i<=5; i++){
//     setTimeout(function (){
//         console.log(i);
//     }, i*1000);
// }
// console.log("Hello...");
// // o/p: hii 6 6 6 6 6   

// for(let i = 1; i<=5; i++){
//     setTimeout(function (){
//         console.log(i);
//     }, i*1000);
// }
// console.log("Hello...");
// // o/p: hii 6 6 6 6 6   

// for(let i = 1; i<=5; i++){
//     function close(x){
//         setTimeout(function (){
//             console.log(x);
//         }, x*1000);
//     }
//     close(i)
    
// }
// console.log("Hello...");
// o/p: hii 6 6 6 6 6   

// code : 4
// function outer(b){
//     var a = 10;
//     function inner(){
//         console.log(a, b);
//     }
//     return inner;
// }
// outer("Hello!")();
// - if we pass the parameter to outer function it will be part of closuer
// - the inner function forms a closure with its outer environment

// code 5:
/*
function outest(c){
    function outer(b){
        function inner(){
            console.log(a, b, c);
        }
        // let a = 40
        return inner;
    }
    return outer;
}
let a = 50; // inner() will find it using scope change 
// if a is not in global also it will give reference error.
var func = outest(100); // it returns outer function
// func(10)();
outest(10)(100)();   // it returns inner function
*/

// code 6: Data hiding and privacy in js
/*
function counter(){
    var count = 0;
    return function incrementCount(){
        count++;
        console.log(count);
    }
}
// console.log(count); //refernceError
var counter1 = counter();
// console.log(counter1);
counter1();
counter1(); 
//  calling same function 
// This will access a count using incrementCount function that will be return by counter()
var counter2 = counter();
counter2();
counter2();
// counter1 and counter2 have different scope
// counter2 will have a different closure

*/

// code 7: More scalabe counter code with decrement (using constructor function)
/*
function Counter(){
    var count = 0;
    // ananomyous function
    this.incrementCount = function() {
        count++;
        console.log(count);
    }

    this.decrementCount = function() {
        count--;
        console.log(count);
    }
    
}

var counter1 = new Counter();
counter1.incrementCount();
counter1.incrementCount();
counter1.incrementCount();
counter1.decrementCount();
*/

// code 8: Relation between garbage collector and closure
function a(){
    // This x is not garbage collected bcoz it will be used by function b it is in closure with b
    var x = 10;
    var z = 20;
    // z is not being used, so z is garbage collected smartly and x not
    return function b(){
        console.log(x);
    }
}

var y = a();
y();



