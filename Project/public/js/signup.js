document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('user-signup');
  if (form) form.addEventListener('submit', signup);
});

function signup(event) {
  if (event) event.preventDefault();

  const user = {
    email: document.getElementById('userEmail').value.trim().toLowerCase(),
    password: document.getElementById('userPassword').value,
  };

  localStorage.setItem('user', JSON.stringify(user));
  alert('Signup successful! You can now log in.');
  window.location.href = '/login';
}