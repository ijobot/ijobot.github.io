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



// ********************************** //
// Javascript game for curious browsers //
// ********************************** //

// click a letter tile in any of the page titles

// that tile's colors will invert (maybe with a fun spin move or something)

// click all the tiles and they do a little wiggle and revert back to the original color

// addEventListener('click', clickTile) on all spans in page titles - ensure className is unique

// run forEach loop on all spans on the page, classList.add(`flippable-tile-${index}`)

const allTilesOnPage = document.querySelectorAll(".single-tile");
allTilesOnPage.forEach((tile) => {
  tile.addEventListener("click", clickTile(e));
});

function clickTile(e) {
  console.log("hey joe");
  e.style.backGroundColor = "black";

  // invert colors - letter and box shadow become light, background becomes dark
  // tile does some sort of small animation, like 3D rotate, then stays like that until the game ends
  // call addToFlippedArray()
  // order that tiles are clicked does not matter
}

function addToFlippedArray() {
  // each clicked tile will be added here
  // compute array.length using spread operator to continuously grow the array
  // compute amount of tiles in any given page title by querySelectorAll(classNameSharedByAllTileSpans)
  // when array.length === tiles.length, call resetAllTiles()
}

function resetAllTiles() {
  // all flipped tiles perform some sort of animation
  // all tiles revert back to original state
}
