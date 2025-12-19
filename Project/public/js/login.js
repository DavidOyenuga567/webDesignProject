function login(event){

const storedUser = JSON.parse(localStorage.getItem("user"));
const email = document.getElementById("emailAddressID").value;
const password = document.getElementById("passwordID").value;

if (email === storedUser.email && password === storedUser.password) {
 alert("Login successful!");
    localStorage.setItem('loggedIn', "true");
    window.location.href = "/shop";  // redirect to shop page

}
else {
  alert("Invalid login details");
}


}