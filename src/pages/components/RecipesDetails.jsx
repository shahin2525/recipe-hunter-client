import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipesDetails = ({ recipe }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const notify = () => {
    setIsButtonDisabled(true);
    toast.error("This is favorite", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { recipeImageURL, recipeName, ingredients, cookingMethod, rating } =
    recipe;
  console.log(recipe);
  return (
    <div>
      <div
        style={{ height: "720px" }}
        className="card w-96 bg-base-100 shadow-xl  relative"
      >
        <figure className="px-10 pt-10">
          <img src={recipeImageURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className=" font-bold">
            {" "}
            <span className="text-2xl">Recipe-Name:</span> {recipeName}
          </h2>
          <p className="font-semibold mb-0 pb-0">
            <span className=" text-lg font-bold">Ingredients: </span>{" "}
            {ingredients}
          </p>
          <p className="pb-4 font-semibold  mb-4 ">
            <span className=" text-lg font-bold">Cooking-Method: </span>
            {cookingMethod}
          </p>
          <div className="card-actions absolute  bottom-2">
            <button
              className="btn btn-primary"
              disabled={isButtonDisabled}
              onClick={notify}
            >
              Favorite
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
