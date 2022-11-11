/**
 * @type HTMLCanvasElement
 */

// Global variables, targeting canvas, guides and buttons

let canvas = document.getElementById('canvas');
let guideLines = document.getElementById('guide');
let colorPicker = document.getElementById('color-picker');
let toggleGuide = document.getElementById('toggleOnOff');
let clearBtn = document.getElementById('clear-btn');

let ctx = canvas.getContext('2d');

// Initialize canvas background default color
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Set dimensions for grid
let cellCount = 16;

// Functions

function makeGrid() {

    let columns = cellCount;
    let rows = cellCount;


    //Setup the guide lines
    for(let i = 0; i < columns; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        guideLines.appendChild(column);

        for(let j = 0; j < rows; j++) {
            let row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        }
        
    }

}

//  function rangeSliderControl() {
//     let slider = document.getElementById('grid-range');
//     let output = document.getElementById('grid-size');

//     output.innerHTML = slider.value; 

//     slider.oninput = function() {
//         output.innerHTML = this.value;
//     }

// }


// function toggleGuideSwitch() {
//     guide.style.display = toggleGuide.checked ? null : "none";
// }

// Event Listeners

//guide.addEventListener('change', toggleGuideSwitch);


// Call functions

makeGrid();
//rangeSliderControl();