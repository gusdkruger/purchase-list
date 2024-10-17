import { removeFromLocalStorage, addToLocalStorage } from "./localStorageController.js";
import { existsInList, addToList } from "./listController.js";

export function addEventToDelete(button) {
    button.addEventListener("click", event => {
        const text = event.target.previousSibling.innerText;
        removeFromLocalStorage(text);
        event.target.parentElement.classList.add("slide-out");
        setTimeout(() => {
            event.target.parentElement.remove();
            const li = document.querySelector("#list li");
            if(!li) {
                const listContainer = document.getElementById("list-container");
                listContainer.classList.add("fade-out");
                setTimeout(() => {
                    listContainer.classList.remove("fade-in");
                    listContainer.classList.remove("fade-out");
                }, 350);
            }
        }, 350);
    });
}

export function addEventToSubmit(form) {
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
    
}
