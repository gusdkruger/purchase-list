import { addToList } from "./listController.js";

export function addToLocalStorage(text) {
    let list = JSON.parse(localStorage.getItem("list"));
    list ? list.push(text): list = [text];
    localStorage.setItem("list", JSON.stringify(list));
}

export function removeFromLocalStorage(text) {
    let list = JSON.parse(localStorage.getItem("list"));
    const index = list.indexOf(text);
    list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(list));
}

export function fillFromLocalStorage() {
    const list = JSON.parse(localStorage.getItem("list"));
    if(list) {
        list.forEach(item => {
            addToList(item);
        });
    }
}
