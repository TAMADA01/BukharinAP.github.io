let k = 0;

let button_next = document.querySelector(".slaider-next");
let button_prev = document.querySelector(".slaider-prev");

let slaider_line = document.querySelector(".slaider-line");
let count = slaider_line.children.length;

button_next.addEventListener("click", function(){
    if (k < count-1) {     
        k++;
    }
    else{
        k = 0
    }
    changeSlaiderTop();
});

button_prev.addEventListener("click", function(){
    if (k > 0) {     
        k--;
    }
    else{
        k = count-1
    }
    changeSlaiderTop();
});

function changeSlaiderTop(){
    slaider_line.style.top = `${-k*(286.6)}px`;
}