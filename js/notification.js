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



function randomNotification() {

  let notificationText = "";
  do{
    notificationText = notification[Math.floor(Math.random() * notification.length)];
  }while(notificationTextGenerated.includes(notificationText))
  
  notificationTextGenerated.push(notificationText);
  return notificationText;

}

function generateNotification(){

  const notification = document.createElement("li")
  const checkNotification = document.createElement("span");

  checkNotification.classList.add("material-symbols-rounded");
  checkNotification.textContent = "check_small";
  checkNotification.id = "checkNotification"

  notification.textContent = randomNotification();
  notification.appendChild(checkNotification);
  notification.id = "notify"

  notificationUnreaded.push(notification)
  dropMenuList.appendChild(notification);
  notificationPoint.style.visibility = "visible";
}

setTimeout(() => {
  for (let i = 0; i < 2; i++) {
    generateNotification();
  }
}, 4000);

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

markAllRead.addEventListener("click", ()=>{
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
    e.target.parentNode.remove();
    notificationReaded.push(e);
    notificationUnreaded.pop();
    if(notificationUnreaded.length === 0){
      notificationPoint.style.visibility = "hidden";
    }
  }

})


