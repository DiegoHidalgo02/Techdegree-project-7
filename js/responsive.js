import { usersInfo } from "../js/login.js";

function convertIntoAlphabeticalNumber(n) {
  let number;
  let numberArray = [];

  const count = n.length;
  // n.map((number) => count++);

  if(!n.includes("k") && !n.includes("M")){
    switch (count) {
      case 1:
        number = n;
        break;
      case 4:
        [...n].forEach(Element =>{
          if (numberArray.length < 1) {
            numberArray.push(Element);
          }
        });
        number = numberArray.toString().replaceAll(",", "") + "k";
        break;
      case 5:
        [...n].forEach(Element =>{
          if (numberArray.length < 2) {
            numberArray.push(Element);
          }
        });
        number = numberArray.toString().replaceAll(",", "") + "k";
        break;
      case 6:
        [...n].forEach(Element =>{
          if (numberArray.length < 3) {
            numberArray.push(Element);
          }
        });

        number = numberArray.toString().replaceAll(",", "") + "k";
        break;
      case 7:
        [...n].forEach(Element =>{
          
          if (numberArray.length <= 1) {
            numberArray.push(Element);
          }
        });

        number = numberArray.toString().replaceAll(",", "") + "M";
        break;
      default:
        console.log("Punto di avvertimento");
        break;
    }

    return number;
  }

  return n;
}

function controllAlphaNumber(array){
  array.forEach(element => {
    if(!element.textContent.includes("k")){
      return false;
    }else{
      return true;
    }
  })
}

const socialSection = document.querySelector(".social-section");
const socialContainer = document.querySelector(".social-container");
const socialDivs = document.querySelectorAll(".social-container > div");


window.addEventListener('resize', () => {

  let widthDivs = 0;

  socialDivs.forEach(element =>{
    const width = element.offsetWidth;
    widthDivs = widthDivs + width;
  })

  const socialSectionWidth = socialSection.offsetWidth;


  const numberText = document.querySelectorAll(".social-card-text p:last-child");

  if(widthDivs > socialSectionWidth && !controllAlphaNumber(numberText) &&  getComputedStyle(socialContainer).flexDirection === "row" ){
      
    numberText.forEach(element => {

      let noComaNumber = element.textContent.replaceAll(",", "");

      let alphaNumber = convertIntoAlphabeticalNumber(noComaNumber);

      element.textContent = alphaNumber;

    })

  }else if(widthDivs < socialSectionWidth && window.innerWidth > 1080 || getComputedStyle(socialContainer).flexDirection === "column" ){

    const userName = document.querySelector("#user h3").textContent;
    const user = usersInfo.find(user => user.name === userName);
    let count = 0;
    for (let prop in user.social){
      numberText[count].textContent = user.social[prop].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      count++;
    }

    }
})