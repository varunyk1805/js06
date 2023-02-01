const inputField = document.querySelector('#validation-input');

const handleBlur = e => {
  const { value, dataset } = e.target;
  if (value.length === Number(dataset.length)) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
    return;
  }
  e.target.classList.add('invalid');
  e.target.classList.remove('valid');
};

inputField.addEventListener('blur', handleBlur);
