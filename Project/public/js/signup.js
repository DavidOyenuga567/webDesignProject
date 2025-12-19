function signup(event){
  event.preventDefault();

  const user = { 
    email: document.getElementById("userEmail").value,
    password: document.getElementById("userPassword").value
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful! You can now log in.");
  window.location.href = "/login";

}