const form = document.getElementById('task');
let index = 0;

for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.getItem(localStorage.key(i));
    createElement(element)
    index++;
}

function newElement(){
    let text = form.querySelector('#inputText').value;
    if (text === "") {
        alert("Введите значение");
        return;
    }
    createElement(text)
    localStorage.setItem(index, text);
    index++;
}

function createElement(text) {
    let task = document.createElement("li");
    task.id = `${index}`
    task.innerText = text;
    let deleteButton = document.createElement("span");
    deleteButton.innerText = '☭'
    deleteButton.addEventListener('click', function (){
       localStorage.removeItem(`${task.id}`);
        task.remove();
    });
    task.appendChild(deleteButton);
    form.querySelector(".list").appendChild(task)
}