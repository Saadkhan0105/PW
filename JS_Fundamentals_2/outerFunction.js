// Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.

function outerFunction(outerParameter) {
    // Declare a variable within outerFunction
    const outerVariable = "I am a variable inside outerFunction";
  
    // Define and return the inner function
    return function innerFunction(innerParameter) {
      console.log("Outer Parameter:", outerParameter);
      console.log("Outer Variable:", outerVariable);
      console.log("Inner Parameter:", innerParameter);
    };
  }
  
  // Create an instance of the inner function
  const myInnerFunction = outerFunction("Hello from outerFunction");
  
  // Call the inner function with a parameter
  myInnerFunction("Hello from innerFunction");
  