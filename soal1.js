const { Square, Rectangle } = require("./areaPerimeter");

const square = new Square(2);
const rectangle = new Rectangle(2, 3);

console.log(`Total area of the ${square.name} is ${square.area()} cm`);
console.log(
  `Total perimeter of the ${square.name} is ${square.perimeter()} cm`
);

console.log(`Total area of the ${rectangle.name} is ${rectangle.area()} cm`);
console.log(
  `Total perimeter of the ${rectangle.name} is ${rectangle.perimeter()} cm`
);
