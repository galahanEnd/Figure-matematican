'use strict'

const input = document.querySelector('input[type="search"]');
const button = document.querySelector('button');
const list = document.querySelector('#typelist');

button.addEventListener('click', () => {
    const taskText = input.value;
    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const delButton = document.createElement('button');
    delButton.addEventListener('click', () => {
        li.remove();
    })
    li.textContent = taskText;
    delButton.textContent = 'Удалить';
    list.appendChild(li);
    li.appendChild(delButton);
    li.prepend(checkBox);
    input.value = '';
});