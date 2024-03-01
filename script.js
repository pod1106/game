var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// Load player image
var playerImg = new Image();
playerImg.src = "images/2_of_clubs.png";

var player = {
  x: 50,
  y: 50,
  width: 50,
  height: 50,
  speed: 5
};

// Event listener for keyboard input
document.addEventListener("keydown", function(event) {
  switch(event.key) {
    case "w":
      player.y -= player.speed;
      break;
    case "a":
      player.x -= player.speed;
      break;
    case "s":
      player.y += player.speed;
      break;
    case "d":
      player.x += player.speed;
      break;
  }
});

// Main game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the player image
  ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
  
  // Request next frame
  requestAnimationFrame(gameLoop);
}

// Start the game loop after the player image has loaded
playerImg.onload = function() {
  gameLoop();
};
