// set the checkout figure
if (localStorage.getItem('checkout') == null) {  
    localStorage.setItem('checkout',0);
}
var checkout=localStorage.getItem('checkout');
document.querySelector('#cart-count').innerHTML=checkout;

// run to update login/
var logout = document.getElementById('loginlogout');

// add a listener for add to cart if such a button id is pressed
document.getElementById('loginlogout').addEventListener('click', (event) => {
        event.preventDefault();
        // if user is logged in then log them out and redirect to home page
        var loggedin=localStorage.getItem('loggedIn'); 

        if (loggedin==='1' || loggedin==='true') {
                localStorage.setItem('loggedIn','0');
                window.location.href = "/";
        } else {
                window.location.href = "/login";
        }
    
})

// prevent access to signup when already logged in
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a').forEach(function (a) {
        const href = a.getAttribute('href') || '';
        // match '/signup', 'signup', or any link ending with signup
        if (/signup\/?$/.test(href)) {
            a.addEventListener('click', function (e) {
                const loggedin = localStorage.getItem('loggedIn');
                if (loggedin==='1' || loggedin==='true') {
                    e.preventDefault();
                    alert('You are already logged in');
                }
            });
        }
    });
});


// check if user is logged in or logged out..
checkLoginStatus()

function checkLoginStatus() {
    
    var loggedin=localStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    if (loggedin==='1' || loggedin==='true') {
        // change the text from Login to Logout
        document.querySelector('#loginlogout').innerHTML="Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } else{
        // use add to hide the display of User Details
        //element.classList.add("d-none");        
        //element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "/login");
        var element = document.getElementById("userdetails");
        element.style.display = 'none';
    } 

}