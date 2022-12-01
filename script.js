// GLOBAL VARIABLES 
    // Target elements

const canvas = document.getElementsByClassName('.canvas-div');
const guideLines = document.getElementById('guide');
const toggleGuideBtn = document.getElementById('toggleOnOff');
const clearBtn = document.getElementById('clear-btn');

    // Variables for drawing

let pointerDown = false;
let color = 'black';


// FUNCTIONS

    // Grid functions - create, resize, toggle guides

function makeGrid(cellCount) {

    let columns = cellCount;
    let rows = cellCount;

    //Setup the guide lines
    for(let i = 0; i < columns; i++) {
        let column = document.createElement('div');
        column.classList.add('column' , 'column-border');
        guideLines.appendChild(column);

        toggleGuideBtn.addEventListener('pointerdown', function() {
            column.classList.toggle('column-border');
        });

        for(let j = 0; j < rows; j++) {
            let row = document.createElement('div'); 
            row.classList.add('row', 'row-border');
            column.appendChild(row);

            toggleGuideBtn.addEventListener('pointerdown', function() {
                row.classList.toggle('row-border');
            });

            row.addEventListener('pointerover', draw);
            row.style.backgroundColor = 'white';

        }
    }
};

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
};



    // Drawing Functions

guideLines.onpointerdown = () => pointerDown = true;
guideLines.onpointerup = () => pointerDown = false;
guideLines.onpointerleave = () => pointerDown = false;


 function draw() {

    const colorPicker = document.getElementById('color-picker');
    let shading = document.getElementsByClassName('shading');
    const rainbow = document.getElementsByClassName('rainbow');
    const eraser = document.getElementsByClassName('eraser');

    if(!pointerDown) return;

    if(pointerDown) {
        if(color === 'random') {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = '#' + randomColor;
         } else if(color === 'colorPicker') {
            this.style.backgroundColor = colorPicker.value;
        } else if (color === 'shading') {
            this.style.backgroundColor = 'black';
            this.style.opacity = (parseInt(this.style.opacity) || 0) + 0.2;
        } else if (color === 'eraser') {
            this.style.backgroundColor = 'white';
        } 
   
    }
};


function getColor(colorChoice) {
    color = colorChoice; 
};

function resetGrid() {
    clearBtn.addEventListener('pointerdown', makeGrid);
}
;

// CALL FUNCTIONS

makeGrid();
rangeSliderControl();