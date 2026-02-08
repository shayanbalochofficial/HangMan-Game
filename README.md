# 🎮 Hangman Game

A fun, classic Hangman word-guessing game built with **HTML**, **CSS**, and **JavaScript**.  
Guess programming-related words letter by letter—save the stick figure from hanging! Features smooth animations, notifications, and a popup for win/loss.

## ✨ Features

- Random word selection from a list of programming terms (e.g., "prototype", "callback")  
- SVG-based hangman figure that draws progressively on wrong guesses  
- Display of guessed letters and wrong attempts  
- Notification for duplicate letter guesses  
- Win/loss popup with reveal of the word on loss  
- Play Again button to reset the game  
- Keyboard input for guessing (A-Z only)  
- Responsive design with retro font (DotGothic16)  
- Mobile-friendly (though best on desktop for keyboard input)

## 🛠️ Technologies Used

- HTML5 (SVG for graphics)  
- CSS3 (Variables, Flexbox, Transitions)  
- Vanilla JavaScript (DOM manipulation, Event listeners, Arrays)

## 🕹️ How to Play

1. A hidden word (programming term) is chosen randomly  
2. Press letters on your keyboard (a-z) to guess  
3. Correct guesses reveal letters in the word  
4. Wrong guesses draw parts of the hangman figure (6 attempts max)  
5. Guess the full word before the figure is complete to win!  
6. If you lose, the word is revealed  
7. Click **Play Again** in the popup to start over

## 📂 Project Structure

```
hangman-game/
├── index.html          # Main HTML file
├── style.css           # Styling with CSS variables & transitions
├── script.js           # Game logic & event handling
├── README.md
```

## 🔧 How to Run Locally

1. Clone the repository

```bash
git clone https://github.com//shayanbalochofficial/HangMan-Game.git
```

2. Open the project folder

```bash
cd hangman-game
```

3. Open `index.html` in your browser  
   - Double-click the file, or  
   - Use Live Server in VS Code, or  
   - Run a local server: `python -m http.server` or `npx serve`


## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
