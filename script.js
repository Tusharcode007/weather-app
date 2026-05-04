
        const apiKey = "f27f701e4d65639e801f6c3bdd606264";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button")


        async function checkWeather(city) {

                    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
                    var data = await response.json();


                    document.querySelector(".city").innerHTML = data.name;

                    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "•c";
                    
                    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
                    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

                    // new data add
                    document.querySelector(".pressure").innerHTML =data.main.pressure + "hpa";

                    document.querySelector(".lat").innerHTML = data.coord.lat + " deg," ;

            
        }

        searchBtn.addEventListener("click", function () {

            checkWeather(searchBox.value);
        })

         