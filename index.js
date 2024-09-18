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
document.getElementById("boton").addEventListener("click", function () {
    const svgContainer = document.getElementById("svgImage");
    if (svgContainer) { // para que el contenedot no detecte null
        const currentID = svgContainer.getAttribute("data-id");
        if (currentID === "1") {
            svgContainer.innerHTML = `<svg id="2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#08BDBA" d="M35.6,-61.7C48.3,-54.3,62.3,-49.2,70.7,-39.3C79.2,-29.4,82,-14.7,79.6,-1.4C77.2,11.9,69.6,23.9,62.6,36.3C55.7,48.7,49.4,61.7,39,65.1C28.7,68.6,14.4,62.6,-0.8,63.9C-15.9,65.2,-31.7,73.8,-46,72.6C-60.3,71.5,-73,60.5,-78.4,46.7C-83.8,33,-81.8,16.5,-77.2,2.7C-72.5,-11.1,-65.2,-22.3,-58.4,-33.6C-51.7,-45,-45.5,-56.6,-35.9,-65.8C-26.2,-75.1,-13.1,-82,-0.8,-80.5C11.4,-79.1,22.8,-69.2,35.6,-61.7Z" transform="translate(100 100)" />
            </svg>`;
            svgContainer.setAttribute("data-id", "2");
        }
        else if (currentID === "0") {
            svgContainer.innerHTML =
                `<svg id =1 viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#8A3FFC" d="M38.2,-55.1C46.6,-46.5,48.5,-31.4,54.5,-16.8C60.6,-2.1,70.8,12.1,67.8,22.3C64.8,32.4,48.6,38.5,35.1,49.4C21.6,60.3,10.8,75.9,-1,77.3C-12.7,78.6,-25.5,65.6,-33.6,53C-41.7,40.3,-45.2,28.1,-52.1,15C-58.9,2,-69,-11.9,-67.5,-23.7C-66.1,-35.5,-53.1,-45.3,-39.9,-52.3C-26.7,-59.2,-13.3,-63.3,0.8,-64.4C14.9,-65.5,29.8,-63.6,38.2,-55.1Z" transform="translate(100 100)" />
            </svg>`;
            svgContainer.setAttribute("data-id", "1");
        }
        else if (currentID === "2") {
            svgContainer.innerHTML = `<svg id="0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0066" d="M23.5,-40.6C35.5,-33.8,53.7,-37.7,59,-32.7C64.4,-27.7,56.9,-13.8,58.3,0.9C59.8,15.5,70.3,31.1,70.2,45.1C70.1,59.2,59.4,71.8,46,69.3C32.5,66.8,16.3,49.2,0.3,48.7C-15.7,48.3,-31.4,64.9,-41.1,65.2C-50.8,65.6,-54.4,49.6,-56.6,36C-58.8,22.4,-59.6,11.2,-61.4,-1C-63.2,-13.3,-66.1,-26.5,-63,-38.7C-60,-50.8,-51,-61.8,-39.5,-68.9C-28,-75.9,-14,-78.9,-4.1,-71.7C5.8,-64.6,11.5,-47.3,23.5,-40.6Z" transform="translate(100 100)" />
            </svg>`;
            svgContainer.setAttribute("data-id", "0");
        }
    }
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
let latitud = "41.3887900";
let longitud = "2.1589900";
let climaElement1 = document.getElementById("clima");
let climaElement2 = document.getElementById("clima2");
let getWeather = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${keyWeather}&units=metric`;
    fetch(url).then((resp) => resp.json())
        .then(data => {
        console.log(data);
        // establece los atributos src y alt
        let description = data.weather[0].description;
        // agrega la imagen a un elemento existente en la página
        if (description === "clear sky") {
            climaElement2.innerHTML = "&#127780;";
            console.log(description);
        }
        else if (description === "broken clouds") {
            climaElement2.innerHTML = "&#127783;";
            console.log(description);
        }
        else if (description === "overcast clouds") {
            climaElement2.innerHTML = "&#127781;";
            console.log(description);
        }
        else if (description === "few clouds") {
            climaElement2.innerHTML = "&#127782";
        }
        else if (description === "scattered clouds") {
            climaElement2.innerHTML = "&#127784";
        }
        climaElement1.innerHTML = (data.main.temp) + "º";
    });
};
getWeather();
loadJokes();
