import { fillFromLocalStorage } from "./controller/localStorageController.js";
import { addEventToSubmit } from "./controller/eventController.js";

fillFromLocalStorage();

const form = document.getElementById("form");
addEventToSubmit(form);
