// Display recipes
const recipes = [
    {
      title: "Pasta Carbonara",
      ingredients: "Spaghetti, eggs, bacon, parmesan cheese, black pepper",
      instructions: "Cook spaghetti. Mix eggs, cheese, and black pepper. Cook bacon. Combine everything and serve."
    },
    {
      title: "Chicken Stir-Fry",
      ingredients: "Chicken, bell peppers, broccoli, soy sauce, garlic, ginger",
      instructions: "Stir-fry chicken and vegetables. Add soy sauce, garlic, and ginger. Serve over rice."
    },
    // Add more recipe objects as needed
  ];
  
  const recipesContainer = document.getElementById("recipesContainer");
  
  recipes.forEach(recipe => {
    const recipeBlock = document.createElement("div");
    recipeBlock.classList.add("recipe-block");
  
    const titleElement = document.createElement("h2");
    titleElement.classList.add("recipe-title");
    titleElement.textContent = recipe.title;
  
    const ingredientsElement = document.createElement("p");
    ingredientsElement.classList.add("recipe-ingredients");
    ingredientsElement.textContent = "Ingredients: " + recipe.ingredients;
  
    const instructionsElement = document.createElement("p");
    instructionsElement.classList.add("recipe-instructions");
    instructionsElement.textContent = "Instructions: " + recipe.instructions;
  
    recipeBlock.appendChild(titleElement);
    recipeBlock.appendChild(ingredientsElement);
    recipeBlock.appendChild(instructionsElement);
  
    recipesContainer.appendChild(recipeBlock);
  });

  
// Add recipe
const recipeForm = document.getElementById("recipeForm");
const titleInput = document.getElementById("title");
const ingredientsInput = document.getElementById("ingredients");
const instructionsInput = document.getElementById("instructions");

function displayRecipes() {
  recipesContainer.innerHTML = ""; // Clear the existing recipes

  recipes.forEach(recipe => {
    const recipeBlock = document.createElement("div");
    recipeBlock.classList.add("recipe-block");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("recipe-title");
    titleElement.textContent = recipe.title;

    const ingredientsElement = document.createElement("p");
    ingredientsElement.classList.add("recipe-ingredients");
    ingredientsElement.textContent = "Ingredients: " + recipe.ingredients;

    const instructionsElement = document.createElement("p");
    instructionsElement.classList.add("recipe-instructions");
    instructionsElement.textContent = "Instructions: " + recipe.instructions;

    recipeBlock.appendChild(titleElement);
    recipeBlock.appendChild(ingredientsElement);
    recipeBlock.appendChild(instructionsElement);

    recipesContainer.appendChild(recipeBlock);
  });
}

recipeForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newRecipe = {
    title: titleInput.value,
    ingredients: ingredientsInput.value,
    instructions: instructionsInput.value
  };

  recipes.push(newRecipe);
  displayRecipes();
  
  // Clear the form inputs
  titleInput.value = "";
  ingredientsInput.value = "";
  instructionsInput.value = "";
});



displayRecipes(); // Display recipes when the page loads
