const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' to the beginning of the shopping cart if it's not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' to the end of the shopping cart if it's not already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove 'Honey' if you are allergic to it
const allergicToHoney = true; // Set to true if allergic to Honey, false otherwise
if (allergicToHoney && shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

// Display the modified shopping cart
console.log("Updated shopping cart:", shoppingCart);
