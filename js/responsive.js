function convertIntoAlphabeticalNumber(n) {
  let number;
  let numberArray = [];

  let count = 0;
  n.map((number) => count++);

  if (count >= 6) {
    switch (count) {
      case 6:
        n.every((element) => {
          numberArray.push(value);
          if (numberArray.length === 3) {
            return false;
          }
        });

        number = numberArray.toString() + "k";
        break;
      case 7:
        n.every((element) => {
          numberArray.push(value);
          if (numberArray.length === 1) {
            return false;
          }
        });

        number = numberArray.toString() + "M";
        break;
      default:
        console.log("Punto di avvertimento");
        break;
    }
  }

  return number;
}

let socialContainer = document.querySelector(".social-container");



window.addEventListener("resize", function() {
  let socialDiv = document.querySelectorAll(".social-container > div");

  socialDiv.forEach((element) => {
    let computedWidthFirst = document
      .querySelector(".svg-bg")
      .getBoundingClientRect().width;
    let computedWidthSecond = document
      .querySelector(".social-card-text")
      .getBoundingClientRect().width;

    let ComputedWidthDivs = computedWidthFirst + computedWidthSecond;

    socialDivWidth = element.getBoundingClientRect().width;

    if (ComputedWidthDivs > socialDivWidth) {
      let numberText = document.querySelector(".social-card-text:last-child");

      let NumberNoComa = numberText.toString.replace(",", "");

      /*let NumberSocial = parseInt(NumeberNoComa, 10);*/

      let alphaNumber = convertIntoAlphabeticalNumber(NumberNoComa);

      numberText.textContent = alphaNumber;
    }
  });
});
