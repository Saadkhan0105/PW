// Define the customIncludes method on Array.prototype
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element, fromIndex) {
        // Ensure fromIndex is an integer
        fromIndex = Math.floor(fromIndex) || 0;

        // Handle negative fromIndex
        if (fromIndex < 0) {
            fromIndex = Math.max(0, this.length + fromIndex);
        }

        // Iterate through the array
        for (let i = fromIndex; i < this.length; i++) {
            // Check if the current element is equal to the searched element
            // Using the SameValueZero algorithm (similar to ===, but treats NaN as equal to NaN)
            if (this[i] === element || (element !== element && this[i] !== this[i])) {
                return true;
            }
        }
        
        // Return false if the element is not found
        return false;
    };
}

// Example usage
const array = [1, 2, 3, NaN, 5];

console.log(array.customIncludes(2)); // Output: true
console.log(array.customIncludes(4)); // Output: false
console.log(array.customIncludes(NaN)); // Output: true
console.log(array.customIncludes(2, 2)); // Output: false
console.log(array.customIncludes(3, -3)); // Output: true
