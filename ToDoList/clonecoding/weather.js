const API_KEY = "8cf6d085728f3abc26b34c18a83e6817"

function onGeoOk(position) { //geolocation object
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    // API 를 통해 날씨 객체를 받아옴.
    fetch(link).then(response => response.json()).
    then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.name;
        city.innerText = `${data.wather[0].main} / ${data.main.temp}`
    }); 
    // JS가 정보받아와줌
    //fetch 는 promise로 바로 일어나는 과정이 아닌 시간경과가 필요함(서버응답시간필요)
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//API 활용. weather API