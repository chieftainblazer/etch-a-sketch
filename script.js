function createGrid() {
    let gridSubContainer = document.createElement('div');
    gridSubContainer.classList.add('grid-subcontainer');

    for (let i = 1; i <= 16; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-item');
        if (i % 4 == 0)  {
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

const gridContainer = document.querySelector('.grid');
createGrid();
addHoverEffect();