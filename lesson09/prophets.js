const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file

    displayTable(data.prophets);
  }
  

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(portrait);

    cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression

function displayTable(prophets) {
  prophets.forEach((prophet) => {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdBirthPlace = document.createElement('td');
    let tdBirthDate = document.createElement('td');

    tdName.textContent = `${prophet.name} ${prophet.lastname}`;
    tdBirthPlace.textContent = prophet.birthplace;
    tdBirthDate.textContent = prophet.birthdate;

    tr.appendChild(tdName);
    tr.appendChild(tdBirthPlace);
    tr.appendChild(tdBirthDate);

    let table = document.querySelector('table');

    table.appendChild(tr);
  })
}