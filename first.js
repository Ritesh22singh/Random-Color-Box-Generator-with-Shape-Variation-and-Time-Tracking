let startTime;
const shape = document.getElementById("shape");
const reactionTime = document.getElementById("reactionTime");

// Function to generate a random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF"; //The string letters contains all the valid characters for a hexadecimal color. Hexadecimal colors are made up of numbers (0–9) and letters (A–F).
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  //   A for loop runs 6 times, one for each character in the color code after the #.
  // Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
  // Multiplying it by 16 gives a range between 0 and 15.
  // Math.floor() rounds this down to the nearest integer, ensuring an index between 0 and 15.
  // letters[Math.floor(Math.random() * 16)] selects a random character from the letters string and appends it to color.
  return color;
}

// Function to display a random shape
function displayShape() {
  // Generate random size and position
  const size = Math.floor(Math.random() * 50) + 50; // Random size between 50-100px
  const top = Math.floor(Math.random() * 60) + 20; // Random top position
  const left = Math.floor(Math.random() * 80); // Random left position

  // Set the shape styles
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;
  shape.style.backgroundColor = getRandomColor();
  shape.style.top = `${top}%`;
  shape.style.left = `${left}%`;

  // Randomize shape type (circle or square)
  shape.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";

  // Display the shape
  shape.style.display = "block";

  // Track the time when the shape appears
  startTime = Date.now();
}

// Function to handle shape click
shape.onclick = function () {
  // Hide the shape
  shape.style.display = "none";

  // Calculate and display reaction time
  const endTime = Date.now();
  const timeTaken = (endTime - startTime) / 1000;
  reactionTime.textContent = timeTaken.toFixed(2);

  // Display a new shape
  setTimeout(displayShape, 1000);
};

// Function to start the game
function startGame() {
  document.getElementById("startButton").style.display = "none"; // Hide start button
  displayShape(); // Show the first shape
}
