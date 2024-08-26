"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    loadJokes();
});
const loadJokes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
        });
        console.log(answer);
        const data = yield answer.json(); // con json podemos acceder a los datos de la API
        console.log(data.joke);
        const jokeContainer = document.getElementById("app");
        if (jokeContainer) {
            jokeContainer.textContent = data.joke;
        }
        else {
            console.log("error jokeload");
        }
    }
    catch (error) { // es en el caso que haya un error para ejecutarla
        console.log(error);
    }
});
loadJokes();
