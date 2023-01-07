let date = new Date();
let year = date.getFullYear();
const fullname = "Cameron Crook";
let currentdate = document.lastModified;

document.querySelector('#year').innerHTML = `&copy; ${year}`
document.querySelector('#last-updated').textContent = `Last Updated: ${currentdate}`;