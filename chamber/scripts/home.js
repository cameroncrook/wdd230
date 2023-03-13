async function getBuisnessData() {
    const response = await fetch("data.json");
    const data = await response.json();

    let goldMembers = getGoldMembership(data);
    displaySpotlights(goldMembers, data);
}

getBuisnessData();

function getGoldMembership(buisnesses) {
    // List of gold member buisnesses
    let goldMembers = [];


    for (const [key, value] of Object.entries(buisnesses)) {
        let membership = value.membership;

        if (membership == 'Gold') {
            goldMembers.push(key);
        }
    }

    return goldMembers;
}

function displaySpotlights(goldMembers, buisnesses) {
    let memberNum = goldMembers.length;
    let indexValues = [];
    let randomNum = 0;
    
    while (indexValues.length < 3) {
        randomNum = Math.floor(Math.random() * memberNum);

        if (indexValues.includes(randomNum) == false) {
            indexValues.push(randomNum);
        }
    }

    i = 1;
    indexValues.forEach(index => {
        let buisness = goldMembers[index];
        // console.log(i);

        let buisnessData = buisnesses[buisness];

        let img = document.querySelector(`#img-${i}`);
        img.setAttribute('src', buisnessData.image);
        img.setAttribute('alt', buisnessData.name);

        document.querySelector(`#name-${i}`).textContent = buisnessData.name;
        document.querySelector(`#website-${i}`).textContent = buisnessData.website_url;
        document.querySelector(`#phone-${i}`).textContent = buisnessData.phone_number;
        i++;
    })
}