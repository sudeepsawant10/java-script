// Code1:

// function x(){
//     console.log("Hi");
// }
// function y(x){
//     x();
// }
// y(x);

// Code 2:
/*
const radius = [3,1,2,4];
// Area of circle
const calculateArea = function (radius){
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));

// Circumference of circle
const calculateCircumference = function (radius){
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

// Diameter of circle
const calculateDiameter = function (radius){
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius));

*/
/*
- Required moduler and resuable code
- This should be in functional way
- In above functions only logic is different, 90% of work is same in all

solution
- abstract the required logic from functions
- Try to create a generic function by putting required logic in a function from outside

why abstraction?
- reuse of one function for all things 
*/

// code 3: Efficient code
/*
const radius = [3,1,2,4];

// logics:
const area = function (radius){
    return (Math.PI * radius * radius);
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius){
    return 2 * radius;
}

// calculator => One function to do all things
const calculator = function (arr, logic){
    const output = [];
    for(let i = 0; i< arr.length; i++){
        output.push(logic(arr[i]));
    }
    return output;
}
// here logic is a working as a generic function
// we can pass any function in logic place argument
console.log("Areas : ",calculator(radius, area));
console.log("Circumferences : ",calculator(radius, circumference));
console.log("Diameters: : ",calculator(radius, diameter));

*/


// code 3: Map
/**
- Map is a very common higher order function
- The map functions maps the whole array with some logic and the logic is passed by us.
- In simple words map will take all the elements from a array and apply logic on all the elements and returns the array
 */

/*
console.log(radius.map(area));

// To work function for all the array
// current element is referred by this keyword
// Pollyfil format:
Array.prototype.calculator = function (logic){
    const output = [];
    for(let i = 0; i< this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculator(area));

// Filter functions
const arr = [5, 1, 2, 3, 4,9];
const binary = arr.map((x) => x.toString(2));
const odds = arr.filter(getOdd)
const less4 = arr.filter((x)=> x < 4);

function getOdd(x){
    return x % 2;
}

console.log(binary);
console.log(odds);
console.log(less4);
*/

// Reduce Function
/**
- It is not reducing any thing, it just has name reduce
- It is use to take all elements of array and return single value from it
- eg. sum of element, largest element in array
- Iterate all elements and find some value(do some operation on it)
- reduce() takes two parameter, 
1. function:
    that takes two parameter:
    acc => accumulator (for result)
    curr = > current    (just like index)
2. inital value
    - for accumulator
 */

// 1. Non functional way
const arr2 = [1,2,3,4,5]
function findSum(arr) {
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

// console.log(findSum(arr2));

// 2. Functional way using reduce:

const sumArr2 = arr2.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

// console.log(sumArr2);

// Find max in arr2

function findMax(arr){
    let max = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr2));

const maxNum = arr2.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr;
    }
    return curr;
},0);
console.log(maxNum);


// Map, Filter & Reduce
const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];

// P1: Return full name of each record

// P2: Count ages record and return eg. {26:2, 50:1, 75:1}
const fullNames = users.map((x)=> x.firstName + ' ' + x.lastName);
console.log(fullNames);

const ages = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(ages);
// P3: Return full name who has age less than 30
const persons = users.filter((x)=> x.age < 30).map((x)=> x.firstName);
console.log(persons);
