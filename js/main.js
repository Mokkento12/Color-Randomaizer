for (let i = 1; i <= 100; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);
}

const button = document.querySelector(".button");
const randomColorBlock = document.querySelectorAll(".box");

function RandomHexColorCode() {
  let chars = "0123456789abcdef";
  let colorLenght = 6;
  let color = "";

  for (let i = 0; i < colorLenght; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return "#" + color;
}

function addColor() {
  randomColorBlock.forEach((e) => {
    let newColor = RandomHexColorCode();
    e.style.backgroundColor = newColor;
  });
}
