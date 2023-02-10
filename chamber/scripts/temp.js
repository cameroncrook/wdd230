fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Afton%2C%20WY?unitGroup=metric&include=current&key=F3BEE7JMALCR454A9UKPJAPC5&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  processWeatherData(response);
})
.catch(err => {
  console.error(err);
});

function processWeatherData(response) {
  // console.log('We got this far');
  console.log(response);
  // let location=response.resolvedAddress;
  // let days=response.days;
  // console.log("Location: "+location);
  // for (var i=0;i<days.length;i++) {
  //   console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
  // }
}