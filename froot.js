function Recipe(name, imageUrl, url, ingredients) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.url = url;
    this.ingredients = ingredients;
}

var RecipeElement = document.registerElement('recipe-element');

var recipeList = document.getElementById("recipeUL");
var recipes = [];

var xhr = new XMLHttpRequest();
var getRecipesURL = "https://api.edamam.com/search?q=pasta&app_id=683bfa8d&app_key=ae5c0578232407116bbf156e9bddb868&to=10";//"https://api.edamam.com/search";
// var getRecipesParams = "q=pasta&app_id=683bfa8d&app_key=ae5c0578232407116bbf156e9bddb868&to=10";
var responsetxt = '{ "q" : "pasta", "from" : 0, "to" : 1, "params" : { "sane" : [ ], "q" : [ "pasta" ], "app_key" : [ "ae5c0578232407116bbf156e9bddb868" ], "to" : [ "1" ], "app_id" : [ "683bfa8d" ] }, "more" : true, "count" : 21527, "hits" : [ { "recipe" : { "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_b3ce18c4a415f62086a858c54f2c3f19", "label" : "Kimchi Pasta", "image" : "https://www.edamam.com/web-img/2d1/2d1770d49a37ccc618c0780c2abcf2b9.jpg", "source" : "No Recipes", "url" : "http://norecipes.com/blog/2010/02/02/kimchi-pasta-recipe/", "shareAs" : "http://www.edamam.com/recipe/kimchi-pasta-b3ce18c4a415f62086a858c54f2c3f19/pasta", "yield" : 4.0, "dietLabels" : [ "Balanced" ], "healthLabels" : [ "Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free" ], "cautions" : [ "Gluten", "Wheat" ], "ingredientLines" : [ "2 Tbs olive oil", "3 oz thinly sliced pork belly (optional)", "1/2 C chopped kimchi", "1 clove garlic minced", "1 Tbs gochujang", "4 oz dry pasta (linguine or spaghetti work well)", "1 scallion sliced thinly" ], "ingredients" : [ { "text" : "2 Tbs olive oil", "weight" : 27.0 }, { "text" : "1/2 C chopped kimchi", "weight" : 75.0 }, { "text" : "1 clove garlic minced", "weight" : 3.0 }, { "text" : "1 Tbs gochujang", "weight" : 17.43535614013672 }, { "text" : "4 oz dry pasta (linguine or spaghetti work well)", "weight" : 113.3980941772461 }, { "text" : "1 scallion sliced thinly", "weight" : 15.0 } ], "calories" : 725.8532881164551, "totalWeight" : 250.8334503173828, "totalNutrients" : { "ENERC_KCAL" : { "label" : "Energy", "quantity" : 725.8532881164551, "unit" : "kcal" }, "FAT" : { "label" : "Fat", "quantity" : 29.878676126098632, "unit" : "g" }, "FASAT" : { "label" : "Saturated", "quantity" : 4.25808142730713, "unit" : "g" }, "FAMS" : { "label" : "Monounsaturated", "quantity" : 20.12030786430359, "unit" : "g" }, "FAPU" : { "label" : "Polyunsaturated", "quantity" : 4.093974061889649, "unit" : "g" }, "CHOCDF" : { "label" : "Carbs", "quantity" : 95.63479569244384, "unit" : "g" }, "FIBTG" : { "label" : "Fiber", "quantity" : 7.348248245239258, "unit" : "g" }, "SUGAR" : { "label" : "Sugars", "quantity" : 5.463221195220947, "unit" : "g" }, "PROCNT" : { "label" : "Protein", "quantity" : 18.49060461349487, "unit" : "g" }, "NA" : { "label" : "Sodium", "quantity" : 867.9939625549316, "unit" : "mg" }, "CA" : { "label" : "Calcium", "quantity" : 86.25175277709961, "unit" : "mg" }, "MG" : { "label" : "Magnesium", "quantity" : 81.21996086120605, "unit" : "mg" }, "K" : { "label" : "Potassium", "quantity" : 982.9419979095459, "unit" : "mg" }, "FE" : { "label" : "Iron", "quantity" : 2.7000155921936035, "unit" : "mg" }, "ZN" : { "label" : "Zinc", "quantity" : 2.2885582450866697, "unit" : "mg" }, "P" : { "label" : "Phosphorus", "quantity" : 284.4346142578125, "unit" : "mg" }, "VITA_RAE" : { "label" : "Vitamin A", "quantity" : 14.947414245605469, "unit" : "Âµg" }, "VITC" : { "label" : "Vitamin C", "quantity" : 4.281, "unit" : "mg" }, "THIA" : { "label" : "Thiamin (B1)", "quantity" : 0.13339493377685546, "unit" : "mg" }, "RIBF" : { "label" : "Riboflavin (B2)", "quantity" : 0.15396323631286624, "unit" : "mg" }, "NIA" : { "label" : "Niacin (B3)", "quantity" : 2.320481927642822, "unit" : "mg" }, "VITB6A" : { "label" : "Vitamin B6", "quantity" : 0.31692165245056153, "unit" : "mg" }, "FOLDFE" : { "label" : "Folate equivalent (total)", "quantity" : 64.91437461853026, "unit" : "Âµg" }, "FOLFD" : { "label" : "Folate (food)", "quantity" : 64.91437461853026, "unit" : "Âµg" }, "VITB12" : { "label" : "Vitamin B12", "quantity" : 0.013948284912109374, "unit" : "Âµg" }, "TOCPHA" : { "label" : "Vitamin E", "quantity" : 4.175881439208984, "unit" : "mg" }, "VITK1" : { "label" : "Vitamin K", "quantity" : 147.0019574432373, "unit" : "Âµg" } }, "totalDaily" : { "ENERC_KCAL" : { "label" : "Energy", "quantity" : 36.292664405822755, "unit" : "%" }, "FAT" : { "label" : "Fat", "quantity" : 45.96719404015174, "unit" : "%" }, "FASAT" : { "label" : "Saturated", "quantity" : 21.29040713653565, "unit" : "%" }, "CHOCDF" : { "label" : "Carbs", "quantity" : 31.878265230814613, "unit" : "%" }, "FIBTG" : { "label" : "Fiber", "quantity" : 29.392992980957033, "unit" : "%" }, "PROCNT" : { "label" : "Protein", "quantity" : 36.98120922698974, "unit" : "%" }, "NA" : { "label" : "Sodium", "quantity" : 36.16641510645548, "unit" : "%" }, "CA" : { "label" : "Calcium", "quantity" : 8.62517527770996, "unit" : "%" }, "MG" : { "label" : "Magnesium", "quantity" : 20.304990215301512, "unit" : "%" }, "K" : { "label" : "Potassium", "quantity" : 28.08405708312988, "unit" : "%" }, "FE" : { "label" : "Iron", "quantity" : 15.000086623297797, "unit" : "%" }, "ZN" : { "label" : "Zinc", "quantity" : 15.257054967244466, "unit" : "%" }, "P" : { "label" : "Phosphorus", "quantity" : 40.633516322544644, "unit" : "%" }, "VITA_RAE" : { "label" : "Vitamin A", "quantity" : 1.6608238050672743, "unit" : "%" }, "VITC" : { "label" : "Vitamin C", "quantity" : 7.135, "unit" : "%" }, "THIA" : { "label" : "Thiamin (B1)", "quantity" : 8.892995585123698, "unit" : "%" }, "RIBF" : { "label" : "Riboflavin (B2)", "quantity" : 9.056660959580366, "unit" : "%" }, "NIA" : { "label" : "Niacin (B3)", "quantity" : 11.60240963821411, "unit" : "%" }, "VITB6A" : { "label" : "Vitamin B6", "quantity" : 15.846082622528076, "unit" : "%" }, "FOLDFE" : { "label" : "Folate equivalent (total)", "quantity" : 16.228593654632565, "unit" : "%" }, "VITB12" : { "label" : "Vitamin B12", "quantity" : 0.2324714152018229, "unit" : "%" }, "TOCPHA" : { "label" : "Vitamin E", "quantity" : 20.87940719604492, "unit" : "%" }, "VITK1" : { "label" : "Vitamin K", "quantity" : 183.75244680404663, "unit" : "%" } }, "digest" : [ { "label" : "Fat", "tag" : "FAT", "schemaOrgTag" : "fatContent", "total" : 29.878676126098632, "hasRDI" : true, "daily" : 45.96719404015174, "unit" : "g", "sub" : [ { "label" : "Saturated", "tag" : "FASAT", "schemaOrgTag" : "saturatedFatContent", "total" : 4.25808142730713, "hasRDI" : true, "daily" : 21.29040713653565, "unit" : "g" }, { "label" : "Trans", "tag" : "FATRN", "schemaOrgTag" : "transFatContent", "total" : 0.0, "hasRDI" : false, "daily" : 0.0, "unit" : "g" }, { "label" : "Monounsaturated", "tag" : "FAMS", "schemaOrgTag" : null, "total" : 20.12030786430359, "hasRDI" : false, "daily" : 0.0, "unit" : "g" }, { "label" : "Polyunsaturated", "tag" : "FAPU", "schemaOrgTag" : null, "total" : 4.093974061889649, "hasRDI" : false, "daily" : 0.0, "unit" : "g" } ] }, { "label" : "Carbs", "tag" : "CHOCDF", "schemaOrgTag" : "carbohydrateContent", "total" : 95.63479569244384, "hasRDI" : true, "daily" : 31.878265230814613, "unit" : "g", "sub" : [ { "label" : "Carbs (net)", "tag" : "CHOCDF.net", "schemaOrgTag" : null, "total" : 88.28654744720458, "hasRDI" : false, "daily" : 0.0, "unit" : "g" }, { "label" : "Fiber", "tag" : "FIBTG", "schemaOrgTag" : "fiberContent", "total" : 7.348248245239258, "hasRDI" : true, "daily" : 29.392992980957033, "unit" : "g" }, { "label" : "Sugars", "tag" : "SUGAR", "schemaOrgTag" : "sugarContent", "total" : 5.463221195220947, "hasRDI" : false, "daily" : 0.0, "unit" : "g" }, { "label" : "Sugars, added", "tag" : "SUGAR.added", "schemaOrgTag" : null, "total" : 0.0, "hasRDI" : false, "daily" : 0.0, "unit" : "g" } ] }, { "label" : "Protein", "tag" : "PROCNT", "schemaOrgTag" : "proteinContent", "total" : 18.49060461349487, "hasRDI" : true, "daily" : 36.98120922698974, "unit" : "g" }, { "label" : "Cholesterol", "tag" : "CHOLE", "schemaOrgTag" : "cholesterolContent", "total" : 0.0, "hasRDI" : false, "daily" : 0.0, "unit" : "mg" }, { "label" : "Sodium", "tag" : "NA", "schemaOrgTag" : "sodiumContent", "total" : 867.9939625549316, "hasRDI" : true, "daily" : 36.16641510645548, "unit" : "mg" }, { "label" : "Calcium", "tag" : "CA", "schemaOrgTag" : null, "total" : 86.25175277709961, "hasRDI" : true, "daily" : 8.62517527770996, "unit" : "mg" }, { "label" : "Magnesium", "tag" : "MG", "schemaOrgTag" : null, "total" : 81.21996086120605, "hasRDI" : true, "daily" : 20.304990215301512, "unit" : "mg" }, { "label" : "Potassium", "tag" : "K", "schemaOrgTag" : null, "total" : 982.9419979095459, "hasRDI" : true, "daily" : 28.08405708312988, "unit" : "mg" }, { "label" : "Iron", "tag" : "FE", "schemaOrgTag" : null, "total" : 2.7000155921936035, "hasRDI" : true, "daily" : 15.000086623297797, "unit" : "mg" }, { "label" : "Zinc", "tag" : "ZN", "schemaOrgTag" : null, "total" : 2.2885582450866697, "hasRDI" : true, "daily" : 15.257054967244466, "unit" : "mg" }, { "label" : "Phosphorus", "tag" : "P", "schemaOrgTag" : null, "total" : 284.4346142578125, "hasRDI" : true, "daily" : 40.633516322544644, "unit" : "mg" }, { "label" : "Vitamin A", "tag" : "VITA_RAE", "schemaOrgTag" : null, "total" : 14.947414245605469, "hasRDI" : true, "daily" : 1.6608238050672743, "unit" : "Âµg" }, { "label" : "Vitamin C", "tag" : "VITC", "schemaOrgTag" : null, "total" : 4.281, "hasRDI" : true, "daily" : 7.135, "unit" : "mg" }, { "label" : "Thiamin (B1)", "tag" : "THIA", "schemaOrgTag" : null, "total" : 0.13339493377685546, "hasRDI" : true, "daily" : 8.892995585123698, "unit" : "mg" }, { "label" : "Riboflavin (B2)", "tag" : "RIBF", "schemaOrgTag" : null, "total" : 0.15396323631286624, "hasRDI" : true, "daily" : 9.056660959580366, "unit" : "mg" }, { "label" : "Niacin (B3)", "tag" : "NIA", "schemaOrgTag" : null, "total" : 2.320481927642822, "hasRDI" : true, "daily" : 11.60240963821411, "unit" : "mg" }, { "label" : "Vitamin B6", "tag" : "VITB6A", "schemaOrgTag" : null, "total" : 0.31692165245056153, "hasRDI" : true, "daily" : 15.846082622528076, "unit" : "mg" }, { "label" : "Folate equivalent (total)", "tag" : "FOLDFE", "schemaOrgTag" : null, "total" : 64.91437461853026, "hasRDI" : true, "daily" : 16.228593654632565, "unit" : "Âµg" }, { "label" : "Folate (food)", "tag" : "FOLFD", "schemaOrgTag" : null, "total" : 64.91437461853026, "hasRDI" : false, "daily" : 0.0, "unit" : "Âµg" }, { "label" : "Folic acid", "tag" : "FOLAC", "schemaOrgTag" : null, "total" : 0.0, "hasRDI" : false, "daily" : 0.0, "unit" : "Âµg" }, { "label" : "Vitamin B12", "tag" : "VITB12", "schemaOrgTag" : null, "total" : 0.013948284912109374, "hasRDI" : true, "daily" : 0.2324714152018229, "unit" : "Âµg" }, { "label" : "Vitamin D", "tag" : "VITD", "schemaOrgTag" : null, "total" : 0.0, "hasRDI" : false, "daily" : 0.0, "unit" : "Âµg" }, { "label" : "Vitamin E", "tag" : "TOCPHA", "schemaOrgTag" : null, "total" : 4.175881439208984, "hasRDI" : true, "daily" : 20.87940719604492, "unit" : "mg" }, { "label" : "Vitamin K", "tag" : "VITK1", "schemaOrgTag" : null, "total" : 147.0019574432373, "hasRDI" : true, "daily" : 183.75244680404663, "unit" : "Âµg" } ] }, "bookmarked" : false, "bought" : false } ] }';

xhr.onreadystatechange = function() {
    console.log(this + this);
    if(this.readyState == 4 && this.status == 200) {
        var jsonArr = JSON.parse(this.responseText);
        addElement(jsonArr);
    }
}

function loadElements() {
    xhr.open("GET", getRecipesURL);
    xhr.send();
    // var jsonArr = JSON.parse(responsetxt);
    // addElement(jsonArr);
}

function getIngredients(recipe) {
    var ingredients = '';
    var i;
    for(i = 0; i < recipe.ingredients.length; i++) {
        ingredients += '<li>' + recipe.ingredients[i].text + '</li>';
    }
    return ingredients;

}

function addElement(jsonArr) {
    if(recipeList == null) {
        let recipeList = document.getElementById("recipeUL");
    }

    while(recipeList != null && recipeList.firstChild) {
        recipeList.removeChild(recipeList.firstChild);
    }

    var out = "";
    var i;
    console.log("JsonArr length " + jsonArr.hits.length);
    for(i = 0; i < jsonArr.hits.length; i++) {
        var jsonRecipe = jsonArr.hits[i].recipe;
        var newRec = new Recipe(jsonRecipe.label, jsonRecipe.image, jsonRecipe.url, jsonRecipe.ingredients);
        recipes.push(newRec);

        var newRecipe = document.createElement('li');

        var newRecipeBox = document.createElement('div');
        newRecipeBox.setAttribute('class', 'recipebox');

        var newColorbox = document.createElement('div');
        newColorbox.setAttribute('class', 'colorbox');

        var newPopup = document.createElement('div');
        newPopup.setAttribute('class', 'popup');
        newPopup.setAttribute('onclick', 'popupFunction(this,' + i + ')');

        var newHyperlink = document.createElement('a');
        var hyperInnerHTML = '<br/><!-- INSERT IMAGE HERE, SAMPLE BELOW --><img style="float:left" src="' + newRec.imageUrl + '"/><br/><br/><span class="text"><font  size=6px color="ffffff"><!-- INSERT NAME HERE, SAMPLE BELOW -->' + newRec.name + '<br><!-- INSERT SAVINGS HERE, SAMPLE BELOW -->Savings: $7</font></span>';
        newHyperlink.innerHTML = hyperInnerHTML;

        var newPopupSpan = document.createElement('span');
        newPopupSpan.setAttribute('class', 'popuptext');
        newPopupSpan.setAttribute('id', 'myPopup' + i);
        var popupInnerHTML = '<!-- INSERT NAME HERE (AGAIN), SAMPLE BELOW --><p><b>' + newRec.name + '</b></p><!-- INSERT IMAGE HERE, SAMPLE BELOW --><img src="' + newRec.imageUrl + '" class="recipeimage"  /><p align="left" style="padding: 0px"><b>Ingredients:</b></p><!-- INSERT RECIPE LIST AS BLOCK HERE, SAMPLE BELOW (Not in this commit) --><ul style="text-align: left">' + getIngredients(newRec) + '</ul><!-- INSERT RECIPE LINK HERE, SAMPLE BELOW --><a href="' + newRec.url + '" class="recipelink"><img class="recipelabel" src="recipe_image.png"/></a><br/>';
        newPopupSpan.innerHTML = popupInnerHTML;

        newPopup.appendChild(newHyperlink);
        newPopup.innerHTML += "</br>";
        newPopup.appendChild(newPopupSpan);
        newColorbox.appendChild(newPopup);
        newRecipeBox.appendChild(newColorbox);
        newRecipe.appendChild(newRecipeBox);


        if(recipeList != null) {
            recipeList.append(newRecipe);
        }
    }
}

// When the user clicks on <div>, open the popup
function popupFunction(obj, idx) {
    var popup = document.getElementById("myPopup" + idx);
    popup.classList.toggle("show");
}


loadElements();
