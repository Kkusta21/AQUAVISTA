// Get DOM elements
const signInButton = document.getElementById("signIn");
const signUpButton = document.getElementById("signUp");
const container = document.querySelector(".container");

// Add event listeners to toggle between sign-in and sign-up forms
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// Handle form submission
const signupForm = document.getElementById("signupForm");
const signinForm = document.getElementById("signinForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("signupUser").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  // Perform sign-up logic here
  // You can use AJAX or fetch to send the data to the server
});

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signinEmail").value;
  const password = document.getElementById("signinPassword").value;
  // Perform sign-in logic here
  // You can use AJAX or fetch to send the data to the server
});
