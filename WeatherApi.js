async function getWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=59.94&longitude=30.31&hourly=temperature_2m&current_weather=true');

    const data = await response.json();
    return data;
}

function displayWeather() {
    getWeather().then(data => {
        console.log(data);
        const temperature = data.current_weather.temperature;

        const windspeed = data.current_weather.windspeed;
        console.log(temperature);

        const weatherElement = document.getElementById('weather');
        weatherElement.innerHTML = `Температура в Санкт-Петербурге: ${temperature}°C  <br> Скорость ветра: ${windspeed}`;
    });
}

displayWeather();
setInterval(displayWeather, 3600000); // обновлять каждый час