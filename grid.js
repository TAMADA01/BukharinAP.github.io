let gridHandler = document.getElementById("grid");
const colCount = 4;
const boxCount = Math.pow(colCount, 2);
selectedItem = null;

gridHandler.style.gridTemplateColumns = `repeat(${colCount}, calc(min(100vh, 100vw)/${colCount+1}))`;
gridHandler.style.gridAutoRows = `calc(min(100vh, 100vw)/${colCount+1}`;

for (let i = 0; i < boxCount; i++) {
    let box = document.createElement("div");
    gridHandler.appendChild(box);
    box.style.visibility = 'visible';
    box.style.gridColumnStart = i%colCount+1;
    box.style.gridColumnEnd = i%colCount+2;
    box.style.gridRowStart = Math.floor(i/colCount)+1;
    box.style.gridRowEnd = Math.floor(i/colCount)+2; 
    box.onclick = Select;
}

function Select() {
    if (selectedItem != null) {
        let nowItem = this;

        let colStart = Math.min(selectedItem.style.gridColumnStart, nowItem.style.gridColumnStart);
        let colEnd = Math.max(selectedItem.style.gridColumnEnd, nowItem.style.gridColumnEnd);
        let rowStart = Math.min(selectedItem.style.gridRowStart, nowItem.style.gridRowStart);
        let rowEnd = Math.max(selectedItem.style.gridRowEnd, nowItem.style.gridRowEnd);

        if (nowItem == selectedItem) {
            for (let i = colStart; i < colEnd; i++) {
                for (let j = rowStart; j < rowEnd; j++) {
                    let box = gridHandler.children[(i-1)+(j-1)*colCount];
                    SetGrid(box, i, Number(i)+1, j, Number(j)+1, 'visible');
                }
            }
        }
        else{            
            let isContinue = true;
            for (let i = colStart; i < colEnd; i++) {
                for (let j = rowStart; j < rowEnd; j++) {
                    let box = gridHandler.children[(i-1)+(j-1)*colCount];
                    if (box.style.gridColumnStart < colStart) {
                        isContinue = false
                        break;
                    }
                    if (box.style.gridRowStart < rowStart) {
                        isContinue = false
                        break;
                    }
                    if (box.style.gridColumnEnd > colEnd) {
                        isContinue = false
                        break;
                    }
                    if (box.style.gridRowEnd > rowEnd) {
                        isContinue = false
                        break;
                    }
                }
                if (!isContinue) {
                    break;
                }
            }
            if (isContinue) {  
                for (let i = colStart; i < colEnd; i++) {
                    for (let j = rowStart; j < rowEnd; j++) {
                        let box = gridHandler.children[(i-1)+(j-1)*colCount];
                        SetGrid(box, colStart, colEnd, rowStart, rowEnd, 'hidden');
                    }
                }
                selectedItem.style.visibility = 'visible';
            }

        }
        selectedItem.style.backgroundColor = 'rgb(24, 158, 221)';
        selectedItem.style.border = 'none';
        selectedItem = null;
    }
    else{
        selectedItem = this;

        selectedItem.style.backgroundColor = 'rgb(24, 158, 221, 0.3)';
        selectedItem.style.border = '3px solid rgb(24, 158, 221)';
    }
}

function SetGrid(elem, colS, colE, rowS, rowE, visibility) {
    elem.style.gridColumnStart = colS;
    elem.style.gridColumnEnd = colE;
    elem.style.gridRowStart = rowS;
    elem.style.gridRowEnd = rowE;
    elem.style.visibility = visibility;
}
