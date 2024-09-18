const overlay = document.querySelector("#overlay")
const users = document.querySelector(".users");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main")


window.onload = function() {
    header.style.display = "none";
    nav.style.display = "none"
    main.style.display = "none";
}

users.addEventListener('click', e => {
    if (e.target.parentNode.tagName === "DIV"){

        overlay.style.display = "none";

        header.style.display = "flex";
        nav.style.display = "block";
        main.style.display = "grid";

        const userName = document.querySelector("#user > h3");
        const userImg = document.querySelector("#user > img")
        const socialNumbers = document.querySelector(".social-card-text > p:nth-child(2)")

        let userId = e.target.parentNode.id;

        switch (userId) {
        case "VictoriaChambers":
            userName.textContent = "Victoria Chambers";
            userImg.src = "img/member-1.jpg";
            break;
        case "DaleByrd":
            userName.textContent = "Dale Byrd";
            userImg.src = "img/member-2.jpg";
            break;
        case "DawnWood":
            userName.textContent = "Dawn Wood";
            userImg.src = "img/member-3.jpg";
            break;
        case "DanOliver":
            userName.textContent = "Dan Oliver";
            userImg.src = "img/member-4.jpg";
            break;
        default:

        }

    }
})

