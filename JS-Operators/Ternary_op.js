//The ternary operator in JavaScript provides a concise way to write a simple conditional statement. Its syntax is:
// condition ? expression_if_true : expression_if_false;
// -condition: A boolean expression that evaluates to either true or false.
// -expression_if_true: The value or expression to be returned if the condition is true.
// -expression_if_false: The value or expression to be returned if the condition is false.

//Example to check even or odd.
let num = 19;
const evenOrOdd = num % 2 == 0 ? "even" : "odd";
console.log(`given number ${num} is ${evenOrOdd}`);
