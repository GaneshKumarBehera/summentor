/* Function to toggle responsive menu */
function toggleMenu() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
let slideIndex = 0;
/*function to slide the images*/
document.getElementById("myForm").addEventListener("submit", function(event) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Invalid email address";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (!isValid) {
    event.preventDefault();
  }
});

function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
