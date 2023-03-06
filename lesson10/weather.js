const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fairbanks%2C%20Alaska?unitGroup=us&include=current&key=F3BEE7JMALCR454A9UKPJAPC5&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#ws').textContent = data.currentConditions.windspeed;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';
    document.querySelector('#t').textContent = data.currentConditions.temp;
  };
getWeather();