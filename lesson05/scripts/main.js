const inputEl = document.querySelector('#favchap');
const subButton = document.querySelector('button');
const favList = document.querySelector('#list');

subButton.addEventListener('click', function() {
    let inputValue = inputEl.value;
    if (inputValue.length < 1) {
        console.log('Needs input, my dude');
    } else {
        inputEl.value = '';

        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');
        li.innerText = inputValue;
        deleteBtn.innerText = '❌';
        li.appendChild(deleteBtn);
        favList.appendChild(li);

        deleteBtn.addEventListener('click', function() {
            li.remove();
            deleteBtn.remove();
        });
    }
});