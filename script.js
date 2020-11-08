// let lastSearchedCities = $("#last-searched-cities");
let citySearchInput = $("#search-input");

// add a query url call an ajax funtion
let cityName = "St. Paul";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    
  });

  let m = moment();

  console.log(m.format("L"));
//add in one day to pull for the 5 day forecast
  let dateDisplay = $("#currentDay");

  let today = moment().format("dddd, L");
  dateDisplay.text(today);
  

  $("#search-button").on("click", function(event) {
      event.preventDefault();
    console.log(citySearchInput);


    $(document).ready(function(){
      // let ul = $("ul");
      // let li = $("<li>");
      //  ul.append(li);

      // find ul
      //create the list items
      // attach li to ul
      let lastSearchedCities = $("ul");
       let cityListItems = $("<li>");
       cityListItems.text = citySearchInput;
       lastSearchedCities.append(cityListItems);

       let cityInputText = citySearchInput.value;

       if (cityInputText === "")
       return
  })
  
    // addCities();
  });



  