const container = document.querySelector('.container');
let verticalDiv;

for (let i=0; i<16; i++) {
    const horizontalDiv = document.createElement('div');
    horizontalDiv.classList.add('horizontal');
    for (let j=0;j<16;j++) {
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