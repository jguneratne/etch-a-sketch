/**
 * @type HTMLCanvasElement
 */

// GLOBAL VARIABLES (target canvas, guides and buttons)

let canvas = document.getElementsByClassName('.canvas-div');
let guideLines = document.getElementById('guide');
let colorPicker = document.getElementById('color-picker');
let toggleGuide = document.getElementById('toggleOnOff');
let clearBtn = document.getElementById('clear-btn');


// FUNCTIONS

function makeGrid(cellCount) {

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
            row.addEventListener('mouseover', function() {row.style.background = colorPicker.value;});
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



// function colorPickerFill() {

//     let cellDraw = document.querySelector('div.row');
    
//     guideLines.addEventListener('mousedown', function(e) {
//         if (e.target.matches('div.row')) {
//             cellDraw.style.background = colorPicker.value;
//         }
//     })

//     guideLines.addEventListener('mousemove', function(e) {
//         if (e.target.matches ('div.row')) {
//             cellDraw.style.background = colorPicker.value;
//         }
//     })
// }




//function toggleGuideSwitch() {
//     div.guideLines.style.display = toggleGuide.checked ? null : "none";

    //div.column.toggle('remove');
    //div.row.toggle('remove');
//}




// Event Listeners

//guideLines.addEventListener('change', toggleGuideSwitch);



// CALL FUNCTIONS

makeGrid();
rangeSliderControl();
//colorPickerFill();