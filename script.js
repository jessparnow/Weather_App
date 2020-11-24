console.log("hello, you're doing a great job");
let m = moment();

console.log(m.format("L"));
let dateDisplay = $("#currentDay");
let today = moment().format("dddd, L");
dateDisplay.text(today);

function currentweather(cityName) {
  // add a query url call an ajax funtion
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=imperial&appid=b4b407e1c227fb03804663cfcb368554";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    let currentCityHeader = $("#city-name");
    currentCityHeader.text(cityName);
    let icon = $("#weather-icon");
    icon.html(
      '<img src="http://openweathermap.org/img/w/' +
        response.weather[0].icon +
        '.png" height="70px">'
    );
    let temp = $("#currentDayTemp");
    temp.html(
      '<p class="weatherinfo"> Temperature: ' +
        response.main.temp +
        "&#176; F </p>"
    );

    let humidity = $("#currentDayHumidity");
    humidity.html(
      '<p class="weatherinfo"> Humidity: ' +
        response.main.humidity +
        "&#37; </p>"
    );

    let windSpeed = $("#currentDayWind");
    windSpeed.html(
      '<p class="weatherinfo"> Wind Speed: ' + response.wind.speed + "<p>"
    );
  });
}

function fiveDay(cityName) {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=imperial&appid=b4b407e1c227fb03804663cfcb368554";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
// WEATHER ICONS
    let dayOneIcon = $('#day-one-icon');
    dayOneIcon.html (
      '<img src="http://openweathermap.org/img/w/' +
        response.list[3].weather[0].icon +
        '.png" height="40px">'
    );
    let dayTwoIcon = $('#day-two-icon');
    dayTwoIcon.html (
      '<img src="http://openweathermap.org/img/w/' +
        response.list[11].weather[0].icon +
        '.png" height="40px">'
    );
    let dayThreeIcon = $('#day-three-icon');
    dayThreeIcon.html (
      '<img src="http://openweathermap.org/img/w/' +
        response.list[19].weather[0].icon +
        '.png" height="40px">'
    );
    let dayFourIcon = $('#day-four-icon');
    dayFourIcon.html (
      '<img src="http://openweathermap.org/img/w/' +
        response.list[27].weather[0].icon +
        '.png" height="40px">'
    );
    let dayFiveIcon = $('#day-five-icon');
    dayFiveIcon.html (
      '<img src="http://openweathermap.org/img/w/' +
        response.list[35].weather[0].icon +
        '.png" height="40px">'
    );
// 5 day forecast temperatures
    let dayOneTemp = $("#day-one-temp");
    dayOneTemp.html(
      '<p class="fiveDayInfo"> Temp: ' +
        response.list[3].main.temp +
        "&#176; F </p>"
    );
    let dayTwoTemp = $("#day-two-temp");
    dayTwoTemp.html(
      '<p class="fiveDayInfo"> Temp: ' +
        response.list[11].main.temp +
        "&#176; F </p>"
    );
    let dayThreeTemp = $("#day-three-temp");
    dayThreeTemp.html(
      '<p class="fiveDayInfo"> Temp: ' +
        response.list[19].main.temp +
        "&#176; F </p>"
    );
    let dayFourTemp = $("#day-four-temp");
    dayFourTemp.html(
      '<p class="fiveDayInfo"> Temp: ' +
        response.list[27].main.temp +
        "&#176; F </p>"
    );
    let dayFiveTemp = $("#day-five-temp");
    dayFiveTemp.html(
      '<p class="fiveDayInfo"> Temp: ' +
        response.list[35].main.temp +
        "&#176; F </p>"
    );
    // 5 day forecast Humidity
    let dayOneHumidity = $("#day-one-humidity");
    dayOneHumidity.html(
      '<p class="fiveDayInfo"> Humidity: ' +
        response.list[3].main.humidity +
        "&#37; </p>"
    );
    let dayTwoHumidity = $("#day-two-humidity");
    dayTwoHumidity.html(
      '<p class="fiveDayInfo"> Humidity: ' +
        response.list[11].main.humidity +
        "&#37; </p>"
    );
    let dayThreeHumidity = $("#day-three-humidity");
    dayThreeHumidity.html(
      '<p class="fiveDayInfo"> Humidity: ' +
        response.list[19].main.humidity +
        "&#37; </p>"
    );
    let dayFourHumidity = $("#day-four-humidity");
    dayFourHumidity.html(
      '<p class="fiveDayInfo"> Humidity: ' +
        response.list[27].main.humidity +
        "&#37; </p>"
    );
    let dayFiveHumidity = $("#day-five-humidity");
    dayFiveHumidity.html(
      '<p class="fiveDayInfo"> Humidity: ' +
        response.list[35].main.humidity +
        "&#37; </p>"
    );
  });
}

$("#search-button").on("click", function (event) {
  event.preventDefault();
  let citySearchInput = $("#search-input").val();
  // console.log(citySearchInput);
  //pulls the weather from the api
  currentweather(citySearchInput);
  fiveDay(citySearchInput);
  //displays the date for the five day forecast
  fiveDayDisplay();
  createBtn(citySearchInput);

  //chackto see if theres any saved search history in local storage
  if (localStorage.getItem("btns")) {
    //if we do then turn it into an array
    let ls = localStorage.getItem("btns").split(",");
    //add the new city to the history and turn it back into a string
    ls.push(citySearchInput).toString();
    localStorage.setItem("btns", ls);
  } else {
    localStorage.setItem("btns", citySearchInput);
  }
  localStorage.setItem("city name", citySearchInput);
  // console.log(localStorage);

});
// create the list items as buttons
function createBtn(city) {
  let lastSearchedCities = $("ul");
  let cityListItems = $("<li class='searchHistory'>");
  cityListItems.text(city);
  lastSearchedCities.append(cityListItems);

  let cityInputText = city.value;

  if (cityInputText === "") return;
}//add onclick for the list intems
//give li a class and create an on click using dynamic html
$('.searchHistory').on('click', function (event){
  event.preventDefault();
  currentweather(citySearchInput);
  fiveDay();
  fiveDayDisplay();
});

function fiveDayDisplay() {
  let dayOneDisplay = $("#day-one");
  dayOneDisplay.text(m.add(1, "days").format("L"));

  let dayTwoDisplay = $("#day-two");
  dayTwoDisplay.text(m.add(1, "days").format("L"));

  let dayThreeDisplay = $("#day-three");
  dayThreeDisplay.text(m.add(1, "days").format("L"));

  let dayFourDisplay = $("#day-four");
  dayFourDisplay.text(m.add(1, "days").format("L"));

  let dayFiveDisplay = $("#day-five");
  dayFiveDisplay.text(m.add(1, "days").format("L"));
}

// when  page loads check local storage for cities and pulls up weather data
if (localStorage.getItem("city name")) {
  let recentSearch = localStorage.getItem("city name");
  currentweather(recentSearch);
  fiveDay(recentSearch);
  fiveDayDisplay(recentSearch);
}
// on page load pulls up the search history list
if (localStorage.getItem("btns")) {
  let cities = localStorage.getItem("btns").split(",");
  // console.log(cities);
  for (let i = 0; i < cities.length; i++) {
    createBtn(cities[i]);
  }
}

