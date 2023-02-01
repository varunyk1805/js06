function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

let count = 0;

createBtn.addEventListener('click', () => {
  const array = [];
  for (let i = count; i < count + Number(input.value); i++) {
    array.push(
      `<div style="width:${30 + 10 * i}px; height:${
        30 + 10 * i
      }px; background-color:${getRandomHexColor()}" ></div>`,
    );
  }

  boxes.insertAdjacentHTML('beforeend', array.join(''));
  count += Number(input.value);
});
destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
  count = 0;
});
