const value = document.querySelector('#value');
let counterValue = 0;

document.querySelector('button[data-action="decrement"]').addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

document.querySelector('button[data-action="increment"]').addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
