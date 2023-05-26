// 1. Block and Scope
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// if (true) {
//     let d = 10;
// }

// 2. Shadowing

// In var case:
// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
// }
// console.log(a);


// In let & const case:
// let b =100;
// const c = 40;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(b);
// }
// console.log(b);

// Ilegal Shadowing:
// let a =20;
// {
//     var a = 40;
// }
// let a =20;
// function x(){
//     var a = 40;
//     console.log(a);
// }
// x();
// Legal let using let and var using let
let a = 20;
{
    let a = 40;
    console.log(a);
}
console.log(a);
