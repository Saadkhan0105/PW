// Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.
function isMatch(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
  }
  
  // Test cases
  const testCases = [
    { pattern: 'hello', str: 'hello world', expected: true },
    { pattern: '^hello', str: 'hello world', expected: true },
    { pattern: 'world$', str: 'hello world', expected: true },
    { pattern: 'w.rld', str: 'hello world', expected: true },
    { pattern: '\\d+', str: 'There are 123 numbers', expected: true },
    { pattern: '\\d+', str: 'No numbers here!', expected: false },
    { pattern: '[a-z]+', str: '123', expected: false },
    { pattern: '[A-Z]', str: 'Hello World', expected: true },
    { pattern: 'foo', str: 'bar', expected: false },
    { pattern: 'foo', str: 'foobar', expected: true }
  ];
  
  // Running test cases
  testCases.forEach((testCase, index) => {
    const result = isMatch(testCase.pattern, testCase.str);
    console.log(
      `Test Case ${index + 1}: Pattern = ${testCase.pattern}, String = "${testCase.str}" -> ` +
      `Expected: ${testCase.expected}, Result: ${result}`
    );
  });
  