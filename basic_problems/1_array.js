/*
Usecases:
1. Write code to get array of names from given array of users
2. Get back only active users
3. Sort users by age descending

*/

const users = [
  {
    id: 1,
    name: "Ajay",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "Akash",
    isActive: true,
    age: 28,
  },
  {
    id: 3,
    name: "Fraz",
    isActive: false,
    age: 22,
  },
  {
    id: 4,
    name: "Love",
    isActive: false,
    age: 25,
  },
  {
    id: 5,
    name: "Hitesh",
    isActive: true,
    age: 30,
  },
];

// 1. Solution 01 ( Using map => Takes callback)

let nameArray = [];

users.map((item) => {
  const { name } = item;
  nameArray.push(name);
});
console.log("Array of names: ", nameArray);

//  Solution 02 ( Using forEach => Takes callback)
// users.forEach((item) => {
//   nameArray.push(item.name);
// });

// 2. Get back only active users name

// Solution 01
let activeUsers = [];
// users.forEach((user) => {
//   const { name, isActive } = user;
//   isActive ? activeUsers.push(name) : "";
//   //   user.isActive ? activeUsers.push(user.name) : "";
// });
// console.log("Active users: ", activeUsers);

// Solutions 02

// activeUsers.push(users.filter((user) => user.isActive === true));

// Chaining
activeUsers = users.filter((user) => user.isActive).map((user) => user.name);
console.log("Active users: ", activeUsers);

/**
    The map() method returns a new array, whereas the forEach method does not
    The forEach() method is similar to the for loop, but it does not have reaturn value
    The map() method is similar to the forEach() method, but it returns a new array
 */

// 3. Sort users by age descending
/*
    sort(): function
    - works different on numbers
    - elements are converted into string and does sort
    - returns array and also sorts actual array
    - Takes compare callback 


*/
let userByDescendingAge = [];
userByDescendingAge = users.sort((user1, user2) =>
  user1.age < user2.age ? 1 : -1
);
//   .map((user) => user.name);
console.log("User by Descending age: ", userByDescendingAge);
// console.log(users);

const activeUserByAscending = users
  .filter((user) => user.isActive)
  .sort((user1, user2) => (user1.age > user2.age ? 1 : -1))
  .map((user) => user.name + " " + user.age);
console.log("Active users by Ascending", activeUserByAscending);
