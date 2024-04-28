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
  message.textContent =
    userName +
    ", thank you for your details. We will be in touch via email shortly.";
  message.className = "message";
  box.appendChild(message);

  // Hide the message after 3 seconds
  setTimeout(function () {
    message.style.display = "none";
  }, 4000);
}

//"About the Team" section - picture alterations on mouse over
function jocastaFacts() {
  document.getElementById("jocastaPic").style = "display:none";
  document.getElementById("jocastaInfo").style = "display:block";
}

function jocastaPic() {
  document.getElementById("jocastaPic").style = "display:block";
  document.getElementById("jocastaInfo").style = "display:none";
}

function mikFacts() {
  document.getElementById("mikPic").style = "display:none";
  document.getElementById("mikInfo").style = "display:block";
}

function mikPic() {
  document.getElementById("mikPic").style = "display:block";
  document.getElementById("mikInfo").style = "display:none";
}

function heathFacts() {
  document.getElementById("heathPic").style = "display:none";
  document.getElementById("heathInfo").style = "display:block";
}

function heathPic() {
  document.getElementById("heathPic").style = "display:block";
  document.getElementById("heathInfo").style = "display:none";
}

//Homepage - make pics pop on mouse over - Heather L
function makeBigger(x) {
  x.style.width = "100%";
  x.style.height = "auto";
}

function makeNormal(x) {
  x.style.width = "95%";
  x.style.height = "auto";
}

//Homepage - click on picture to display review - Heather L
function reviewDisplay1() {
  document.getElementById("speech1").style = "display:none";
  document.getElementById("review1").style = "display:block";
}

function reviewDisplay2() {
  document.getElementById("speech2").style = "display:none";
  document.getElementById("review2").style = "display:block";
}

function reviewDisplay3() {
  document.getElementById("speech3").style = "display:none";
  document.getElementById("review3").style = "display:block";
}

function reviewDisplay4() {
  document.getElementById("speech4").style = "display:none";
  document.getElementById("review4").style = "display:block";
}

// Contact Us Page
function findButton() {
  const submitButton = document.getElementById("formSubmitButton");
  if (submitButton) {
    submitButton.addEventListener("click", showThankYouMessage);
    console.log("added eventListener to submit button");
  }
}

function showThankYouMessage() {
  alert(
    "Thank you for reaching out.  We'll get back to you as soon as possible (typically within 2 business days)."
  );
}

findButton();

// ********************************** //
// Javascript game for curious browsers //
// ********************************** //

// click a letter tile in any of the page titles

// that tile's colors will invert

// click all the tiles and they do a little wiggle and revert back to the original color

const allTilesOnPage = document.querySelectorAll(".single-tile");
allTilesOnPage.forEach((tile) => {
  tile.addEventListener("click", (event) => clickTile(event));
});

let tilesArray = [];

const changes = {
  originalBackgroundColor: "var(--accent-brand-color-light)",
  originalColor: "var(--accent-brand-color)",
  originalBoxShadow: "2px 2px 4px var(--accent-brand-color)",
  newBackgroundColor: "var(--accent-brand-color)",
  newColor: "var(--accent-brand-color-light)",
  newBoxShadow: "2px 2px 4px var(--primary-dark)",
};

function clickTile(e) {
  if (e.target.classList.contains("animation")) {
    return;
  } else {
    e.target.style.backgroundColor = changes.newBackgroundColor;
    e.target.style.color = changes.newColor;
    e.target.style.boxShadow = changes.newBoxShadow;
    e.target.classList.add("animation");

    addToFlippedArray(e);
  }
}

function addToFlippedArray(tile) {
  tilesArray.push(tile);
  if (tilesArray.length === allTilesOnPage.length) {
    resetAllTiles();
  }
}

function resetAllTiles() {
  setTimeout(() => {
    allTilesOnPage.forEach((tile) => {
      tile.style.backgroundColor = changes.originalBackgroundColor;
      tile.style.color = changes.originalColor;
      tile.style.boxShadow = changes.originalBoxShadow;
      tile.classList.remove("animation");
      tile.classList.add("reset-animation");
    });
  }, 1000);
  setTimeout(() => {
    allTilesOnPage.forEach((tile) => {
      tile.classList.remove("reset-animation");
    });
    tilesArray = [];
  }, 2000);
}
// Testimonials continue reading - user will click continue reading to show entire review
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var box = this.parentElement;
      var paragraph = box.querySelector(".content p");

      if (paragraph.classList.contains("show")) {
        paragraph.classList.remove("show");
        this.textContent = "Continue Reading";
      } else {
        paragraph.classList.add("show");
        this.textContent = "Read Less";
      }
    });
  });
});
