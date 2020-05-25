const pixelTable = document.getElementById('pixelCanvas');

// Get user input
function userSubmit() {
    //Cancel event
    event.preventDefault();

    const specHeight = document.getElementById("inputHeight").value;
    const specWidth = document.getElementById("inputWidth").value;

    makeGrid(specWidth, specHeight)
}

//Populate grids
function makeGrid(width, height) {
    //Clear table
    pixelTable.innerHTML = '';

    //Create Rows and Columns
    createRowsColumns(height, width);

    //Apply color to cell/s
    clickEventToApplyColor();
}

//Create Rows and Columns
function createRowsColumns(height, width) {
    for (let x = 0; x < height; x++) {
        let row = document.createElement("tr");

        for (let y = 0; y < width; y++) {
            let addColumn = document.createElement("td");
            row.appendChild(addColumn).className = "cell";
        }
        pixelTable.appendChild(row).className = "row";
    }
}

//Allow user to select grid item to apply color
function clickEventToApplyColor() {
    const colorPicker = document.getElementById('colorPicker');
    const cell = document.getElementsByClassName('cell');

    for(let item = 0; item < cell.length; item++) {
        cell[item].addEventListener("click", function (event) {
            let cellClicked = event.target;
            cellClicked.style.backgroundColor = colorPicker.value;
        });
    }
}

// Apply submit to size picker
document.getElementById('sizePicker').onsubmit = function () {
    userSubmit();
};