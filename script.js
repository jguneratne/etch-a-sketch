// GLOBAL VARIABLES

let canvas = document.getElementsByClassName('.canvas-div');
let guideLines = document.getElementById('guide');
let colorPicker = document.getElementById('color-picker');
let greyScale = document.getElementsByClassName('grey');
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
            column.appendChild(row);

            colorPicker.addEventListener('click', function(event) {
                if (event.target.matches('#color-picker')) {
                    row.addEventListener('pointerdown', draw);
                }

            draw(row);
            })
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


 function draw(row) {

     row.addEventListener('pointermove', function(event){
        if(event.target.matches('.row')) {
            row.style.background = colorPicker.value;
        }
    })
}



// function greyScaleButton() {

//     let greyArray = [0x000000, 0x0a0a0a, 0x141414, 0x1e1e1e, 0x282828, 0x323232, 0x3b3b3b, 0x454545, 0x4f4f4f, 0x595959, 0x636363, 0x6c6c6c, 0x767676, 0x808080, 0x8a8a8a, 0x949494, 0x9d9d9d, 0xa7a7a7, 0xb1b1b1, 0xbbbbbb, 0xc5c5c5, 0xcecece, 0xd8d8d8, 0xe2e2e2, 0xececec, 0xf6f6f6];

//     greyScale = greyArray[Math.floor(Math.random() * greyArray.length)];

//     console.log(greyScale);
//     //return greyScale; 
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
//greyScaleButton()