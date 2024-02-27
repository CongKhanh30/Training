// Hàm bất đồng bộ trả về một Promise
function delay(ms: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Hàm sử dụng Async/Await
async function myAsyncFunction() {
    try {
        console.log("Start");

        // Đợi cho delay(1000) hoàn thành và in ra "Delay completed" sau khi hoàn thành
        await delay(1000);
        console.log("Delay completed");

        // Đợi cho delay(2000) hoàn thành và in ra "Delay completed" sau khi hoàn thành
        await delay(2000);
        console.log("Delay completed");

        console.log("End");
    } catch (error) {
        console.error("Error:", error);
    }
}

myAsyncFunction();

// Xu ly loi cua Promise tu cac ham duoc await
async function fetchData() {
    try {
        const data = await fetchDataFromAPI();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Sử dụng trong method của class:
class DataService {
    async fetchData() {
        try {
            const data = await fetchDataFromAPI();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

// Ket hop voi setTimeout va setInterval:
async function delayExample() {
    console.log("Start");
    await new Promise(resolve => setTimeout(resolve, 1000)); // Delay 1 second
    console.log("After 1 second");
}
