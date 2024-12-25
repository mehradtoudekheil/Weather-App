// let cities = ["tehran" , "karaj" , "qazvin" , "rasht" , "sari" , "gorgan" , "ardabil" , "urmia" , "Qom" , "arak" , "ahvaz" , "zahedan" , "qeshm" , "isfahan" , "bojnord" , "bushehr" , "birjand" , "khorramabad" , "zanjan" , "semnan" , "sanandaj" , "shahr-e kord" , "shiraz" , "kerman" , "kermanshah" , "hamedan" , "yasuj" , "yazd"];
import { apiKey } from "./secrets";

let iranCities = [
    "تهران",
    "کرج",
    "قزوین",
    "رشت",
 "ساری",
 "گرگان",
 "اردبیل",
 "ارومیه",
 "qom",
 "اراک",
 "اهواز",
 "زاهدان",
 "قشم",
 "اصفهان",
 "بجنورد",
 "بوشهر",
 "بیرجند",
 "خرم آباد",
 "زنجان",
 "سمنان",
 "سنندج",
 "شهرکرد",
 "شیراز",
 "کرمان",
 "کرمانشاه",
 "همدان",
 "یاسوج",
 "یزد",
 "بندرعباس",
 "مشهد",
 "تبریز"
]

export let allCity =[];

async function searchTemp(city) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
    // .then(json => console.log(json));

    allCity.push(data);
}


iranCities.map((city)=>{
    searchTemp(city);
})


