let copyright = document.querySelector("#copyright");
let lastModified = document.querySelector("#last-modified");
let modifiedDate = document.lastModified;

let date = new Date();
let year = date.getFullYear();

copyright.innerHTML = `&copy; ${year} Star Valley Chamber of Commerce`
lastModified.textContent = `Last Modified: ${modifiedDate}`;

// Hamburger Button JS
let navigation = document.querySelector(".navigation");
const hambutton = document.querySelector(".ham");

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('responsive');
})