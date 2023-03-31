
async function processData() {
    const fruits = await getFruit();

    buildOptions(fruits);

    for (let i = 1; i < 4; i++) {
        document.querySelector(`#fruit-${i}`).addEventListener('change', function () {
            calculateNutrition(fruits);
        });
    }
}

function buildOptions(fruits) {

    for (let i = 1; i < 4; i++) {
        let fruitSelection = document.querySelector(`#fruit-${i}`);

        fruits.forEach(fruit => {
            let option = document.createElement('option');
            option.value = fruit.name;
            option.textContent = fruit.name;
            
            fruitSelection.appendChild(option);
        });
    }
}

function getSelectedFruit() {
    let fruits = [];

    for (let i = 1; i < 4; i++) {
        fruits.push(document.querySelector(`#fruit-${i}`).value)
    }

    return fruits
}

function calculateNutrition(fruits) {
    const selectedFruits = getSelectedFruit();

    const nutrients = getNutritionFacts(selectedFruits, fruits);

    document.querySelector('#calories').textContent = nutrients.calories;
    document.querySelector('#fat').textContent = nutrients.fat;
    document.querySelector('#sugar').textContent = nutrients.sugar;
    document.querySelector('#carbohydrates').textContent = nutrients.carbohydrates;
    document.querySelector('#protein').textContent = nutrients.protein;
}

function orderSubmit(event) {
    let currentDate = new Date();
    console.log(currentDate);

    const values = {
        fname: document.querySelector('#fname').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        fruit1: document.querySelector('#fruit-1').value,
        fruit2: document.querySelector('#fruit-2').value,
        fruit3: document.querySelector('#fruit-3').value,
        special: document.querySelector('#special').value,
        orderDate: currentDate
    }

    if (! localStorage.getItem('orders')) {
        let orders = [values];
        localStorage.setItem('orders', JSON.stringify(orders));
    } else {
        let orders = JSON.parse(localStorage.getItem('orders'));

        orders.push(values);

        localStorage.setItem('orders', JSON.stringify(orders));
    }
    
    event.preventDefault();
    form.reset();

    displayDrinks();
}
  
const form = document.getElementById("form");
form.addEventListener("submit", orderSubmit);
  
processData();



let modified = document.querySelector('#modified');
modified.textContent = document.lastModified;