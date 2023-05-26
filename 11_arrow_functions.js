// Normal function
// function displayName(){
//     return "Ajay";
// }

// with parameter
function displayName(name){
    return name;
}

// Arrow Function
// let displayName2 = ()=> "Ajay2";  
// let displayName2 = name => name;  // with parameter
// - for one parameter no need to use square paranthesis.



// console.log(displayName());
// console.log(displayName("Sudeep Sawant"));
// console.log(displayName2());
// console.log(displayName2("Sudeep"));


// let mutliply = (a, b) => a*b;
// console.log(mutliply(10,20));

// Anonomous use of arrow function in setTimeout
// setTimeout(function(){
//     console.log("Hello");
// },1000);

// let cb = () => console.log("Hello after 1 sec using call back");
// setTimeout(cb, 1000);


// arrow function allows us to use this context laxically
let person = {
    name: "Depesh",
    displayName: function (){
        // let self = this;
        console.log(this.name);

        // setTimeout(function(){
        //     console.log(self.name);
        // },1000);

        setTimeout(()=>{
            console.log(this.name);
        },1000);
    }
}
person.displayName();


// Arrow function does not create constructor
let Person = ()=>{

}
console.log(Person());
console.log(Person.prototype); //undefined bcoz no constructor
