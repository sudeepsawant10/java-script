console.log(x);
console.log(getName)
console.log(getName2)
// getName();
var x = 7;

//Get store in memory creation phase in gec.
function getName(){
    console.log("Hello...");
}

//Treated just like a variable
var getName2 = function(){
    console.log("Hello");
}
console.log(getName2)
console.log(getName())
