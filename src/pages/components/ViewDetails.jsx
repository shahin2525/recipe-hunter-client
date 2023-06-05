import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipesDetails from "./RecipesDetails";

const ViewDetails = () => {
  const chef = useLoaderData();
  console.log(chef);
  const {
    chefName,
    chefImageURL,
    numOfLikes,
    shortBio,
    numOfRecipes,
    yearsOfExperience,
    recipes,
  } = chef;
  console.log(chef);
  return (
    <div className="bg-red-200  px-10 py-5">
      <div
        style={{ height: "1050px" }}
        className="card w-auto bg-red-100  my-4 mx-auto"
      >
        <figure>
          <img
            className="rounded-3xl  mb-4 mt-10"
            src={chefImageURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ml-24 pl-20 font-bold">
          <h2 className="card-title text-2xl font-bold">Name: {chefName}</h2>
          <p>Short-Bio-Data: {shortBio}</p>
          <p>Likes: {numOfLikes}</p>
          <p>Recipes: {numOfRecipes}</p>
          <p>Year Of Experience: {yearsOfExperience}</p>
        </div>
      </div>
      <h1 className="text-center font-bold text-3xl pt-3">My Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 pt-5 pb-1">
        {recipes.map((recipe) => (
          <RecipesDetails key={recipe._id} recipe={recipe}></RecipesDetails>
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
