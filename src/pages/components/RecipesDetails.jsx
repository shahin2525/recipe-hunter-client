import React from "react";

const RecipesDetails = ({ recipe }) => {
  const { recipeImageURL, recipeName, ingredients, cookingMethod, rating } =
    recipe;
  console.log(recipe);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl h-96">
        <figure className="px-10 pt-10">
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className=" font-bold">
            {" "}
            <span className="text-2xl">Recipe-Name:</span> {recipeName}
          </h2>
          <p className="font-semibold">
            <span className=" text-lg font-bold">Ingredients: </span>{" "}
            {ingredients}
          </p>
          <p className="pb-1 font-semibold">
            <span className=" text-lg font-bold">Cooking-Method: </span>
            {cookingMethod}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
