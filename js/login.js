setUpSignInButton();
setSignInOrOut();

function setUpSignInButton() {
    var logButton = document.createElement("a");
    logButton.id = "loginButton";
    logButton.onclick = function() {
        signInOrOut();
    }
    document.body.appendChild(logButton);
}

function setSignInOrOut() {
    firebase.auth().onAuthStateChanged(function(user){
        if(user) {
            document.getElementById("loginButton").innerHTML = "Sign out";
        } else {
            document.getElementById("loginButton").innerHTML = "Sign in";
        }
    })
}

function signInOrOut() {
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            firebase.auth().signOut(); // signout
            window.alert("Logged out");
        } else {
            window.location.href = "./login.html";
        }
    })
}