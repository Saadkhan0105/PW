const Calculator = {
    // Initial value
    value: 0,

    // Method to set the initial value
    setValue(val) {
        this.value = val;
        return this; // Enable chaining
    },

    // Method to add a number
    add(num) {
        this.value += num;
        return this; // Enable chaining
    },

    // Method to subtract a number
    subtract(num) {
        this.value -= num;
        return this; // Enable chaining
    },

    // Method to multiply by a number
    multiply(num) {
        this.value *= num;
        return this; // Enable chaining
    },

    // Method to divide by a number
    divide(num) {
        if (num !== 0) {
            this.value /= num;
        } else {
            console.error("Cannot divide by zero");
        }
        return this; // Enable chaining
    },

    // Method to get the current value
    getValue() {
        return this.value;
    }
};

// Example usage
const result = Calculator.setValue(10)
    .add(5)
    .subtract(3)
    .multiply(4)
    .divide(2)
    .getValue();

console.log(result); // Output: 24
