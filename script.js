function createGrid(rows, cols) {
    const grid = document.getElementById("grid");
    for (let i = 0; i < cols; i++) {
        newDiv = document.createElement("div");
        newDiv.classList.add("gridColumn");
        grid.appendChild(newDiv);
        console.log("row made");
        for (let i=0; i<rows; i++) {
            newSquare = document.createElement("div");
            newSquare.classList.add("gridSquare")
            newDiv.appendChild(newSquare);
            console.log("square made")
        }
    }


}

createGrid(16,16);

let squares = document.querySelectorAll(".gridSquare");
for (let i=0; i<squares.length; i++) {
    squares[i].addEventListener("mouseover", (event) => {
        squares[i].style.cssText = "background-color: black";
    })
}
