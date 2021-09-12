const body = document.body;
// Create a reference for containerDiv that will be appended to body
const containerDiv = document.createElement("div");
// Sets class, display, and background color
containerDiv.setAttribute("class", "gridContainer");
containerDiv.style.display = "flex";
containerDiv.style.flexWrap = "wrap";
containerDiv.style.backgroundColor = "blue";
containerDiv.style.margin = "5rem";
containerDiv.style.justifyContent = "center";
// Create a reference for a single gridDiv
// const gridDiv = document.createElement("div");
// // Sets class, background color, and temporary innerHTML text
// gridDiv.setAttribute("class", "gridDiv");
// gridDiv.style.backgroundColor = "white";
// gridDiv.innerHTML = "Hi";
// Append containerDiv to the body
body.append(containerDiv);
// containerDiv.append(gridDiv);
// Declare addGrid function, gridDiv will be appended to containerDiv 256 times
function newGridDiv() {
  for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "gridDiv");
    gridDiv.style.backgroundColor = "gray";
    gridDiv.style.margin = "0.03rem";
    gridDiv.style.padding = "3rem";
    // gridDiv.innerHTML = "Hi";
    containerDiv.append(gridDiv);
  }
}
newGridDiv();
