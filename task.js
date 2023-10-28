const form = document.getElementById('task');
let index = Number(localStorage.key(0));

for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.getItem(localStorage.key(localStorage.length-1-i));
    createElement(element)
}

function newElement(){
    let text = form.querySelector('#inputText').value;
    if (text === "") {
        alert("Введите значение");
        return;
    }
    createElement(text);
    localStorage.setItem(index, text);
    index++;
}

function createElement(text) {
    let task = document.createElement("li");
    task.id = `${index}`
    task.innerText = text;
    task.addEventListener('click', function (){
        task.className = (task.className == 'done' ? 'none' : "done");
    });
    let deleteButton = document.createElement("span");
    deleteButton.innerText = '☭'
    deleteButton.addEventListener('click', function (){
        localStorage.removeItem(`${task.id}`);
        task.remove();
    });
    task.appendChild(deleteButton);
    form.querySelector(".list").appendChild(task)
}