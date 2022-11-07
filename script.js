// Global variables, targeting canvas, guides and buttons

let canvas = document.getElementById('grid');
let guide = document.getElementById('guide');
let colorPicker = document.getElementById('color-picker');
let toggleGuide = document.getElementById('toggle-guide');
let clearBtn = document.getElementById('clear-btn');

let ctx = canvas.getContext('2d');

// Initialize canvas background default color

ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Set dimensions for grid

let cellCount = 16; 
let cellPixelLength = canvas.width / cellCount; 


// Functions

function makeGrid() {

    // Setup the guides

    guide.style.width = `${canvas.width}px`;
    guide.style.height = `${canvas.height}px`;

    guide.style.gridTemplateColumns = `repeat(${cellCount}, 1fr)`;
    guide.style.gridTemplateRows = `repeat(${cellCount}, 1fr)`;

    [...Array(cellCount **2)].forEach(() => guide.insertAdjacentHTML("beforeend", "<div></div>"));

    // Specify line style for the grid

    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 1; 

}



function toggleGuideSwitch() {
    
}


makeGrid();
toggleGuideSwitch();
