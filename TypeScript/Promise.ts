const myPromise = new Promise((resolve, reject) => {
    // Thực hiện công việc bất đồng bộ
    if (/* công việc hoàn thành thành công */) {
        resolve("Success result"); // Giá trị kết quả được truyền vào resolve
    } else {
        reject(new Error("Error message")); // Lỗi được truyền vào reject
    }
});

myPromise.then((result) => {
    // Xử lý kết quả thành công
    console.log(result);
}).catch((error) => {
    // Xử lý lỗi
    console.error(error);
});

// Ket hop Promise:
const promise1 = new Promise((resolve, reject) => {
    // Thực hiện công việc bất đồng bộ
    resolve("Result from promise1");
});

promise1.then((result) => {
    // Xử lý kết quả từ promise1 và trả về một giá trị mới hoặc một Promise mới
    return new Promise((resolve, reject) => {
        // Thực hiện công việc bất đồng bộ
        resolve(result + ", result from promise2");
    });
}).then((result) => {
    // Xử lý kết quả từ promise2
    console.log(result); // Output: "Result from promise1, result from promise2"
}).catch((error) => {
    // Xử lý lỗi
    console.error(error);
});

// Promise.all và Promise.race:
const promiseArray = [promise1, promise2, promise3];

Promise.all(promiseArray)
    .then((results) => {
        // Tất cả các Promise đã hoàn thành thành công
        console.log(results); // Mảng các kết quả
    })
    .catch((error) => {
        // Bất kỳ Promise nào trong mảng gặp lỗi
        console.error(error);
    });

Promise.race(promiseArray)
    .then((result) => {
        // Promise đầu tiên hoàn thành thành công
        console.log(result); // Kết quả của Promise đầu tiên
    })
    .catch((error) => {
        // Nếu có lỗi xảy ra trong bất kỳ Promise nào
        console.error(error);
    });
