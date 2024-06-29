// Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not only checks if there is a match but also extracts specific parts of the matched text using groups. Test the function with patterns that include groups to capture different parts of a date (e.g., day, month, and year) from a given string.
function matchAndExtract(regexPattern, inputString) {
    const regex = new RegExp(regexPattern);
    const match = regex.exec(inputString);

    if (!match) {
        console.log("No match found.");
        return;
    }

    // Extract groups
    const groups = match.slice(1); // Skip the first element which is the full match
    return groups;
}

// Test cases
const dateString = "Today's date is 29-06-2024";
const pattern = /(\d{2})-(\d{2})-(\d{4})/; // Regex pattern to capture day, month, year

const result = matchAndExtract(pattern, dateString);
if (result) {
    const [day, month, year] = result;
    console.log("Day:", day);
    console.log("Month:", month);
    console.log("Year:", year);
}
