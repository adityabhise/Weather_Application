# Weather App

Simple Weather app created with HTML, CSS, and JavaScript using the APIs for fetching weather and geolocation information - [Take a look](https://weather-app-karanchandekar.vercel.app/)

[![Practice](https://img.shields.io/badge/Practice-HTML/CSS/JS-orange.svg)](https://weather-app-karanchandekar.vercel.app)

## Used Languages

- HTML
- CSS
- Vanilla JS - ES6
- [Awesomeness](https://www.wikihow.com/Love-Programming) - Strictly for the love of coding :-)

## How I made the API call

```javascript
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
```

## Used APIs

- Open Weather API
- Unsplash API

## Steps to Use:

- Download Code or Clone the repository

```
git clone https://github.com/KaranChandekar/weather-app.git
```

- Go to the directory
- Run the index.html file
- Just Type the city name you want to know the weather of, and then click on the search button.
- After that it will automatically display Weather, Humidity, Wind Speed of the enered city.

## Screenshot

![weatherapp](https://user-images.githubusercontent.com/93200960/216075953-1f2e8162-e028-4ba1-9523-e66e2782dde4.png)

## Demo

https://user-images.githubusercontent.com/93200960/211342988-ed98b7b5-e697-496f-84ec-949a8445b3a3.mp4

## Contribution

Contributions are highly welcome. Feel free to fork, clone, make pull requests, report issues etc.

## Acknowledgments

- Anyone who is reading this... _You're awesome!_

That being said
_<p align="center">To the Front... to the Back... End to End... cut no slack. Making ends meet. lol</p>_
