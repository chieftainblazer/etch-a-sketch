const divContainer = document.querySelector(".grid-container");
divContainer.removeAttribute("class");

// Create a button to allow for the user to choose the number of squares
const buttonElement = document.createElement("button");
buttonElement.textContent = "New Grid";
buttonElement.classList.add("button");
document.body.insertBefore(buttonElement, divContainer);

// Add event listener to button to prompt for number of squares
buttonElement.addEventListener("click", function (event) {
  // Dispose of old container
  divContainer.textContent = "";

  let isUserInputValid = false;
  let numberOfSquares;
  while (!isUserInputValid) {
    numberOfSquares = prompt("Enter the number of squares");
    if (numberOfSquares <= 100) {
      isUserInputValid = true;
    }
  }
  divContainer.classList.add("grid-container");
  createGrid(numberOfSquares)
});

// Add a listener to make the grid elements hover and change color
divContainer.addEventListener("mouseover", function (event) {
  const target = event.target;
  if (target.className === "grid-element") {
    target.style.backgroundColor = getRandomColor();
  }
});

// This method creates a grid of 16 x 16 squares
function createGrid(numberOfSquares) {
  for (let row = 1; row <= numberOfSquares; row++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("grid-row");
    divContainer.appendChild(rowContainer);
    for (let col = 1; col <= numberOfSquares; col++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("grid-element");
      rowContainer.appendChild(gridElement);
    }
  }
}

// This method returns a random color based on the rgb format such as rgb(x, y, z)
function getRandomColor() {
  return "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " +
          Math.floor(Math.random() * 255) + ")";
}