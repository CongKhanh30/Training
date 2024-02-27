//Basic
let count: number = 0;

while (count < 5) {
    console.log(count); // In ra các số từ 0 đến 4
    count++;
}

//do_while
let i: number = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

// break, continue
let i: number = 0;
while (i < 5) {
    if (i === 2) {
        i++;
        continue; // Bỏ qua lặp tiếp theo nếu i = 2
    }
    console.log(i);
    if (i === 3) {
        break; // Thoát khỏi vòng lặp nếu i = 3
    }
    i++;
}
