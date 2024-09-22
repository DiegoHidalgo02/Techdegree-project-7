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


window.addEventListener('resize', () => {

  const socialSection = document.querySelector(".social-section");
  const socialContainer = document.querySelector(".social-container");
  const socialDivs = document.querySelector(".social-container > div");

  let widthDivs = 0;

  socialDivs.forEach(element =>{

    const width = element.offsetWidth;
    console.log("Width:" + width)

    widthDivs = widthDivs + width;
    console.log("widthDivs" + widthDivs);
  })

  const socialSectionWidth = socialSection.offsetWidth;

  if(widthDivs > socialSectionWidth){
     
  }

 console.log("ciao");


})