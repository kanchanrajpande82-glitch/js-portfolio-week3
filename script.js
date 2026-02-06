function changeText() {
  document.getElementById("aboutText").innerText =
    "Text changed using JavaScript DOM manipulation!";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function validateForm() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const error = document.getElementById("error");

  if (email === "" || message === "") {
    error.innerText = "All fields are required!";
    error.style.color = "red";
    return false;
  }

  error.innerText = "Form submitted successfully!";
  error.style.color = "green";
  return false;
}

