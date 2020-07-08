function drawGrid(nCells)
{
	const drScreen = document.querySelector(".draw-screen");
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

function clear(e){
	//console.log(e);
	const cells = Array.from(document.querySelectorAll(".sketch-cell"));
	console.log(cells);
	cells.forEach(cell => {
		cell.style.backgroundColor = "white";
	});
}

document.getElementById("reset").addEventListener("click", clear);
/*
	drawGrid(16);
*/