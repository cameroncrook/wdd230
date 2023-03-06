async function getBuisnessData() {
    const response = await fetch("data.json");
    const data = await response.json();

    occupyBuisnesses(data);
    occupyBuisnessesTable(data);
}

getBuisnessData()

document.querySelector('#card-view-button').addEventListener('click', function(){
    const cardsDiv = document.querySelector('#cards-view');
    const table = document.querySelector('table');

    table.classList.add('display-off');
    cardsDiv.classList.remove('display-off');
})

document.querySelector('#table-view-button').addEventListener('click', function(){
    const table = document.querySelector('table');
    const cardsDiv = document.querySelector('#cards-view');

    cardsDiv.classList.add('display-off');
    table.classList.remove('display-off');

})

function occupyBuisnesses(buisnesses) {
    // Value Variables
    let name = "";
    let address = "";
    let phoneNum = "";
    let website = "";
    let logoIMG = "";
    let membership = "";

    for (const [key, value] of Object.entries(buisnesses)) {
        // Assign Value Variables
        name = value.name;
        address = value.address;
        phoneNum = value.phone_number;
        website = value.website_url;
        logoIMG = value.image;
        membership = value.membership;

        // Element Variables
        const main = document.querySelector('#cards-view');
        let card = document.createElement('div');
        let photo = document.createElement('img');
        let h2 = document.createElement('h2');
        let pAddress = document.createElement('p');
        let pPhone = document.createElement('p');
        let aWebsite = document.createElement('a');

        card.classList.add('card');

        photo.setAttribute('src', logoIMG);
        photo.setAttribute('alt', name);
        photo.setAttribute('width', '200');
        card.appendChild(photo);

        h2.textContent = name;
        card.appendChild(h2);

        aWebsite.setAttribute('href', website);
        aWebsite.textContent = website;
        card.appendChild(aWebsite)

        pAddress.textContent = address;
        card.appendChild(pAddress);

        pPhone.textContent = phoneNum;
        card.appendChild(pPhone);

        main.appendChild(card);
    }
}

function occupyBuisnessesTable(buisnesses) {
    // Value Variables
    let name = "";
    let address = "";
    let phoneNum = "";
    let website = "";
    let logoIMG = "";
    let membership = "";

    // Element Variables
    const table = document.querySelector('#buisness-table');

    for (const [key, value] of Object.entries(buisnesses)) {
        // Assign Value Variables
        name = value.name;
        address = value.address;
        phoneNum = value.phone_number;
        website = value.website_url;
        logoIMG = value.image;
        membership = value.membership;

        // Element Variables
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdAddress = document.createElement('td');
        let tdPhone = document.createElement('td');
        let tdWebsite = document.createElement('td');
        let aWebsite = document.createElement('a');

        tdName.textContent = name;
        tr.appendChild(tdName)

        tdAddress.textContent = address;
        tr.appendChild(tdAddress);

        tdPhone.textContent = phoneNum;
        tr.appendChild(tdPhone);

        aWebsite.textContent = website;
        aWebsite.setAttribute('href', website);

        tdWebsite.appendChild(aWebsite);
        tr.appendChild(tdWebsite);

        table.appendChild(tr);
    }
}