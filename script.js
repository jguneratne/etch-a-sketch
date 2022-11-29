// GLOBAL VARIABLES 
    // Target elements

let canvas = document.getElementsByClassName('.canvas-div');
let guideLines = document.getElementById('guide');
let colorPicker = document.getElementById('color-picker');
let greyScale = document.getElementsByClassName('grey');
let toggleGuideBtn = document.getElementById('toggleOnOff');
let clearBtn = document.getElementById('clear-btn');

    // Variables for drawing

let color = colorPicker.value; 
let pointerDown = false;


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
    if(!pointerDown) return;

    if(pointerDown) {
        this.style.backgroundColor = colorPicker.value;
    }
};



// function greyScaleButton() {

//     let greyArray = [0x000000, 0x0a0a0a, 0x141414, 0x1e1e1e, 0x282828, 0x323232, 0x3b3b3b, 0x454545, 0x4f4f4f, 0x595959, 0x636363, 0x6c6c6c, 0x767676, 0x808080, 0x8a8a8a, 0x949494, 0x9d9d9d, 0xa7a7a7, 0xb1b1b1, 0xbbbbbb, 0xc5c5c5, 0xcecece, 0xd8d8d8, 0xe2e2e2, 0xececec, 0xf6f6f6];

//     greyScale = greyArray[Math.floor(Math.random() * greyArray.length)];

//     console.log(greyScale);
//     //return greyScale; 
// }


// CALL FUNCTIONS

makeGrid();
rangeSliderControl();
//greyScaleButton()