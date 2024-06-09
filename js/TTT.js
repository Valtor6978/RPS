const cells = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('reset-btn');
const result = document.getElementById('result');

let currentPlayer = 'X';
let moves = 0;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.innerText) {
            cell.innerText = currentPlayer;
            moves++;
            
            if (checkWinner()) {
                result.innerText = `Player ${currentPlayer} wins!`;
                cells.forEach(cell => {
                    cell.style.pointerEvents = 'none';
                });
            } else if (moves === cells.length) {
                result.innerText = "It's a tie!";
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWinner() {
    return winPatterns.some(pattern => {
        if (cells[pattern[0]].innerText && cells[pattern[0]].innerText === cells[pattern[1]].innerText && cells[pattern[0]].innerText === cells[pattern[2]].innerText) {
            return true;
        }
        return false;
    });
}


resetBtn.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.pointerEvents = 'auto';
    });
    currentPlayer = 'X';
    result.innerText = '';
    moves = 0;
});