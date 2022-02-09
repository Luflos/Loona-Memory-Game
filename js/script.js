const gameSpace = document.querySelector(".container");
const displayGuesses = document.querySelector("#guess");
gameState = true;
// Start gueesses at 0 and increment them as number of clicks go up
let guesses = 0;
displayGuesses.innerText = guesses;

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
// Randomize the images
getImages.sort(() => Math.random() - 0.5);

// Function to create the cards using a loop
let makeGameSpace = () => {
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

  // console.log(event)
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
      clickedImageUrl = "";
      clickedElement = null;
      guesses++;
      displayGuesses.innerText = guesses;
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
      }, 1500);
    }
  }
};

// function winCondition () {
//   for (let i = 0; i < getImages.length; i++) {
//     if (24 =< getImages.length) {
//       gameState = false
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
  makeGameSpace();
});
