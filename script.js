const flags = [
  {
    country: "United States",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
  },
  {
    country: "France",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
  },
  {
    country: "Japan",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png",
  },
  {
    country: "Germany",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png",
  },
  {
    country: "Brazil",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
  },
  {
    country: "Canada",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
  },
  {
    country: "India",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280",
  },
];

const flagImg = document.getElementById("flag-img");
const quizForm = document.getElementById("quiz-form");
const answerInput = document.getElementById("answer");
const resultParagraph = document.getElementById("result");

let currentFlag = {};

function getRandomFlag() {
  const randomIndex = Math.floor(Math.random() * flags.length);
  return flags[randomIndex];
}

function displayFlag() {
  currentFlag = getRandomFlag();
  flagImg.src = currentFlag.imageUrl;
}

function checkAnswer(event) {
  event.preventDefault();

  if (
    answerInput.value.trim().toLowerCase() === currentFlag.country.toLowerCase()
  ) {
    resultParagraph.textContent = "Correct! Good job!";
  } else {
    resultParagraph.textContent = `Wrong. The correct answer is ${currentFlag.country}.`;
  }

  answerInput.value = "";
  displayFlag();
}

quizForm.addEventListener("submit", checkAnswer);
displayFlag();
