//localStorage.clear();
// const data = {'hi':'satisfies', "r":2, 4:'m'}
// localStorage.setItem(`data`, JSON.stringify(data));
// let b = localStorage.getItem(`data`);
// let data_2 = JSON.parse(b);
// data_2.r = 5 
// console.log(data_2);

let data = [];

const textarea = document.getElementById("textarea");
data = JSON.parse(localStorage.getItem('DATA')) ?? [];
textarea.value = data;

textarea.addEventListener('input', function(){
    data = (textarea.value);
    localStorage.setItem("DATA", JSON.stringify(data));
});
