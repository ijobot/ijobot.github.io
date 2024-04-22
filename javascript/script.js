// Define the alter function
function alter(button) {
  // Prompt for user details
  var userName = prompt("Enter your name");
  if (!userName) return; // Exit if user cancels or leaves input empty

  var userEmail = prompt("Enter your email");
  if (!userEmail) return; // Exit if user cancels or leaves input empty

  var userNumber = prompt("Enter your phone number");
  if (!userNumber) return; // Exit if user cancels or leaves input empty

  var userDestination = prompt("Enter destination required");
  if (!userDestination) return; // Exit if user cancels or leaves input empty

  // Find the box element
  var box = button.parentElement;

  // Create a message element
  var message = document.createElement("div");
  message.textContent = userName + ", thank you for your details. We will be in touch via email shortly.";
  message.className = "message";
  box.appendChild(message);

  // Hide the message after 3 seconds
  setTimeout(function() {
    message.style.display = "none";
  }, 4000);
}

