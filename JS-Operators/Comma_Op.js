// The comma operator in JavaScript  allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.Its syntax is:
// expression1, expression2, expression3, ..., expressionN
// Example: 
let a=1, b=2, c=3;
let commaOpResult = (++a , ++b , ++c) 
console.log(`a: ${a}, b: ${b}, c: ${c} and commaOpResult: ${commaOpResult}`);
// Expected output: a: 2, b: 3, c: 4 and commaOpResult: 4

// another example

commaOpResult = (1+2,3+4);
console.log(`commaOpResult: ${commaOpResult}`);
// Expected output commaOpResult: 7
