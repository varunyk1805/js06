const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${control.value}px`;

control.addEventListener('input', () => (text.style.fontSize = `${control.value}px`));
