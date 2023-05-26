/*
Closure in js
- Functiona along with lexical environment forms a closure.
*/
// code 1:
// function x(){
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// Possibility:
// - function as parameter
// x(function y() {
//         console.log(a);
//     });
// x();

// code 2:
// function x(){
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();    //function defination is assigned (now z contains y() function)
// // console.log(a); //not define
// z()

// code 3:
// function z(){
//     var b = 10;
//     function x(){
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// // var z = x();    
// z()