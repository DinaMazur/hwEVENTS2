const imegesGallery = document.querySelectorAll("img");
let total = 0;
imegesGallery[total].style.display = "block";
window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        imegesGallery[total].style.display = "none"
         total += 1;
       if (total >= imegesGallery.length) {
        total = 0;
      }
      imegesGallery[total].style.display = "block"
    }
})
console.log(total);

// завдання 2


const amountElement = document.querySelector("input");
const buttonElement = document.querySelector("[data-action='render']");
const buttonDestroy = document.querySelector("[data-action='destroy']");
const containerElement = document.querySelector("#boxes");

buttonElement.addEventListener("click", (event) => {
  const amount = amountElement.value;
  createBoxes(amount);
});
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement("div");
    divElement.style.width = "70px";
    divElement.style.height = "70px";
    divElement.style.background = `rgb(${Math.random() * 255}, ${
      Math.random() * 225
    }, ${Math.random() * 225})`;
    containerElement.append(divElement);
  }
}

console.log(containerElement);