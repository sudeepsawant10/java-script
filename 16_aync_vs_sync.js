// async => doesn't stops further execution it waits for none

// sync code
// console.log("Start operation");
// function sleep(milliseconds) {
//     console.log("Operation running..");
//     const strtime = new Date().getTime();
//     while(new Date().getTime() < strtime + milliseconds){
//         console.log("in progress");
//     }
//     console.log("End operation");
// }

// sleep(1000);
// console.log("do something else..");

// function count(index){
//     console.log("Operation running..");
//     i = 0;
//     while(i<1000){
//         console.log("in progress");
//     }
//     console.log("End operation");
// }

// count(0);
// console.log("do something else..");
// aync code

// console.log("Start operation");
// function sleep(milliseconds) {
//     console.log("Operation running..");
//     setTimeout(() => {
//         console.log("in progress");
//     });
//     console.log("End operation");
// }

// sleep(2000);
// console.log("do something else..");

console.log("Start operation");
function count(index) {
  console.log("Operation running..");
  i = 0;
  setTimeout(() => {
    console.log("in progress...");
  }, index);
  console.log("End operation");
}

count(2000);
console.log("do something else..");
