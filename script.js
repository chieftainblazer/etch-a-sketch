function createGrid(numberOfRows = 4, numberOfColumns = 4) {
    let gridSubContainer = document.createElement('div');
    gridSubContainer.classList.add('grid-subcontainer');

    for (let i = 1; i <= numberOfRows * numberOfColumns; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-item');
        if (i % numberOfColumns == 0)  {
            gridSubContainer.appendChild(gridElement);
            gridContainer.appendChild(gridSubContainer);
            gridSubContainer = document.createElement('div');
            gridSubContainer.classList.add('grid-subcontainer');
        } else {
            gridSubContainer.appendChild(gridElement);
        }
    }
}

function addHoverEffect() {
    const eventFunction = (event) => {
        event.target.style.backgroundColor = getRandomColor();
        event.target.removeEventListener('mouseover', eventFunction);
    }

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', eventFunction);
    })
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

function getInputFromUser() {
    let numberOfRows, numberOfColumns;
    while (true) {
        alert("Input the number of rows and columns. Please, only input numbers" +
                " and the maximum number is 100.");
        numberOfRows = Number(prompt("Number of Rows: "));
        numberOfColumns = Number(prompt("Number of Columns: "));
        if (!isNaN(numberOfRows) && !isNaN(numberOfColumns) && 
            numberOfRows <= 100 && numberOfColumns <= 100) {
            break;
        }
    }
    gridContainer.innerHTML = null;
    createGrid(numberOfRows, numberOfColumns);
    addHoverEffect();
}

const gridContainer = document.querySelector('.grid');
const button = document.querySelector('button');

createGrid();
addHoverEffect();
button.addEventListener('click', getInputFromUser);