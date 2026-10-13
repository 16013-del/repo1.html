const users = [
  { username: 'Alyasa', password: '@alyasa123' },
  { username: 'Amina', password: '@amina123' }
];

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  loginMessage.classList.remove('success');

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const user = users.find(
    account => account.username.toLowerCase() === username.toLowerCase() && account.password === password
  );

  if (!user) {
    loginMessage.textContent = 'The username or password is incorrect.';
    return;
  }

  loginMessage.textContent = `Signed in successfully as ${user.username}.`;
  loginMessage.classList.add('success');
});
