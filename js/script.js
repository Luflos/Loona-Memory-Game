const gameSpace = document.querySelector(".container");
const displayGuesses = document.querySelector("#guess");
const resetButton = document.querySelector("#resetButton");
const winMessage = document.querySelector("#winMessage");
const extraMessage = document.querySelector("#extra");

// Start gueesses at 0 and increment them as number of clicks go up
let guesses = 0;
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
      // console.log(correctGuesses);
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

// Win Condition - Counter = 12 or if there are all matches print out a message
let winCondition = () => {
  if (correctGuesses >= 12) {
  winMessage.innerText = "You Win";
  setTimeout(() => {
    extraMessage.style.color= 'black';
    extraMessage.innerText = "LOONA is Life";
  }, 4000)
}
};

// Extra Goal
let getFact = (name) => {
  if (name === "Loona Heejin") {
    extraMessage.style.color= '#F50B94';
    extraMessage.innerText =
      "HeeJin was the 1st member revealed. Her represetative animal is a Rabbit🐇 and her color is Vivid Pink";
  } else if (name === "Loona Hyunjin") {
    extraMessage.style.color= '#FCCA28';
    extraMessage.innerText =
      "HyunJin was the 2nd member revealed. Her represetative animal is a Cat🐈 and her color is Yellow";
  } else if (name === "Loona Haseul") {
    extraMessage.style.color= '#08A953';
    extraMessage.innerText =
      "HaSeul was the 3rd member revealed. Her represetative animal is a White Bird🕊️ and her color is Green";
  } else if (name === "Loona Yeojin") {
    extraMessage.style.color= '#F5712A';
    extraMessage.innerText =
      "YeoJin was the 4th member revealed. Her represetative animal is a Frog🐸 and her color is Orange";
  } else if (name === "Loona Vivi") {
    extraMessage.style.color= '#F59EAF';
    extraMessage.innerText =
      "ViVi was the 5th member revealed. Her represetative animal is a Deer🦌 and her color is Light Pink";
  } else if (name === "Loona KimLip") {
    extraMessage.style.color= '#EE1B3E';
    extraMessage.innerText =
      "KimLip was the 6th member revealed. Her represetative animal is an Owl🦉 and her color is Red";
  } else if (name === "Loona JinSoul") {
    extraMessage.style.color= '#1E76B8';
    extraMessage.innerText =
      "JinSoul was the 7th member revealed. Her represetative animal is a Blue Betta🐟 and her color is Blue";
  } else if (name === "Loona Choerry") {
    extraMessage.style.color= '#7C2E87';
    extraMessage.innerText =
      "Choerry was the 8th member revealed. Her represetative animal is a Fruit Bat🦇 and her color is Purple";
  } else if (name === "Loona Yves") {
    extraMessage.style.color= '#7A0434';
    extraMessage.innerText =
      "Yves was the 9th member revealed. Her represetative animal is a Swan🦢 and her color is Burgundy";
  } else if (name === "Loona Chuu") {
    extraMessage.style.color= '#F98F81';
    extraMessage.innerText =
      "Chuu was the 10th member revealed. Her represetative animal is a Penguin🐧 and her color is Peach";
  } else if (name === "Loona GoWon") {
    extraMessage.style.color= '#37BA9B';
    extraMessage.innerText =
      "GoWon was the 11th member revealed. Her represetative animal is an Emperor Butterfly🦋 and her color is Eden Green";
  } else if (name === "Loona OliviaHye") {
    extraMessage.style.color= '#C0C2C2';
    extraMessage.innerText =
      "Olivia Hye was the 12th & final member revealed. Her represetative animal is a Wolf🐺 and her color is Silver";
  }
};

// Reset button
resetButton.addEventListener("click", function () {
  winMessage.innerText = "";
  extraMessage.innerText = "";
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
