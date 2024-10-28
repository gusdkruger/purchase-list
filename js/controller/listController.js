import { addEventToDelete } from "./eventController.js";

export function existsInList(text) {
    let exists = false;
    const items = document.querySelectorAll("#list li");
    for(let i = 0; i < items.length && !exists; i++) {
        const currentText = items[i].getElementsByTagName("p")[0].innerText;
        exists = currentText === text;
    }
    return exists;
}

export function addToList(text) {
    const listContainer = document.getElementById("list-container");
    listContainer.classList.add("fade-in");

    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = text;
    li.appendChild(p);

    const button = document.createElement("button");
    button.classList.add("button", "custom-outline");
    button.innerText = "Delete";
    addEventToDelete(button);
    li.appendChild(button);

    const list = document.getElementById("list");
    list.appendChild(li);
    setTimeout(() => {
        li.classList.add("slide-in");
    }, 10);
}
