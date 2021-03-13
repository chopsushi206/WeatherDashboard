// DOM Elements
const currentDayEl = document.getElementById('currentDay');
const searchHistoryEl = document.getElementById('searchHistory');
const searchBtnEl = document.getElementById('searchBtn');
// Moment variable to display current Date.
const date = moment().format('M/DD/YYYY');

// function to call fetch and handle promises
function currentDayApi() {
    //  variable for api url
    let currentDayUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&appid=e730c08a61ff43dadfd7df6e93ba1be2'

    // fetching that url
    fetch(currentDayUrl)
        // then returning in json format
        .then(function (response) {
            return response.json();
        })
        // then using returned data
        .then(function (data) {
            // console.log test of data to see the array of objects
            console.log(data.weather[0].icon)
            // variable to create h2 element
            // elements content from data as well as moment variable created earlier to display date
            //  appending that element to another element
            // repeats for each piece of information needed
            let cityName = document.createElement('h2');
            let currentIcon = document.createElement('img');
            currentIcon.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon +'.png';
            cityName.textContent = data.name + ' (' + date + ') ' + currentIcon;
            currentDayEl.appendChild(cityName);
            let currentTemp = document.createElement('span');
            currentTemp.textContent = 'Temperature: ' + data.main.temp + '°F';
            currentDayEl.appendChild(currentTemp);
            let currentHumidity = document.createElement('span');
            currentHumidity.textContent = 'Humidity: ' + data.main.humidity + '%';
            currentDayEl.appendChild(currentHumidity);
            let currentWind = document.createElement('span');
            currentWind.textContent = 'Wind Speed: ' + data.wind.speed + ' MPH';
            currentDayEl.appendChild(currentWind);
            let searchCity = document.createElement('li');
            searchCity.textContent = data.name;
            searchHistoryEl.appendChild(searchCity);
        })
}


currentDayApi();

function fiveDayApi() {
    //  variable for api url
    let fiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Phoenix&units=imperial&appid=e730c08a61ff43dadfd7df6e93ba1be2'

    // fetching that url
    fetch(fiveDayUrl)
        // then returning in json format
        .then(function (response) {
            return response.json();
        })
        // then using returned data
        .then(function (data) {
            // console.log test of data to see the array of objects
            console.log(data)
        })
}

fiveDayApi();