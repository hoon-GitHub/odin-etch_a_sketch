const grid = document.querySelector('.grid');

// Create a grid
function createGrid(gridSize) {
    
    // Check gridSize validity
    if (gridSize < 10 || gridSize > 100) {
        grid.textContent = '** Cannot generate a grid - please enter a number between 10 and 100. **';
        grid.style.fontSize = '24px';
        grid.style.color = 'blue';
        grid.style.padding = '20px';
        return null;
    }

    // Find proper boxSize
    let boxSize = 20; // default, 10-30
    if (gridSize >= 30 && gridSize < 50) boxSize = 12;
    if (gridSize >= 50 && gridSize < 80) boxSize = 8;
    if (gridSize >= 80 && gridSize <= 100) boxSize = 5;
    const boxSizeTxt = boxSize + 'px';
    console.log(boxSizeTxt)

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        for (let k = 0; k < gridSize; k++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = boxSizeTxt;
            box.style.height = boxSizeTxt;
            row.appendChild(box);
        }
        grid.appendChild(row);
    }
}

createGrid(30);