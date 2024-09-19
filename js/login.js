const overlay = document.querySelector("#overlay")
const users = document.querySelector(".users");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");

usersInfo = [
    {   
        id: "VictoriaChambers",
        name: "Victoria Chambers",
        imgPath: "img/member-1.jpg",
        email: "victoria.chambers80@example.com",
        social : {
            facebook: 10320,
            instagram: 16445,
            twitter: 22189 
        }
    },

    {
        id: "DaleByrd",
        name: "Dale Byrd",
        imgPath: "img/member-2.jpg",
        email: "dale.byrds52@example.com",
        social : {
            facebook: 1320,
            instagram: 20200,
            twitter: 11120 
        }
    },

    {
        id: "DawnWood",
        name: "Dawn Wood",
        imgPath: "img/member-3.jpg",
        email: "dawn.wood16@example.com",
        social : {
            facebook: 0,
            instagram: 250000,
            twitter: 200000 
        }
    },

    {
        id: "DanOliver",
        name: "Dan Oliver",
        imgPath: "img/member-4.jpg",
        email: "dan.oliver82@example.com",
        social : {
            facebook: 5980,
            instagram: 3200,
            twitter: 1200 
        }
    }
]


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
        const userImg = document.querySelector("#user > img");
        const facebook = document.querySelector("#facebookNum");
        const instagram = document.querySelector("#instagramNum");
        const twitter = document.querySelector("#twitterNum");

        let userId = e.target.parentNode.id;

        switch (userId) {
        case usersInfo[0].id:
            userName.textContent = usersInfo[0].name;
            userImg.src = usersInfo[0].imgPath;
            facebook.textContent = usersInfo[0].social.facebook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            instagram.textContent = usersInfo[0].social.instagram.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            twitter.textContent = usersInfo[0].social.twitter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
        case usersInfo[1].id:
            userName.textContent = usersInfo[1].name;
            userImg.src = usersInfo[1].imgPath;
            facebook.textContent = usersInfo[1].social.facebook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            instagram.textContent = usersInfo[1].social.instagram.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            twitter.textContent = usersInfo[1].social.twitter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
        case usersInfo[2].id:
            userName.textContent = usersInfo[2].name;
            userImg.src = usersInfo[2].imgPath;
            facebook.textContent = usersInfo[2].social.facebook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            instagram.textContent = usersInfo[2].social.instagram.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            twitter.textContent = usersInfo[2].social.twitter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
        case usersInfo[3].id:
            userName.textContent = usersInfo[3].name;
            userImg.src = usersInfo[3].imgPath;
            facebook.textContent = usersInfo[3].social.facebook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            instagram.textContent = usersInfo[3].social.instagram.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            twitter.textContent = usersInfo[3].social.twitter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
        default:

        }

    }
})

