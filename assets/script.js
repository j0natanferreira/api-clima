// Variaveis
const btnSearch = document.querySelector(".btnSearch");
const search = document.getElementById("search");
const apiKey = "a76c942c62ac6ae5de6de6b7a9f0c9da";

// Funções
    async function getTempo() {
    let cidade = search.value;
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + apiKey);

    if (response.status == 400) {
        alert("Cidade inválida");
    }else if (cidade == undefined) {
        alert('Cidade inválida');
    } else {
        const tempo = await response.json();

        document.querySelector(".city").innerHTML = tempo.name;
        document.querySelector(".grau").innerHTML =
        Math.round(tempo.main.temp - 273, 15) + "ºc";
        document.querySelector(".humidity").innerHTML = tempo.main.humidity + "%";
        document.querySelector(".speed").innerHTML = tempo.wind.speed + "km/h";
        
        document.querySelector(".form").style.display = "block"

        document.querySelector(".row-search").style.borderBottomLeftRadius = 0;
        document.querySelector(".row-search").style.borderBottomRightRadius = 0;
    }
}

// Eventos
btnSearch.addEventListener("click", getTempo);
search.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    getTempo();
  }
});
