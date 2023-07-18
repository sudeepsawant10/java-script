const employee = {
  id: 1,
  age: 24,
  name: "Sudeep Sawant",
  department: "IT",
  address: {
    city: "Mumbai",
    country: "IN",
  },
};

// To Avoid this
// const name = employee.name;
// const age = employee.age;

// Use this

const { name, age } = employee;
const {
  address: { city },
} = employee;

// default parameter
// const {name: fullName} = employee; // new variable
// const {name: fullName="Depesh"} = employee;

// console.log(name,age);
// console.log(city);
// console.log(fullName)
// console.log()

// Destructuring in function
function displayEmployee({ name, age }) {
  console.log(`The employee name is ${name} and employee age is ${age}`);
}

// displayEmployee(employee)

// Destructuring in arrays
const fruits = [
  "apple",
  "mango",
  "banana",
  "pinapple",
  "custured apple",
  "grapes",
  "watermelon",
];

// To avoid this
// const fruit1 = fruits[0];

const [fruit1, , fruit2, ...remaining] = fruits;

// console.log(fruit1);
// console.log(fruit2);
// // Using rest operator
// console.log(remaining);

// Destructuring arrays and object in same time

const groceryList = [
  { item: "Apples", price: 25, category: "fruits" },
  { item: "Mangoes", price: 35, category: "fruits" },
  { item: "Tomatoes", price: 15, category: "veg" },
  { item: "Milk", price: 20, category: "misc" },
  { item: "Bread", price: 12, category: "misc" },
  { item: "Eggs", price: 18, category: "misc" },
];

// To avoid this
// console.log(groceryList[0].item, groceryList[1].price)

const [firstObj, , { item }, { item: itemName }, ...rest] = groceryList;
console.log(firstObj);
console.log(item);
console.log(itemName);
console.log(rest);

// array in object example
const company = {
  name: "Google",
  locations: ["Singapore", "India", "Germany"],
};

// To avoid this
// console.log(company.locaitons[0]);

const {
  locations: [, loc],
} = company;
// console.log(loc);

// Use case example
const users = [
  ["Dipesh", "Malvia"],
  ["Nikesh", "Gadekar"],
  ["Daniel", "Mether"],
];

// convert users into this
// [
//     {
//         firstName: "Dipesh",
//         lastName: "Malvia",
//     },
//     {
//         firstName: "Nikesh",
//         lastName: "Gadekar",
//     },
//     {
//         firstName: "Daniel",
//         lastName: "Malvia",
//     },
// ]

// Using higher order function Map

const userObj = users.map((user) => {
  // return { firstName: user[0], lastName: user[1]}
});

// Using destructuring
const userObj2 = users.map(({ firstName, lastName }) => {
  return { firstName, lastName };
});

// console.log(userObj2);
