import { apiKey } from "./secrets";

export let mostVisitedCity = [];

async function searchTemp(city) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
    // .then(json => console.log(json));

    mostVisitedCity.push(data);
}

let cities = ["tehran" , "karaj" , "tabriz" , "mashhad"];



cities.map(item=>{
    searchTemp(item);
})     


