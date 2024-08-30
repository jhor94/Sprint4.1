document.addEventListener("DOMContentLoaded", () => {
    loadJokes();
    getWeather();
});



const loadJokes = async () => {
    try {
        const answer1 = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
        })
        const answer2 = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await answer1.json();// con json podemos acceder a los datos de la API
        console.log(data.joke)
    
        const data1 = await answer2.json();
        console.log(data1.value);
        const jokeContainer = document.getElementById("app");
        if (jokeContainer) {// para que el contenedot no detecte null
            const opcion = Math.random() < 0.5 ? "api1" : "api2"
            if (opcion === "api1") {

                jokeContainer.textContent = data.joke;
                console.log(data.joke)
            } else if (opcion === "api2") {

                jokeContainer.textContent = data1.value;
                console.log(data1.value)
            } else {
                jokeContainer.textContent = "Error";
            }
        }
    } catch (error) { // es en el caso que haya un error para ejecutarla
        console.log(error)
    }
}



type Joke = {
    joke: string | null | undefined // Permite que joke sea string o null si textContent puede ser null
    score: number;
    date: string;
};

let rateJokes: Joke[] = []

function reportJoke(score: number) {
    let stringJoke = document.getElementById("app")?.textContent
    let scoreJoke = score
    let dateJoke: string = new Date().toISOString()

    const objectJoke: Joke = {
        joke: stringJoke,
        score: scoreJoke,
        date: dateJoke
    }




    const foundJoke = rateJokes.find((element) => element.joke === stringJoke);

    if (foundJoke) {
        foundJoke.score = scoreJoke
        foundJoke.date = dateJoke // cambio la fecha del nuevo
    } else {
        rateJokes.push(objectJoke)
    }
    console.log(rateJokes)


}

let keyWeather = "811ede49d711f61591db638ccaaa6efb"
let cityName = "barcelona"
let climaElement1 = document.getElementById("clima") as HTMLElement
let climaElement2 = document.getElementById("clima2") as HTMLElement

let getWeather = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=${keyWeather}&units=metric`
    fetch(url).then((resp) => resp.json())
    .then(data => {

        // establece los atributos src y alt
        let description = data.weather[0].description
        // agrega la imagen a un elemento existente en la página
        if(description === "clear sky"){
            climaElement2.innerHTML = "&#127780;"
            console.log(description)
        } else if (description === "broken clouds"){
            climaElement2.innerHTML = "&#127783;"
            console.log(description)
        }else if (description === ""){
            climaElement2.innerHTML = "&#127781;"
            console.log(description)
        }

        climaElement1.innerHTML = (data.main.temp) + "º" + " | "
    
    })

   

}   

getWeather()
loadJokes()