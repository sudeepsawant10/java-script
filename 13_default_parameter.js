function mutliply(a,b=1){
    // b = b || 1
    return a * b;
}

// if we pass null it ignores defualt parameter
// console.log(mutliply(2,null));


function Employee(id){
    this.id = id;
}

function generateEmployeeId() {
    return Math.floor(Math.random() * 999);
}

// if we do not have existing employee then create one
function tagEmployee(employee = new Employee(generateEmployeeId())) {
    employee.department = "User Experiance";
    return employee;
}



// console.log(tagEmployee(new Employee(generateEmployeeId())));
// To tag existing employees make constructor in default parameter
const employee = new Employee(generateEmployeeId());
console.log(tagEmployee());