// Basic
class Person {
    // Thuộc tính
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Phương thức
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Brief
class Person {
    constructor(public name: string, public age: number) {
        // code constructor
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Abstract Class
abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Class Inheritance
class Animal {
    sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }

    makeSound(): void {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor() {
        super("Woof");
    }
}
