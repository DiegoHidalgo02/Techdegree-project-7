import { usersInfo } from "./login.js";

const SendButton = document.querySelector("#send");
const search = document.querySelector("#search");
const textArea = document.querySelector("#message");
const messageHeader = document.querySelector(".headerSectionMessage");
let ErrorOnDisplay = false;
let succesOnDisplay = false;
const paragraph = document.createElement("p");
const icon = document.createElement("span");
let list = document.querySelector("#list");

function displayNames(value){
    search.value = value;
}

window.displayNames = displayNames;

function removeItems(){
    let items = document.querySelectorAll(".listItem");

    items.forEach(element => {
        element.remove();
    });
}

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

let listItemsOnDisplay = [];

search.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
    }
})

search.addEventListener("keyup", (event)=>{

    if(event.key === "Enter" && search.value !== ""){
        search.value = list.firstChild.textContent;
        list.style.display = "none";
    }

    removeItems();

    usersInfo.forEach(element => {

        if(element.name.toLowerCase().startsWith(event.target.value.toLowerCase()) && search.value != ""){
            
            list.style.display = "block";

            const listItem = document.createElement("li");
            const idListItem = element.id + "listItem";
            listItem.textContent = element.name;
            listItem.id = idListItem;
            listItem.setAttribute("onclick", "displayNames('" + element.name + "')");
            listItem.classList.add("listItem");
            list.appendChild(listItem);

            listItemsOnDisplay.push(element.name);

        }else if(search.value === ""){

            list.style.display = "none";

        }


    });
})


