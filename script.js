/**
 * @type HTMLCanvasElement
 */

// GLOBAL VARIABLES (target canvas, guides and buttons)

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let drawing = false; 
let guideLines = document.getElementById('guide');
let slider = document.getElementById('grid-range');
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
    // let slider = document.getElementById('grid-range');
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


function startDrawing(e) {

    // Ensure user is using primary mouse button
    if (e.button !== 0) {
        return;
    }

    drawing = true;
    ctx.beginPath();  // Allows user to make new line after lifting mouse and clicking again
    draw(e);
}

function endDrawing() {
    drawing = false;

}

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect(),
      scaleX = canvas.width / rect.width,
      scaleY = canvas.height / rect.height;
  
    return {
      x: (evt.clientX - rect.left) * scaleX,
      y: (evt.clientY - rect.top) * scaleY
    }
}


function draw(e) {
    if(!drawing) return; 

    let { x, y } = getMousePos(canvas, e);

    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(x, y);    
    ctx.strokeStyle = colorPicker.value;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}


// function toggleGuideSwitch() {
//     guideLines.style.display = toggleGuide.checked ? null : "none";
// }




// Event Listeners

guideLines.addEventListener('change', toggleGuideSwitch);

canvas.addEventListener('mousedown', startDrawing);

canvas.addEventListener('mouseup', endDrawing);

// canvas.addEventListener('mousemove', draw); 


// CALL FUNCTIONS

makeGrid();
rangeSliderControl();