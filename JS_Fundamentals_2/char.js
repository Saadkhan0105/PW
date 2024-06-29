// Write a JavaScript program that demonstrates the use of character classes in regular expressions. Create a function that searches for specific character classes in a given string and returns the matches. Test the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

// Function to find matches of a specific character class in a string
function findMatches(pattern, str) {
    const regex = new RegExp(pattern, 'g');
    return str.match(regex) || [];
  }
  
  // Test cases
  const testString = "Hello World! 1234 @#";
  
  // Patterns for different character classes
  const patterns = {
    digits: '\\d', // Digits
    uppercase: '[A-Z]', // Uppercase letters
    lowercase: '[a-z]', // Lowercase letters
    specialChars: '[^a-zA-Z0-9\\s]' // Special characters (excluding whitespace)
  };
  
  // Running test cases
  for (const [description, pattern] of Object.entries(patterns)) {
    const matches = findMatches(pattern, testString);
    console.log(`Matches for ${description}:`, matches);
  }
  