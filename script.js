const currentDay = document.getElementById('day')
currentDay.innerHTML = new Date().toDateString();
console.log(currentDay);

let weather = {
    apiKey : 'f5686ded79f599145adc079ee949161e',
    getWeather: function(city) {
        fetch(
             "https://api.openweathermap.org/data/2.5/weather?zip=" + city +"&units=imperial&appid=" + this.apiKey
        )

            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp_min, temp_max, humidity } = data.main;
        const { speed } = data.wind;
        console.log (name, description, temp_min, temp_max, humidity, speed)
        document.querySelector('.city').innerHTML = name;
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.temp_min').innerHTML = 'High: ' + temp_min + '°F';
        document.querySelector('.temp_max').innerHTML = 'Low: ' + temp_min + '°F';
        document.querySelector('.humidity').innerHTML = "Humidity:" + humidity +  '%'
        document.querySelector('.windspd').innerHTML = 'Wind Speed:' + speed + 'mph'
    },
    search: function () {
        this.getWeather(document.querySelector(".search-bar").value);
      },
    };
    
    document.querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      })

weather.getWeather("28206")