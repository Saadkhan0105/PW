// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Constructor function for Employee that inherits from Person
function Employee(name, age, designation) {
    // Call the Person constructor with this and the passed parameters
    Person.call(this, name, age);
    this.designation = designation;
}

// Set the prototype of Employee to an object created with Person's prototype
Employee.prototype = Object.create(Person.prototype);
// Set the constructor property of Employee to refer to Employee
Employee.prototype.constructor = Employee;

// Adding a method to the Employee prototype
Employee.prototype.getDetails = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
};

// Example usage
const employee1 = new Employee('Alice', 30, 'Software Engineer');
const employee2 = new Employee('Bob', 25, 'Data Analyst');

employee1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
employee1.getDetails(); // Output: Name: Alice, Age: 30, Designation: Software Engineer

employee2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.
employee2.getDetails(); // Output: Name: Bob, Age: 25, Designation: Data Analyst
