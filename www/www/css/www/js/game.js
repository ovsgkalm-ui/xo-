let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const boardDiv = document.getElementById("board");

function drawBoard() {
  boardDiv.innerHTML = "";
  board.forEach((cell, index) => {
    const div = document.createElement("div");
    div.className = "cell";
    div.innerText = cell;
    div.onclick = () => play(index);
    boardDiv.appendChild(div);
  });
}

function play(index) {
  if (board[index] !== "") return;
  board[index] = currentPlayer;
  if (checkWin()) {
    alert(currentPlayer + " wins!");
    resetGame();
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  drawBoard();
}

function checkWin() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return wins.some(p =>
    p.every(i => board[i] === currentPlayer)
  );
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  drawBoard();
}

drawBoard();
