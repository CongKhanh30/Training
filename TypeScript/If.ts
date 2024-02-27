// Basic
let x: number = 5;

if (x > 10) {
    console.log("x lớn hơn 10");
} else if (x === 10) {
    console.log("x bằng 10");
} else {
    console.log("x nhỏ hơn 10");
}

// Kiểm tra kiểu của biến
function isString(value: any): value is string {
    return typeof value === "string";
}

let x: any = "hello";

if (isString(x)) {
    console.log(x.toUpperCase());
} else {
    console.log("x không phải là chuỗi");
}

// If/else viết ngắn gọn theo kiểu toán tử 3 ngôi
let age: number = 5;
let message: string = age > 5 ? "Học lớp 1" : "Học mẫu giáo";
console.log(message);

// Sử dụng if trong function
let result: number = (function() {
    if (age >= 18) {
        return 1;
    } else {
        return 0;
    }
})();

// Kiểm tra null hoặc undefined
let myVar: string | null = null;

if (myVar != null) {
    console.log(myVar);
} else {
    console.log("Giá trị là null hoặc undefined");
}

let firstName: string | null = null;
let displayName: string = firstName ?? "HayHay";
console.log(displayName);

// Sử dụng if với mảng hoặc chuỗi
let fruits: string[] = ["apple", "banana", "orange"];
if (fruits.includes("banana")) {
    console.log("Có chuối trong mảng!");
}

let sentence: string = "Hello, world!";
if (sentence.includes("world")) {
    console.log("Chuỗi chứa từ 'world'");
}
