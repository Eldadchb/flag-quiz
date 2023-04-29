const flagImg = document.getElementById("flag-img");
const quizForm = document.getElementById("quiz-form");
const answerInput = document.getElementById("answer");
const resultParagraph = document.getElementById("result");
const scoreParagraph = document.getElementById("score");
const scoreValue = document.getElementById("score-value");

let flags = [];
let currentFlag = {};
let score = 0;

async function fetchFlags() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    flags = data.map((country) => ({
      country: country.name.common,
      imageUrl: country.flags.png,
    }));
    displayFlag();
  } catch (error) {
    console.error("Error fetching flags:", error);
  }
}

function getRandomFlag() {
  const randomIndex = Math.floor(Math.random() * flags.length);
  return flags[randomIndex];
}

function displayFlag() {
  currentFlag = getRandomFlag();
  flagImg.src = currentFlag.imageUrl;
}

function showHint() {
  if (score <= 0) {
    resultParagraph.textContent = "You need at least 1 point to get a hint.";
    return;
  }

  const hint = currentFlag.country.slice(0, 3) + "...";
  resultParagraph.textContent = `Hint: ${hint}`;
  score--;
  scoreValue.textContent = score;
}

const hintButton = document.getElementById("hint-button");
hintButton.addEventListener("click", showHint);

function checkAnswer(event) {
  event.preventDefault();

  if (
    answerInput.value.trim().toLowerCase() === currentFlag.country.toLowerCase()
  ) {
    resultParagraph.textContent = "Correct! Good job!";
    score++;
  } else {
    resultParagraph.textContent = `Wrong. The correct answer is ${currentFlag.country}.`;
    if (score > 0) {
      score--;
    }
  }

  scoreValue.textContent = score;
  answerInput.value = "";
  displayFlag();
}

quizForm.addEventListener("submit", checkAnswer);
fetchFlags();
