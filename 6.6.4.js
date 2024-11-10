const boardSize = 3;
const board = [];

for (let i = 0; i < boardSize; i++) {
    const boardRow = [];
    for (let j = 0; j < boardSize; j++) {
        boardRow.push(Math.random() < 0.5 ? "x" : "o");
    }
    board.push(boardRow);
}

for (let i = 0; i < boardSize; i++) {
    console.log(board[i].join(" "));
}