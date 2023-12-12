let main = localStorage.getItem("--main-color");
let bs_main = localStorage.getItem("--bs-main-color");
let second = localStorage.getItem("--second-color");

document.body.style.setProperty("--main-color", main);
document.body.style.setProperty("--bs-main-color", bs_main);
document.body.style.setProperty("--second-color", second);

const button = document.getElementById("switch_mode");
if (main !== 'rgb(24, 221, 155)') {
    button.innerText = '✹';
}
else{
    button.innerText = '☾';
}

isClick = main === 'rgb(24, 221, 155)';
button.addEventListener('click', function(){
    main = 'rgb(24, 158, 221)';
    bs_main = 'rgba(24, 158, 221, 0.7)'
    second = 'rgb(255, 255, 255)';

    isClick = !isClick;
    button.innerText = '✹';
    if (isClick) {
        button.innerText = '☾';
        main ='rgb(24, 221, 155)';
        bs_main = 'rgba(24, 221, 155, 0.7)'
        second = 'rgb(57, 57, 57)';
    }

    document.body.style.setProperty("--main-color", main);
    document.body.style.setProperty("--bs-main-color", bs_main);
    document.body.style.setProperty("--second-color", second);

    localStorage.setItem("--main-color", main);
    localStorage.setItem("--bs-main-color", bs_main);    
    localStorage.setItem("--second-color", second);
});