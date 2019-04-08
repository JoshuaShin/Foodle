function setUpProfileButton() {
    var profileButton = document.createElement("a");
    profileButton.innerHTML = "Profile";
    profileButton.id = "profileButton";
    profileButton.onclick = function() {
        openProfile();
    }
    document.body.appendChild(profileButton);
}

function openProfile() {
    firebase.auth().onAuthStateChanged(function(user){
        window.location.href = "./profile.html";
    })
}