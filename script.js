class TicTacToe {
  constructor() {
    this.board = Array(9).fill("");
    this.currentPlayer = "X";
    this.gameActive = true;

    // DOM elements
    this.cells = document.querySelectorAll(".cell");
    this.statusDisplay = document.getElementById("status");
    this.resetButton = document.getElementById("resetButton");

    // Event listeners
    this.cells.forEach((cell) => {
      cell.addEventListener("click", () => this.handleCellClick(cell));
    });
    this.resetButton.addEventListener("click", () => this.resetGame());

    // Winning combinations
    this.winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];
  }

  handleCellClick(cell) {
    const index = cell.getAttribute("data-index");

    if (this.board[index] === "" && this.gameActive) {
      this.board[index] = this.currentPlayer;
      cell.textContent = this.currentPlayer;
      cell.classList.add(this.currentPlayer.toLowerCase());

      if (this.checkWin()) {
        this.statusDisplay.textContent = `Player ${this.currentPlayer} wins!`;
        this.gameActive = false;
        return;
      }

      if (this.checkDraw()) {
        this.statusDisplay.textContent = "Game ended in a draw!";
        this.gameActive = false;
        return;
      }

      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      this.statusDisplay.textContent = `Player ${this.currentPlayer}'s turn`;
    }
  }

  checkWin() {
    return this.winningCombinations.some((combination) => {
      return combination.every((index) => {
        return this.board[index] === this.currentPlayer;
      });
    });
  }

  checkDraw() {
    return this.board.every((cell) => cell !== "");
  }

  resetGame() {
    this.board = Array(9).fill("");
    this.currentPlayer = "X";
    this.gameActive = true;
    this.statusDisplay.textContent = `Player ${this.currentPlayer}'s turn`;

    this.cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("x", "o");
    });
  }
}

// Initialize the game
const game = new TicTacToe();
