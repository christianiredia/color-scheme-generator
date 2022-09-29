const input = document.querySelector("#color-pick");
const inputScheme = document.querySelector("#input-scheme");
const headerContainer = document.querySelector(".header-container");

fetchColor();

headerContainer.addEventListener("input", function () {
  fetchColor();
});

function fetchColor() {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${input.value.substring(1)}&mode=${
      inputScheme.value
    }&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      let colorSchemeArray = [];
      for (let i = 0; i < 5; i++) {
        colorSchemeArray.push(data.colors[i].hex.value);
      }
      document.querySelector(".color-1").style.backgroundColor =
        colorSchemeArray[0];
      document.querySelector(".color-2").style.backgroundColor =
        colorSchemeArray[1];
      document.querySelector(".color-3").style.backgroundColor =
        colorSchemeArray[2];
      document.querySelector(".color-4").style.backgroundColor =
        colorSchemeArray[3];
      document.querySelector(".color-5").style.backgroundColor =
        colorSchemeArray[4];

      document.querySelector(
        ".color-hex1"
      ).innerHTML = `${colorSchemeArray[0]}`;
      document.querySelector(
        ".color-hex2"
      ).innerHTML = `${colorSchemeArray[1]}`;
      document.querySelector(
        ".color-hex3"
      ).innerHTML = `${colorSchemeArray[2]}`;
      document.querySelector(
        ".color-hex4"
      ).innerHTML = `${colorSchemeArray[3]}`;
      document.querySelector(
        ".color-hex5"
      ).innerHTML = `${colorSchemeArray[4]}`;
    });
}
