const form = document.getElementById("list-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.getElementById("input-field");
    let inputValue = input.value.trim();
    if(inputValue) {
        let existsInList = false;
        const items = document.querySelectorAll("#list li");
        for(i = 0; i < items.length && !existsInList; i++) {
            const itemInnerText = items[i].getElementsByTagName("p")[0].innerText;
            if(itemInnerText == inputValue) {
                existsInList = true;
            }
        }

        if(!existsInList) {
            const li = document.createElement("li");

            const p = document.createElement("p");
            p.innerText = inputValue;
            li.appendChild(p);

            const button = document.createElement("button");
            button.innerText = "Delete";
            button.addEventListener("click", (event) => {
                event.target.parentElement.remove();
            });
            li.appendChild(button);

            const list = document.getElementById("list");
            list.appendChild(li);

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
