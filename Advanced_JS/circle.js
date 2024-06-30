// Base class Shape
class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}

// Subclass Circle
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

// Subclass Rectangle
class Rectangle extends Shape {
    draw() {
        console.log('Drawing a rectangle');
    }
}

// Demonstrating polymorphism
const shapes = [
    new Shape(),
    new Circle(),
    new Rectangle()
];

shapes.forEach(shape => shape.draw());
