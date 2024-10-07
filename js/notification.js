const alertSection = document.querySelector("#alert");
const bell = document.querySelector(".bell > svg");
const notificationPoint = document.querySelector("#notification");
const dropMenu = document.querySelector("#ndropDownMenu");
const dropMenuList = document.querySelector("#dropMenuList")
const markAllRead = document.querySelector("#markAllRead")
const closeNotification = document.querySelector("#closeNotification");
let notificationTextGenerated = [];
let notificationUnreaded = [];
let notificationReaded = [];


const notification = [
  "New activity recorded",
  "You have unread messages",
  "Data sync completed.",
  "Check status.",
  "New report available.",
  "Task deadline approaching.",
  "Your profile needs attention.",
  "New insights generated.",
];

function localStorageGetNotification(user){
  
  const mess = localStorage.getItem(`${user}`);

  if(mess){
    return JSON.parse(mess);
  }

  return false; 
}

function randomNotification() {

  let notificationText = "";
  do{
    notificationText = notification[Math.floor(Math.random() * notification.length)];
  }while(notificationTextGenerated.includes(notificationText))
  
  notificationTextGenerated.push(notificationText);
  return notificationText;

}

function generateNotification(id, mess){

  const notification = document.createElement("li")
  const checkNotification = document.createElement("span");

  checkNotification.classList.add("material-symbols-rounded");
  checkNotification.textContent = "check_small";
  checkNotification.id = "checkNotification"

  if(mess && id){
    notification.textContent = mess;
    notification.id = id;
  }else{
    notification.textContent = randomNotification();
    notification.id = "notify"
  }


  notification.appendChild(checkNotification);

  notificationUnreaded.push(notification)
  dropMenuList.appendChild(notification);
  notificationPoint.style.visibility = "visible";
}


export function notificationGet(){

  setTimeout(() => {
    for (let i = 0; i < 2; i++) {
      generateNotification();
    }
  
    const userName = document.querySelector("#user > h3").textContent;
    const message = localStorageGetNotification(userName);
  
    if(message){
  
      for(let i = 0; i < message.length; i++){
        
        let id = `${message[i][0]}`
        let text = `${message[i][1]}`;
        generateNotification(id, text);
  
      }
    }
    
  }, 1000);

}


setInterval(() => {
  if(notification.length !== notificationTextGenerated.length){
    generateNotification();
  }

}, 90000);

const banner = document.createElement("div");
const paragraph = document.createElement("p");
const span = document.createElement("span");
const spanClose = document.createElement("span");

span.innerText = "Alert: ";
paragraph.innerText = randomNotification();
spanClose.innerText = "close";

spanClose.classList.add("material-symbols-outlined");
spanClose.classList.add("close");

paragraph.prepend(span);
banner.appendChild(paragraph);
banner.appendChild(spanClose);
banner.className = "banner";

alertSection.appendChild(banner);

spanClose.addEventListener("click", ()=>{
    banner.style.display = "none";
})

bell.addEventListener("click", () => {
    dropMenu.style.display = "block";
});

closeNotification.addEventListener("click", () => {
  if(dropMenu.style.display === "block"){
    dropMenu.style.display = "none";
  }
})

function deleteMessageLc(message){

  const userName = document.querySelector("#user > h3").textContent;

  const to = JSON.parse(localStorage.getItem(userName));

  const foundArray = to.find(subArray => subArray[0] === message);

  if(foundArray !== -1){
    to.splice(foundArray, 1);
    localStorage.setItem(userName, JSON.stringify(to));
  }

}

markAllRead.addEventListener("click", ()=>{

  const messageElements = Array.from(dropMenuList.children);

  const messagesToDelete = messageElements.filter(element => element.id !== "notify");

  messagesToDelete.forEach(messageElement => {
    const messageId = messageElement.id;
    deleteMessageLc(messageId);
  });


  dropMenuList.innerHTML = '';

  notificationUnreaded.forEach(e =>{
    notificationReaded.push(e);
  });

  for(let i = 0; i < notificationReaded.length; i++){
    notificationUnreaded.pop();
  }
  

  if(notificationUnreaded.length === 0){
    notificationPoint.style.visibility = "hidden";
  }

})


dropMenuList.addEventListener("click", e =>{

  if(e.target.tagName === "SPAN"){
    notificationReaded.push(e);
    notificationUnreaded.pop();

    if(e.target.parentNode.textContent.includes(":")){

      const idHtmlElment = e.target.parentNode.id;

      deleteMessageLc(idHtmlElment);

      /*const userName = document.querySelector("#user > h3").textContent;

      const to = JSON.parse(localStorage.getItem(userName));

      const foundArray = to.find(subArray => subArray[0] === idHtmlElment);
      
      if (foundArray !== -1) {
        to.splice(foundArray, 1);
        localStorage.setItem(userName, JSON.stringify(to));
      }*/
      e.target.parentNode.remove(); 
    }
    if(e){
      e.target.parentNode.remove();   
    }
    

    if(notificationUnreaded.length === 0){
      notificationPoint.style.visibility = "hidden";
    }



  }

});


