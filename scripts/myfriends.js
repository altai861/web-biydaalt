const friendsContainer = document.getElementById("friends-container");
const pendingRequestContainer = document.getElementById("pending-requests");
const addFriendContainer = document.getElementById("add-friend");
const removeFriendContainer = document.getElementById("remove-friend");
const menuItems = document.getElementsByClassName("friends-menu-item");

Array.from(menuItems).forEach(element => {
    element.addEventListener("click", () => {
        if (element.textContent === "My Friends") {
            haveChosen(1);
        } else if (element.textContent === "Pending Requests") {
            haveChosen(2);
        } else if (element.textContent === "Add Friend") {
            haveChosen(3);
        } else if (element.textContent === "Remove Friend") {
            haveChosen(4);
        }
    });
});


function haveChosen(n) {

    for (let i = 0; i < Array.from(menuItems).length; i++) {
        if (i + 1 === n) {
            menuItems[i].style.backgroundColor = "rgb(32, 32, 156)";
            menuItems[i].style.color = "white";
        } else {
            menuItems[i].style.backgroundColor = "white";
            menuItems[i].style.color = "black";
        }
    }

    
    if (n === 1) {
        friendsContainer.style.display = "block";
        pendingRequestContainer.style.display = "none";
        addFriendContainer.style.display = "none";
        removeFriendContainer.style.display = "none";
    } else if (n === 2) {
        friendsContainer.style.display = "none";
        pendingRequestContainer.style.display = "block";
        addFriendContainer.style.display = "none";
        removeFriendContainer.style.display = "none";
    } else if (n === 3) {
        friendsContainer.style.display = "none";
        pendingRequestContainer.style.display = "none";
        addFriendContainer.style.display = "block";
        removeFriendContainer.style.display = "none";
    } else if (n === 4) {
        friendsContainer.style.display = "none";
        pendingRequestContainer.style.display = "none";
        addFriendContainer.style.display = "none";
        removeFriendContainer.style.display = "block";
    }
}