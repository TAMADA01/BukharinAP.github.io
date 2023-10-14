let form = document.forms[0];

form.addEventListener('submit', (e) => {
        e.preventDefault();
        let mainSection = form.parentElement;
        greetingDiv = mainSection.children.greeting;
        greetingDiv.innerHTML = 
        `<h2>Привет 
        ${form.elements.name.value} 
        ${form.elements.surname.value}</h2>`;

        // addElement(form.elements.name.value,
        //     form.elements.surname.value,
        //     form);
    })
    
function addElement(name, surname, node) {
    var newElem = document.createElement("div");
    newElem.innerHTML = `<h2>Привет ${name} ${surname}</h2>`;

    node.before(newElem);
}

console.log("WORK!!!!!");