
let m = moment();

console.log(m.format("L"));
//add in one day to pull for the 5 day forecast
let dateDisplay = $("#currentDay");

let today = moment().format("dddd, L");
dateDisplay.text(today);

function currentweather(cityName) {
  // add a query url call an ajax funtion
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=imperial&appid=";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    let temp = $("#currentDayTemp");
    temp.html(
      '<p> Temperature: ' + response.main.temp +
      '&#176; F </p>');

    let humidity = $("#currentDayHumidity");
    humidity.html(
     '<p> Humidity: ' + response.main.humidity +
     '&#37; </p>');

    let windSpeed = $("#currentDayWind");
    windSpeed.html(
      '<p> Wind Speed: ' + response.wind.speed +
      '<p>');
  });
}

function fiveDay(cityName) {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=imperial&appid=";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    let dayOneTemp = $("#day-one-temp");
    dayOneTemp.html(
      '<p> Temp: ' +
        response.list[3].main.temp +
        "&#176; F </p>" 
    );
    let dayTwoTemp = $("#day-two-temp");
    dayTwoTemp.html(
      '<p> Temp: ' +
        response.list[11].main.temp +
        "&#176; F </p>" 
    );
    let dayThreeTemp = $("#day-three-temp");
    dayThreeTemp.html(
      '<p> Temp: ' +
        response.list[19].main.temp +
        "&#176; F </p>" 
    );
    let dayFourTemp = $("#day-four-temp");
    dayFourTemp.html(
      '<p> Temp: ' +
        response.list[27].main.temp +
        "&#176; F </p>" 
    );
    let dayFiveTemp = $("#day-five-temp");
    dayFiveTemp.html(
      '<p> Temp: ' +
        response.list[35].main.temp +
        "&#176; F </p>" 
    );
    let dayOneHumidity = $("#day-one-humidity");
    dayOneHumidity.html(
      '<p> Humidity: ' +
        response.list[3].main.humidity +
        "&#37; </p>" 
    );
    let dayTwoHumidity = $("#day-two-humidity");
    dayTwoHumidity.html(
      '<p> Humidity: ' +
        response.list[11].main.humidity +
        "&#37; </p>" 
    );
    let dayThreeHumidity = $("#day-three-humidity");
    dayThreeHumidity.html(
      '<p> Humidity: ' +
        response.list[19].main.humidity +
        "&#37; </p>" 
    );
    let dayFourHumidity = $("#day-four-humidity");
    dayFourHumidity.html(
      '<p> Humidity: ' +
        response.list[27].main.humidity +
        "&#37; </p>" 
    );
    let dayFiveHumidity = $("#day-five-humidity");
    dayFiveHumidity.html(
      '<p> Humidity: ' +
        response.list[35].main.humidity +
        "&#37; </p>" 
    );
  });
}


$("#search-button").on("click", function (event) {
  let citySearchInput = $("#search-input").val();
  event.preventDefault();
  console.log(citySearchInput);
  //pulls the weather from the api
  currentweather(citySearchInput);
  fiveDay(citySearchInput);
  //displays the date for the five day forecast
  fiveDayDisplay();
  $(document).ready(function () {
    // let ul = $("ul");
    // let li = $("<li>");
    //  ul.append(li);

    // find ul
    //create the list items
    // attach li to ul
    let lastSearchedCities = $("ul");
    let cityListItems = $("<li>");
    cityListItems.text(citySearchInput)
    lastSearchedCities.append(cityListItems);

    let cityInputText = citySearchInput.value;

    if (cityInputText === "") return;

    //add city Name into the header element
    let currentCityHeader = $("#city-name");
    currentCityHeader.text(citySearchInput);
  });

  
});

function fiveDayDisplay(){
let dayOneDisplay = $("#day-one");
dayOneDisplay.text(m.add(1, 'days').format('L'));

let dayTwoDisplay = $("#day-two");
dayTwoDisplay.text(m.add(1, 'days').format('L'));

let dayThreeDisplay = $("#day-three");
dayThreeDisplay.text(m.add(1, 'days').format('L'));

let dayFourDisplay = $("#day-four");
dayFourDisplay.text(m.add(1, 'days').format('L'));

let dayFiveDisplay = $("#day-five");
dayFiveDisplay.text(m.add(1, 'days').format('L'));
}