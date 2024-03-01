window.onload = function() {
  var canvas = document.getElementById("gameCanvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "green";
  ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
  ctx.fill();
};
