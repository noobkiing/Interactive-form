document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message").value;

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      password === "" ||
      confirmPassword === "" ||
      message.trim() === ""
    ) {
      alert("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }

    // Hide the form and display the success message
    form.style.display = "none";
    successMessage.style.display = "block";
  });
    // Check the mail using regex
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
