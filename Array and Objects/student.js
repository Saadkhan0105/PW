const ages = [19, 22, 19, 24, 20, 25, 24, 24, 25, 24];

// Sort the array of ages
ages.sort((a, b) => a - b);

// Find the minimum and maximum age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
let medianAge;
if (ages.length % 2 === 0) {
    // If the array has an even number of elements, average the two middle numbers
    const middleIndex = ages.length / 2;
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    // If the array has an odd number of elements, take the middle number
    const middleIndex = Math.floor(ages.length / 2);
    medianAge = ages[middleIndex];
}

// Find the average age
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;

// Find the range of ages
const rangeOfAges = maxAge - minAge;

// Compare (min - average) and (max - average) using absolute values
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

// Display results
console.log("Sorted ages:", ages);
console.log("Minimum age:", minAge);
console.log("Maximum age:", maxAge);
console.log("Median age:", medianAge);
console.log("Average age:", averageAge);
console.log("Range of ages:", rangeOfAges);
console.log("Absolute difference between min and average:", minAverageDiff);
console.log("Absolute difference between max and average:", maxAverageDiff);
