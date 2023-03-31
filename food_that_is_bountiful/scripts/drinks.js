async function getFruit() {
    const url = "https://andejuli.github.io/wdd230/fruit.json";
    const response = await fetch(url);
    const data = await response.json();

    return data
}

async function displayDrinks() {
    const fruitData = await getFruit();

    getValues(fruitData);
}

function getValues(fruitData) {
    let drinkDiv = document.querySelector('#drinks');
    drinkDiv.innerHTML = '';
    let orders = [];

    if (!localStorage.getItem('orders')) {
        orders = [];
    } else {
        orders = JSON.parse(localStorage.getItem('orders'));
    }

    let drinkCounter = document.querySelector('#drink-counter');
    
    if (orders.length < 1) {
        drinkCounter.classList.add('bravo-six');

        let message = document.createElement('p');
        message.classList.add('message');
        let link = document.createElement('a');
        link.classList.add('message');

        message.textContent = "Sorry! You havn't ordered anything yet.";
        link.setAttribute('href', 'fresh.html');
        link.textContent = "Order A Drink!";

        drinkDiv.appendChild(message);
        drinkDiv.appendChild(link);
    } else {
        let counter = 0;
        
        drinkCounter.classList.remove('bravo-six');

        for (const [key, drink] of Object.entries(orders)) {
            counter += 1

            const fname = drink.fname;
            const fruit1 = drink.fruit1;
            const fruit2 = drink.fruit2;
            const fruit3 = drink.fruit3;

            let div = document.createElement('div');
            div.classList.add('order-set');

            let p = document.createElement('p');
            p.textContent = `${fname}: ${fruit1},${fruit2},${fruit3}`;
            div.appendChild(p);

            let buttonsDiv = document.createElement('div');

            let detailsBtn = document.createElement('button');
            detailsBtn.innerHTML = '&#9776;';
            buttonsDiv.appendChild(detailsBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = '❌';
            deleteBtn.value = key;
            buttonsDiv.appendChild(deleteBtn);

            div.appendChild(buttonsDiv);

            deleteBtn.addEventListener('click', function () {
                orders.splice(deleteBtn.value, 1);

                localStorage.setItem('orders', JSON.stringify(orders));

                div.remove();

                displayDrinks();
            });

            let infoDiv = document.createElement('div')
            infoDiv.classList.add('info-div');
            infoDiv.classList.add('bravo-six');

            let namep = document.createElement('p');
            let emailp = document.createElement('p');
            let phonep = document.createElement('p');
            let fruitsp = document.createElement('p');
            let orderDatep = document.createElement('p');
            let specialp = document.createElement('p');

            namep.textContent = drink.fname;
            infoDiv.appendChild(namep);
            emailp.textContent = drink.email;
            infoDiv.appendChild(emailp);
            phonep.textContent = drink.phone;
            infoDiv.appendChild(phonep);
            fruitsp.textContent = `${drink.fruit1},${drink.fruit2},${drink.fruit3}`;
            infoDiv.appendChild(fruitsp);
            orderDatep.textContent = drink.orderDate;
            infoDiv.appendChild(orderDatep);
            specialp.textContent = drink.special;
            infoDiv.appendChild(specialp);

            div.appendChild(infoDiv);

            let nutritionDiv = document.createElement('div');
            nutritionDiv.classList.add('bravo-six');

            const fruits = [drink.fruit1, drink.fruit2, drink.fruit3];
            const nutrients = getNutritionFacts(fruits, fruitData)

            for (const [key, value] of Object.entries(nutrients)) {
                let nutrientp = document.createElement('p');

                nutrientp.textContent = `${key}: ${value}`;

                nutritionDiv.appendChild(nutrientp);
            }

            div.appendChild(nutritionDiv);

            drinkDiv.appendChild(div);

            detailsBtn.addEventListener('click', function () {
                infoDiv.classList.toggle('bravo-six');
                nutritionDiv.classList.toggle('bravo-six');
            });
        }

        drinkCounter.textContent = counter;
    }
}

function getNutritionFacts(fruits, fruitData) {
    let calories = 0;
    let fat = 0;
    let sugar = 0;
    let carbohydrates = 0;
    let protein = 0;

    fruitData.forEach(fruit => {
        if (fruits.includes(fruit.name)) {

            calories += fruit.nutritions.calories;
            fat += fruit.nutritions.fat;
            sugar += fruit.nutritions.sugar;
            carbohydrates += fruit.nutritions.carbohydrates;
            protein += fruit.nutritions.protein;
        }
    });
    fat = fat.toFixed(1);
    sugar = sugar.toFixed(1);
    carbohydrates = carbohydrates.toFixed(1);
    protein = protein.toFixed(1);

    nutritions = {
        calories: calories,
        fat: fat,
        sugar: sugar,
        carbohydrates: carbohydrates,
        protein: protein
    }

    return nutritions
}

document.querySelector('#drink-icon').addEventListener('click', function () {
    let drinkDiv = document.querySelector('#drinks');
    drinkDiv.classList.toggle('bravo-six');
});

displayDrinks();

document.querySelector('#ham').addEventListener('click', function() {
    console.log('here');
    document.querySelector('#ham-links').classList.toggle('ham-responsive');
});