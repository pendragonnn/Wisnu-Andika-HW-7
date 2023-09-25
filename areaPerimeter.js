class PlaneFigure {
  constructor(name) {
    this.name = name;
  }

  area() {
    return `Return the calculated value of the area of ${this.name}`;
  }

  perimeter() {
    return `Return the calculated value of the perimeter of ${this.name}`;
  }
}

class Square extends PlaneFigure {
  constructor(length) {
    super("Square");
    this.length = length;
  }

  area() {
    return this.length ** 2;
  }

  perimeter() {
    return this.length * 4;
  }
}

class Rectangle extends PlaneFigure {
  constructor(length, width) {
    super("Rectangle");
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }
}

module.exports = {
  Square,
  Rectangle,
};
