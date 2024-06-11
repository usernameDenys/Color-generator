const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];

function getCharacter(i) {
  return hexCharacters[i];
}

function generateNewColor() {
  let hexColorRep = "";

  for (let i = 0; i < 6; i++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length);
    hexColorRep += getCharacter(randomPosition);
  }
  return hexColorRep;
}

let btn = document.getElementById("button");
let bgColor = document.getElementById("color");

btn.addEventListener("click", (event) => {
  const newColor = generateNewColor();

  document.body.style.backgroundColor = "#" + newColor;
  bgColor.textContent = newColor;
});
