const daysDiffDiv = document.querySelector('#diff');
const daysHeader = document.querySelector('#days');

if (! localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', Date.now());
    daysHeader.textContent = "Welcome!";
} else {
    let currentDate = Date.now();
}