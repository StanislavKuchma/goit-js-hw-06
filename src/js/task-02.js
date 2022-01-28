const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = [];

ingredients.forEach(createElement);

function createElement(item){
const ingredientEl = document.createElement("li");
      ingredientEl.classList.add("item");
      ingredientEl.textContent = `${item}`;

  ingredientsList.push(ingredientEl);
}
const newIngredientsList = document.querySelector("ul");

newIngredientsList.append(...ingredientsList);

console.log(newIngredientsList);
