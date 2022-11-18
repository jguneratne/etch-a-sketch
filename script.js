/**
 * @type HTMLCanvasElement
 */

// GLOBAL VARIABLES (target canvas, guides and buttons)

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let guideLines = document.getElementById('guide');
let colorPicker = document.getElementById('color-picker');
let toggleGuide = document.getElementById('toggleOnOff');
let clearBtn = document.getElementById('clear-btn');


// FUNCTIONS

function makeGrid(cellCount) {

    let columns = cellCount;
    let rows = cellCount;

    // Initialize canvas background default color
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

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


 function rangeSliderControl() {
    let slider = document.getElementById('grid-range');
    let output = document.getElementById('grid-value');
    let cellCount = slider.value;

    output.textContent = `${slider.value} x ${slider.value}`;

    slider.oninput = function() {
        output.textContent = `${this.value} x ${this.value}`;
    }


    slider.addEventListener('input', function() {
        guideLines.innerHTML = ""
        makeGrid(slider.value);

    })
    

    makeGrid(cellCount);
}


// function toggleGuideSwitch() {
//     guide.style.display = toggleGuide.checked ? null : "none";
// }

// Event Listeners

//guide.addEventListener('change', toggleGuideSwitch);


// CALL FUNCTIONS

makeGrid();
rangeSliderControl();