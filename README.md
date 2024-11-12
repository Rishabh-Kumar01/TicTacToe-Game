# Tic Tac Toe

A classic Tic Tac Toe game built with HTML, CSS, and vanilla JavaScript.

## 🎮 About the Game

Tic Tac Toe is a simple two-player game where players take turns placing their marks (either X or O) on a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. If all cells are filled and neither player has three in a row, the game is a draw.

This implementation of Tic Tac Toe provides a clean and responsive user interface, smooth gameplay, and a intuitive game experience.

## 🚀 Features

- Classic Tic Tac Toe gameplay
- Clean and responsive user interface
- Alternating turns between players (X and O)
- Automatic win and draw detection
- Restart game functionality
- Visual feedback for player moves
- Separation of game logic and UI

## 🎯 How to Play

1. Open the Tic Tac Toe game in your web browser.
2. The game starts with Player X's turn.
3. Click on an empty cell to place your mark (X or O).
4. The game will automatically switch to the other player's turn.
5. Continue taking turns until either a player gets three in a row (wins) or all cells are filled (draw).
6. If the game ends, the final status will be displayed.
7. Click the "Reset Game" button to start a new game.

## 🛠️ Technical Details

The Tic Tac Toe game is built using the following technologies:

- **HTML**: Provides the structure and layout of the game board and UI elements.
- **CSS**: Styles the game board, cells, and other UI components for a visually appealing design.
- **JavaScript**: Implements the core game logic, including handling user interactions, tracking game state, and detecting wins and draws.

The game is structured using an object-oriented approach, with a `TicTacToe` class that encapsulates the game's functionality. This includes:

- Maintaining the game board state
- Tracking the current player
- Handling cell clicks and updating the board
- Checking for win and draw conditions
- Resetting the game

The user interface is built with a responsive grid layout, allowing the game to adapt to different screen sizes. Visual feedback, such as hover effects and player-specific colors, enhance the overall user experience.

