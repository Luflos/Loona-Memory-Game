const gameSpace = document.querySelector(".container");
const displayGuesses = document.querySelector("#guess");
const resetButton = document.querySelector("#resetButton");
const winMessage = document.querySelector("#winMessage");

// Start gueesses at 0 and increment them as number of clicks go up
let guesses = 0;
displayGuesses.innerText = guesses;

let correctGuesses = 0;

// Create an array for all member's images 12 members and then repeat for 24 images
const getImages = [
  { imgs: "./images/Loona-Heejin.jpg", name: "Loona Heejin" },
  { imgs: "./images/Loona-Hyunjin.jpg", name: "Loona Hyunjin" },
  { imgs: "./images/Loona-Haseul.jpg", name: "Loona Haseul" },
  { imgs: "./images/Loona-Yeojin.jpg", name: "Loona Yeojin" },
  { imgs: "./images/Loona-Vivi.jpg", name: "Loona Vivi" },
  { imgs: "./images/Loona-KimLip.jpg", name: "Loona KimLip" },
  { imgs: "./images/Loona-JinSoul.jpg", name: "Loona JinSoul" },
  { imgs: "./images/Loona-Choerry.jpg", name: "Loona Choerry" },
  { imgs: "./images/Loona-Yves.jpg", name: "Loona Yves" },
  { imgs: "./images/Loona-Chuu.jpg", name: "Loona Chuu" },
  { imgs: "./images/Loona-GoWon.jpg", name: "Loona GoWon" },
  { imgs: "./images/Loona-OliviaHye.jpg", name: "Loona OliviaHye" },
  { imgs: "./images/Loona-Heejin.jpg", name: "Loona Heejin" },
  { imgs: "./images/Loona-Hyunjin.jpg", name: "Loona Hyunjin" },
  { imgs: "./images/Loona-Haseul.jpg", name: "Loona Haseul" },
  { imgs: "./images/Loona-Yeojin.jpg", name: "Loona Yeojin" },
  { imgs: "./images/Loona-Vivi.jpg", name: "Loona Vivi" },
  { imgs: "./images/Loona-KimLip.jpg", name: "Loona KimLip" },
  { imgs: "./images/Loona-JinSoul.jpg", name: "Loona JinSoul" },
  { imgs: "./images/Loona-Choerry.jpg", name: "Loona Choerry" },
  { imgs: "./images/Loona-Yves.jpg", name: "Loona Yves" },
  { imgs: "./images/Loona-Chuu.jpg", name: "Loona Chuu" },
  { imgs: "./images/Loona-GoWon.jpg", name: "Loona GoWon" },
  { imgs: "./images/Loona-OliviaHye.jpg", name: "Loona OliviaHye" },
];

// Function to create the cards using a loop
let makeGameSpace = () => {
  // Checking if there is a child element and if it exists, remove that child element
  while (gameSpace.firstChild && !gameSpace.firstChild.remove());
  // Randomize the images
  getImages.sort(() => Math.random() - 0.5);
  for (let i = 0; i < getImages.length; i++) {
    let cards = document.createElement("img");
    cards.classList.add("card");
    cards.setAttribute("src", "images/Loona-Logo.jpg");
    // dataset is an object within the elements object
    cards.dataset.imgs = getImages[i].imgs;
    cards.dataset.name = getImages[i].name;
    cards.setAttribute("id", "card" + i);
    cards.addEventListener("click", revealCard);
    gameSpace.appendChild(cards);
  }
};

let clickedImageUrl = "";
let clickedElement = null;
let pause = false;

// function to change the card
let revealCard = (event) => {
  if (pause) {
    return;
  }
  const image = event.target;
  // url of the loona member
  const targetImageUrl = event.target.dataset.imgs;
  image.setAttribute("src", targetImageUrl);
  // First image
  if (clickedImageUrl === "") {
    clickedImageUrl = targetImageUrl;
    clickedElement = image;
  } else {
    if (clickedImageUrl === targetImageUrl) {
      // don't flip the images back
      correctGuesses++;
      console.log(correctGuesses);
      clickedImageUrl = "";
      clickedElement = null;
      guesses++;
      displayGuesses.innerText = guesses;
      winCondition();
      getFact(image.dataset.name);
    } else {
      // flip the images back to the logo
      guesses++;
      displayGuesses.innerText = guesses;
      pause = true;
      setTimeout(() => {
        image.setAttribute("src", "images/Loona-Logo.jpg");
        clickedElement.setAttribute("src", "images/Loona-Logo.jpg");
        clickedImageUrl = "";
        clickedElement = null;
        pause = false;
      }, 1000);
    }
  }
};

let winCondition = () => {
  if (correctGuesses >= 12) winMessage.innerText = "You Win";
};

// Extra Goal
let getFact = (name) => {
  if (name === "Loona Heejin") {
    alert("Hello");
  } else if (name === "Loona Hyunjin") {
    alert("Hello 2");
  }
};

resetButton.addEventListener("click", function () {
  winMessage.innerText = "";
  guesses = 0;
  displayGuesses.innerText = guesses;
  correctGuesses = 0;
  clickedImageUrl = "";
  clickedElement = null;
  pause = false;
  makeGameSpace();
});

document.addEventListener("DOMContentLoaded", () => {
  makeGameSpace();
});
