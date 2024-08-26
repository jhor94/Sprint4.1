document.addEventListener("DOMContentLoaded", () => {
    loadJokes();
});

const loadJokes = async () => {
    try {
        const answer = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
        })
        console.log(answer)
        const data = await answer.json();// con json podemos acceder a los datos de la API
        console.log(data.joke)
        const jokeContainer = document.getElementById("app");
        if (jokeContainer) {
            jokeContainer.textContent = data.joke;
        } else {
            console.log("error jokeload")
        }

    } catch (error) { // es en el caso que haya un error para ejecutarla
        console.log(error)
    }
}


loadJokes()