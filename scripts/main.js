let date = new Date();
let year = date.getFullYear();
const fullname = "Cameron Crook";
let currentdate = document.lastModified;

console.log(currentdate);

document.querySelector('#footer-info').innerHTML = `&copy; ${year} ${fullname} Wyoming`
document.querySelector('#last-updated').textContent = `Last Updated: ${currentdate}`;