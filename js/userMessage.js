import { usersInfo } from "./login.js";

const SendButton = document.querySelector("#send");
const search = document.querySelector("#search");
const textArea = document.querySelector("#message");
const messageHeader = document.querySelector(".headerSectionMessage");
let ErrorOnDisplay = false;
let succesOnDisplay = false;
const paragraph = document.createElement("p");
const icon = document.createElement("span");

SendButton.addEventListener("click", ()=>{

    if (search.value === "" || textArea.value === "") {
        if (search.value === "" && textArea.value !== "") {
            paragraph.textContent = "Error: search field empty";
        } else if (textArea.value === "" && search.value !== "") {
            paragraph.textContent = "Error: text area empty";
        } else {
            paragraph.textContent = "Error: search field and text area are empty";
        }

        icon.classList.add("material-symbols-outlined");
        icon.textContent = "warning";
        paragraph.prepend(icon);

        if(paragraph.classList.contains("succes")){
            paragraph.classList.remove("succes")
        }

        paragraph.classList.add("error");
        messageHeader.appendChild(paragraph);
        ErrorOnDisplay = true;
        succesOnDisplay = false;

     } else if(succesOnDisplay === false) {

        paragraph.textContent = "Message sent";
        icon.classList.add("material-symbols-outlined");
        icon.textContent = "check";
        paragraph.prepend(icon);

        if(paragraph.classList.contains("error")){
            paragraph.classList.remove("error")
        }

        paragraph.classList.add("succes")
        messageHeader.appendChild(paragraph);
        ErrorOnDisplay = false
        succesOnDisplay = true;
    }
})

setInterval(() => {
    if(ErrorOnDisplay === true || succesOnDisplay === true){
        messageHeader.querySelector("p").remove();
        ErrorOnDisplay = false;
        succesOnDisplay = false;
    }
}, 30000);


search.addEventListener("keyup", (event)=>{

    let textInput = event.target.value.toLowerCase();
    let textInputLength = textInput.length;
    if(textInputLength  > 2){

        usersInfo.forEach(element => {
            if(element.name.toLowerCase().includes(textInput.toLowerCase())){
                search.value = element.name;
            }
        });  
    }

    // if(event.key === "Enter"){
    //     if(overlay.innerText.length > 0){
    //         search.value = overlay.innerText;
    //     }
    // }
})