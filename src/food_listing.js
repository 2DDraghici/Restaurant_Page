export default function food_listing() {
  const food_listing = document.createElement("div");
  food_listing.classList.add("food_listing");
  const food_title = document.createElement("p");
  food_title.classList.add("food_title");
  const food_description = document.createElement("p");
  food_description.classList.add("food_description");
  food_description.innerHTML =
    "INGREDIENT | INGREDIENT | INGREDIENT | INGREDIENT  ";

  food_title.innerHTML = "food title";
  food_listing.appendChild(food_title);
  food_listing.appendChild(food_description);

  return food_listing;
}
