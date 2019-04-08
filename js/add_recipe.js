function setUpAddRecipeButton() {
    var profileButton = document.createElement("a");
    profileButton.innerHTML = "Add recipe";
    profileButton.id = "addRecipeButtonTop";
    profileButton.onclick = function() {
        openAddRecipe();
    }
    document.body.appendChild(profileButton);
}

function openAddRecipe() {
    firebase.auth().onAuthStateChanged(function(user){
        window.location.href = "./create_recipe.html";
    })
}