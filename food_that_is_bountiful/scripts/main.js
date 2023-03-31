const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ventura%20california?unitGroup=us&include=days%2Ccurrent&key=F3BEE7JMALCR454A9UKPJAPC5&contentType=json';

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();

    return(data);
}

async function displayData() {
    const data = await fetchData();

    // Document Elements
    let tempEl = document.querySelector('#temp');
    let conditionsEl = document.querySelector('#conditions');
    let conditionsImg = document.querySelector('#conditions-logo');
    let humidityEl = document.querySelector('#humidity');

    // Assigned Values
    let imageUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    conditionsImg.src = imageUrl;
    conditionsImg.alt = data.currentConditions.conditions;
    tempEl.innerHTML = `${data.currentConditions.temp}&#176;F`;
    humidityEl.textContent = `${data.currentConditions.humidity}%`;
    conditionsEl.textContent = data.currentConditions.conditions;

    // Assign Values to Forcast Table
    for (let i = 1; i < 4; i++) {
        let date = data.days[i].datetime;
        let day = getDay(date);

        document.querySelector(`#day${i}-date`).textContent = day;
        document.querySelector(`#day${i}-low`).innerHTML = `${data.days[i].tempmin}&#176;F`;
        document.querySelector(`#day${i}-high`).innerHTML = `${data.days[i].tempmax}&#176;F`;
    }
}

function getLastModified() {
    let modified = document.querySelector('#modified');
    modified.textContent = document.lastModified;
}

function getDay(date) {
    const days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    };

    dateSplit = date.split("-");
    const year = dateSplit[0];
    const month = dateSplit[1];
    const monthNum = (parseInt(month) - 1);
    const day = dateSplit[2];

    let cvDate = new Date(year, monthNum, day);
    const dayNum = cvDate.getDay();

    let dayFull = days[dayNum];
    
    return dayFull
}

displayData();
getLastModified();
