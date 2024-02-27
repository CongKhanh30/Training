// Khi ko su dung Arrow Function
const obj = {
    name: "John",
    greet: function() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}`); // this.name sẽ là undefined
        }, 1000);
    }
};

obj.greet();

// Khi su dung Arrow Function
const obj = {
    name: "John",
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`); // this.name sẽ là "John"
        }, 1000);
    }
};

obj.greet();

// Arrow function vơi 1 dong lenh tra ve
const sum = (a, b) => a + b;
console.log(sum(2, 3));

// Arrow function khong co tham so
const hello = () => console.log("Hello");
hello(); // Output: Hello



