const wordElement = getElementById("word");
const wrongLettersElement = document.getElementsByClassName("wrong-letters");
const playAgainButton = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word",
);
const figureParts = document.querySelectorAll(".figure-part");

const words = ["Nia"]; //! Will select all words later for now focusing on making it working
const selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordElement.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
    <span class="letter">
    ${correctLetters.includes(letter) ? letter : ""}
    </span>
    `,
      )
      .join("")} 
    `;
  const innerWord = wordElement.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! YOU WON";
  }
}
