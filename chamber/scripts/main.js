let copyright = document.querySelector("#copyright");
let lastModified = document.querySelector("#last-modified");
let modifiedDate = document.lastModified;

let date = new Date();
let year = date.getFullYear();

copyright.innerHTML = `&copy; ${year} Star Valley Chamber of Commerce`;
lastModified.textContent = `Last Modified: ${modifiedDate}`;

// Hamburger Button JS
let navigation = document.querySelector(".navigation");
const hambutton = document.querySelector(".ham");

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('responsive');
})

const timeDiv = document.querySelector('#date');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let dayNum = currentDate.getDay();
let dayOfMonth = currentDate.getDate();

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let currentDay = days[dayNum];
currentMonth = months[currentMonth];

timeDiv.textContent = `${currentDay}, ${dayOfMonth} ${currentMonth} ${year}`;

// notificationEl = document.querySelector('#notification');
// if (dayNum == 1 || dayNum == 2) {
//     notificationEl.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
// }

// Calculate wind chill for weather section
// let temp = document.querySelector('#t').textContent;
// let windChillEl = document.querySelector('#wc');
// let windSpeed = document.querySelector('#ws').textContent;

// let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));

// if (temp <= 50 && windSpeed >= 3) {
//     windChillEl.textContent = chill;
// }

// Storage local and session variables

localStorage.setItem('name', 'Cameron Crook - Permanent');
sessionStorage.setItem('class', 'WDD230 - session');