const currentDayEl = document.getElementsByClassName('currentDay');
const searchBtnEl = document.getElementsByClassName('searchBtn');

function currentDayApi() {
    let currentDayUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&appid=e730c08a61ff43dadfd7df6e93ba1be2'

    fetch(currentDayUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            let cityName = document.createElement('h2');
            cityName.innerHtml = data.name;
            currentDayEl.append(cityName);
            let currentTemp = document.createElement('span');
            currentTemp.textContent = data.main.temp;
            currentDayEl.appendChild(currentTemp);
            let currentHumidity = document.createElement('span');
            currentHumidity.textContent = data.main.humidity;
            currentDayEl.appendChild(currentHumidity);
            let currentWind = document.createElement('span');
            currentWind.textContent = data.wind.speed;
            currentDayEl.appendChild(currentWind);
        })
}

currentDayApi();
