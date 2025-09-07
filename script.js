// Functions

function createGrid(size) {
    const grid = document.getElementById("grid");
    for (let i = 0; i < size; i++) {
        newDiv = document.createElement("div");
        newDiv.classList.add("gridColumn");
        grid.appendChild(newDiv);
        console.log("row made");
        for (let i=0; i<size; i++) {
            newSquare = document.createElement("div");
            newSquare.classList.add("gridSquare")
            newDiv.appendChild(newSquare);
            console.log("square made")
        }
    }
}

function clearGrid() {
    const grid = document.getElementById("grid");
    while (grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
}

function resetHover() {
    let squares = document.querySelectorAll(".gridSquare");
    for (let i=0; i<squares.length; i++) {
        squares[i].addEventListener("mouseover", (event) => {
            squares[i].style.cssText = "background-color: black";
        })
    }                    
}

// Event Listeners

let newGridButton = document.querySelector("#newGridButton")
newGridButton.addEventListener("click", () => {
    let input = prompt("Please enter a new size for the grid:");
    while (isNaN(input)) {
        input = prompt("Invalid input. Please enter a number from 1-100.")
    } 
    while (input >= 100){
        input = prompt("Number too high. Please enter a number from 1-100.")
    }
    clearGrid();
    createGrid(input);
    resetHover();
})

// Create inital grid
createGrid(16);
resetHover();