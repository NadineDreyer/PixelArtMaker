// Select color input

const pixelTable = document.getElementById('pixelCanvas');

// Get user input
function userSubmit() {
    event.preventDefault();

    const specHeight = document.getElementById("inputHeight").value;
    const specWidth = document.getElementById("inputWidth").value;

    makeGrid(specWidth, specHeight)
}

//Populate grid
function makeGrid(width, height) {
    console.error(width + height);

    pixelTable.innerHTML = '';

    createRowsColumns(height, width);

    
    //get canvas to apply rows and columns

    //add grid into table element
    // Add click event to grid cells once the table grid has been created
}

function createRowsColumns(height, width) {
    for (let x = 0; x < height; x++) {
        let row = document.createElement("tr");
        row.innerText = x + 1;
        pixelTable.appendChild(row).className = "row";

        for (let y = 0; y < width; y++) {
            console.warn("REACHED2");
            let addColumn = document.createElement("td");
            console.warn(row[0]);
            addColumn.innerText = y+1;
            row.appendChild(addColumn).className = "column";
        }
    }
}

//Allow user to select grid item to apply color to
function clickEventToCells() {
    //on color selection return color:
}

// Apply submit to size picker
document.getElementById('sizePicker').onsubmit = function () {
    userSubmit();
};

// Build a default 10x10 grid.