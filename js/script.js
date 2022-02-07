console.log("Loona")
const gameSpace = document.querySelector(".container")
const displayGuesses = document.querySelector("#guess")

// Create an array for all member's images 12 members and then repeat for 24 images
const getImages = () => [
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


// Function to create the squares using a loop
// make the divs into ids instead of making them imgs... 
let makeGameSpace = () => {
  for (let i = 0; i < 24; i++) {
    let square = document.createElement("img")
    square.classList.add("square")
    square.setAttribute('src', 'images/Loona-Logo.jpg')
    square.setAttribute("id", 'square' + i)
    square.innerText = i
    gameSpace.appendChild(square)
  }
}


// Function to shuffle  Fisher-Yates Shuffle
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}


document.addEventListener("DOMContentLoaded", () => {
  makeGameSpace()
  console.log(makeGameSpace)
})
