import React from "react";
import { Link } from "react-router-dom";

const ChefsSectionCard = ({ chef }) => {
  console.log(chef);
  const {
    chefImageURL,
    chefName,
    yearsOfExperience,
    numOfRecipes,
    numOfLikes,
    id,
  } = chef;
  return (
    <div>
      <div className="card w-auto bg-base-100 shadow-xl mb-1 ml-4 md:ml-0 mr-2 md:mr-0">
        <figure className="px-10 pt-10">
          <img src={chefImageURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {chefName}</h2>
          <p>Experience: {yearsOfExperience}</p>
          <p>Recipes: {numOfRecipes}</p>
          <p>Likes: {numOfLikes}</p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to={`/details/${id}`}>View Recipes Button</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsSectionCard;
