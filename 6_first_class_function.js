/* Functions are heart of java script */
a();
// b(); //This will give you TyepError: b is not a function
// 1. Function Statement aka Function Declaration
function a(){
    console.log("a called");
}

// 2. Function Expression

// - assigning function to variable
// - function acts like a value
var b = function() {
    console.log("b called");
}
/**
 Difference between functions statment and function Expression
 - the major difference is hoisting, ie. if a() and b() is called before defining it b will give you TypeError: 
    ie. b is not a function
    b is assigned undefind initially in memeory creation phase
    b() is called it before assigning it function to its while js running code line by line when it reaches
    to line 3 it doesn't b is function bcoz it has undefined in it js is not assigend it function 
 */


// 3. Function Declaration same as function statement and defination

// 4. Anonymous Function
// - It doesn't have there own identity
// The following code will give SyntaxError (Invalid syntax), it is expecting function name
// function (){

// }
// - so this function is used in a place, where functions are used as values.


// 5. Named Function Expression
var c = function xyz(){
    console.log("c called");
    console.log(xyz);
}
// - It is having corner case 
c();
// xyz(); //ReferencedError: cfunc is not defined
// - xyz() is not in outer scope (global)



// 6. First Class Functions (citizens)
// - The ability of functions to be used as values is called first class functions.
// - We use functions as parameter and arguments
// Passing another function inside a function
/*
function abc(param1) {
    console.log(param1);
}
abc(function(){
    console.log("I am argument");
});
abc(c); //Passing a function which was stored in c.

// Returning function from a function
function pqr(){
    return function pqr_child(){
        console.log("I am pqr child");
    }
}
console.log(pqr);

*/

// 7. Arrow functions
