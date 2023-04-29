# Flag Quiz Game

A fun and interactive game to test your knowledge of country flags. The goal is to recognize the flag and type in the correct country name. You will get +1 point for each correct answer and -1 point for each incorrect answer. The game is built using HTML, CSS, and JavaScript.

![Flag Quiz Game Screenshot](screenshot.png)

## How to Play

1. Open `index.html` in your favorite web browser.
2. A random flag will be displayed on the screen.
3. Type the name of the country that the flag represents into the text input field.
4. Click the "Submit" button or press "Enter" on your keyboard to submit your answer.
5. The game will display whether your answer was correct or incorrect, and your score will be updated.
6. A new flag will be displayed, and you can continue playing.

## How to Run Locally

1. Clone this repository or download the source files to your computer.
2. Make sure you have the following files in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md` (optional)
3. Open the `index.html` file in a web browser (such as Google Chrome, Mozilla Firefox, or Microsoft Edge) to play the game.

## How to Add More Flags

To add more flags to the game, simply update the `flags` array in the `script.js` file with the following object structure:

```javascript
{
    country: 'Country Name',
    imageUrl: 'URL of the flag image',
}
