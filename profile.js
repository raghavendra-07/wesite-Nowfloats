const userName = document.getElementById("user-name");


function saveInput() {
    const nameEl = document.getElementById("html").value;
    localStorage.setItem("nameValue", html);
    window.location.href = "home-profile.html"
  }

  

  var usernameDisplay = document.getElementById("username-display");

  var registrationForm = document.getElementById("registration-form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var nameEl = usernameInput.value;
    usernameDisplay.textContent = username;
  });
