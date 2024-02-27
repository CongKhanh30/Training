// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class OnetLogics extends cc.Component {

    private board: number[][];
    private rows: number;
    private cols: number;

    constructor(rows: number, cols: number, n: number) {
        super();
        this.rows = rows;
        this.cols = cols;                                                                                                                                            
        this.board = this.createEmptyBoard(rows, cols, n);
    }

    private createEmptyBoard(rows: number, cols: number, n: number): number[][] {
        const board: number[][] = [];
        for (let i = 0; i < rows; i++) {
            board.push(Array.from({ length: cols }, () => Math.floor(Math.random() * (n + 1))));
        }
        return board;
    }


    printBoard(): void {
        for (const row of this.board) {
            console.log(row.join(' '));
        }
    }


    newGame(): void {
        // Tạo một mảng mới để lưu trữ tất cả các giá trị của các ô
        const values: number[] = [];

        // Tạo tất cả các cặp giá trị từ 0 đến n (n - 1) và đẩy chúng vào mảng values
        for (let i = 0; i < this.rows * this.cols / 2; i++) {
            values.push(i);
            values.push(i);
        }

        // Trộn ngẫu nhiên mảng values để đảm bảo sự ngẫu nhiên của các cặp giá trị
        values.sort(() => Math.random() - 0.5);

        // Đặt giá trị cho từng ô trên bảng
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.board[i][j] = values[i * this.cols + j];
            }
        }
    }


    canConnect(from: { row: number, col: number }, to: { row: number, col: number }): boolean {
        // Kiểm tra xem hai ô có cùng giá trị không
        if (this.board[from.row][from.col] !== this.board[to.row][to.col]) {
            return false;
        }

        // Kiểm tra xem hai ô có thể được nối trực tiếp không (cùng hàng hoặc cùng cột)
        if (from.row === to.row || from.col === to.col) {
            return true;
        }

        // Nếu không thể nối trực tiếp, kiểm tra xem có đường nối giữa chúng không
        return this.isConnectedInOneTurn(from, to);
    }

    isConnectedInOneTurn(from: { row: number, col: number }, to: { row: number, col: number }): boolean {
        // Kiểm tra xem có đường nối giữa hai ô không (nếu chúng cùng giá trị)
        return this.board[from.row][to.col] === this.board[from.row][from.col] ||
               this.board[to.row][from.col] === this.board[from.row][from.col];
    }

    connect(from: { row: number, col: number }, to: { row: number, col: number }): void {
        // Kiểm tra xem hai ô có thể nối không
        if (!this.canConnect(from, to)) {
            return;
        }

        // Nếu có thể nối, thực hiện việc xóa 2 ô khỏi bảng chơi
        this.board[from.row][from.col] = -1;
        this.board[to.row][to.col] = -1;
    }


    checkResult(): string {
        // Kiểm tra xem còn cell nào trên bảng không
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.board[i][j] !== -1) {
                    // Nếu còn cell nào trên bảng, trả về "continue" để tiếp tục chơi
                    return "continue";
                }
            }
        }

        // Kiểm tra xem còn nước đi nào không
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                for (let k = i; k < this.rows; k++) {
                    for (let l = 0; l < this.cols; l++) {
                        if (this.canConnect({row: i, col: j}, {row: k, col: l})) {
                            // Nếu còn nước đi nào, trả về "continue" để tiếp tục chơi
                            return "continue";
                        }
                    }
                }
            }
        }

        // Nếu không còn cell nào trên bảng hoặc không còn nước đi nào, kiểm tra kết quả chiến thắng hoặc thua
        let numberOfPairs = (this.rows * this.cols) / 2;
        let pairsRemaining = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.board[i][j] !== -1) {
                    pairsRemaining++;
                }
            }
        }

        if (pairsRemaining === 0) {
            return "win"; // Chiến thắng
        } else {
            return "lose"; // Thua
        }
    }

    autoPlay(): void {
        // Lặp lại cho đến khi ván chơi kết thúc
        while (true) {
            // Kiểm tra kết quả trước mỗi bước để biết liệu ván chơi đã kết thúc chưa
            let result = this.checkResult();
            if (result !== "continue") {
                // Nếu ván chơi kết thúc, in kết quả và kết thúc hàm autoPlay
                console.log("Game over. Result: " + result);
                return;
            }

            // Tìm hai ô ngẫu nhiên có thể nối với nhau
            let from = { row: Math.floor(Math.random() * this.rows), col: Math.floor(Math.random() * this.cols) };
            let to = { row: Math.floor(Math.random() * this.rows), col: Math.floor(Math.random() * this.cols) };

            // Kiểm tra xem hai ô có thể nối với nhau không
            if (this.canConnect(from, to)) {
                // Nếu có thể nối, thực hiện nối
                this.connect(from, to);
            }
        }
    }
}

