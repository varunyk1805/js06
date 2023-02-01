const form = document.querySelector('.login-form');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

form.addEventListener('submit', e => {
  e.preventDefault();
  const { email, password } = e.target.elements;

  if (!email.value || !password.value) {
    alert('Усі поля повинні бути заповнені!!!');
    return;
  }

  console.log({
    email: email.value,
    password: password.value,
  });

  e.target.reset();
});
