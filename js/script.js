let button = document.querySelector(".js-button");
let image = document.querySelector(".section__image");
let buttonRemove = document.querySelector(".js-buttonText");
button.addEventListener("click", () => {
  image.classList.toggle("js-imageRemove"); // this button removes the picture
  buttonRemove.innerText = image.classList.contains("js-imageRemove")
    ? "Rozwiń"
    : "Zwiń"; //this instruction removes/adds the picture
});
