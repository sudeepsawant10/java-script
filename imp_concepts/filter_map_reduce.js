const coding = ["js", "java", "python", "ruby", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

// console.log(values);
/*
    forEach()
    - doesn't return anything even if you return it
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const updatedNums = myNums.filter((num) => {
  return num != 8;
});
console.log(updatedNums);

/*
    if you are using paranthesis or nothing for one statement it will return
    but if you are using culy braces then it starts block and you have to explicitly menstion return keyword
*/
