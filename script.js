const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const response = document.getElementById("response");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

yesBtn.addEventListener("click", () => {
  response.innerText = "YAY 💖 I knew it!";
});
