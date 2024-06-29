// Part a: Prevent further additions to the student object
const student = {
    name: 'John',
    age: 20
};

Object.preventExtensions(student);

// Part b: Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student);

// Part c: Create a new object called teacher with a 'subject' property set to 'Math'
const teacher = {
    subject: 'Math'
};

// Part d: Seal the teacher object to prevent additions or deletions of properties
Object.seal(teacher);

// Part e: Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

// Part f: Print the extensibleStatus and sealedStatus to the console
console.log("Extensible status of student object:", extensibleStatus); // Should print false
console.log("Sealed status of teacher object:", sealedStatus); // Should print true
