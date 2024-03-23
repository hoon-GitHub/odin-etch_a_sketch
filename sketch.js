const grid = document.querySelector('.grid');
const heading = document.querySelector('.heading');

// Create grid function
function createGrid(gridSize) {
    
    // Display current grid size
    heading.textContent = `Grid Size: ${gridSize} by ${gridSize}`

    // Check gridSize validity
    if (gridSize < 10 || gridSize > 100) {
        heading.textContent = '** Cannot generate a grid - please enter a number between 10 and 100. **';
        return null;
    }

    // Find proper boxSize
    let boxSize = 20; // default, 10-30
    if (gridSize >= 30 && gridSize < 50) boxSize = 12;
    if (gridSize >= 50 && gridSize < 80) boxSize = 8;
    if (gridSize >= 80 && gridSize <= 100) boxSize = 5;
    const boxSizeTxt = boxSize + 'px';

    // Generate grid
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        for (let k = 0; k < gridSize; k++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = boxSizeTxt;
            box.style.height = boxSizeTxt;
            box.style.backgroundColor = "#ffffff";
            row.appendChild(box);
        }
        grid.appendChild(row);
    }

    // Ready to draw
    draw();

}

// Delete grid function
function deleteGrid() {
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}

// Draw / color grid function
function draw() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "#8fa3a1";
        });
    });
}


// Default grid
createGrid(16);

// Change grid size button
const btn_gridSize = document.querySelector('.btn_gridSize');
btn_gridSize.addEventListener("click", () => {
    const newGridSize = prompt("Please enter a new grid size (one number, 10-100).")
    deleteGrid();
    createGrid(newGridSize);
});

// Clear grid button
const btn_clear = document.querySelector('.btn_clear');
btn_clear.addEventListener("click", () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = "#ffffff";
    });
});