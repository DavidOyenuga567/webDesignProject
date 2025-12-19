document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('user-login');
  if (form) {
    form.addEventListener('submit', login);
  }
});

function login(event) {
  if (event) event.preventDefault();

  const storedRaw = localStorage.getItem('user');
  if (!storedRaw) {
    alert('No account found. Please sign up first.');
    window.location.href = '/signup';
    return;
  }

  let storedUser = null;
  try {
    storedUser = JSON.parse(storedRaw);
  } catch (e) {
    console.error('Failed to parse stored user', e);
    alert('Error: Invalid stored user data.');
    return;
  }

  const email = document.getElementById('emailAddressID').value.trim().toLowerCase();
  const password = document.getElementById('passwordID').value;

  console.log('login attempt', { email, storedUserEmail: storedUser && storedUser.email });

  if (storedUser && email === (storedUser.email && storedUser.email.trim().toLowerCase()) && password === storedUser.password) {
    alert('Login successful!');
    localStorage.setItem('loggedIn', '1');
    window.location.href = '/shop';
  } else {
    alert('Invalid login details');
  }
}