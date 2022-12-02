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
        column.classList.add('column' , 'column-outline');
        column.style.backgroundColor = '#ffffff'
        guideLines.appendChild(column);

        toggleGuideBtn.addEventListener('pointerdown', function() {
            column.classList.toggle('column-outline');
        });

        for(let j = 0; j < rows; j++) {
            let row = document.createElement('div'); 
            row.dataColor = 0; 
            row.classList.add('row', 'row-outline');
            row.style.backgroundColor = '#ffffff'
            column.appendChild(row);

            toggleGuideBtn.addEventListener('pointerdown', function() {
                row.classList.toggle('row-outline');
            });

            row.addEventListener('pointerover', draw);

            clearBtn.addEventListener('pointerdown', function() {
                row.style.backgroundColor = '#ffffff';
            })
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
        guideLines.textContent = ""
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
    let greyArray = ['#ffffff', '#eeeeee', '#dddddd', '#cccccc', '#bbbbbb', '#aaaaaa', '#999999', '#888888', '#777777', '#666666', '#555555', '#444444', '#333333', '#222222', '#111111', '#000000'];

    if(!pointerDown) return;

    if(pointerDown) {
        if(color === 'colorPicker') {
            this.style.backgroundColor = colorPicker.value;
         } else if(color === 'random') {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = '#' + randomColor;
        } else if (color === 'shading') {
            this.style.backgroundColor = greyArray[Math.min(++this.dataColor, 15)];  // dataColor refers to variable in line 37
        } else if (color === 'lighten') {
            this.style.backgroundColor = greyArray[Math.min(--this.dataColor, 15)];
        } else if (color === 'eraser') {
            this.style.backgroundColor = '#ffffff';
        } 
    }

};


function getColor(colorChoice) {
    color = colorChoice; 
};


// function resetGrid() {
//     clearBtn.addEventListener('pointerdown', function() {
//         this.style.backgroundColor = this.dataColor;
//     })
// };

// CALL FUNCTIONS

makeGrid();
rangeSliderControl();
//resetGrid();