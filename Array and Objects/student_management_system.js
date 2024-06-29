// Initial array of students
const Students = [
    {
        id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A"
    },
    {
        id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B"
    },
    {
        id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A"
    },
    // Add more students as needed
];

// Function to add a new student to the array
function addStudent(newStudent) {
    Students.push(newStudent);
}

// Function to update a student's information based on their id
function updateStudent(id, updatedInfo) {
    const index = Students.findIndex(student => student.id === id);
    if (index !== -1) {
        Students[index] = { ...Students[index], ...updatedInfo };
    } else {
        console.log(`Student with id ${id} not found.`);
    }
}

// Function to delete a student based on their id
function deleteStudent(id) {
    const index = Students.findIndex(student => student.id === id);
    if (index !== -1) {
        Students.splice(index, 1);
    } else {
        console.log(`Student with id ${id} not found.`);
    }
}

// Function to list all students
function listAllStudents() {
    Students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// Function to find students by grade
function findStudentsByGrade(grade) {
    const filteredStudents = Students.filter(student => student.grade === grade);
    return filteredStudents;
}

// Function to calculate the average age of all students
function calculateAverageAge() {
    const totalAges = Students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAges / Students.length;
    return averageAge;
}

// Testing the functions
console.log("Initial list of students:");
listAllStudents();

// Add a new student
addStudent({ id: 4, firstName: "Alice", lastName: "Johnson", age: 21, grade: "B" });

// Update student information
updateStudent(3, { age: 20 });

// Delete a student
deleteStudent(2);

// List all students after modifications
console.log("\nUpdated list of students:");
listAllStudents();

// Find students by grade
const gradeBStudents = findStudentsByGrade('B');
console.log("\nStudents with grade B:");
console.log(gradeBStudents);

// Calculate average age of students
const averageAge = calculateAverageAge();
console.log("\nAverage age of students:", averageAge);
