const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

noBtn.addEventListener("click", function () {
  response.innerText = "That's not an option 😌❤️";
});

yesBtn.addEventListener("click", function () {
  response.innerText = "YAAAY!!! I love you 💖💖💖";
  startFireworks();
});

function startFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 300; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 3 + 1;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "hsl(" + Math.random() * 360 + ",100%,60%)";
    ctx.fill();
  }
}
