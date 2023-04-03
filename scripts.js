const key = "5c2b0d70ad3ad3c8d34022b18505a062"

const showInfoScreen = (dados)=>{

    document.querySelector(".title-city").innerHTML = dados.name
    document.querySelector(".weather").innerHTML = Math.floor( dados.main.temp) +   "°C"
    document.querySelector(".text-clima").innerHTML = dados.weather[0].description
    document.querySelector(".percentage").innerHTML = dados.main.humidity + "%" 
    document.querySelector(".img-weather").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
    

}

const searchCity = async (city)=>{

    const dados = await fetch( ` https://api.openweathermap.org/data/2.5/weather?q= ${city} &appid=${key}&lang=pt_br&units=metric`).then(res =>res.json())
    
    showInfoScreen(dados)
}

let clickBtn = ()=>{
const city = document.querySelector(".city-input").value

searchCity(city)

}