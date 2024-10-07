import { notificationGet } from "./notification.js";

const overlay = document.querySelector("#overlay")
const users = document.querySelector(".users");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");

export const usersInfo = [
    {   
        id: "VictoriaChambers",
        name: "Victoria Chambers",
        imgPath: "img/member-1.jpg",
        email: "victoria.chambers80@example.com",
        social : {
            facebook: 10320,
            instagram: 16445,
            twitter: 22189 
        },
        date: "10/15/20"
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
        },
        date:"10/15/20"
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
        },
        date:"10/15/20"
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
        },
        date:"10/15/20"
    }
];

const emailNotificationCheckBox = document.querySelector("#SendEmailCheckBox");
const setProfileCheckBox =  document.querySelector("#SetProfilePublicCheckBox");

function localStorageGetItem(id){

    const localStorageEmailId = 'checkBoxStateEmail' + `${id}`;
    const localStorageProfileId = 'checkBoxStateSetProfile' + `${id}`;

    const isCheckedEmail = localStorage.getItem(`${localStorageEmailId}`) === "true";
    const isCheckedSetProfile = localStorage.getItem(`${localStorageProfileId}`) === "true";

    emailNotificationCheckBox.checked = isCheckedEmail;
    setProfileCheckBox.checked = isCheckedSetProfile;

}


function generateRandomActivity(user) {
    const activities = [
      "commented on",
      "liked the post",
      "shared",
      "posted"
    ];
    const topics = [
      "WebApp's SEO Tips",
      "Facebook's Changes for 2024",
      "Instagram's New Features",
      "Twitter Marketing Strategies"
    ];
    const timeFrames = [
      "1 hour ago",
      "2 hours ago",
      "4 hours ago",
      "5 hours ago",
      "1 day ago"
    ];
  
    const activity = activities[Math.floor(Math.random() * activities.length)];
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const timeFrame = timeFrames[Math.floor(Math.random() * timeFrames.length)];
  
    // return `${user.name} ${activity} ${topic} ${timeFrame}`;
    return [user.name, activity, topic, timeFrame];
}


window.onload = function() {
    header.style.display = "none";
    nav.style.display = "none"
    main.style.display = "none";

    const membersActivityContainer = document.querySelector('.members-container-activity');
    const newMembersContainer = document.querySelector('.members-container');
    membersActivityContainer.innerHTML = ''; // Pulisci il contenitore
  
    usersInfo.forEach(user => {
      const activityText = generateRandomActivity(user);
      const memberActivityDiv = document.createElement('div');
      const newMemberDiv = document.createElement('div');

      memberActivityDiv.className = 'member';
      newMemberDiv.className = 'member';

      newMemberDiv.innerHTML = `
        <img src="${user.imgPath}" alt="${user.name}" class="src">
        <div class="members-text">
            <p>${user.name}</p>
            <a href="#">${user.email}</a>
        </div>
        <p>${user.date}</p>
      `;
      
      memberActivityDiv.innerHTML = `
        <img src="${user.imgPath}" alt="${user.name}" class="src">
        <div class="members-text">
          <p>${activityText[0]} ${activityText[1]} <span>${activityText[2]}</span></p>
          <p>${activityText[3]}</p>
        </div>
        <div> > </div>
      `;
      
      newMembersContainer.appendChild(newMemberDiv);
      membersActivityContainer.appendChild(memberActivityDiv);
    });

}

users.addEventListener('click', e => {
    if (e.target.parentNode.tagName === "DIV" && e.target.parentNode.classList.contains("user")){

        overlay.style.display = "none";

        header.style.display = "grid";
        nav.style.display = "grid";
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
            userImg.alt = usersInfo[0].id;
            facebook.textContent = usersInfo[0].social.facebook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            instagram.textContent = usersInfo[0].social.instagram.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            twitter.textContent = usersInfo[0].social.twitter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorageGetItem(userId);
            notificationGet();
            break;
        case usersInfo[1].id:
            userName.textContent = usersInfo[1].name;
            userImg.src = usersInfo[1].imgPath;
            userImg.alt = usersInfo[1].id;
            facebook.textContent = usersInfo[1].social.facebook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            instagram.textContent = usersInfo[1].social.instagram.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            twitter.textContent = usersInfo[1].social.twitter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorageGetItem(userId);
            notificationGet();
            break;
        case usersInfo[2].id:
            userName.textContent = usersInfo[2].name;
            userImg.src = usersInfo[2].imgPath;
            userImg.alt = usersInfo[2].id;
            facebook.textContent = usersInfo[2].social.facebook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            instagram.textContent = usersInfo[2].social.instagram.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            twitter.textContent = usersInfo[2].social.twitter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorageGetItem(userId);
            notificationGet();
            break;
        case usersInfo[3].id:
            userName.textContent = usersInfo[3].name;
            userImg.src = usersInfo[3].imgPath;
            userImg.alt = usersInfo[3].id;
            facebook.textContent = usersInfo[3].social.facebook.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            instagram.textContent = usersInfo[3].social.instagram.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            twitter.textContent = usersInfo[3].social.twitter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorageGetItem(userId);
            notificationGet();
            break;
        default:

        }

    }
})

const settingsControll = document.querySelector("#settings");

settingsControll.addEventListener("change", (e)=>{

    const userImg = document.querySelector("#user > img");
    const localStorageEmailId = 'checkBoxStateEmail' + `${userImg.alt}`;
    const localStorageProfileId = 'checkBoxStateSetProfile' + `${userImg.alt}`;

    if(e.target.id === "SendEmailCheckBox"){
            
        localStorage.setItem(`${localStorageEmailId}`, emailNotificationCheckBox.checked);
            
    }else if(e.target.id === "SetProfilePublicCheckBox"){
        
        localStorage.setItem(`${localStorageProfileId}`, setProfileCheckBox.checked);
        
    }

});

const cancelSettings = document.querySelector("#cancel");

cancelSettings.addEventListener("click", ()=>{

    const userImg = document.querySelector("#user > img");
    const localStorageEmailId = 'checkBoxStateEmail' + `${userImg.alt}`;
    const localStorageProfileId = 'checkBoxStateSetProfile' + `${userImg.alt}`;
    
    localStorage.removeItem(`${localStorageEmailId}`);
    localStorage.removeItem(`${localStorageProfileId}`);

    const timeZone = document.querySelector("#timezone");
    timeZone.value = "Select";

});