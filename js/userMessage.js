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
    removeItems();
    list.style.display = "none";
}

window.displayNames = displayNames;

function removeItems(){
    let items = document.querySelectorAll(".listItem");

    items.forEach(element => {
        element.remove();
    });
}

function removeclass(p, str){
    p.classList.remove(str)
}

function createMessage(children, parent, textCont, className){
    children.classList.add("material-symbols-outlined");
    children.textContent = textCont;
    parent.prepend(children);
    parent.classList.add(className);
    messageHeader.appendChild(parent);
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

        createMessage(icon, paragraph, "warning", "error");

        removeclass(paragraph, "succes");

        ErrorOnDisplay = true;
        succesOnDisplay = false;

     } else if(succesOnDisplay === false) {

        paragraph.textContent = "Message sent";

        createMessage(icon, paragraph, "check", "succes");

        removeclass(paragraph, "error");

        ErrorOnDisplay = false
        succesOnDisplay = true;
    }

    const userNameFrom = document.querySelector("#user > h3").textContent;
    const message = [`${userNameFrom}`, `${textArea.value}`];

    localStorage.setItem(`${search.value}`, JSON.stringify(message));

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

        if(element.name.toLowerCase().startsWith(event.target.value.toLowerCase()) && search.value != "" && event.key !== "Enter"){
            
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


