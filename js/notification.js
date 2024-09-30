const alertSection = document.querySelector("#alert");
const bell = document.querySelector(".bell");
const notificationPoint = document.querySelector("#notification");


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
  const noticationText =
    notification[Math.floor(Math.random() * notification.length)];

  return noticationText;
}

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
    notificationPoint.style.visibility = "hidden";
});