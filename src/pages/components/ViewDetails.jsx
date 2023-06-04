import React from "react";
import { useLoaderData } from "react-router-dom";

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
      <div className="card w-auto bg-red-100 shadow-xl my-4 mx-auto">
        <figure>
          <img
            className="rounded-3xl pt-5 pb-3 mt-5"
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
      <h1 className="text-center font-bold text-3xl">My Recipes</h1>
      <div>
        {recipes.map((recipe) => (
          <p></p>
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
