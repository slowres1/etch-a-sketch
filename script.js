function createGrid (gridSize) {
    for (let i=0; i<gridSize; i++) {
        const horizontalDiv = document.createElement('div');
        horizontalDiv.classList.add('horizontal');
        for (let j=0;j<gridSize;j++) {
            verticalDiv = document.createElement('div');
            verticalDiv.classList.add('vertical');
    
            horizontalDiv.appendChild(verticalDiv);
        }
        container.appendChild(horizontalDiv);
    }
    const pixels = document.querySelectorAll('.vertical');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
        pixel.classList.add('mouseover');
    });
});
}

function getNumber() {
    let userInput = parseInt(prompt('Enter a grid size:'));
    if (userInput) {
        //alert(`You have selected: ${userInput}.`)
        return userInput;
    } else {
        alert('Please enter a valid number');
    }
};

const container = document.querySelector('.container');
let verticalDiv;

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let gridSize;
    while (!gridSize) {
        gridSize = getNumber();
    }
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createGrid(gridSize);
})


createGrid(16);



