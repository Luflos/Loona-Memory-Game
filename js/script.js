console.log("Loona")
const gameSpace = document.querySelector(".container")
const displayGuesses = document.querySelector("#guess")

// Create an array for all images
const imageArray = []

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
