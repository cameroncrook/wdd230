async function getData() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Afton%2C%20WY?unitGroup=metric&include=current&key=F3BEE7JMALCR454A9UKPJAPC5&contentType=json';
    try {
        let res = await fetch(url, requestOptions);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let data_load = await getData();
    const days = data_load.days["0"];

    const tempurature = days["temp"];
    const windSpeed = days["windspeed"];
    const precip = days["precipprob"];
    const icon = days["icon"];
    const condition = days["conditions"];

    // Calculate wind chill for weather section
    let tempEl = document.querySelector('#t');
    let windChillEl = document.querySelector('#wc');
    let windSpeedEl = document.querySelector('#ws');
    const weatherIcon = document.querySelector('#weather-icon');
    const prob = document.querySelector('#prob');
    const desc = document.querySelector('#desc');

    let chill = Math.round((35.74 + (0.6215 * tempurature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*tempurature*Math.pow(windSpeed,0.16)));

    if (tempurature <= 50 && windSpeed >= 3) {
        windChillEl.textContent = chill;
    }

    // get the correct weather icon
    let iconURL = "images/weather/"
    iconURL = iconURL.concat(icon, ".svg")

    tempEl.textContent = tempurature;
    windSpeedEl.textContent = windSpeed;
    weatherIcon.alt = icon;
    weatherIcon.src = iconURL;
    prob.textContent = precip;
    desc.textContent = condition;
}

renderData();