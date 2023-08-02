let weather = {
  apiKey: "67b92f0af5416edbfe58458f502b0a31", // Authentication , Rate limiting

  // step 2
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },

  // step 3
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // This uses object destructuring to extract the speed property from the wind object inside the data object.
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;

    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";

    document.querySelector(".temp").innerText = temp + "°C";

    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";

    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";

    document.querySelector(".weather").classList.remove("loading");

    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

// step1
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

// step 1
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Pune");
