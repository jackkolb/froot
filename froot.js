var recipeList = document.getElementById("recipeUL");
function loadElements() {
    var newRecipe = document.createElement("li");
    var newRecipeText = document.createTextNode("new recipe");
    newRecipe.appendChild(newRecipeText);
    recipeList.appendChild(newRecipe);
} 

loadElements();