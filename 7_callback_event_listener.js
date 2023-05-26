// 1. Callback function
// setTimeout(function(){
//     console.log("Timer");
// }, 5000);
// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// })

// closure with event listener

console.log("hii");
function attachEventListener() {
    let count = 0;
    let button1 = document.getElementById("clickMe")
    button1.addEventListener("click", function xyz() {
        console.log("Button clicked", ++count);
    });
}
// alert("Hii")
attachEventListener();

