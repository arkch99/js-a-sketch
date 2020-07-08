function drawGrid(nCells)
{
	const drScreen = document.querySelector(".draw-screen");
	drScreen.innerHTML = ""; //delete any existing cells
	drScreen.style.gridTemplateColumns = `repeat(${nCells}, auto)`;
	drScreen.style.gridTemplateRows = `repeat(${nCells}, auto)`;

	for(let i = 0; i < nCells * nCells; i++)
	{
		let cell = document.createElement("div");
		cell.style = "border-style: solid; border-width: 1px;";
		cell.classList.add("sketch-cell");
		cell.addEventListener("mouseover", (e) => {
			//console.log(e);
			e.target.style.backgroundColor = "blue";
		});
		drScreen.appendChild(cell);
	}
}

function clear()
{
	//console.log(e);
	const cells = Array.from(document.querySelectorAll(".sketch-cell"));
	console.log(cells);
	cells.forEach(cell => {
		cell.style.backgroundColor = "white";
	});
}

function newGrid()
{
	nCells = prompt("Enter number of cells per side. WARNING: Values over 400 may cause instability!");
	clear();
	drawGrid(nCells);
}


function init()
{
	document.getElementById("reset").addEventListener("click", clear);
	document.getElementById("new").addEventListener("click", newGrid);
	drawGrid(16);
}

init();


