var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Afton%2C%20WY?unitGroup=metric&include=current&key=F3BEE7JMALCR454A9UKPJAPC5&contentType=json", requestOptions)
    .then(response => processWeatherData(response))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

function processWeatherData(response) {
    // let data = response.days();
    // for (const stuff in data) {
    //     console.log(stuff);
    // }

    // var location=response.resolvedAddress;
    // var days=response.days;
    // console.log("Location: "+location);
    // for (var i=0;i<days.length;i++) {
    //     console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
    // }
}