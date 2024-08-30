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
    getWeather();
});
const loadJokes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer1 = yield fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
        });
        const answer2 = yield fetch("https://api.chucknorris.io/jokes/random");
        const data = yield answer1.json(); // con json podemos acceder a los datos de la API
        console.log(data.joke);
        const data1 = yield answer2.json();
        console.log(data1.value);
        const jokeContainer = document.getElementById("app");
        if (jokeContainer) { // para que el contenedot no detecte null
            const opcion = Math.random() < 0.5 ? "api1" : "api2";
            if (opcion === "api1") {
                jokeContainer.textContent = data.joke;
                console.log(data.joke);
            }
            else if (opcion === "api2") {
                jokeContainer.textContent = data1.value;
                console.log(data1.value);
            }
            else {
                jokeContainer.textContent = "Error";
            }
        }
    }
    catch (error) { // es en el caso que haya un error para ejecutarla
        console.log(error);
    }
});
let rateJokes = [];
function reportJoke(score) {
    var _a;
    let stringJoke = (_a = document.getElementById("app")) === null || _a === void 0 ? void 0 : _a.textContent;
    let scoreJoke = score;
    let dateJoke = new Date().toISOString();
    const objectJoke = {
        joke: stringJoke,
        score: scoreJoke,
        date: dateJoke
    };
    const foundJoke = rateJokes.find((element) => element.joke === stringJoke);
    if (foundJoke) {
        foundJoke.score = scoreJoke;
        foundJoke.date = dateJoke; // cambio la fecha del nuevo
    }
    else {
        rateJokes.push(objectJoke);
    }
    console.log(rateJokes);
}
let keyWeather = "811ede49d711f61591db638ccaaa6efb";
let cityName = "barcelona";
let climaElement1 = document.getElementById("clima");
let climaElement2 = document.getElementById("clima2");
let getWeather = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=${keyWeather}&units=metric`;
    fetch(url).then((resp) => resp.json())
        .then(data => {
        
        let description = data.weather[0].description;
        
        if (description === "clear sky") {
            climaElement2.innerHTML = "&#127780;";
            console.log(description);
        }
        else if (description === "broken clouds") {
            climaElement2.innerHTML = "&#127783;";
            console.log(description);
        }
        else if (description === "") {
            climaElement2.innerHTML = "&#127781;";
            console.log(description);
        }
        climaElement1.innerHTML = (data.main.temp) + "º" + " | ";
    });
};
getWeather();
loadJokes();
