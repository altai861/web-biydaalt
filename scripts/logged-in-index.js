var profileNameClicked = false
const profileNameDiv = document.getElementById("profile-name-sec");
const seeMoreButtonNow = document.getElementById("seemorebuttonnow");
const seeMoreButtonFav = document.getElementById("seemorebuttonfav");
const seeMoreButtonHis = document.getElementById("seemorebuttonhis");

profileNameDiv.addEventListener("click", () => {
    profileNameClicked = !profileNameClicked
    console.log("profile name clicked");
    updateDropDown()
})

function updateDropDown() {
    console.log(document.getElementById("profile-dropdown"))
    document.getElementById("profile-dropdown").style.display = profileNameClicked ? "block" : "none"
}

seeMoreButtonNow.addEventListener("click", () => {
    if (seeMoreButtonNow.textContent === "See more") {
        document.getElementById("watching-now-container").style.flexWrap = "wrap";
        seeMoreButtonNow.textContent = "See less";
    } else {
        document.getElementById("watching-now-container").style.flexWrap = "nowrap";
        seeMoreButtonNow.textContent = "See more";
    }
})


seeMoreButtonFav.addEventListener("click", () => {
    if (seeMoreButtonFav.textContent === "See more") {
        document.getElementById("favorite-container").style.flexWrap = "wrap";
        seeMoreButtonFav.textContent = "See less";
    } else {
        document.getElementById("favorite-container").style.flexWrap = "nowrap";
        seeMoreButtonFav.textContent = "See more";
    }
})
seeMoreButtonHis.addEventListener("click", () => {
    if (seeMoreButtonHis.textContent === "See more") {
        document.getElementById("history-container").style.flexWrap = "wrap";
        seeMoreButtonHis.textContent = "See less";
    } else {
        document.getElementById("history-container").style.flexWrap = "nowrap";
        seeMoreButtonHis.textContent = "See more";
    }
})
