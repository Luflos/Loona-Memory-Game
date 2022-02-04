console.log("Loona")
const gameSpace = document.querySelector(".container")

// Function to create the squares using a loop
let makeGameSpace = () => {
  for (let i = 0; i < 24; i++) {
    let square = document.createElement("div")
    square.classList.add("square")
    square.innerText = i
    gameSpace.appendChild(square)
  }
}

makeGameSpace()
