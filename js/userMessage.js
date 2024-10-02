const SendButton = document.querySelector("#send");
const search = document.querySelector("#search");
const textArea = document.querySelector("#message");

SendButton.addEventListener("click", ()=>{

    if(search.value === "" || textArea.value === ""){

        const paragraph = document.createElement("p");
        const icon = document.createElement("span");

        if(search.value === ""){
            paragraph.textContent = "Error: search field empty";
        }else if(textArea.value === ""){
            paragraph.textContent = "Error: text area empty"
        }else{
            paragraph.textContent= "Error: search field and text area are empty"
        }
        
        icon.classList.add("");
        icon.textContent = "";
        paragraph.prepend(icon);
    }

})