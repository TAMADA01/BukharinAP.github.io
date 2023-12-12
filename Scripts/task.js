const form = document.getElementById('task');

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(localStorage.length-1-i)
    const element = localStorage.getItem(key);
    if (key.startsWith("task_")) {
        createElement(key, element)
    }
}

function newElement(){
    let text = form.querySelector('#inputText').value;
    if (text === "") {
        alert("Введите значение");
        return;
    }
    const time = Date.now();
    const key = `task_${time}`;
    createElement(key, text);
    localStorage.setItem(key, text);
}

function createElement(index, text) {
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