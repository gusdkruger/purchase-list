fillFromLocalStorage();

const form = document.getElementById("list-form");
form.addEventListener("submit", event => {
    event.preventDefault();

    const input = document.getElementById("input-field");
    const inputValue = input.value.trim();
    if(inputValue) {
        if(!existsInList(inputValue)) {
            addToList(inputValue);
            addToLocalStorage(inputValue)

            input.style.border = "2px solid var(--white)";
            input.value = "";
        }
        else {
            input.style.border = "2px solid red";
            alert("Item already exists in the list");
        }
    }
    else {
        input.style.border = "2px solid orange";
        alert("Type something to add to the list");
    }
});

function existsInList(text) {
    let exists = false;
    const items = document.querySelectorAll("#list li");
    for(i = 0; i < items.length && !exists; i++) {
        const currentText = items[i].getElementsByTagName("p")[0].innerText;
        exists = currentText === text;
    }
    return exists;
}

function addToList(text) {
    const listContainer = document.getElementById("list-container");
    listContainer.classList.add("show");

    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = text;
    li.appendChild(p);

    const button = document.createElement("button");
    button.innerText = "Delete";
    addEventToDelete(button);
    li.appendChild(button);

    const list = document.getElementById("list");
    list.appendChild(li);
}

function addToLocalStorage(text) {
    let list = JSON.parse(localStorage.getItem("list"));
    list ? list.push(text): list = [text];
    localStorage.setItem("list", JSON.stringify(list));
}

function removeFromLocalStorage(text) {
    let list = JSON.parse(localStorage.getItem("list"));
    const index = list.indexOf(text);
    list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(list));
}

function addEventToDelete(button) {
    button.addEventListener("click", event => {
        const text = event.target.previousSibling.innerText;
        removeFromLocalStorage(text);
        event.target.parentElement.remove();
        const li = document.querySelector("#list li");
        if(!li) {
            const listContainer = document.getElementById("list-container");
            listContainer.classList.remove("show");
        }
    });
}

function fillFromLocalStorage() {
    const list = JSON.parse(localStorage.getItem("list"));
    if(list) {
        list.forEach(item => {
            addToList(item);
        });
    }
}

