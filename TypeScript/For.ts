// Basic
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for_of: lap qua phan tu cua mang hoac doi tuong
let tree: string[] = ["apple", "banana", "orange"];
for (const fruit of tree) {
    console.log(fruit); 
}

// for_in: lap qua cac thuoc tinh cua 1 doi tuong
let person = {name: "John", age: 30, city: "New York"};
for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        console.log(`${key}: ${person[key as keyof typeof person]}`);
    }
}

// forEach: lap qua moi phan tu cua mang 1 cach de dang
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach(num => {
    console.log(num); 
});

// break, continue trong for
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Dừng vòng lặp khi i = 3
    }
    console.log(i);
}

// vong lap long nhau:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`(${i}, ${j})`);
    }
}

