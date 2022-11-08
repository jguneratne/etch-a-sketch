/**
 * @type HTMLCanvasElement
 */

// Global variables, targeting canvas, guides and buttons

let canvas = document.getElementById('canvas');
let guide = document.getElementById('guide');
let colorPicker = document.getElementById('color-picker');
let toggleGuide = document.getElementById('toggleOnOff');
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

}


function toggleGuideSwitch() {
    guide.style.display = toggleGuide.checked ? null : "none";
}

// Event Listeners

guide.addEventListener('change', toggleGuideSwitch);

makeGrid();