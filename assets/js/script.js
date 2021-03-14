// DOM Elements
const currentDayEl = document.getElementById('currentDay');
const currentDayTitleEl = document.getElementById('currentdayTitle');
const searchHistoryEl = document.getElementById('searchHistory');
const searchBtnEl = document.getElementById('searchBtn');
// Moment variable to display current Date.
const date = moment().format('M/DD/YYYY');

// function to call fetch and handle promises
function currentDayApi() {
    //  variable for api url
    let currentDayUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=imperial&appid=e730c08a61ff43dadfd7df6e93ba1be2'

    // fetching that url
    fetch(currentDayUrl)
        // then returning in json format
        .then(function (response) {
            return response.json();
        })
        // then using returned data
        .then(function (data) {
            // variable creating h2 element
            let cityName = document.createElement('h2');
            // placing data from api inside h2
            cityName.textContent = data.name + ' (' + date + ') ';
            // appending h2 in html
            currentDayTitleEl.appendChild(cityName);
            // variable creating image element
            let currentIcon = document.createElement('img');
            // setting the src using data from api
            currentIcon.setAttribute('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon +'.png');
            // adding class to image element
            currentIcon.classList.add('icon');
            // appending element to html
            currentDayTitleEl.appendChild(currentIcon);
            // variable creating span element
            let currentTemp = document.createElement('span');
            // placing data from api within span text
            currentTemp.textContent = 'Temperature: ' + data.main.temp + '°F';
            // appending span element to html
            currentDayEl.appendChild(currentTemp);
            // variable creating span element
            let currentHumidity = document.createElement('span');
            // placing data from api within span text
            currentHumidity.textContent = 'Humidity: ' + data.main.humidity + '%';
            // appending span element to html
            currentDayEl.appendChild(currentHumidity);
            // variable creating span element
            let currentWind = document.createElement('span');
            // placing data from api within span text
            currentWind.textContent = 'Wind Speed: ' + data.wind.speed + ' MPH';
            // appending span element to html
            currentDayEl.appendChild(currentWind);
            // variable creating li element
            let searchCity = document.createElement('li');
            // placing data from api within li element
            searchCity.textContent = data.name;
            // appeding li element within html
            searchHistoryEl.appendChild(searchCity);
            // creating variable for latitude value from api data
            let lat = data.coord.lat;
            // creating variable for longitude value from api data
            let long = data.coord.lon;
            // creating variable for url of API with uv Index
            let uvApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&exclude=hourly,daily&appid=e730c08a61ff43dadfd7df6e93ba1be2'
            // fetching that url
            fetch(uvApiUrl)
                // returning in json format
                .then(function (results) {
                    return results.json();
                })
                // then using returned data
                .then(function (uvdata) {
                    // create variable to equal data from fetch
                    let uvNum = uvdata.current.uvi;
                    // variable to create span element
                    let uviText = document.createElement('span');
                    // inserting text into span element
                    uviText.textContent = 'UV Index: ';
                    // variable to create a span element
                    let uviValue = document.createElement('span');
                    // adding class to span element
                    uviValue.classList.add('uv');
                    // adding text content from api data to element
                    uviValue.textContent = uvdata.current.uvi;
                    // if data from api is less than or equal to 2 add class green
                    if (uvNum <= 2) {
                        uviValue.classList.add('green');
                    // else data from api less than or equal to 5 add class yellow    
                    } else if (uvNum <= 5) {
                        uviValue.classList.add('yellow');
                    // else data from api less than or equal to 7 add class orange    
                    } else if (uvNum <= 7) {
                        uviValue.classList.add('orange');
                    // else data from api less than or equal to 10 add class red    
                    } else if (uvNum <= 10){
                        uviValue.classList.add('red');
                    };
                    // append variable to other variable
                    uviText.appendChild(uviValue);
                    // append the outer variable to html
                    currentDayEl.appendChild(uviText);
                });
        });
};

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
        });
};

// calling functions
currentDayApi();
fiveDayApi();