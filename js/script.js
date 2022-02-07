console.log("Loona")
const gameSpace = document.querySelector(".container")
const displayGuesses = document.querySelector("#guess")


chosenCard = []

// Start gueesses at 0 and increment them as number of clicks go up
var guesses = 0
displayGuesses.innerText = guesses

// Create an array for all member's images 12 members and then repeat for 24 images
const getImages = [
  { imgSrc: './images/Loona-Heejin.jpg', name: 'Loona Heejin'},
  { imgSrc: './images/Loona-Hyunjin.jpg', name: 'Loona Hyunjin'},
  { imgSrc: './images/Loona-Haseul.jpg', name: 'Loona Haseul'},
  { imgSrc: './images/Loona-Yeojin.jpg', name: 'Loona Yeojin'},
  { imgSrc: './images/Loona-Vivi.jpg', name: 'Loona Vivi'},
  { imgSrc: './images/Loona-KimLip.jpg', name: 'Loona KimLip'},
  { imgSrc: './images/Loona-JinSoul.jpg', name: 'Loona JinSoul'},
  { imgSrc: './images/Loona-Choerry.jpg', name: 'Loona Choerryn'},
  { imgSrc: './images/Loona-Yves.jpg', name: 'Loona Yves'},
  { imgSrc: './images/Loona-Chuu.jpg', name: 'Loona Chuu'},
  { imgSrc: './images/Loona-GoWon.jpg', name: 'Loona GoWon'},
  { imgSrc: './images/Loona-OliviaHye.jpg', name: 'Loona OliviaHye'},
  { imgSrc: './images/Loona-Heejin.jpg', name: 'Loona Heejin'},
  { imgSrc: './images/Loona-Hyunjin.jpg', name: 'Loona Hyunjin'},
  { imgSrc: './images/Loona-Haseul.jpg', name: 'Loona Haseul'},
  { imgSrc: './images/Loona-Yeojin.jpg', name: 'Loona Yeojin'},
  { imgSrc: './images/Loona-Vivi.jpg', name: 'Loona Vivi'},
  { imgSrc: './images/Loona-KimLip.jpg', name: 'Loona KimLip'},
  { imgSrc: './images/Loona-JinSoul.jpg', name: 'Loona JinSoul'},
  { imgSrc: './images/Loona-Choerry.jpg', name: 'Loona Choerryn'},
  { imgSrc: './images/Loona-Yves.jpg', name: 'Loona Yves'},
  { imgSrc: './images/Loona-Chuu.jpg', name: 'Loona Chuu'},
  { imgSrc: './images/Loona-GoWon.jpg', name: 'Loona GoWon'},
  { imgSrc: './images/Loona-OliviaHye.jpg', name: 'Loona OliviaHye'}
]
// Randomize the images
getImages.sort( () => Math.random()- 0.5)


// Function to create the squares using a loop
// make the divs into ids instead of making them imgs... 
let makeGameSpace = () => {
  for (let i = 0; i < getImages.length; i++) {
    let cards = document.createElement("img")
    cards.classList.add("card")
    cards.setAttribute('src', 'images/Loona-Logo.jpg')
    cards.setAttribute("id", 'card' + i)
    cards.addEventListener('click' , revealCard)
    gameSpace.appendChild(cards)
  }
}

let revealCard = () => {
  const cardSelector = Array.from(document.querySelectorAll('.card'))
  cardSelector.forEach((card, index) => {
    card.setAttribute('src', getImages[index].imgSrc)
  })
  } 

  

// // Function to shuffle  Fisher-Yates Shuffle
// function shuffle(array) {
//   let currentIndex = array.length,
//     randomIndex

//   // While there remain elements to shuffle...
//   while (currentIndex != 0) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex)
//     currentIndex--

//     // And swap it with the current element.
//     ;[array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ]
//   }
//   return array
// }


document.addEventListener("DOMContentLoaded", () => {
  makeGameSpace()
})
