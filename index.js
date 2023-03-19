const form = document.querySelector('form');


const pass = localStorage.setItem("password1Value", password.value);
const em = localStorage.setItem("email", email.value);
  
const emailEl = document.getElementById("email").value;
const passwordEl = document.getElementById("password").value;
/*function login() {
  // Get the user's credentials
  

  // Authenticate the user (replace this with your own authentication code)
  if (email === "user@email.com" && password === "password") {
    // Store the user's credentials in local storage
    localStorage.setItem("email", email);
    
    // Show the main content
    showMainContent();
  } else {
    alert("Invalid email or password");
  }

}*/

function login() {
  //const uservalue = username.value;
  const emailvalue = emailEl.value;
  const password1value = passwordEl.value;
  //const password2value = password2.value;

  const getPass1 = localStorage.getItem("password2Value");
  const getemail = localStorage.getItem("emailEl");
  validateInputs();
  if (emailvalue == getemail && password1value == getPass1) { 
      window.location.href = 'homeuser.html';
  } else {
      alert("Invalid credentials");
  }
}

/*function login() {
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  const getPass1 = localStorage.getItem("password1Value");
  const getPass2 = localStorage.getItem("password2Value");
  const getemail = localStorage.getItem("email");

  if (localStorage.getItem("email") && localStorage.getItem("password")) {
    if (emailvalue == getemail && password1value == getPass1 && password2value == getPass2) {
      window.location.href = 'homeuser.html';
    } else {
        alert("Invalid credentials");
    }
  }*/
  

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  
}

  // send a POST request to the server to authenticate the user
);


