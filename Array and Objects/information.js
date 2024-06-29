const Student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
};

function displayStudentInfo(student) {
    for (const property in student) {
        if (student.hasOwnProperty(property)) {
            console.log(`Property: ${property}, value: ${student[property]}`);
        }
    }
}

// Call the function with the Student object
displayStudentInfo(Student);
