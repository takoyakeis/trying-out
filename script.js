const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".i know!-btn");
const noBtn = document.querySelector(".i don't know..-btn");

i know!Btn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 😘";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
